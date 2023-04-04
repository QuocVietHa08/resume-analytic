import React from 'react';
import IntroService from '../service/IntroService';
import Content from './Content';
import BreadCumbs from '@/components/atoms/breadcumbs';

const BREADCUMBS = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'FAQ',
    link: ''
  }
]
const FAQ = () => {
  return (
    <div>
      <IntroService title="Frequently asked questions" />
      <div className="mt-40 mt-sp-20"></div>
      <BreadCumbs pages={BREADCUMBS} />
      <Content />
    </div>
  );
};

export default FAQ;
