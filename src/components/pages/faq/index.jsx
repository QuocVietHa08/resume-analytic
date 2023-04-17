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
      <Content />
    </div>
  );
};

export default FAQ;
