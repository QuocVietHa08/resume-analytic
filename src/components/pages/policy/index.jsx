import React from 'react';

import BreadCumbs from '@/components/atoms/breadcumbs';
import styles from './styles.module.scss';
import IntroService from '../service/IntroService';

const Policy = () => {
  return (
    <div className={styles.policyContainer}>
      <IntroService title="Private Policy" />
      <div className={styles.policyContent}>
        <BreadCumbs pages={['Home', 'Privacy Policy']} />
        <p className="pre-wrap mt-50 mb-50 font-size-16 font-size-sp-12">
          Last updated: December, 2022 <br /> This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
          Your information when You use the Service and tells You about Your privacy rights and how the law protects You.<br /> We use Your
          Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.{' '}
        </p>
      </div>
    </div>
  );
};

export default Policy;
