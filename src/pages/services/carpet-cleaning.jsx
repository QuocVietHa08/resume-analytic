import React from 'react';
import { NextSeo } from 'next-seo';
import CarpetCleaningComponent from '@/components/pages/furniture/CarpetCleaning';

const CarpetCleaning = () => {
  return <>
  <NextSeo title='Carpet Cleaning'  />
  <CarpetCleaningComponent />;
  </>
};

export default CarpetCleaning;
