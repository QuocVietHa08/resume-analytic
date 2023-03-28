import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '@/components/pages/service/IntroService';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import Enquiry from '@/components/pages/home/Enquiry';
import Download from '@/components/pages/home/Download';
import HouseHelper from './HouseHelper';
import Apply from './Apply';
import HouseCleaningService from './HouseCleaningService';

const PostRenovation = () => {
  return (
    <>
      <IntroService title="Post-Renovation Cleaning" />
      <BreadCumbs pages={['Home', 'Services', 'Post-Renovation cleaning']} />
      <HouseHelper />
      <Disclaimer />
      <HouseCleaningService />
      <Work />
      <Testimonials />
      <Apply title="Our Post Renovation cleaning services" />
      <Enquiry />
      <Download />
    </>
  );
};

export default PostRenovation;
