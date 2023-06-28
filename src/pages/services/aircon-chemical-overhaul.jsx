import React from 'react';
import { NextSeo } from 'next-seo';
import AirconChemicalOverhaulComponent from '@/components/pages/aircon-chemical-overhaul';

const AirconChemicalOverhaul = () => {
  return (
    <>
      <NextSeo
        title="Efficient Aircon Chemical Overhaul in Singapore | KungFu Helper"
        description="Revitalize your air conditioning system with our efficient aircon chemical overhaul service. KungFu Helper's experts clean and restore your AC unit for enhanced performance and longevity."
      />
      <AirconChemicalOverhaulComponent />
    </>
  );
};

export default AirconChemicalOverhaul;
