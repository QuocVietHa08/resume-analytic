import React from 'react';
import { NextSeo } from 'next-seo';
import ShrubPlantsCompnent from '@/components/pages/shrub-plants';

const ShrubPlants = () => {
  return (
    <>
     <NextSeo title='Shrub Plants Trimming' />
     <ShrubPlantsCompnent />
    </>
  )
}

export default ShrubPlants;