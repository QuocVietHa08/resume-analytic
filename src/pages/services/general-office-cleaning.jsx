import React from 'react'
import { NextSeo } from 'next-seo';
import OfficeCleaningComponent from '@/components/pages/office-cleaning'

const OfficeCleaning = () => {
  return (
    <>
      <NextSeo title='Office Cleaning' />
      <OfficeCleaningComponent /> 
    </>
  )
}

export default OfficeCleaning