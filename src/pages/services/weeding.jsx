import React from 'react'
import { NextSeo } from 'next-seo';
import WeedingComponent from '@/components/pages/weeding'

const Weeding = () => {
  return (
    <>
      <NextSeo title='Weeding' />
      <WeedingComponent /> 
    </>
  )
}

export default Weeding