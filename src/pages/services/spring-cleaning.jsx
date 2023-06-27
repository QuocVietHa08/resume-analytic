import React from 'react';
import { NextSeo } from 'next-seo';
import SpringComponent from '@/components/pages/house-cleaning/Spring';

const Spring = () => {
  return (
    <>
      <NextSeo title='Spring Cleaning' />
      <SpringComponent />
    </>
  );
};

export default Spring;
