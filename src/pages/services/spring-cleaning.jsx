import React from 'react';
import { NextSeo } from 'next-seo';
import SpringComponent from '@/components/pages/house-cleaning/Spring';

const Spring = () => {
  return (
    <>
      <NextSeo
        title="Thorough Spring Cleaning Services in Singapore | KungFu Helper"
        description="Refresh your home or office with our thorough spring cleaning services. KungFu Helper's dedicated team provides deep cleaning and organization to create a clean and revitalized space."
      />
      <SpringComponent />
    </>
  );
};

export default Spring;
