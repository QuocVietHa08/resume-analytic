import React from 'react';
import Enquiry from '../home/Enquiry';
import ServiceFix from '../home/ServiceFix';

const Service = () => {
  return (
    <>
      <ServiceFix />
      <div className="mt-150 mt-sp-50">
        <Enquiry />
      </div>
    </>
  );
};

export default Service;
