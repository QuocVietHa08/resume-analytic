import React from 'react';
import { NextSeo } from 'next-seo';
import ServiceComponent from '@/components/pages/service';

const Service = () => {
  return (
    <>
      <NextSeo
        title="Comprehensive Cleaning and Maintenance Services in Singapore | KungFu Helper"
        description="Explore our wide range of cleaning and maintenance services in Singapore. KungFu Helper offers reliable solutions for homes and businesses, ensuring cleanliness and comfort."
      />
      <ServiceComponent />
    </>
  );
};

export default Service;
