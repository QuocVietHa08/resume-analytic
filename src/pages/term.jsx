import React from 'react';
import { NextSeo } from 'next-seo';
import TermComponent from '@/components/pages/term';

const Term = () => {
  return (
    <>
      <NextSeo title='Terms of Service' />
      <TermComponent />
    </>
  );
};

export default Term;
