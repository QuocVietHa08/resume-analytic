import React from 'react';
import { NextSeo } from 'next-seo';
import AirconServiceComponent from '@/components/pages/aircon-service';

const AirconService = () => {
  return (
    <>
      <NextSeo title="Aircon Service" />
      <AirconServiceComponent  />
    </>
  )
}

export default AirconService