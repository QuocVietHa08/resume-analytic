import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '@/components/pages/service/IntroService';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import Enquiry from '@/components/pages/home/Enquiry';
import Download from '@/components/pages/home/Download';
import HouseDisinfectionSection from './HouseDisinfectionSection';
import Apply from '../Apply';
import HouseCleaningService from '../HouseCleaningService';

const HouseDisinfection = () => {
  return (
    <>
      <IntroService title="House Disinfection" />
      <BreadCumbs pages={['Home', 'Services', 'House Disinfection']} links={['/', '/service']} />
      <HouseDisinfectionSection />
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

export default HouseDisinfection;
