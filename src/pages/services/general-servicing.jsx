import React from 'react';
import { NextSeo } from 'next-seo';
import GeneralServicingComponent from '@/components/pages/general-servicing';

const GeneralServicing = () => {
  return (
    <>
      <NextSeo
        title="Comprehensive General Servicing Solutions in Singapore | KungFu Helper"
        description="Keep your appliances and systems in top condition with our comprehensive general servicing solutions. KungFu Helper's experts provide reliable maintenance and servicing for various equipment."
      />
      <GeneralServicingComponent />
    </>
  );
};

export default GeneralServicing;
