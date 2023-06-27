import React from 'react';
import { NextSeo } from 'next-seo';
import PartTimeComponent from '@/components/pages/part-time';

const PartTime = () => {
  return (
    <>
      <NextSeo title='Part Time Helper' />
      <PartTimeComponent />
    </>
  );
};

export default PartTime;
