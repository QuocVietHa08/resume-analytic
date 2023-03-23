import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Download = () => {
  const width = useDetectWindowSize();
  
  return (
    <div className={styles.downloadContainer}>
      <div className={styles.downloadImagePhone}>
        <img src={`${width > 780 ? `/img/home/download/phone.svg` : `/img/home/download/phone_sp.svg`}`} alt="item" />
      </div>
      <div className={styles.downloadInfo}>
        <p>
          Download The <span>App</span>
        </p>
        <div className="font-size-24 font-size-sp-12">Book your desired cleaning services with just a few clicks.</div>

        <div className="font-size-24 font-size-sp-12 mt-10">Enjoy free wallet credits when you sign up on our app today! </div>
        <div className={styles.downloadImageWrapper}>
          
        <img src={`${width > 780 ? `/img/home/intro/apple_download.svg` : `/img/home/intro/apple_download_sp.svg`}`} alt="item" />

        <img src={`${width > 780 ? `/img/home/intro/google_download.svg` : `/img/home/intro/google_download_sp.svg`}`} alt="item" />
        </div>
      </div>

      <div className={styles.downloadDots}>
        <img src={`${width > 780 ? `/img/home/download/dots.svg` : `/img/home/download/dots_sp.svg`}`} alt="item" /> 
      </div>
    </div>
  );
};

export default Download;
