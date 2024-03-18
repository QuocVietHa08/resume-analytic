import React from 'react';
import { NextSeo } from 'next-seo';
import AirconServiceComponent from '@/components/pages/aircon-service';

const AirconService = () => {
  return (
    <>
      <NextSeo
        title="Professional Aircon Services in Singapore | KungFu Helper"
        description="Ensure optimal performance of your air conditioning system with our professional aircon services in Singapore. Our skilled technicians provide maintenance, repair, and installation solutions for all AC brands."
      />
      <AirconServiceComponent />
    </>
  );
};

export default AirconService;
