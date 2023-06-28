import React from 'react';
import { NextSeo } from 'next-seo';
import UpholsteryCleaningComponent from '@/components/pages/furniture/UpholsteryCleaning';

const UpholsteryCleaning = () => {
  return (
    <>
      <NextSeo
        title="Professional Upholstery Cleaning Services in Singapore | KungFu Helper"
        description="Renew the beauty of your upholstery with our professional upholstery cleaning services. KungFu Helper's experts provide deep cleaning and stain removal, restoring the elegance of your furniture."
      />
      <UpholsteryCleaningComponent />;
    </>
  );
};

export default UpholsteryCleaning;
