import React from 'react';
import { NextSeo } from 'next-seo';
import PolicyComponent from '@/components/pages/policy';

const Policy = () => {
  return (
    <>
      <NextSeo
        title="Privacy Policy - KungFu Helper Cleaning Services"
        description="Read our Privacy Policy to understand how KungFu Helper handles and protects your personal information when you use our website and cleaning services."
      />
      <PolicyComponent />
    </>
  );
};

export default Policy;
