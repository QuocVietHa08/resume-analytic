import React from 'react';
import { NextSeo } from 'next-seo';
import GeneralServicingComponent from '@/components/pages/general-servicing';

const GeneralServicing = () => {
  return (
    <>
      <NextSeo title='General Servicing' />
      <GeneralServicingComponent />
    </>
  )
}

export default GeneralServicing