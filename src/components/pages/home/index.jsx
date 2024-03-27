import React from 'react';
// import { message as messageAntd } from 'antd';
// import { BedrockRuntimeClient, InvokeModelCommand} from '@aws-sdk/client-bedrock-runtime';
import styles from './styles.module.scss';
// import { BEGIN_PROMPT, ANSWER_FORMAT, FINAL_PRMOPT  } from './training-data';
import FileUploader from '@/components/atoms/fileUpload';

// const client = new BedrockRuntimeClient({
//   region: 'us-east-1',
//   credentials: {
//     accessKeyId: process.env.KEY,
//     secretAccessKey: process.env.PASSWORD,
//   },
// });




const Home = () => {
  // const handleRenderInput = useCallback((input) => {
  //   return `${BEGIN_PROMPT}
  //   Here is my document:
  //   <document>
  //   ${trainingInput}
  //   </document>
  //   ${ANSWER_FORMAT}  Here is the question: Input bullet points and simple terms. ${input}
  //   ${FINAL_PRMOPT} 
  //   `
  // }, [trainingInput])
 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const userMessage = {
  //     message: e.target.value ?? inputEl.current.value,
  //     role: 'user',
  //   };
  //   setMessages((prevMess) => [...prevMess, userMessage]);
  //   inputEl.current.value = '';
  //   await handleCallChatbotAPI(e.target.value ?? inputEl.current.value);
  // };
    

  // const handleCallChatbotAPI = useCallback(async (questionInput) => {
  //   try {
  //     const prompt = handleRenderInput(questionInput);
  //     const promptInput = {
  //       modelId: 'anthropic.claude-3-haiku-20240307-v1:0',
  //       contentType: 'application/json',
  //       accept: 'application/json',
  //       body: JSON.stringify({
  //         anthropic_version: 'bedrock-2023-05-31',
  //         max_tokens: 2000,
  //         temperature: 1,
  //         top_k: 250,
  //         top_p: 0.999,
  //         stop_sequences: ['\n\nHuman:'],
  //         messages: [
  //           {
  //             role: 'user',
  //             content: [
  //               {
  //                 type: 'text',
  //                 text: prompt,
  //               },
  //             ],
  //           },
  //         ],
  //       }),
  //     };
  //     const command = new InvokeModelCommand(promptInput);
  //     await client.send(command).then((res) => {
  //       const rawRes = res?.body;
  //       const jsonString = new TextDecoder().decode(rawRes);
  //       const parsedResponse = JSON.parse(jsonString);
  //       const output = parsedResponse?.content[0].text;
  //       const botMessage = {
  //         message: output,
  //         role: 'bot',
  //       };
  //       setLoading(false);
  //       setMessages((prevMess) => [...prevMess, botMessage]);
  //     });

  //   } catch (error) {
  //     messageAntd.error(
  //        'Connection timout! Please reload chatbot'
  //     );
  //     setLoading(false);
  //   } 
  // }, [handleRenderInput]);

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeWrapper}>
        <div className={styles.homeContent}>
          <div className={styles.titleHome}>
            <div className={styles.imageWrapper}>
              <img src="/img/file.png" alt="file logo" />
            </div>
            <span style={{ fontSize: '20px' }}>Resume Analytic</span>
            <p>
              An AI version that will scan thought your cv an analyze your cv props and cons. Note: Even with a
              lot of training data, the bot may still hallucinate. Please give this repo a start for more
              future improve.
            </p>
          </div>
          <div className={styles.uploadContainer}>
            <FileUploader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
