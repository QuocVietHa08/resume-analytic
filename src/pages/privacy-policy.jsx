import React from 'react'
import { NextSeo } from 'next-seo';
import PolicyComponent from '@/components/pages/policy'

const Policy = () => {
  return (
    <>
      <NextSeo title='Privacy Policy' />
      <PolicyComponent /> 
    </>
  )
}

export default Policy