import React from 'react';
import { NextSeo } from 'next-seo';
import DisinfectionDetailComponent from '@/components/pages/office-disinfection';

const Disinfection = () => {
  return (
    <>
      <NextSeo title='Office Disinfection' />
      <DisinfectionDetailComponent />
    </>
  )
}

export default Disinfection