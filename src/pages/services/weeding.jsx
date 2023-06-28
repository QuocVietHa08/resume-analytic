import React from 'react';
import { NextSeo } from 'next-seo';
import WeedingComponent from '@/components/pages/weeding';

const Weeding = () => {
  return (
    <>
      <NextSeo
        title="Pre and Post Wedding Cleaning Services in Singapore | KungFu Helper"
        description="Make your special day stress-free with our pre and post wedding cleaning services. KungFu Helper ensures a clean and inviting venue, allowing you to focus on creating beautiful memories"
      />
      <WeedingComponent />
    </>
  );
};

export default Weeding;
