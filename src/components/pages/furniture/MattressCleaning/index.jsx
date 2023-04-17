import React from 'react';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import Enquiry from '@/components/pages/home/Enquiry';
import Apply from '@/components/pages/house-cleaning/Apply';
import FurnitureUpholsteryService from '@/components/pages/furniture/FurnitureUpholsteryService';
import Detail from './Dedail';
import Introduction from '../../home/Introduction';

const MattressCleaning = () => {
  return (
    <>
      <Introduction imgSrc="/img/furniture/mattress-cleaning/banner" />
      <Detail />
      <Disclaimer />
      <FurnitureUpholsteryService />
      <Work />
      <Testimonials />
      <Apply title="Our Mattress Cleaning Services" />
      <Enquiry />
    </>
  );
};

export default MattressCleaning;
