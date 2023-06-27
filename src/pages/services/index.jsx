import React from 'react';
import { NextSeo } from 'next-seo';
import ServiceComponent from '@/components/pages/service';

const Service = () => {
  return (
    <>
      <NextSeo title='Service' />
      <ServiceComponent />
    </>
  );
};

export default Service;
