import Head from 'next/head';
import Layout from '../components/layout/Main';

import '../styles/global.scss';
import 'antd/dist/antd.css';


const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>AWS Chatbot</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
