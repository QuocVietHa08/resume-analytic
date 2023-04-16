import React from 'react';
import ServiceProvider from '@/components/pages/home/Service';
import Enquiry from '../home/Enquiry';
import ServiceFix from '../home/ServiceFix';
import IntroService from './IntroService';
import BreadCumbs from '@/components/atoms/breadcumbs';

const BREADCUMBS = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Services',
    link: ''
  }
]
const Service = () => {
  return (
    <>
        {/* <BreadCumbs pages={BREADCUMBS} /> */}
      <ServiceFix />
      {/* <ServiceProvider /> */}
      <div className="mt-150 mt-sp-50">
        <Enquiry />
      </div>
    </>
  );
};

export default Service;
