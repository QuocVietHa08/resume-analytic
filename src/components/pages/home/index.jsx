import React, { useCallback, useState } from 'react';
import ConvertApi from 'convertapi-js';
import { message as messageAntd, Skeleton } from 'antd';
import { Document, Page } from 'react-pdf';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import styles from './styles.module.scss';
import { PROMPT_ANALYZE_RESUME} from './training-data';
import FileUploader from '@/components/atoms/fileUpload';

const client = new BedrockRuntimeClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.KEY,
    secretAccessKey: process.env.PASSWORD,
  },
});

const Home = () => {
  const convertApi = ConvertApi.auth(process.env.CONVERT_API_KEY);
  const [file, setFile] = useState();
  const [fileBase64, setFileBase64] = useState();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [resultPrompt, setResultPrompt] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState();
  const [salary, setSalary] = useState(0);
  const [keyFactor, setKeyFactor] = useState('');
  const [improvement, setImprovement] = useState('');
  const [analyze, setAnalyze] = useState('');

  const handleRenderInput = useCallback((trainingInput, type) => {
    // if (type === 'salaray') {
      return `${PROMPT_ANALYZE_RESUME}
    ${trainingInput}
    `;
    // }
    // if (type === 'factor') {
    //   return `${PROMPT_GET_KEY_FACTOR}
    // ${trainingInput}
    // `;
    // }

    // return `${PROMPT_GET_IMPROVEMENT}
    // ${trainingInput}
    // `;
  }, []);

  const handleCallChatbotAPI = useCallback(
    async (trainingData) => {
      try {
        const prompt = handleRenderInput(trainingData);
        const promptInput = {
          modelId: 'anthropic.claude-3-haiku-20240307-v1:0',
          contentType: 'application/json',
          accept: 'application/json',
          body: JSON.stringify({
            anthropic_version: 'bedrock-2023-05-31',
            max_tokens: 2000,
            temperature: 1,
            top_k: 250,
            top_p: 0.999,
            stop_sequences: ['\n\nHuman:'],
            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'text',
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        };
        const command = new InvokeModelCommand(promptInput);
        await client.send(command).then((res) => {
          const rawRes = res?.body;
          const jsonString = new TextDecoder().decode(rawRes);
          const parsedResponse = JSON.parse(jsonString);
          const output = parsedResponse?.content[0].text;
          setAnalyze(output)
        });
      } catch (error) {
        messageAntd.error('Connection timout! Please reload chatbot');
        setLoading(false);
      }
    },
    [handleRenderInput],
  );

  const handelFetchContentOfTxtFile = async (url) => {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        messageAntd.success('Convert pdf to text successfully');
        setText(data);
        handleCallChatbotAPI(data);
      });
  };

  const handleChangeFile = async (newFile) => {
    setLoading(true);
    setFile(newFile);
    handleConvertToBase64(newFile);
    const params = convertApi.createParams();
    params.add('File', newFile);
    await convertApi
      .convert('pdf', 'txt', params)
      .then((result) => {
        handelFetchContentOfTxtFile(result?.dto?.Files?.[0]?.Url);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleConvertToBase64 = (pdfFile) => {
    if (pdfFile instanceof Blob && typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.readAsDataURL(pdfFile);
      reader.onload = () => {
        setFileBase64(reader.result);
      };
      reader.onerror = () => {
        messageAntd.error('Error while reading the file. Please try again.');
      };
    }
    return null;
  };
  const onDocumentLoadSuccess = (document) => {
    // eslint-disable-next-line no-underscore-dangle
    setNumPages(document._pdfInfo.numPages);
  };

  const handleChangePage = (type = 'next' || 'previous') => {
    if (type === 'next') {
      setPageNumber((prev) => prev + 1);
    } else {
      setPageNumber((prev) => (prev - 1 > 0 ? prev - 1 : 1));
    }
  };

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeWrapper}>
        <div className={styles.homeContent}>
          {fileBase64 ? (
            <div className={styles.documentContent}>
              <div className={styles.documentWrapper}>
                <Document file={fileBase64} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
                <p className={styles.documentPage}>
                  <button disabled={pageNumber === 1} type="button" onClick={() => handleChangePage('previous')}>
                    ‹
                  </button>
                  {pageNumber} of {numPages}
                  <button type="button" onClick={() => handleChangePage('next')}>
                    ›
                  </button>
                </p>
              </div>

              <div className={styles.analyticsSection}>
                {/* <div className={styles.estimateSalary}>
                  Analy:{' '}
                  <Skeleton loading={!salary} paragraph active style={{ width: 300 }}>
                    ${salary} / month
                  </Skeleton>
                </div> */}
                <div className={styles.keyFeature}>
                  <div className={styles.keyFeatureItemTitle}>Analyze Resume</div>
                  <div className={styles.keyFeatureItemContent}>
                    <Skeleton loading={!analyze} active style={{ width: 300 }}>
                      <div>{analyze}</div>
                    </Skeleton>
                  </div>
                </div>
                {/* <div className={styles.improve}>
                  <div className={styles.improveTitle}>Improvements</div>
                  <div className={styles.improveContent}>
                    <Skeleton style={{ width: 300 }} active loading={!improvement}>
                      <div>{improvement}</div>
                    </Skeleton>
                  </div>
                </div> */}
              </div>
            </div>
          ) : (
            <>
              <div className={styles.titleHome}>
                <div className={styles.imageWrapper}>
                  <img src="/img/file.png" alt="file logo" />
                </div>
                <span style={{ fontSize: '20px' }}>Resume Analytic</span>
                <p>
                  An AI version that will scan thought your cv an analyze your cv props and cons. Note: Even with a lot of training data,
                  the bot may still hallucinate. Please give this repo a start for more future improve.
                </p>
              </div>
              <div className={styles.uploadContainer}>
                <FileUploader files={file} onChangeFile={handleChangeFile} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
