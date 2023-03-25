import React from 'react';
import styles from './styles.module.scss';
import CleaningVarityItem from './CleaningVarityItem';

const CleaningVarity = ({ arrayList }) => {
  return (
    <div className={styles.cleaningVarityContainer}>
      <div className={styles.cleaningVarityWrapper}>
        <div className={styles.cleaningVarityTitle}>
          Check Out Our Variety Of <span>Office Cleaning Services</span> Below
        </div>

        <div className={styles.cleaningVarityItems}>
            {arrayList.map((item) => (
              <CleaningVarityItem key={item.text} item={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CleaningVarity