import React from 'react';
import { NextSeo } from 'next-seo';
import PoolCleaningComponent from '@/components/pages/pool-cleaning';

const PoolCleaning = () => {
  return (
    <>
      <NextSeo
        title="Professional Pool Cleaning Services in Singapore | KungFu Helper"
        description="Maintain a clean and sparkling pool with our professional pool cleaning services. KungFu Helper's technicians ensure proper sanitation and maintenance for a refreshing swimming experience."
      />
      <PoolCleaningComponent />
    </>
  );
};

export default PoolCleaning;
