import React from 'react';

import BreadCumbs from '@/components/atoms/breadcumbs';
import Testimonials from '../home/Testimonials';
import Download from '../home/Download';
import IntroService from '../service/IntroService';
import styles from './styles.module.scss';

const TestimonialsPageComponent = () => {
  return (
    <div className={styles.testimonialsPageContainer}>
      <IntroService title="Testimonials" />
      <BreadCumbs pages={['Home', 'Testimonials']} links={['/']} />
      <Testimonials isTestimonialPage />
      <Download />
    </div>
  );
};

export default TestimonialsPageComponent;
