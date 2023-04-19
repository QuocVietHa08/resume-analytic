import React from 'react';
import { useRouter } from 'next/router';
import WorkItem from './WorkItem';
import styles from './styles.module.scss';

const WORK = [
  {
    number: '01',
    imgSrc: '/img/home/work/account_signup',
    text: `Sign up for\nan account`
  },
  {
    number: '02',
    imgSrc: '/img/home/work/select_device',
    text: `select your\ndesired service`
  },
  {
    number: '03',
    imgSrc: '/img/home/work/select_date',
    text: `select appointment\ndate & time`
  },
  {
    number: '04',
    imgSrc: '/img/home/work/make_payment',
    text: `make\npayment`
  },
  {
    number: '05',
    imgSrc: '/img/home/work/booking_complete',
    text: `booking\ncompleted!`
  },
];

const Work = () => {
  const router = useRouter();
  return (
    <div className={styles.workWrapper}>
    {!router.pathname.includes('faq') && (
      <h2 className={styles.workTitle}>How It Works</h2>
    )} 
    <div className={styles.workContainer}>
      {WORK.map((item, index) => (
        <div key={item.number}>
          <WorkItem number={item.number} text={item.text} index={index} length={WORK.length} imgSrc={item.imgSrc} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Work;
