import Head from 'next/head';
// import { useRouter } from 'next/router';
import Layout from '../components/layout/Main';
// import MainLayoutHeaderBreakCumb from '@/components/layout/MainLayoutHeaderBreakCumb';

import '../styles/global.scss';
import 'antd/dist/antd.css';
// import "react-slick/"; 
// import "~slick-carousel/slick/slick-theme.css";


const App = ({ Component, pageProps }) => {
  // const router = useRouter();
  // if (router.pathname === '/') {
  //   return (
  //     <Layout>
  //     <Head>
  //       <title>KungFu Helper</title>
  //       <meta name="viewport" content="width=device-width" />
  //     </Head>
  //     <Component {...pageProps} />
  //   </Layout>

  //   )
  // }

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
