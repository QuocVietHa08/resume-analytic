/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { Carousel } from 'antd';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const imgSrcArrowRight = '/img/home/test/arrow_right';
const imgSrcArrowLeft = '/img/home/test/arrow_left';
const imgSrcQouteRight = '/img/home/test/qoute_right';
const imgSrcQouteLeft = '/img/home/test/qoute_left';
const avatar1 = '/img/home/test/image1';
const avatar2 = '/img/home/test/image2';
const avatar3 = '/img/home/test/image3';

const Testimonials = ({ isTestimonialPage = false }) => {
  const width = useDetectWindowSize();
  const carouselRef = React.createRef();

  const handleSlideGo = (type) => {
    if (type === 'left') {
      carouselRef.current.prev();
    } else {
      carouselRef.current.next();
    }
  };

  const handleRenderSlide = () => {
    if (width > 1600) {
      return (
        <>
          <div className={styles.testSlider}>
            <img
              onClick={() => handleSlideGo('left')}
              tabIndex={0}
              role="button"
              onKeyDown={() => handleSlideGo('left')}
              src={`${width > 1600 ? `${imgSrcArrowRight}.svg` : `${imgSrcArrowRight}_sp.svg`}`}
              className={styles.testSliderArrowRight}
              alt="arrow"
            />
            <Carousel dots={{ className: 'carousel-testimonials-style' }} ref={carouselRef}>
              <div className={styles.testSliderItem}>
                <img
                  src={`${width > 1600 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
                  alt="test"
                  className={styles.testQuoteLeft}
                />
                <div className={styles.testSliderItemWrapper}>
                  <img src={`${width > 1600 ? `${avatar3}.svg` : `${avatar3}_sp.svg`}`} alt="test" className={styles.testSliderItemImage} />
                  <p>
                    I am glad to have found my Kungfu Helper to handle all my home needs. With my cleaning needs outsourced, I save an
                    average of 5 hours each week.
                  </p>
                  <span className="text-bold">Abigail Chia, Information Systems Specialist</span>
                </div>
                <img
                  src={`${width > 1600 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
                  alt="test"
                  className={styles.testQuotRight}
                />
              </div>
              <div className={styles.testSliderItem}>
                <img
                  src={`${width > 1600 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
                  alt="test"
                  className={styles.testQuoteLeft}
                />
                <div className={styles.testSliderItemWrapper}>
                  <img src={`${width > 1600 ? `${avatar2}.svg` : `${avatar2}_sp.svg`}`} alt="test" className={styles.testSliderItemImage} />
                  <p>
                    Kungfu Helper has made my life easier with efficient customer service and experienced helpers. My wife and I can now
                    spend more time with our daughters on the weekends. Anytime I need a cleaning, they are always ready to help. Big thank
                    you to Kungfu!
                  </p>
                  <span className="text-bold">Jerome Tan, Civil Servant</span>
                </div>
                <img
                  src={`${width > 1600 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
                  alt="test"
                  className={styles.testQuotRight}
                />
              </div>
              <div className={styles.testSliderItem}>
                <img
                  src={`${width > 1600 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
                  alt="test"
                  className={styles.testQuoteLeft}
                />
                <div className={styles.testSliderItemWrapper}>
                  <img src={`${width > 1600 ? `${avatar1}.svg` : `${avatar1}_sp.svg`}`} alt="test" className={styles.testSliderItemImage} />
                  <p>
                    We have been looking for trusted cleaning service recommendations for the longest time ever since we relocated to
                    Singapore 6 months ago. Really appreciate Kungfu Helper’s focus on consistent cleaning quality instead of marketing
                    gimmicks. Book Kungfu for a fuss-free experience!
                  </p>
                  <span className="text-bold">Natalie Sims, Teacher</span>
                </div>
                <img
                  src={`${width > 1600 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
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
              src={`${width > 1600 ? `${imgSrcArrowLeft}.svg` : `${imgSrcArrowLeft}_sp.svg`}`}
              className={styles.testSliderArrowLeft}
              alt="arrow"
            />
          </div>
        </>
      );
    }

    return (
      <div className={styles.testSlider}>
        <div className={styles.testSliderItem}>
          <img
            src={`${width > 1600 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
            alt="test"
            className={styles.testQuoteLeft}
          />
          <div className={styles.testSliderItemWrapper}>
            <img src={`${width > 1600 ? `${avatar3}.svg` : `${avatar3}_sp.svg`}`} alt="test" className={styles.testSliderItemImage} />
            <p>
              I am glad to have found my Kungfu Helper to handle all my home needs. With my cleaning needs outsourced, I save an average of
              5 hours each week.
            </p>
            <span className="text-bold">Abigail Chia, Information Systems Specialist</span>
          </div>
          <img
            src={`${width > 1600 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
            alt="test"
            className={styles.testQuotRight}
          />
        </div>
        <div className={styles.testSliderItem}>
          <img
            src={`${width > 1600 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
            alt="test"
            className={styles.testQuoteLeft}
          />
          <div className={styles.testSliderItemWrapper}>
            <img src={`${width > 1600 ? `${avatar2}.svg` : `${avatar2}_sp.svg`}`} alt="test" className={styles.testSliderItemImage} />
            <p>
              Kungfu Helper has made my life easier with efficient customer service and experienced helpers. My wife and I can now spend
              more time with our daughters on the weekends. Anytime I need a cleaning, they are always ready to help. Big thank you to
              Kungfu!
            </p>
            <span className="text-bold">Jerome Tan, Civil Servant</span>
          </div>
          <img
            src={`${width > 1600 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
            alt="test"
            className={styles.testQuotRight}
          />
        </div>
        <div className={styles.testSliderItem}>
          <img
            src={`${width > 1600 ? `${imgSrcQouteLeft}.svg` : `${imgSrcQouteLeft}_sp.svg`}`}
            alt="test"
            className={styles.testQuoteLeft}
          />
          <div className={styles.testSliderItemWrapper}>
            <img src={`${width > 1600 ? `${avatar1}.svg` : `${avatar1}_sp.svg`}`} alt="test" className={styles.testSliderItemImage} />
            <p>
              We have been looking for trusted cleaning service recommendations for the longest time ever since we relocated to Singapore 6
              months ago. Really appreciate Kungfu Helper’s focus on consistent cleaning quality instead of marketing gimmicks. Book Kungfu
              for a fuss-free experience!
            </p>
            <span className="text-bold">Natalie Sims, Teacher</span>
          </div>
          <img
            src={`${width > 1600 ? `${imgSrcQouteRight}.svg` : `${imgSrcQouteRight}_sp.svg`}`}
            alt="test"
            className={styles.testQuotRight}
          />
        </div>
      </div>
    );
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
      {handleRenderSlide()}
    </div>
  );
};

export default Testimonials;
