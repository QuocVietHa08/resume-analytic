import React from 'react'
import { NextSeo } from 'next-seo';
import AcDiagnosticComponent from '@/components/pages/ac-diagnostic' 

const AcDiagnosticServices = () => {
  return (
    <>
      <NextSeo title='AC Diagnostic Services' />
      <AcDiagnosticComponent /> 
    </>
  )
}

export default AcDiagnosticServices