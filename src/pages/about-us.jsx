import React from 'react';
import { NextSeo } from 'next-seo';
import AboutUsComponent from '@/components/pages/about-us';

const AboutUs = () => {
  return (
    <>
      <NextSeo title='About Us' />
      <AboutUsComponent />
    </>
  )
}

export default AboutUs