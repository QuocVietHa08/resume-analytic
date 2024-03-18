import React from 'react';
import { NextSeo } from 'next-seo';
import TermComponent from '@/components/pages/term';

const Term = () => {
  return (
    <>
      <NextSeo
        title="Terms of Use - KungFu Helper Cleaning Services"
        description="Review the Terms of Use that govern your use of the KungFu Helper website and the services we provide. By accessing our site, you agree to comply with these terms."
      />
      <TermComponent />
    </>
  );
};

export default Term;
