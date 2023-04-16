import React from 'react';
import styles from './styles.module.scss';
import CleaningVarityItem from './CleaningVarityItem';

const CleaningVarity = ({ arrayList, title = 'Office Cleaning Services'}) => {
  const handleRenderClearningVarity = () => {
    return (
      <div className={arrayList?.length !== 5 ? styles.cleaningVarityItems : styles.cleaningVarityItemsFix}>
          {arrayList.map((item) => (
            <CleaningVarityItem key={item.text} item={item} />
          ))}          
        </div> 
    )
  }
  return (
    <div className={styles.cleaningVarityContainer}>
      <div className={styles.cleaningVarityWrapper}>
        <div className={styles.cleaningVarityTitle}>
          Check Out Our Variety Of <span>{title}</span> Below
        </div>
        <div className={styles.cleaningVarityWrapper}>
          {handleRenderClearningVarity()}
        </div>
        {/* <div className={styles.cleaningVarityItems}>
          {arrayList.map((item) => (
            <CleaningVarityItem key={item.text} item={item} />
          ))}          
        </div> */}
      </div>
    </div>
  );
};

export default CleaningVarity;
