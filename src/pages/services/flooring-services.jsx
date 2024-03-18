import React from 'react';
import { NextSeo } from 'next-seo';
import FlooringServiceComponent from '@/components/pages/flooring-service';

const FlooringService = () => {
  return (
    <>
      <NextSeo
        title="Expert Flooring Services in Singapore | KungFu Helper"
        description="Transform your floors with our expert flooring services. Whether it's hardwood, tiles, or laminate, KungFu Helper provides professional cleaning, polishing, and restoration solutions."
      />
      <FlooringServiceComponent />
    </>
  );
};
export default FlooringService;
