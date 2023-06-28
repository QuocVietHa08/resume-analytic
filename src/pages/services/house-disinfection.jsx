import React from 'react';
import { NextSeo } from 'next-seo';
import HouseDisinfectionComponent from '@/components/pages/house-cleaning/HouseDisinfection';

const HouseDisinfection = () => {
  return (
    <>
      <NextSeo
        title="Professional House Disinfection Services in Singapore | KungFu Helper"
        description="Protect your home and loved ones with our professional house disinfection services. KungFu Helper's experts use effective methods to eliminate germs and maintain a clean living environment."
      />
      <HouseDisinfectionComponent />
    </>
  );
};

export default HouseDisinfection;
