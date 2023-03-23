import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const UpToTop = () => {
  const width = useDetectWindowSize();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.upToTopContainer}>
      <div role="button" onClick={handleScrollToTop} onKeyPress={handleScrollToTop} tabIndex={0} className={styles.block}>
        <img src={`${width > 780 ? `/img/upToTop/arrowUp.svg` : `/img/upToTop/arrowUp_sp.svg`}`} alt="item" />
      </div>
    </div>
  );
};

export default UpToTop;
