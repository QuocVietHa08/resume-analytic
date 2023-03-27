import React from 'react';
import IntroService from '../service/IntroService';
import BreadCumbs from '@/components/atoms/breadcumbs';
import Work from '@/components/pages/home/Work';
import Testimonials from '@/components/pages/home/Testimonials';
import FAQ from '@/components/pages/faq/Content.jsx';
import Enquiry from '@/components/pages/home/Enquiry';
import Download from '@/components/pages/home/Download';
import Disclaimer from '@/components/pages/office-cleaning/Disclaimer.jsx';
import CleaningVarity from '@/components/pages/office-cleaning/CleaningVarity';
import ParttimeHelper from './PartimeHelper';

const PARTTIME_SERVICE = [
  {
    text: 'Furniture & Upholstery Cleaning',
    img: '/img/parttime-helper/furniture-upholstery-cleaning',
    link: '/service',
    type: 'info',
  },
  {
    text: 'House Cleaning',
    img: '/img/parttime-helper/house-cleaning',
    link: '/service',
    type: 'info',
  },
  {
    text: 'Handy Home Services',
    img: '/img/parttime-helper/handy-home-services',
    link: '/office-cleaning',
    type: 'info',
  },
  {
    text: 'Office Cleaning',
    img: '/img/parttime-helper/office-cleaning',
    link: '/service',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
];

const Service = () => {
  return (
    <>
      <IntroService title="Part-Time Helper" />
      <BreadCumbs pages={['Home', 'Services', 'Part-Time Helper']} />
      <ParttimeHelper />
      <Disclaimer />
      <CleaningVarity arrayList={PARTTIME_SERVICE} title="Cleaning Services" />
      <Work />
      <Testimonials />
      <FAQ />
      <Enquiry />
      <Download />
    </>
  );
};

export default Service;
