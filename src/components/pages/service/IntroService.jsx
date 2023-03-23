import React from 'react';
import styles from './styles.module.scss';

const IntroService = ({ title }) => {
  return (
    <div className={styles.introContainer}>
      <img src="/img/service/intro/background.png" alt="intro" className={styles.serviceIntro} />
      <div className={styles.introTitle}>{title}</div>
    </div>
  )
}

export default IntroService