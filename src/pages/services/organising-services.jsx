import React from 'react';
import { NextSeo } from 'next-seo';
import OrganisingServiceComponent from '@/components/pages/organising-servies';

const OrganisingService = () => {
  return (
    <>
      <NextSeo
        title="Professional Organizing Services in Singapore | KungFu Helper"
        description="Declutter and optimize your space with our professional organizing services. KungFu Helper's experts provide practical solutions for a tidy and well-organized living or working area."
      />
      <OrganisingServiceComponent />
    </>
  );
};

export default OrganisingService;
