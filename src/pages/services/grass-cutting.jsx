import React from 'react';
import { NextSeo } from 'next-seo';
import GrassCuttingComponent from '@/components/pages/grass-cutting';

const GrassCutting = () => {
  return (
    <>
      <NextSeo
        title="Expert Grass Cutting Services in Singapore | KungFu Helper"
        description="Achieve a well-manicured lawn with our expert grass cutting services. KungFu Helper's skilled team ensures precise cutting and maintenance to enhance the beauty of your outdoor space."
      />
      <GrassCuttingComponent />
    </>
  );
};

export default GrassCutting;
