import Head from 'next/head';
import { pdfjs } from 'react-pdf';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout/Main';

import '../styles/global.scss';
import 'antd/dist/antd.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
