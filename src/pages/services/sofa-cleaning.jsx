import React from 'react';
import { NextSeo } from 'next-seo';
import SofaCleaningComponent from '@/components/pages/furniture/SofaCleaning';

const SofaCleaning = () => {
  return (
    <>
      <NextSeo
        title="Professional Sofa Cleaning Services in Singapore | KungFu Helper"
        description="Restore the cleanliness and freshness of your sofas with our professional sofa cleaning services. KungFu Helper's experts use specialized techniques to remove stains and dirt, revitalizing your upholstery."
      />
      <SofaCleaningComponent />;
    </>
  );
};

export default SofaCleaning;
