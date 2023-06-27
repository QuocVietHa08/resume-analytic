import React from 'react'
import { NextSeo } from 'next-seo';
import AirFiltrationInstallationComponent from '@/components/pages/air-filtration-installation'

const AirFiltrationInstallation = () => {
  return (
    <>
      <NextSeo title='Air Filtration Installation' />
      <AirFiltrationInstallationComponent />
    </>
  )
}

export default AirFiltrationInstallation