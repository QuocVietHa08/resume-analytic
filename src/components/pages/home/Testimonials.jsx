import React from 'react';
import { Carousel } from 'antd';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const imgSrcArrowRight = "/img/home/test/arrow_right";
const imgSrcArrowLeft = "/img/home/test/arrow_left";
const imgSrcQouteRight = "/img/home/test/qoute_right";
const imgSrcQouteLeft = "/img/home/test/qoute_left";

const Testimonials = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.testContainer}>
      <div className={styles.testTitle}>
        <span>Testimonials</span>
        <p>From Our Customers</p>
      </div>
      <div className={styles.testSlider}>
        <img src={`${width > 780 ? `${imgSrcArrowRight}.svg` : `${imgSrcArrowRight}_sp.svg`}`} className={styles.testSliderArrowRight} alt="arrow" />
        <Carousel>
          <div className={styles.testSliderItem}>
            <img src={`${width > 780 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`} alt="test" className={styles.testQuoteLeft} />
            <div className="flex flex-column gap-30 gap-sp-0">
            <p>
              I am glad to have found my Kungfu Helper to handle all my home needs. With my cleaning needs outsourced, I save an average of
              5 hours each week.
            </p>
            <span className="text-bold">Abigail Chia, Information Systems Specialist</span>
            </div>
            <img src={`${width > 780 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`} alt="test" className={styles.testQuotRight} />
          </div>
        </Carousel>
        <img src={`${width > 780 ? `${imgSrcArrowLeft}.svg` : `${imgSrcArrowLeft}_sp.svg`}`}  className={styles.testSliderArrowLeft} alt="arrow" />
      </div>
    </div>
  );
};

export default Testimonials;
