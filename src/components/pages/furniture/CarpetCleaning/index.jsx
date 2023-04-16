import React from 'react';
// import BreadCumbs from '@/components/atoms/breadcumbs';
// import IntroService from '@/components/pages/service/IntroService';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import Enquiry from '@/components/pages/home/Enquiry';
import Download from '@/components/pages/home/Download';
import Apply from '@/components/pages/house-cleaning/Apply';
import FurnitureUpholsteryService from '@/components/pages/furniture/FurnitureUpholsteryService';
import Detail from './Dedail';
import Introduction from '../../home/Introduction';

// const BREADCUMBS = [
//   {
//     text: 'Home',
//     link:'/'
//   },
//   {
//     text: 'Services',
//     link: '/service'
//   },
//   {
//     text: 'Carpet Cleaning',
//     link:''
//   }
// ]
const CarpetCleaning = () => {
  return (
    <>
      {/* <IntroService title="Carpet Cleaning" /> */}
      {/* <BreadCumbs pages={BREADCUMBS} /> */}
      <Introduction imgSrc="/img/furniture/carpet-cleaning/banner" />
      <Detail />
      <Disclaimer />
      <FurnitureUpholsteryService />
      <Work />
      <Testimonials />
      <Apply title="Our Carpet Cleaning Services" />
      <Enquiry />
      <Download />
    </>
  );
};

export default CarpetCleaning;
