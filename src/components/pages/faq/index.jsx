import React from 'react';
import IntroService from '../service/IntroService';
import Content from './Content';
import BreadCumbs from '@/components/atoms/breadcumbs';

const FAQ = () => {
  return (
    <div>
      <IntroService title="Frequently asked questions" />
      <div className="mt-40 mt-sp-20"></div>
      <BreadCumbs pages={['Home', 'FAQ']} />
      <Content />
    </div>
  )
}

export default FAQ