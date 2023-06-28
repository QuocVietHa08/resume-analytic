import React from 'react';
import { NextSeo } from 'next-seo';
import HandymanServiceComponent from '@/components/pages/handyman-service';

const HandymanService = () => {
  return (
    <>
      <NextSeo
        title="Reliable General Handyman Services in Singapore | KungFu Helper"
        description="Get comprehensive general handyman services from KungFu Helper in Singapore. Our skilled professionals handle various tasks, including repairs, installations, and maintenance."
      />
      <HandymanServiceComponent />
    </>
  );
};

export default HandymanService;
