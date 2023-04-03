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
      <div className={`${styles.introText} mt-100 mb-150 mt-sp-40 mb-sp-40`}>
        Feel your sofa as good as new, safety checklist with kids, pets, and the environment in mind
      </div>
      <div className={styles.serviceDetail}>
        <div>
          <img src={`${width > 779 ? '/img/furniture/sofa-cleaning-intro.png' : '/img/furniture/sofa-cleaning-intro_sp.png'}`} alt="img" />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introTextDetail} text-left mb-30 mb-sp-20`}>
            Discover why we are different and what you can expect from KungFu Helper cleaning company as standard.
          </div>
          <div className="flex flex-column gap-30 gap-sp-10">
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
