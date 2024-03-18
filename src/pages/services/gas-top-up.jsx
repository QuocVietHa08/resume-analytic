import React from 'react';
import { NextSeo } from 'next-seo';
import GasTopUpComponent from '@/components/pages/gas-top-up';

const GasTopUp = () => {
  return (
    <>
      <NextSeo
        title="Efficient Gas Top-Up Services in Singapore | KungFu Helper"
        description="Maintain optimal performance of your air conditioning system with our gas top-up services. KungFu Helper's technicians ensure the right amount of refrigerant for efficient cooling."
      />
      <GasTopUpComponent />
    </>
  );
};

export default GasTopUp;
