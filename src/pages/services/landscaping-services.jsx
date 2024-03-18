import React from 'react';
import { NextSeo } from 'next-seo';
import LandscapingServiceComponent from '@/components/pages/landscaping-service';

const LandscapingService = () => {
  return (
    <>
      <NextSeo
        title="Expert Landscaping Services in Singapore | KungFu Helper"
        description="Transform your outdoor space into a beautiful oasis with our expert landscaping services. KungFu Helper offers design, installation, and maintenance solutions for stunning landscapes."
      />
      <LandscapingServiceComponent />
    </>
  );
};

export default LandscapingService;
