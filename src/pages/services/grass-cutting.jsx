import React from 'react'
import { NextSeo } from 'next-seo';
import GrassCuttingComponent from '@/components/pages/grass-cutting'

const GrassCutting = () => {
  return <>
  <NextSeo title='Grass Cutting' /> 
  <GrassCuttingComponent /> 
  </>
}

export default GrassCutting