import React from 'react';
import WorkItem from './WorkItem';
import styles from './styles.module.scss';

const REFERRAL_WORK= [
  {
    number: '01',
    imgSrc: '/img/faq/referral-work/share',
    text: `Share Your Referral\nCode To Other`
  },
  {
    number: '02',
    imgSrc: '/img/faq/referral-work/sign-up',
    text: `Referee Signs Up Using\n Your Referral Code`
  },
  {
    number: '03',
    imgSrc: '/img/faq/referral-work/complete',
    text: `Referee Completes Their \n First Cleaing Service`
  },
  {
    number: '04',
    imgSrc: '/img/faq/referral-work/wallet-credit',
    text: `Both You And Your Referee \n Will Receive Wallet Credits`
  }, 
];

const ReFerralWork = () => {
  return (
    <> 
    <div className={styles.workContainer}>
      {REFERRAL_WORK.map((item, index) => (
        <div key={item.number}>
          <WorkItem number={item.number} text={item.text} index={index} length={REFERRAL_WORK.length} imgSrc={item.imgSrc} />
        </div>
      ))}
    </div>
    </>
  );
};

export default ReFerralWork;
