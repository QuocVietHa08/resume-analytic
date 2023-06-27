import React from 'react';
import { NextSeo } from 'next-seo';
import UpholsteryCleaningComponent from '@/components/pages/furniture/UpholsteryCleaning';

const UpholsteryCleaning = () => {
  return <>
  <NextSeo title='Upholstery Cleaning' />
  <UpholsteryCleaningComponent />;
  </>
};

export default UpholsteryCleaning;
