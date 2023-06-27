import React from 'react';
import { NextSeo } from 'next-seo';
import HouseDisinfectionComponent from '@/components/pages/house-cleaning/HouseDisinfection';

const HouseDisinfection = () => {
  return (
    <>
      <NextSeo title='House Disinfection' />
      <HouseDisinfectionComponent />
    </>
  );
};

export default HouseDisinfection;
