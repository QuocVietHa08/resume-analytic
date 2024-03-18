import React from 'react';
import { NextSeo } from 'next-seo';
import CarpetCleaningComponent from '@/components/pages/furniture/CarpetCleaning';

const CarpetCleaning = () => {
  return (
    <>
      <NextSeo
        title="Professional Carpet Cleaning Services in Singapore | KungFu Helper"
        description="Restore the beauty of your carpets with professional carpet cleaning services from KungFu Helper in Singapore. Our skilled technicians use advanced techniques to deep clean and revitalize your carpets. Book our services today!"
      />
      <CarpetCleaningComponent />;
    </>
  );
};

export default CarpetCleaning;
