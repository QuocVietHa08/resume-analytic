import React from 'react';
import { NextSeo } from 'next-seo';
import PestControlComponent from '@/components/pages/pest-control';

const PestControl = () => {
  return (
    <>
      <NextSeo title="Pest Control" />
      <PestControlComponent /> 
    </>
  )
}

export default PestControl