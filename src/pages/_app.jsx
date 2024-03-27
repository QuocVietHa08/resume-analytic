import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"
import Layout from '../components/layout/Main';

import '../styles/global.scss';
import 'antd/dist/antd.css';


const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Resume Analytic</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
};

export default App;
