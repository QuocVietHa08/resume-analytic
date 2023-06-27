import React from 'react';
import { NextSeo } from 'next-seo';
import SofaCleaningComponent from '@/components/pages/furniture/SofaCleaning';

const SofaCleaning = () => {
  return <>
    <NextSeo title='Sofa Cleaning' />
    <SofaCleaningComponent />;
  </>
};

export default SofaCleaning;
