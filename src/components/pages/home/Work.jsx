import React from 'react';

import WorkItem from './WorkItem';
import styles from './styles.module.scss';

const WORK = [
  {
    number: '01',
    imgSrc: '/img/home/work/account_signup',
  },
  {
    number: '02',
    imgSrc: '/img/home/work/select_device',
  },
  {
    number: '03',
    imgSrc: '/img/home/work/select_date',
  },
  {
    number: '04',
    imgSrc: '/img/home/work/make_payment',
  },
  {
    number: '05',
    imgSrc: '/img/home/work/booking_complete',
  },
];

const Work = () => {
  return (
    <>
    <h2 className={styles.workTitle}>How It Work</h2>
    <div className={styles.workContainer}>
      {WORK.map((item) => (
        <div key={item.number}>
          <WorkItem number={item.number} imgSrc={item.imgSrc} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Work;
