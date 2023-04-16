import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const CLEANING_LIST = [
  'Highly trained professional cleaners available at a moment’s notice',
  'An efficient and effective cleaning solution with minimal disruption to business',
  'Property-wide sanitisation and disinfection solutions available',
];
const DisinfectionDetail = () => {
  const width = useDetectWindowSize();
  return (
    <div className="flex flex-column">
      <div className={styles.cleaningDetailContainer}>
       
        <div>
          <div className={styles.cleaningTitle}>Office Disinfection services</div>
          <p className={styles.cleaningDesc}>
            Our deep cleaning service ensures you provide a safe and healthy working environment for your employees and your customers.
          </p>
          <div className="flex flex-column gap-30 gap-sp-20">
            {CLEANING_LIST.map((item) => (
              <div className={styles.cleaningItem} key={item}>
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
    </div>
  );
};

export default DisinfectionDetail;
