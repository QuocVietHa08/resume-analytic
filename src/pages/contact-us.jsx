import React from 'react';
import { NextSeo } from 'next-seo';

import ContactComponent from '@/components/pages/contact';

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact KungFu Helper for Cleaning Services in Singapore"
        description="Have questions or need to book our cleaning services? Contact YourCompany today. Our friendly team is ready to assist you with any inquiries or scheduling requirements."
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
