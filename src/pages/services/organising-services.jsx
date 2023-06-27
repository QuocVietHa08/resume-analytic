import React from 'react';
import { NextSeo } from 'next-seo';
import OrganisingServiceComponent from '@/components/pages/organising-servies';

const OrganisingService = () => {
  return (
    <>
      <NextSeo title='Organising Service' />
      <OrganisingServiceComponent /> 
    </>
  )
}

export default OrganisingService