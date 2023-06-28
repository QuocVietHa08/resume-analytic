import React from 'react';
import { NextSeo } from 'next-seo';
import PestControlComponent from '@/components/pages/pest-control';

const PestControl = () => {
  return (
    <>
      <NextSeo
        title="Effective Pest Control Services in Singapore | KungFu Helper"
        description="Eliminate pests and protect your premises with our effective pest control services. KungFu Helper's trained technicians offer tailored solutions for a pest-free environment."
      />
      <PestControlComponent />
    </>
  );
};

export default PestControl;
