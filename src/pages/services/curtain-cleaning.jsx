import React from 'react';
import { NextSeo } from 'next-seo';
import CurtainCleaningComponent from '@/components/pages/furniture/CurtainCleaning';

const CurtainCleaning = () => {
  return (
    <>
      <NextSeo
        title="Professional Curtain Cleaning Services in Singapore | KungFu Helper"
        description="Enhance the cleanliness and appearance of your curtains with our professional curtain cleaning services. KungFu Helper offers specialized cleaning methods to remove dust, stains, and allergens."
      />
      <CurtainCleaningComponent />
    </>
  );
};

export default CurtainCleaning;
