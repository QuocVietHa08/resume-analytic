import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '@/components/pages/service/IntroService';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import CleaningVarity from '@/components/pages/office-cleaning/CleaningVarity';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import Enquiry from '@/components/pages/home/Enquiry';
import Download from '@/components/pages/home/Download';
import HouseHelper from './HouseHelper';
import Apply from './Apply'

const HOUSE_SERVICE = [
  {
    text: 'Post-Renovation Cleaning',
    img: '/img/house-cleaning/post-renovation',
    link: '/service',
    type: 'info',
  },
  {
    text: 'Move In/Move Out Cleaning',
    img: '/img/house-cleaning/move',
    link: '/service',
    type: 'info',
  },
  {
    text: 'Spring Cleaning',
    img: '/img/house-cleaning/spring',
    link: '/office-cleaning',
    type: 'info',
  },
  {
    text: 'House Disinfection',
    img: '/img/house-cleaning/house-disinfection',
    link: '/service',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
];

const PostRenovation = () => {
  return (
    <>
      <IntroService title="Post-Renovation Cleaning" />
      <BreadCumbs pages={['Home', 'Services', 'Post-Renovation cleaning']} />
      <HouseHelper />
      <Disclaimer />
      <CleaningVarity arrayList={HOUSE_SERVICE} title="House cleaning services" />
      <Work />
      <Testimonials />
      <Apply title="Our Post Renovation cleaning services"/>
      <Enquiry />
      <Download />
    </>
  );
};

export default PostRenovation;
