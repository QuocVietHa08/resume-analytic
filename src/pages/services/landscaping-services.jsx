import React from 'react';
import { NextSeo } from 'next-seo';
import LandscapingServiceComponent from '@/components/pages/landscaping-service';

const LandscapingService = () => {
  return (
    <>
      <NextSeo title='Landscaping Service' />
      <LandscapingServiceComponent /> 
    </>
  )
}
 
export default LandscapingService