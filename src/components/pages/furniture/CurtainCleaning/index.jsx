import React from 'react';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import Introduction from '../../home/Introduction';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import Enquiry from '@/components/pages/home/Enquiry';
import Apply from '@/components/pages/house-cleaning/Apply';
import FurnitureUpholsteryService from '@/components/pages/furniture/FurnitureUpholsteryService';
import Detail from './CurtainCleaningDedail';

const BREADCUMBS = [
  {
    text: 'Home',
    link: '/' 
  },
  {
    text: 'Services',
    link: '/service'
  },
  {
    text: 'Curtan Cleaning',
    link: ''
  }
]
const CurtainCleaning = () => {
  return (
    <>
      <Introduction imgSrc="/img/furniture/curtain-cleaning/banner" />
      <Detail />
      <Disclaimer />
      <FurnitureUpholsteryService />
      <Work />
      <Testimonials />
      <Apply title="Our Curtain cleaning Services" />
      <Enquiry />
    </>
  );
};

export default CurtainCleaning;
