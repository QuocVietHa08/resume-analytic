import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const WorkItem = ({ number, imgSrc, index, length, text }) => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.workItemWrapper}>
      <p>{number}</p>
      <div className={styles.imageWrapper}>
        <img src={`${width > 779 ? imgSrc : `${imgSrc}_sp`}.svg`} alt="img" />
        <div className="mt-20 text-bold text-capitalize font-size-20 font-size-sp-10 pre-wrap text-center">{text}</div>
      </div>
      {width >= 1967 && index !== length - 1 && (
        <div className={styles.workItemLine}></div> 
      )}
    </div>
  );
};

export default WorkItem;
