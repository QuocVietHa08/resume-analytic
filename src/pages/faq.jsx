import React from 'react';
import { NextSeo } from 'next-seo';
import FQAComponent from '@/components/pages/faq';

const FAQ = () => {
  return (
    <>
      <NextSeo
        title="Frequently Asked Questions about Cleaning Services | KungFu Helper"
        description="Find answers to commonly asked questions about our cleaning services at KungFu Helper. We provide detailed information to help you make informed decisions about our cleaning solutions."
      />
      <FQAComponent />
    </>
  );
};

export default FAQ;
