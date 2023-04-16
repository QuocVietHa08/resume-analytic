import React from 'react';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import Enquiry from '@/components/pages/home/Enquiry';
import Download from '@/components/pages/home/Download';
import HouseHelper from './HouseHelper';
import Apply from './Apply';
import HouseCleaningService from './HouseCleaningService';
import Introduction from '../home/Introduction';

const Move = () => {
  return (
    <>
      <Introduction imgSrc="/img/house-cleaning/move-in-out/banner" />
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

export default Move;
