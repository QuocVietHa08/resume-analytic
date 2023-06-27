import React from 'react';
import { NextSeo } from 'next-seo';

import ContactComponent from '@/components/pages/contact';

const Contact = () => {
  return (
    <>
    <NextSeo title='Contact Us' />
    <ContactComponent /> 
    </>
  )
}

export default Contact