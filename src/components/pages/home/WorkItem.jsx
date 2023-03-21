import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const WorkItem = ({ number, imgSrc }) => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.workItemWrapper}>
      <p>{number}</p>
      <div className={styles.imageWrapper}>
        <img src={`${width > 779 ? imgSrc : `${imgSrc}_sp`}.svg`} alt="img" />
      </div>
    </div>
  );
};

export default WorkItem;
