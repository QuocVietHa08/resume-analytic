import React from 'react';
import { NextSeo } from 'next-seo';
import GasTopUpComponent from '@/components/pages/gas-top-up';

const GasTopUp = () => {
  return (
    <>
      <NextSeo title='Gas Top Up' /> 
    <GasTopUpComponent />
    </>
  )
}

export default GasTopUp