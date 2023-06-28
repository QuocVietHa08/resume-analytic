import React from 'react';
import { NextSeo } from 'next-seo';
import CondenserDryCleaningComponent from '@/components/pages/condenser-dry-cleaning';

const CondenserDryCleaning = () => {
  return (
    <>
      <NextSeo
        title="Effective Condenser Dry Cleaning in Singapore | KungFu Helper"
        description="Ensure the efficient operation of your air conditioning system with our condenser dry cleaning service. KungFu Helper's experts provide thorough cleaning and maintenance to optimize cooling performance."
      />
      <CondenserDryCleaningComponent />
    </>
  );
};

export default CondenserDryCleaning;
