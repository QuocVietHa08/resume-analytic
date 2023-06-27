import React from 'react';
import { NextSeo } from 'next-seo';
import MovingServiceComponent from '@/components/pages/moving-services';

const MovingService = () => {
  return (
    <>
      <NextSeo title='Moving Services' />
      <MovingServiceComponent /> 
    </>
  )
}

export default MovingService;
