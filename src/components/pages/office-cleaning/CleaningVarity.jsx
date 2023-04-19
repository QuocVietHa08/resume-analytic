import React from 'react';
import styles from './styles.module.scss';
import CleaningVarityItem from './CleaningVarityItem';

const CleaningVarity = ({ arrayList, title = 'Office Cleaning Services' }) => {
  const handleRenderClearningVarity = () => {
    if (arrayList.length === 5) {
      return (
        <div className={styles.cleaningVarityItemsFix}>
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
      <div className={`${styles.cleaningVarityItemsFix} w-95-pc`}>
        {arrayList.map((item) => (
          <CleaningVarityItem key={item.text} item={item} />
        ))}
      </div> 
      )
    }

    return (
      <div className={styles.cleaningVarityItems}>
        {arrayList.map((item) => (
          <CleaningVarityItem key={item.text} item={item} />
        ))}
      </div>
    );
  };
  return (
    <div className={styles.cleaningVarityContainer}>
      <div className={styles.cleaningVarityWrapper}>
        <div className={styles.cleaningVarityTitle}>
          Check Out Our Variety Of<br /> <span>{title}</span> Below
        </div>
        <div className={styles.cleaningVarityWrapperList}>{handleRenderClearningVarity()}</div> 
      </div>
    </div>
  );
};

export default CleaningVarity;
