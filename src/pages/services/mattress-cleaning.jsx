import React from 'react';
import { NextSeo } from 'next-seo';
import MattressCleaningComponent from '@/components/pages/furniture/MattressCleaning';

const MattressCleaning = () => {
  return (
    <>
      <NextSeo title="Mattress Cleaning" />
      <MattressCleaningComponent />;
    </>
  );
};

export default MattressCleaning;
