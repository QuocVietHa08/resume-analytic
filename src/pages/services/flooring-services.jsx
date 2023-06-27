import React from 'react';
import { NextSeo } from 'next-seo';
import FlooringServiceComponent from '@/components/pages/flooring-service';

const FlooringService = () => {
  return (
    <>
      <NextSeo title='Flooring Service' />
      <FlooringServiceComponent />
    </>
  )
}
export default FlooringService

