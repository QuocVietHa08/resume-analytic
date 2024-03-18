import React from 'react';
import { NextSeo } from 'next-seo';
import InsecticideSprayingComponent from '@/components/pages/insecticide-spraying';

const InsecticideSpraying = () => {
  return (
    <>
      <NextSeo
        title="Effective Insecticide Spraying Services in Singapore | KungFu Helper"
        description="Eliminate pests and insects from your premises with our effective insecticide spraying services. KungFu Helper's professionals provide targeted solutions for long-lasting pest control."
      />
      <InsecticideSprayingComponent />
    </>
  );
};

export default InsecticideSpraying;
