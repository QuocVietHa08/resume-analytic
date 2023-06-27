import React from 'react';
import { NextSeo } from 'next-seo';
import FQAComponent from '@/components/pages/faq';

const FAQ = () => {
  return (
    <>
       <NextSeo title="FAQ" />
      <FQAComponent />
    </>
  )
}

export default FAQ;