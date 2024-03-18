import React from 'react';
import { NextSeo } from 'next-seo';
import PartTimeComponent from '@/components/pages/part-time';

const PartTime = () => {
  return (
    <>
      <NextSeo
        title="Reliable Part-Time Helper Services in Singapore | KungFu Helper"
        description="Hire a reliable part-time helper from KungFu Helper to assist with your cleaning needs. Our dedicated helpers ensure a clean and organized space, providing you with peace of mind."
      />
      <PartTimeComponent />
    </>
  );
};

export default PartTime;
