import React from 'react';
import { NextSeo } from 'next-seo';
import MovingServiceComponent from '@/components/pages/moving-services';

const MovingService = () => {
  return (
    <>
      <NextSeo
        title="Professional Moving Services in Singapore | KungFu Helper"
        description="Relocate with ease and peace of mind with our professional moving services. KungFu Helper offers a range of moving solutions tailored to your specific needs, ensuring a smooth and efficient transition.Relocate with ease and peace of mind with our professional moving services. KungFu Helper offers a range of moving solutions tailored to your specific needs, ensuring a smooth and efficient transition."
      />
      <MovingServiceComponent />
    </>
  );
};

export default MovingService;
