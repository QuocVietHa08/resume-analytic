import React from 'react';
import ServiceProvider from '@/components/pages/home/Service';
import Enquiry from '../home/Enquiry';
import Download from '../home/Download';
import IntroService from './IntroService';
import BreadCumbs from '@/components/atoms/breadcumbs';

const Service = () => {
  return (
    <>
      <IntroService title="Our Services" />
      <div className="pt-50 pt-sp-20 pb-40 pb-sp-20">
        <BreadCumbs pages={['Home', 'Services']} />
      </div>
      <ServiceProvider />
      <div className="mt-150 mt-sp-50">
        <Enquiry />
      </div>
      <Download />
    </>
  );
};

export default Service;
