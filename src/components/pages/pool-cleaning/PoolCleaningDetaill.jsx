import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DETAIL_LIST = [
  'Brush and clean the walls ',
  'Vacuum any debris from the pool flow',
  'Test and treat the chemicals to balance the water chemistry ',
  'Backwash and clean filters ',
  'Attend to any repairs ',
  'Clean pool cover ',
  'Re-stock and top up any chemicals'
  
];
const PoolCleaningDetail = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.poolCleaningDetailContainer}>
      <div>
        <p className={styles.poolingDes}>
        Our team will provide our services as one-off testing and treating for our clients, as well as cleaning them as part of a regular maintenance plan. Regular pool testing is crucial to ensuring the safety of those using it. During maintenance visits, at least one of our specialist engineers will attend to:
        </p>
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
  );
};

export default PoolCleaningDetail;
