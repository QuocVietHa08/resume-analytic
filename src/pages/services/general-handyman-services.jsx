import React from 'react';
import { NextSeo } from 'next-seo';
import HandymanServiceComponent from '@/components/pages/handyman-service';

const HandymanService = () => {
  return (
    <>
      <NextSeo title='Handyman Service' />
      <HandymanServiceComponent /> 
    </>
  )
}

export default HandymanService;
