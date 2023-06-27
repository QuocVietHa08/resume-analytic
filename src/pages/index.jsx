import React from 'react';
import { NextSeo } from 'next-seo';
import HomeComponent from '@/components/pages/home';

const Home = () => {
  return <>
    <NextSeo title="Home" />
    <HomeComponent />
  </>
};

export default Home;
