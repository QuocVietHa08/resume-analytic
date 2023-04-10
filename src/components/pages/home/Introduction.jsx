import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Introduction = () => {
  const width = useDetectWindowSize();

  return (
    <>
      {width > 1600 ? (
        <div className={styles.introContainer}>
          <div className={styles.introWrapper}>
            <div className={styles.introDes}>
              <div>
                <div className="font-size-88 line-height-88 text-normal text-font-family">
                  Best Cleaning <br /> Service Company
                </div>
                <div className="font-size-24 mt-20 text-normal">
                  We provide top notch cleaning services to our customers, ensuring consistency and quality.
                  <br /> Download our app today to book a cleaning service with our expert cleaners!
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
              <img src="/img/home/intro/cleaner.svg" alt="cleaner" />
            </div>
          </div>
          <div className={styles.introLeftSign}>
            <img src="/img/home/intro/left_top_sign.svg" alt="sign" />
          </div>
        </div>
      ) : (
        <div className={styles.introContainer}>
          <div className={styles.introWrapper}>
            <div className={styles.introDes}>
              <div>
                <div className="font-size-20 font-size-tb-35 line-height-30 text-nornal text-font-family">
                  Best Cleaning <br /> Service Company
                </div>
                <div className="font-size-12 font-size-tb-16 mt-10">
                  We provide top notch cleaning <br /> services to our customers,
                  <br /> ensuring consistency and quality. <br />
                  Download our app today to book
                  <br /> a cleaning service with our <br /> expert cleaners!
                </div>
              </div>
              <div className={styles.whatAppButton}>
                <div>
                  <img src="/img/home/intro/phone_sp.svg" alt="android" />
                </div>
                <span>WhatsApp Us</span>
              </div>
            </div>
            <div className={styles.cleanerAvatarWrapper}>
              <img src="/img/home/intro/cleaner_sp.svg" alt="cleaner" />
            </div>
          </div>
          <div className={styles.introLeftSign}>
            <img src="/img/home/intro/left_top_sign_sp.svg" alt="sign" />
          </div>
        </div>
      )}
    </>
  );
};

export default Introduction;
