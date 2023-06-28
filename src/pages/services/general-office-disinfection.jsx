import React from 'react';
import { NextSeo } from 'next-seo';
import DisinfectionDetailComponent from '@/components/pages/office-disinfection';

const Disinfection = () => {
  return (
    <>
      <NextSeo
        title="Effective General Office Disinfection Services in Singapore | KungFu Helper"
        description="Maintain a healthy and sanitized work environment with our professional general office disinfection services. KungFu Helper provides thorough disinfection to safeguard against germs and viruses."
      />
      <DisinfectionDetailComponent />
    </>
  );
};

export default Disinfection;
