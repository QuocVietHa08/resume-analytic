import React from 'react';
import { NextSeo } from 'next-seo';
import PostRenovationComponent from '@/components/pages/house-cleaning/PostRenovation';

const PostRenovation = () => {
  return (
    <>
      <NextSeo title="Post rennovaion cleaning" />
      <PostRenovationComponent />
    </>
  );
};

export default PostRenovation;
