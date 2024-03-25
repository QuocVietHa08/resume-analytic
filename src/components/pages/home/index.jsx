/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { message as messageAntd } from 'antd';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import dayjs from 'dayjs';
import styles from './styles.module.scss';
import { BEGIN_PROMPT } from './training-data';

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

const BotIcon = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.8587 17.721H32.6051C31.5634 13.0652 27.4058 9.56883 22.442 9.56883H19.2717V8.40941C20.8478 7.84781 21.9891 6.35325 21.9891 4.58694C21.9891 2.34057 20.1594 0.510855 17.913 0.510855C15.6666 0.510855 13.8369 2.34057 13.8369 4.58694C13.8369 6.35325 14.9782 7.84781 16.5543 8.40941V9.56883H13.384C8.42027 9.56883 4.26267 13.0652 3.221 17.721H2.96738C1.47281 17.721 0.249985 18.9438 0.249985 20.4384V23.1558C0.249985 24.6503 1.47281 25.8732 2.96738 25.8732H3.46556C4.5344 29.2065 7.23368 31.7971 10.6214 32.7391C10.3677 33.2735 10.2138 33.8532 10.2138 34.4782C10.2138 35.2301 10.8206 35.8369 11.5724 35.8369H24.2536C25.0054 35.8369 25.6123 35.2301 25.6123 34.4782C25.6123 33.8532 25.4583 33.2645 25.2047 32.7391C28.5924 31.8061 31.2916 29.2065 32.3605 25.8732H32.8587C34.3532 25.8732 35.5761 24.6503 35.5761 23.1558V20.4384C35.5761 18.9438 34.3532 17.721 32.8587 17.721ZM17.913 3.22825C18.6648 3.22825 19.2717 3.83513 19.2717 4.58694C19.2717 5.33875 18.6648 5.94564 17.913 5.94564C17.1612 5.94564 16.5543 5.33875 16.5543 4.58694C16.5543 3.83513 17.1612 3.22825 17.913 3.22825ZM22.442 30.4022H13.384C9.13585 30.4022 5.68477 26.9511 5.68477 22.7029V19.9855C5.68477 15.7373 9.13585 12.2862 13.384 12.2862H22.442C26.6902 12.2862 30.1413 15.7373 30.1413 19.9855V22.7029C30.1413 26.9511 26.6902 30.4022 22.442 30.4022Z"
        fill="black"
      />
      <path
        d="M12.9311 15.9094C11.4366 15.9094 10.2138 17.1322 10.2138 18.6268V21.3442C10.2138 22.8388 11.4366 24.0616 12.9311 24.0616C14.4257 24.0616 15.6485 22.8388 15.6485 21.3442V18.6268C15.6485 17.1322 14.4257 15.9094 12.9311 15.9094Z"
        fill="black"
      />
      <path
        d="M22.8949 15.9094C21.4003 15.9094 20.1775 17.1322 20.1775 18.6268V21.3442C20.1775 22.8388 21.4003 24.0616 22.8949 24.0616C24.3895 24.0616 25.6123 22.8388 25.6123 21.3442V18.6268C25.6123 17.1322 24.3895 15.9094 22.8949 15.9094Z"
        fill="black"
      />
      <path
        d="M8.42933 3.15578L11.1467 4.06158C11.2917 4.10687 11.4366 4.13404 11.5724 4.13404C12.1431 4.13404 12.6685 3.77172 12.8587 3.20107C13.0942 2.48549 12.7138 1.71557 11.9982 1.48006L9.28078 0.574261C8.57426 0.338754 7.80433 0.719189 7.55977 1.43477C7.3152 2.15035 7.70469 2.92028 8.42027 3.15578H8.42933Z"
        fill="black"
      />
      <path
        d="M8.85506 8.66303C8.99998 8.66303 9.14491 8.64491 9.28078 8.59056L11.9982 7.68477C12.7138 7.44926 13.0942 6.67933 12.8587 5.96375C12.6232 5.24817 11.8532 4.86774 11.1377 5.10325L8.42027 6.00904C7.70469 6.24455 7.32426 7.01448 7.55977 7.73006C7.74998 8.30071 8.27535 8.66303 8.846 8.66303H8.85506Z"
        fill="black"
      />
      <path
        d="M24.2536 4.13404C24.3985 4.13404 24.5435 4.11593 24.6793 4.06158L27.3967 3.15578C28.1123 2.92028 28.4927 2.15035 28.2572 1.43477C28.0217 0.719189 27.2518 0.338754 26.5362 0.574261L23.8188 1.48006C23.1032 1.71557 22.7228 2.48549 22.9583 3.20107C23.1485 3.77172 23.6739 4.13404 24.2445 4.13404H24.2536Z"
        fill="black"
      />
      <path
        d="M23.8279 7.68477L26.5453 8.59056C26.6902 8.63585 26.8351 8.66303 26.971 8.66303C27.5416 8.66303 28.067 8.30071 28.2572 7.73006C28.4927 7.01448 28.1123 6.24455 27.3967 6.00904L24.6793 5.10325C23.9728 4.86774 23.1938 5.24817 22.9583 5.96375C22.7228 6.67933 23.1032 7.44926 23.8188 7.68477H23.8279Z"
        fill="black"
      />
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

