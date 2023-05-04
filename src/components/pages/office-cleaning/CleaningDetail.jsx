import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const CLEANING_LIST = [
  'Daily, weekly & monthly bespoke packages',
  'Photo identification badges & uniformed staff',
  'Electronic Time sheets',
  'In house training ',
  'Cover of staff in the event of illness or any other reason.',
  'Provision of all equipment and cleaning materials included in the price ',
  'A responsible approach to health & safety ',
  'Environmentally aware working practices ',
  'Comprehensive insurances ',
  'Affordable pricing ',
  'Free site visit',
];
const CleaningDetail = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.cleaningDetailContainer}>
      <div>
        <p className={styles.cleaningDesc}>
          A clean and hygienic office is a more productive place for your staff to work and a more pleasant place for your clients to visit.
          We provide high quality, cost-effective office cleaning solutions.
        </p>
        <div className={`${styles.cleaningTitle}`}>KungFu Helper Ensures:</div>
        <div className={styles.cleaningListDetailWrapper}>
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
  );
};

export default CleaningDetail;
