import React from 'react';
import { NextSeo } from 'next-seo';
import ShrubPlantsCompnent from '@/components/pages/shrub-plants';

const ShrubPlants = () => {
  return (
    <>
      <NextSeo
        title="Expert Shrubs and Plants Trimming Services in Singapore | KungFu Helper"
        description="Maintain the aesthetics of your outdoor greenery with our expert shrubs and plants trimming services. KungFu Helper's skilled team ensures proper pruning and shaping for healthy and attractive plants"
      />
      <ShrubPlantsCompnent />
    </>
  );
};

export default ShrubPlants;
