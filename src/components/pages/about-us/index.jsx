import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import styles from './styles.module.scss';
import AboutUsDetail from './AboutUsDetail';
import Download from '../home/Download';

const BREADCUMBS = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '',
  }
]

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <AboutUsDetail />
      <Download />
    </div>
  );
};

export default AboutUs;
