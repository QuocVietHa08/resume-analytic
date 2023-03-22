import Head from 'next/head';
import Layout from '../components/layout/Main';

import '../styles/global.scss';
import 'antd/dist/antd.css';
// import "react-slick/"; 
// import "~slick-carousel/slick/slick-theme.css";


const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>KungFu Helper</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
