import React from 'react';
import styles from './styles.module.scss';
import IntroService from '../service/IntroService';
import Enquiry from '../home/Enquiry';
import Content from './Content';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <IntroService title="Contact Us" />
      <div className="mb-100 pb-100 pb-sp-0">
        <Content />
      </div>
      <Enquiry />
    </div>
  )
}

export default Contact