import { useRouter } from 'next/router';
// import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
// import * as AWS from 'aws-sdk';
import Header from './Header';
// import Footer from './Footer';
// import UpToTop from './UpToTop';
import Chatbot from './Chatbot/Chatbot';

// const client = new BedrockRuntimeClient({
//   region: 'us-east-1',
//   credentials: {
//     accessKeyId: 'AKIATRUSVJ6IXC53EG7V',
//     secretAccessKey: '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',
//   },
// });

// const question = 'Give me 5 random cat names';
// const prompt = `
// Human: ${question}
// Assistant:
// `;

// const input = {
//   modelId: 'anthropic.claude-3-sonnet-20240229-v1:0',
//   contentType: 'application/json',
//   accept: 'application/json',
//   body: JSON.stringify({
//     anthropic_version: 'bedrock-2023-05-31',
//     max_tokens: 1000,
//     messages: [
//       {
//         role: 'user',
//         content: [
//           {
//             type: 'text',
//             text: prompt,
//           },
//         ],
//       },
//     ],
//   }),
// };

// const command = new InvokeModelCommand(input);
const Main = ({ children }) => {
  const router = useRouter();

  // useEffect(() => {
  //   try {
  //     client.send(command).then((res) => {
  //       const rawRes = res?.body;
  //       const jsonString = new TextDecoder().decode(rawRes);
  //       const parsedResponse = JSON.parse(jsonString);
  //       console.log('prase response--->', parsedResponse)
  //     });
  //   } catch (error) {
  //     const { requestId, cfId, extendedRequestId } = error.$metadata;
  //     console.log({ requestId, cfId, extendedRequestId });
  //   }
  // }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div className={`${router.pathname === '/' ? 'h-110 h-sp-70 h-tb-82' : 'h-220 h-tb-140 h-sp-122'}`}>
        <Header />
      </div>
      <div className="chat-bot-wrapper">
        <Chatbot />
      </div>
      {/* {children} */}
      {/* <UpToTop /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
