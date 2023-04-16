import React from 'react';
import styles from '../styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DETAIL_LIST = [
  'Fibre Tests Carried out',
  'Cleaning Solution applied',
  'Fibers agitated by hand',
  'Hot water extraction',
  'Any stubborn spots or stains are treated if needed',
  'Eliminating unpleasant smells',
  'Stain Protection',
  'Quick, efficient and favoured service',
];

const Detail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.airconServiceDetailContainer}>
      <div className={`${styles.introText}`}>
        Keeping your home clean is vital, and taking care of upholstery is an important part of that
      </div>
      <div className={`${styles.detailIntro1} mb-30 mb-sp-10 mb-tb-20`}>
        Discover why we are different and what you can expect from KungFu Helper cleaning company as standard.
      </div>
      <div className={styles.serviceDetail}>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} mb-30 mb-sp-20`}>
          Benefits of Upholstery Cleaning
          </div>
          <div className="flex flex-column gap-15 gap-sp-10">
            {DETAIL_LIST.map((item) => (
              <div className={styles.poolingDetailContent} key={item}>
                <img
                  src={`${
                    width > 779 ? '/img/office-cleaning/cleaning-detail/check.svg' : `/img/office-cleaning/cleaning-detail/check_sp.svg`
                  }`}
                  alt="img"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.serviceBottom} />
    </div>
  );
};

export default Detail;
