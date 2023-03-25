import React from 'react';
import styles from './styles.module.scss';

const Disclaimer = () => {
  return (
    <div className={styles.disclaimerContainer}>
      <div className={styles.disclaimerContent}>
        <p>Disclaimer</p>
        <div>
          KungFu Helper reserves the right to decline a service if there are unforeseen circumstances that could be uncomfortable for our
          team or potentially cause injury. Our team will strive to uphold professionalism and propose the best solution for our clients.
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
