import React from 'react';
import { NextSeo } from 'next-seo';
import InsecticideSprayingComponent from '@/components/pages/insecticide-spraying';

const InsecticideSpraying = () => {
  return (
    <>
      <NextSeo title="Insecticide Spraying" />
      <InsecticideSprayingComponent />
    </>
  );
};

export default InsecticideSpraying;
