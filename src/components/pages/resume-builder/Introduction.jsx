import React from 'react';
import styles from './styles.module.scss';

const Introduction = ({ info }) => {
  return (
    <div className={styles.introduction}>
      <div className={styles.title}>
        <div className={styles.text}>

        Introduction
        </div>
        <div className={styles.line}></div>
        </div>
      <div>{info.content}</div>
    </div>
  );
};

export default Introduction;
