import React from 'react';
import IntroService from '../service/IntroService';
import Content from './Content';

const FAQ = () => {
  return (
    <div>
      <IntroService title="Frequently asked questions" />
      <Content />
    </div>
  )
}

export default FAQ