import React from 'react';
import { NextSeo } from 'next-seo';
import AirFiltrationInstallationComponent from '@/components/pages/air-filtration-installation';

const AirFiltrationInstallation = () => {
  return (
    <>
      <NextSeo
        title="Professional Air Filtration Installation in Singapore | KungFu Helper"
        description="Improve indoor air quality with our professional air filtration installation services. KungFu Helper provides effective solutions to remove pollutants and allergens, ensuring a healthier environment."
      />
      <AirFiltrationInstallationComponent />
    </>
  );
};

export default AirFiltrationInstallation;
