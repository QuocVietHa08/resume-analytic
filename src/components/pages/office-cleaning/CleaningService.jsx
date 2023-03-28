import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const CLEANING_SERVIES = [
  {
    name: `Child Care 
    Centre`,
    img: '/img/office-cleaning/cleaning-service/bag',
  },
  {
    name: 'Offices',
    img: '/img/office-cleaning/cleaning-service/office',
  },
  {
    name: `Workout 
    Facilities`,
    img: '/img/office-cleaning/cleaning-service/workout',
  },

  {
    name: `Hotel Rooms`,
    img: '/img/office-cleaning/cleaning-service/hotel',
  },
  {
    name: `Apartments`,
    img: '/img/office-cleaning/cleaning-service/apartment',
  },
  {
    name: `Food 
    Manufacturing`,
    img: '/img/office-cleaning/cleaning-service/food',
  },
  {
    name: `Laboratory`,
    img: '/img/office-cleaning/cleaning-service/laboratory',
  },
  {
    name: `Healthcare
    Facilities`,
    img: '/img/office-cleaning/cleaning-service/healthcare',
  },
];
const CleaningService = ({ title }) => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.cleaningServiceContainer}>
      <img
        src={`${
          width > 780 ? `/img/office-cleaning/cleaning-service/image_left.svg` : `/img/office-cleaning/cleaning-service/image_left_sp.svg`
        }`}
        className={styles.itemImageLeft}
        alt="cleaning"
      />
      <div className={styles.cleaningServiceWrapper}>
        <p>
          Our {title} <br /> <span>Can Be Applied To</span>
        </p>
        <div className={styles.servicesContainer}>
          {CLEANING_SERVIES.map((item) => (
            <div key={item.name} className={styles.serviceItem}>
              <div className={styles.serviceItemImage}>
                <img src={`${width > 780 ? `${item.img}.svg` : `${item.img}_sp.svg`}`} className={styles.itemImage} alt="cleaning" />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={`${
          width > 780 ? `/img/office-cleaning/cleaning-service/image_right.svg` : `/img/office-cleaning/cleaning-service/image_right_sp.svg`
        }`}
        className={styles.itemImageRight}
        alt="cleaning"
      />
    </div>
  );
};

export default CleaningService;
