import React from 'react';
import { NextSeo } from 'next-seo';
import PostRenovationComponent from '@/components/pages/house-cleaning/PostRenovation';

const PostRenovation = () => {
  return (
    <>
      <NextSeo
        title="Thorough Post Renovation Cleaning Services in Singapore | KungFu Helper"
        description="Enjoy a clean and dust-free space after renovations with our thorough post renovation cleaning services. KungFu Helper's experts remove debris, dust, and traces of construction for a pristine environment."
      />
      <PostRenovationComponent />
    </>
  );
};

export default PostRenovation;
