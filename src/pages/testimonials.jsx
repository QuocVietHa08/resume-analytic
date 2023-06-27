import React from 'react';
import { NextSeo } from 'next-seo';
import TestimonialsComponent from '@/components/pages/testimonials';

const TestimonialsPage = () => {
  return (
    <>
      <NextSeo title='Testimonials' />
      <TestimonialsComponent /> 
    </>
  )
}

export default TestimonialsPage;
