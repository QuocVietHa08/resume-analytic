import React from 'react';
import { NextSeo } from 'next-seo';
import AirconChemicalWashComponent from '@/components/pages/aircon-chemical-wash';

const AirconChemicalWash = () => {
  return (
    <>
      <NextSeo
        title="Specialized Aircon Chemical Wash in Singapore | KungFu Helper"
        description="Maintain the cooling efficiency of your Aircon system with our specialized chemical wash service. KungFu Helper's technicians ensure thorough cleaning and optimum functionality"
      />
      <AirconChemicalWashComponent />
    </>
  );
};

export default AirconChemicalWash;
