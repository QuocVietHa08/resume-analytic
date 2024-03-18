import React from 'react';
import { NextSeo } from 'next-seo';
import AboutUsComponent from '@/components/pages/about-us';

const AboutUs = () => {
  return (
    <>
      <NextSeo
        title="About KungFu Helper- Expert Cleaning Services in Singapore"
        description="Learn more about KungFu Helper, a trusted name in the cleaning industry in Singapore. Discover our commitment to delivering high-quality cleaning services tailored to meet your specific needs"
      />
      <AboutUsComponent />
    </>
  );
};

export default AboutUs;
