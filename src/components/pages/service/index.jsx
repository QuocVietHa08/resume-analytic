import React from 'react';
import ServiceProvider from '@/components/pages/home/Service';
import Enquiry from '../home/Enquiry';
import Download from '../home/Download';
import IntroService from './IntroService';

const Service = () => {
  return (
    <>
      <IntroService title="Our Services" />
      <ServiceProvider />
      <Enquiry />
      <Download />
    </>
  );
};

export default Service;
