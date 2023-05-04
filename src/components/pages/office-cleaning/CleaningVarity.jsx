import React, { useCallback } from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';
import CleaningVarityItem from './CleaningVarityItem';

const CleaningVarity = ({ arrayList, title = 'Office Cleaning Services' }) => {
  const width = useDetectWindowSize();

  const handleRenderClearningVarity = () => {
    if (arrayList.length === 5) {
      return (
        <div className={`${styles.cleaningVarityItemsFix} ${styles.cleaningVarityFor5Items}`}>
          {arrayList.map((item) => (
            <CleaningVarityItem key={item.text} item={item} />
          ))}
        </div>
      );
    }

    if (arrayList.length === 6) {
      return (
        <div className={styles.cleaningVarityItemsFix}>
          {arrayList.map((item) => (
            <CleaningVarityItem key={item.text} item={item} />
          ))}
        </div>
      );
    }

    if (arrayList.length === 8) {
      return (
        <div className={`${styles.cleaningVarityItemsFix} ${styles.clearningVarityFor8Items}`}>
          {arrayList.map((item) => (
            <CleaningVarityItem key={item.text} item={item} />
          ))}
        </div>
      );
    }

    return (
      <div className={`${styles.cleaningVarityItemsFix} ${styles.cleaningVarityFor5Items}`}>
        {arrayList.map((item) => (
          <CleaningVarityItem key={item.text} item={item} />
        ))}
      </div>
    );
  };

  const handleRenderTitle = useCallback(() => {
    if (title === 'Upholstery Cleaning Services' && width < 768) {
      return (
        <>
          Check Out Our Variety Of
          <br />
          <span> Upholstery Cleaning</span>
          <br />
          Services Below
        </>
      );
    }
    return (
      <>
        Check Out Our Variety Of
        <br /> <span>{title}</span> Below
      </>
    );
  }, [title, width]);

  return (
    <div className={styles.cleaningVarityContainer}>
      <div className={styles.cleaningVarityWrapper}>
        <div className={styles.cleaningVarityTitle}>
          {handleRenderTitle()}
        </div>
        <div className={styles.cleaningVarityWrapperList}>{handleRenderClearningVarity()}</div>
      </div>
    </div>
  );
};

export default CleaningVarity;
