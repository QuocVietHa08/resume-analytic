import React from 'react';
import { NextSeo } from 'next-seo';
import PlantWateringComponent from '@/components/pages/plants-watering';

const PlantWatering = () => {
  return (
    <>
      <NextSeo
        title="Reliable Plants Watering Services in Singapore | KungFu Helper"
        description="Ensure the health and vitality of your plants with our reliable plants watering services. KungFu Helper's experts provide proper watering techniques to keep your plants thriving."
      />
      <PlantWateringComponent />
    </>
  );
};

export default PlantWatering;
