/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useRef } from 'react';
import { message as messageAntd } from 'antd';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import dayjs from 'dayjs';
import { PlusOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { BEGIN_PROMPT, ANSWER_FORMAT, FINAL_PRMOPT  } from './training-data';

const client = new BedrockRuntimeClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.KEY,
    secretAccessKey: process.env.PASSWORD,
  },
});

const ChatIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
    </svg>
  );
};

const UserIcon = () => {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.501 25.5911C26.7632 25.5911 30.2183 22.1359 30.2183 17.8737C30.2183 13.6116 26.7632 10.1564 22.501 10.1564C18.2389 10.1564 14.7837 13.6116 14.7837 17.8737C14.7837 22.1359 18.2389 25.5911 22.501 25.5911Z"
        stroke="#121212"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.31982 37.6301C10.6973 35.3689 12.6334 33.5002 14.9418 32.2035C17.2502 30.9067 19.8533 30.2256 22.501 30.2256C25.1487 30.2256 27.7519 30.9067 30.0603 32.2035C32.3687 33.5002 34.3047 35.3689 35.6822 37.6301"
        stroke="#121212"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.501 42.5692C33.5826 42.5692 42.566 33.5858 42.566 22.5041C42.566 11.4225 33.5826 2.43909 22.501 2.43909C11.4193 2.43909 2.43591 11.4225 2.43591 22.5041C2.43591 33.5858 11.4193 42.5692 22.501 42.5692Z"
        stroke="#121212"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DotLoading = () => {
  return (
    <div className="my message">
      <span className="jumping-dots">
        <span className="dot-1"></span>
        <span className="dot-2"></span>
        <span className="dot-3"></span>
      </span>
    </div>
  );
};

const DEFALUT_TEXT = [
  {
    role: 'bot',
    message: `Hello, I am Asure Shark Tank program chatbot. \nHow can I help you today?`,
  },
];

const Home = () => {
  const inputEl = useRef(null);
  const [messages, setMessages] = React.useState(DEFALUT_TEXT);
  const [loading, setLoading] = React.useState(false);
  const [trainingInput, setTrainingInput] = React.useState('');
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    const dataTraining = localStorage.getItem('dataTraining');
    console.log(dataTraining)
    setTrainingInput(dataTraining)
  }, [])

  const handleRenderInput = useCallback((input) => {
    return `${BEGIN_PROMPT}
    Here is my document:
    <document>
    ${trainingInput}
    </document>
    ${ANSWER_FORMAT}  Here is the question: Input bullet points and simple terms. ${input}
    ${FINAL_PRMOPT} 
    `
  }, [trainingInput])
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userMessage = {
      message: e.target.value ?? inputEl.current.value,
      role: 'user',
    };
    setMessages((prevMess) => [...prevMess, userMessage]);
    inputEl.current.value = '';
    await handleCallChatbotAPI(e.target.value ?? inputEl.current.value);
  };

  const handleCallChatbotAPI = useCallback(async (questionInput) => {
    try {
      const prompt = handleRenderInput(questionInput);
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
        const botMessage = {
          message: output,
          role: 'bot',
        };
        setLoading(false);
        setMessages((prevMess) => [...prevMess, botMessage]);
      });

    } catch (error) {
      messageAntd.error(
         'Connection timout! Please reload chatbot'
      );
      setLoading(false);
    } 
  }, [handleRenderInput]);

  const renderMessages = useCallback(() => {
    return (
      <div>
        {!!messages && messages?.map((msg, index) => <Message key={index} index={index} mesLength={messages?.length} msg={msg} />)}
        <div ref={messagesContainerRef}></div>
        <LoadingChatBot loading={loading} />
      </div>
    );
  }, [loading, messages]);

  const handleNewChat = () => {
    setMessages(DEFALUT_TEXT) 
  };
  return (
    <>
      <div className={styles.HomeWrapper}>
        <div className={styles.homeContent}>
          <div className={styles.titleHome}>
            <div className={styles.imageWrapper}>
              <img src="/img/bedrock.png" alt="Bedrock logo" />
            </div>
            <span style={{ fontSize: '18px' }}>AWS Chatbot Bedrock</span>
            <p>
              An AI version of Chatbot using React and AWS Bedrock. Trained on your personal data and other data sources. Note: Even with a
              lot of training data, the bot may still hallucinate, don't trust everything it says. Please give this repo a start for more
              future improve. All chats are recorded, please don't share your deep secret to the bot!
            </p>
          </div>
          <div>{dayjs(new Date()).format('D MMM YYYY')}</div>
          <div className={styles.chatMessageContainer}>{renderMessages()}</div>
        </div>
        {/* {loading && (
          <button type="button" onClick={handleStopGenerate} className={styles.stopWrapper}>
            <div className={styles.stopBlock}></div>
            <span>Stop</span>
          </button>
        )} */}
        {messages.filter((mes) => mes.role === 'bot').length >= 2 && (
          <div className={styles.newChatWrapper}>
            <button type="button" onClick={handleNewChat} className={styles.newChatButton}>
              <PlusOutlined />
              New Chat
            </button>
          </div>
        )}
        <div className={styles.chatInputContainer}>
          <form className={styles.chatInputForm} onSubmit={(e) => handleSubmit(e)}>
            <input
              ref={inputEl}
              className={styles.chatInput}
              placeholder="Type your message here ..."
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
            <button type="submit" className={styles.chatBtnSend}>
              <ChatIcon className={styles.btnSendIcon} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;

const Message = ({ msg, index, mesLength }) => {
  return (
    <div
      className={`${styles.messageStyle} ${msg.role === 'user' ? 'justify-end' : ''} ${
        index > 1 && index + 1 === mesLength && msg.role === 'bot' ? 'pb-10' : ''
      }`}
      key={index}
    >
      {msg.role === 'bot' && (
        <button type="button" className={styles.botIconWrapper}>
          <img src="/img/bedrock.png" alt="Bedrock logo" />
        </button>
      )}
      <div className={`${msg?.role === 'user' ? styles.roleUser : styles.roleBot}`}>{msg.message}</div>
      {msg.role === 'user' && <UserIcon />}
    </div>
  );
};

const LoadingChatBot = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className={styles.messageStyle}>
          <button type="button" className={styles.botIconWrapper}>
            <img src="/img/bedrock.png" alt="Bedrock logo" />
          </button>
          <DotLoading />
        </div>
      )}
    </>
  );
};
