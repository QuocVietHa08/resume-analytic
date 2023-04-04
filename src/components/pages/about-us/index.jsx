import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '../service/IntroService';
import styles from './styles.module.scss';
import AboutUsDetail from './AboutUsDetail';
import Download from '../home/Download';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <IntroService title="About KungFu Helper" />
      <BreadCumbs pages={['Home', 'About']} links={['/']} />
      <AboutUsDetail />
      <Download />
    </div>
  );
};

export default AboutUs;
