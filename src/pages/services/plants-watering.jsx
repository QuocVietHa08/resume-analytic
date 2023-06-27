import React from 'react';
import { NextSeo } from 'next-seo';
import PlantWateringComponent from '@/components/pages/plants-watering';

const PlantWatering = () => {
  return (
    <>
      <NextSeo title="Plant Watering" />
      <PlantWateringComponent />
    </>
  );
};

export default PlantWatering;
