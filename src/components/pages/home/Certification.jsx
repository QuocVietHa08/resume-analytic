import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const CERTIFICATIONS = [
  {
    imgSrc: '/img/home/cert/enviroment',
    title: `NEA Licence Number
190978/8396C/R02`,
  },
  {
    imgSrc: '/img/home/cert/safe',
    title: 'bizSAFE Star',
  },
  {
    imgSrc: '/img/home/cert/body',
    title: `ISO 9001 Quality
    Management Systems`,
  },
  {
    imgSrc: '/img/home/cert/kw',
    title: `KW Certification`,
  },
];

const Certification = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.certificationContainer}>
      <div className={styles.certificationTitle}>
        Our
        <span>Certification</span>
      </div>
      <section>
        {CERTIFICATIONS.map((item) => (
          <div key={item.title} className={styles.certificationItem}>
            <div className={styles.certificationImageWrapper}>
              <img src={`${width > 780 ? `${item.imgSrc}.svg` : `${item.imgSrc}_sp.svg`}`} alt="item" />
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Certification;
