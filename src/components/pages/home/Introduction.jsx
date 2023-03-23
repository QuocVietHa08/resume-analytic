import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Introduction = () => {
  const width = useDetectWindowSize();
  return (
    <>
      {width > 779 ? (
        <div className={styles.introContainer}>
          <div className={styles.introWrapper}>
            <div className={styles.introDes}>
              <div>
                <div className="font-size-88 line-height-88 text-bold">
                  Best Cleaning <br /> Service Company
                </div>
                <div className="font-size-24 mt-20">
                  We provide top notch cleaning services to our customers, ensuring consistency and quality.
                  <br /> Download our app today to book a cleaning service with our expert cleaners!
                </div>
              </div>
              <div className="flex gap-50">
                <div>
                  <img src="/img/home/intro/apple_download.svg" alt="apple" />
                </div>
                <div>
                  <img src="/img/home/intro/google_download.svg" alt="android" />
                </div>
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
                <div className="font-size-20 line-height-30 text-bold">
                  Best Cleaning <br /> Service Company
                </div>
                <div className="font-size-12 mt-10">
                  We provide top notch cleaning <br /> services to our customers,<br /> ensuring consistency and quality. <br />
                 Download our app today to book<br /> a cleaning service with our <br /> expert cleaners!
                </div>
              </div>
              <div className="flex gap-20">
                <div>
                  <img src="/img/home/intro/google_download_sp.svg" alt="android" />
                </div>
                <div>
                  <img src="/img/home/intro/apple_download_sp.svg" alt="apple" />
                </div>
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
