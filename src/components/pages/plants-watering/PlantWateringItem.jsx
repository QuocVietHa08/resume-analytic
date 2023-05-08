import React from 'react';
import styles from './styles.module.scss';

const PlantWateringItem = ({ item }) => {
  return (
    <div className={styles.detailItemWrapper}>
      <div className={styles.imageWrapper}>
        <img src={item.imgSrc} alt="icon" />
      </div>
      <span>
        {item.text}
      </span>
    </div>
  )  
}

export default PlantWateringItem;