// const CopyIcon = () => {
//   return (
//     <svg width="76" height="88" viewBox="0 0 76 88" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M56 0H8C3.6 0 0 3.6 0 8V64H8V8H56V0ZM68 16H24C19.6 16 16 19.6 16 24V80C16 84.4 19.6 88 24 88H68C72.4 88 76 84.4 76 80V24C76 19.6 72.4 16 68 16ZM68 80H24V24H68V80Z"
//         fill="#CCCCCC"
//       />
//     </svg>
//   );
// };

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

// const DEFALUT_TEXT = [
//   {
//     role: 'bot',
//     message: `Hello, I am a chatbot. \nHow can I help you today?`,
//   },
// ];

const Home = () => {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [messageApi, contextHolder] = messageAntd.useMessage();
  const messagesContainerRef = useRef(null);
  const [preLearningLoading, setPreLearningLoading] = useState(false);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userMessage = {
      message: input,
      role: 'user',
    };
    setMessages((prevMess) => [...prevMess, userMessage]);
    setInput('');
    await handleCallChatbotAPI(input);
  };

  const preLearningThread = useCallback(async () => {
    setPreLearningLoading(true);
    try {
      const prompt = BEGIN_PROMPT;
      const promptInput = {
        modelId: 'anthropic.claude-3-haiku-20240307-v1:0',
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          anthropic_version: 'bedrock-2023-05-31',
          max_tokens: 2000,
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
        setMessages((prevMess) => [...prevMess, botMessage]);
        setPreLearningLoading(false);
      });
    } catch (err) {
      messageApi.open({
        type: 'error',
        content: 'Pretraing data error! The bot is not ready to chat. Please reload the page.',
      });
    }
  }, [messageApi]);

  useEffect(() => {
    preLearningThread();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCallChatbotAPI = async (questionInput) => {
    console.log('handle call chatbot api--->');
    try {
      const prompt = `${questionInput}`;
      const promptInput = {
        modelId: 'anthropic.claude-3-haiku-20240307-v1:0',
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          anthropic_version: 'bedrock-2023-05-31',
          max_tokens: 2000,
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
        setMessages((prevMess) => [...prevMess, botMessage]);
        setInput('');
      });
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'Connection timout! Please reload chatbot',
      });
    } finally {
      setLoading(false);
    }
  };

  const renderMessages = useCallback(() => {
    return (
      <div>
        {!!messages && messages?.map((msg, index) => <Message key={index} index={index} mesLength={messages?.length} msg={msg} />)}
        <div ref={messagesContainerRef}></div>
        <LoadingChatBot loading={loading} />
      </div>
    );
  }, [loading, messages]);

  return (
    <>
      {contextHolder}
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
          <div>{preLearningLoading && 'Bot is learning...'}</div>
          <div className={styles.chatMessageContainer}>{renderMessages()}</div>
        </div>

        <div className={styles.chatInputContainer}>
          <form className={styles.chatInputForm} onSubmit={handleSubmit}>
            <input
              className={styles.chatInput}
              placeholder="Type your message here ..."
              value={input}
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  handleSubmit(e);
                }
              }}
              onChange={(e) => setInput(e.target.value)}
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
        index > 1 && index + 1 === mesLength ? 'h-550' : ''
      }`}
      key={index}
    >
      {msg.role === 'bot' && <BotIcon />}
      <div className={`${msg?.role === 'user' ? styles.roleUser : styles.roleBot}`}>
        {msg.message}
        {/* {index > 1 && index + 1 === messages?.length && msg.role === 'bot' && (
                  <div className={styles.messageTool}>
                    <div className={styles.messageToolItem}>
                      <CopyIcon />
                      Copy
                    </div>
                    <div className={styles.messageToolItem}>
                      <img src="/img/retryIcon.png" alt="React logo" />
                      Retry
                    </div>
                  </div>
                )} */}
      </div>
      {msg.role === 'user' && <UserIcon />}
    </div>
  );
};

const LoadingChatBot = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className={styles.messageStyle}>
          <BotIcon />
          <DotLoading />
        </div>
      )}
    </>
  );
};
