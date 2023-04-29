import React from 'react';
import Enquiry from '../home/Enquiry';
import ServiceFix from '../home/ServiceFix';

const Service = () => {
  return (
    <>
      <ServiceFix />
      <div className=" mt-sp-50 mt-100 ">
        <Enquiry />
      </div>
    </>
  );
};

export default Service;
