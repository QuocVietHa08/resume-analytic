import React from 'react';
import { NextSeo } from 'next-seo';
import TestimonialsComponent from '@/components/pages/testimonials';

const TestimonialsPage = () => {
  return (
    <>
      <NextSeo
        title="Client Testimonials - KungFu Helper Cleaning Services"
        description="Discover what our satisfied clients have to say about our cleaning services. Read their testimonials and learn why KungFu Helper is their preferred choice for professional cleaning in Singapore."
      />
      <TestimonialsComponent />
    </>
  );
};

export default TestimonialsPage;
