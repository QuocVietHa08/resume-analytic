import React from 'react';
import { NextSeo } from 'next-seo';
import AcDiagnosticComponent from '@/components/pages/ac-diagnostic';

const AcDiagnosticServices = () => {
  return (
    <>
      <NextSeo
        title="Comprehensive AC Diagnostic Services in Singapore | KungFu Helper"
        description="Experience thorough AC diagnostic services by skilled technicians at KungFu Helper. We identify and address air conditioning issues promptly to ensure optimal performance and energy efficiency."
      />
      <AcDiagnosticComponent />
    </>
  );
};

export default AcDiagnosticServices;
