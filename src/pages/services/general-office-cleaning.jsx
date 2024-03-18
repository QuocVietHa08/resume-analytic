import React from 'react';
import { NextSeo } from 'next-seo';
import OfficeCleaningComponent from '@/components/pages/office-cleaning';

const OfficeCleaning = () => {
  return (
    <>
      <NextSeo
        title="Professional General Office Cleaning Services in Singapore | KungFu Helper"
        description="Ensure a clean and hygienic work environment with our professional general office cleaning services. KungFu Helper's trained cleaners provide thorough cleaning tailored to your office needs."
      />
      <OfficeCleaningComponent />
    </>
  );
};

export default OfficeCleaning;
