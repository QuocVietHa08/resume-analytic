import React, { useCallback, useState } from 'react';
import ConvertApi from 'convertapi-js';
import { message as messageAntd, Skeleton } from 'antd';
import { Document, Page } from 'react-pdf';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import Confetti from 'react-confetti';
import styles from './styles.module.scss';
import { PROMPT_ANALYZE_RESUME } from './training-data';
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
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState();
  const [analyze, setAnalyze] = useState('');

  const handleRenderInput = useCallback((trainingInput) => {
    return `${PROMPT_ANALYZE_RESUME}
    ${trainingInput}
    `;
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
          setAnalyze(output);
        });
      } catch (error) {
        messageAntd.error('Connection timout! Please reload chatbot');
      }
    },
    [handleRenderInput],
  );

  const handelFetchContentOfTxtFile = async (url) => {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        messageAntd.success('Convert pdf to text successfully');
        handleCallChatbotAPI(data);
    });
  };

  const handleChangeFile = async (newFile) => {
    setFile(newFile);
    handleConvertToBase64(newFile);
    const params = convertApi.createParams();
    params.add('File', newFile);
    await convertApi.convert('pdf', 'txt', params).then((result) => {
      handelFetchContentOfTxtFile(result?.dto?.Files?.[0]?.Url);
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
      setPageNumber((prev) => prev + 1 > numPages ? numPages : prev + 1);
    } else {
      setPageNumber((prev) => (prev - 1 > 0 ? prev - 1 : 1));
    }
  };

  const handleResetFrom = () => {
    setAnalyze('')
    setFileBase64('')
  }

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeWrapper}>
        <div className={styles.homeContent}>
          {analyze && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}
          {fileBase64 ? (
            <div className={styles.documentContent}>
              <div className={styles.documentWrapper}>
                <Document file={fileBase64} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page className={styles.pageStylePC} scale={1} pageNumber={pageNumber} />
                  <Page height={450} className={styles.pageStyleMobile} scale={1} pageNumber={pageNumber} />
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
                <div className={styles.keyFeature}>
                  <div className={styles.keyFeatureItemTitle}>Analyze Resume</div>
                  <div className={styles.keyFeatureItemContent}>
                    <Skeleton loading={!analyze} active style={{ width: 300 }}>
                      <span>{analyze}</span>
                    </Skeleton>
                  </div>
                </div>
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
        {fileBase64 && (
          <button type="button" onClick={handleResetFrom}  className={styles.buttonReset} >Reset</button>
        )}
      </div>
      <div className={styles.HomeFooter}>
        Build by
        <a href="https://www.linkedin.com/in/viethadev/" target="_blank" rel="noreferrer">
          Edward Ha
        </a>
      </div>
    </div>
  );
};

export default Home;
