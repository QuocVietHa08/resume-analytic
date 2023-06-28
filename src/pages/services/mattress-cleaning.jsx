import React from 'react';
import { NextSeo } from 'next-seo';
import MattressCleaningComponent from '@/components/pages/furniture/MattressCleaning';

const MattressCleaning = () => {
  return (
    <>
      <NextSeo
        title="Professional Mattress Cleaning Services in Singapore | KungFu Helper"
        description="Ensure a clean and hygienic sleep environment with our professional mattress cleaning services. KungFu Helper's experts remove dust, allergens, and stains for a refreshed mattress."
      />
      <MattressCleaningComponent />;
    </>
  );
};

export default MattressCleaning;
