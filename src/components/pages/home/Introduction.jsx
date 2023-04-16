import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Introduction = ({ imgSrc }) => {
  const width = useDetectWindowSize();

  return (
    <>
      {width > 1600 ? (
        <div className={styles.introContainer}>
          <div className={styles.introWrapper}>
            <div className={styles.introDes}>
              <div>
                <div className="font-size-88 line-height-110 text-normal text-font-family">
                  Best Cleaning <br /> Service Company
                </div>
                <div className="font-size-24 line-height-30 mt-20 text-normal">
                  We provide top notch cleaning services to our <br /> customers, ensuring consistency and quality. <br />
                  Download our app today to book a cleaning service <br /> with our expert cleaners!
                </div>
              </div>
              <div className={styles.whatAppButton}>
                <div>
                  <img src="/img/home/intro/phone.svg" alt="apple" />
                </div>
                <span>WhatsApp Us</span>
              </div>
            </div>
            <div className={styles.cleanerAvatarWrapper}>
              <img src={`${imgSrc}.svg`} alt="cleaner" />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.introContainer}>
          <div className={styles.introWrapper}>
            <div className={styles.introDes}>
              <div>
                <div className="font-size-20 font-size-tb-35 line-height-26 line-height-tb-40 text-nornal text-font-family">
                  Best Cleaning <br /> Service Company
                </div>
                <div className="font-size-12 font-size-tb-16 mt-5">
                  We provide top notch cleaning services to our <br /> customers,
                  ensuring consistency and quality. <br />
                  Download our app today to book
                  a cleaning service with <br /> our expert cleaners!
                </div>
              </div>
              <div className={styles.whatAppButton}>
                <div>
                  <img src="/img/home/intro/phone.svg" alt="android" />
                </div>
                <span>WhatsApp Us</span>
              </div>
            </div>
            <div className={styles.cleanerAvatarWrapper}>
              <img src={`${imgSrc}_sp.svg`} alt="cleaner" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Introduction;
