import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DETAIL_LIST = [
  'Bed bugs',
'Moths, moth larvae and carpet beetles',
'Rodents; rats, mice and squirrels',
'Fleas',
'Wasps, bees, hornets and ants',
'Cockroaches and beetles',
'Flies and maggots ', 
];
const PestControlDetail = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.poolCleaningDetailContainer}>
      <div>
        <p className={styles.poolingDes}>
        KungFu Helper are on call 7 days a week to visit your home with pest emergencies. The team is equipped with the right gear and tools for controlling pests and are skilled at eradicating all of the pest that can be commonly found.
        </p>
        <div className={styles.detailListWrapper}>
          {DETAIL_LIST.map((item) => (
            <div className={styles.poolingDetailContent} key={item}>
              <img
                src={`${
                  width > 768 ? '/img/office-cleaning/cleaning-detail/check.svg' : `/img/office-cleaning/cleaning-detail/check_sp.svg`
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

export default PestControlDetail;
