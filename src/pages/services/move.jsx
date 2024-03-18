import React from 'react';
import { NextSeo } from 'next-seo';
import MoveComponent from '@/components/pages/house-cleaning/Move';

const Move = () => {
  return (
    <>
      <NextSeo
        title="Efficient Move-In/Out Cleaning Services in Singapore | KungFu Helper"
        description="Make your move hassle-free with our efficient move-in/out cleaning services. KungFu Helper ensures a thorough cleaning, leaving the property spotless for a smooth transition."
      />
      <MoveComponent />
    </>
  );
};

export default Move;
