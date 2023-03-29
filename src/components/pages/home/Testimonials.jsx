/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { Carousel } from 'antd';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const imgSrcArrowRight = '/img/home/test/arrow_right';
const imgSrcArrowLeft = '/img/home/test/arrow_left';
const imgSrcQouteRight = '/img/home/test/qoute_right';
const imgSrcQouteLeft = '/img/home/test/qoute_left';

const Testimonials = ({ isTestimonialPage = false }) => {
  const width = useDetectWindowSize();
  const carouselRef = React.createRef();

  const handleSlideGo = (type = 'left') => {
    if (type === 'left') return carouselRef.current.prev();
    return carouselRef.current.next();
  };

  return (
    <div className={styles.testContainer}>
      <div className={styles.testTitle}>
        {isTestimonialPage ? (
          <span className="mb-20 mb-sp-10">What our customers say</span>
        ) : (
          <>
            <span>Testimonials</span>
            <p>From Our Customers</p>
          </>
        )}
      </div>
      <div className={styles.testSlider}>
        <img
          onClick={() => handleSlideGo('left')}
          tabIndex={0}
          role="button"
          onKeyDown={() => handleSlideGo('left')}
          src={`${width > 780 ? `${imgSrcArrowRight}.svg` : `${imgSrcArrowRight}_sp.svg`}`}
          className={styles.testSliderArrowRight}
          alt="arrow"
        />
        <Carousel ref={carouselRef}>
          <div className={styles.testSliderItem}>
            <img
              src={`${width > 780 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
              alt="test"
              className={styles.testQuoteLeft}
            />
            <div className="flex flex-column h-full justify-between">
              <p>
                I am glad to have found my Kungfu Helper to handle all my home needs. With my cleaning needs outsourced, I save an average
                of 5 hours each week.
              </p>
              <span className="text-bold">Abigail Chia, Information Systems Specialist</span>
            </div>
            <img
              src={`${width > 780 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
              alt="test"
              className={styles.testQuotRight}
            />
          </div>
          <div className={styles.testSliderItem}>
            <img
              src={`${width > 780 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
              alt="test"
              className={styles.testQuoteLeft}
            />
            <div className="flex flex-column h-full justify-between">
              <p>
                Kungfu Helper has made my life easier with efficient customer service and experienced helpers. My wife and I can now spend
                more time with our daughters on the weekends. Anytime I need a cleaning, they are always ready to help. Big thank you to
                Kungfu!
              </p>
              <span className="text-bold">Jerome Tan, Civil Servant</span>
            </div>
            <img
              src={`${width > 780 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
              alt="test"
              className={styles.testQuotRight}
            />
          </div>
          <div className={styles.testSliderItem}>
            <img
              src={`${width > 780 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
              alt="test"
              className={styles.testQuoteLeft}
            />
            <div className="flex flex-column h-full justify-between">
              <p>
                We have been looking for trusted cleaning service recommendations for the longest time ever since we relocated to Singapore
                6 months ago. Really appreciate Kungfu Helper’s focus on consistent cleaning quality instead of marketing gimmicks. Book
                Kungfu for a fuss-free experience!
              </p>
              <span className="text-bold">Natalie Sims, Teacher</span>
            </div>
            <img
              src={`${width > 780 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
              alt="test"
              className={styles.testQuotRight}
            />
          </div>
        </Carousel>
        <img
          onClick={() => handleSlideGo('right')}
          tabIndex={0}
          role="button"
          onKeyDown={() => handleSlideGo('right')}
          src={`${width > 780 ? `${imgSrcArrowLeft}.svg` : `${imgSrcArrowLeft}_sp.svg`}`}
          className={styles.testSliderArrowLeft}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Testimonials;
