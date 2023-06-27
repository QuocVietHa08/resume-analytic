import React from 'react';
import { NextSeo } from 'next-seo';
import PoolCleaningComponent from '@/components/pages/pool-cleaning';

const PoolCleaning = () => {
  return (
    <>
      <NextSeo title="Post-clearning" />
      <PoolCleaningComponent  />
    </>
  )
}

export default PoolCleaning