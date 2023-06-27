import React from 'react';
import { NextSeo } from 'next-seo';
import CurtainCleaningComponent from '@/components/pages/furniture/CurtainCleaning';

const CurtainCleaning = () => {
  return (
    <>
      <NextSeo title='Curtain Cleaning' />
      <CurtainCleaningComponent />
    </>
  );
};

export default CurtainCleaning;
