import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const CleaningVarityItem = ({ item }) => {
  const width = useDetectWindowSize();
  const handleRenderContent = (itemInfo) => {
    if (itemInfo.type === 'contact') {
      return (
        <div className={styles.itemContentContact}>
          <p>{itemInfo.text}</p>
          <button type="button" className={styles.contactButton}>
            <span>Contact Us</span>
          </button>
        </div>
      );
    }

    return (
      <div className={styles.itemContent}>
        <Link href={item.link}>
          <div>
            <img src={`${width > 780 ? `${item.img}.svg` : `${item.img}_sp.svg`}`} className={styles.itemImage} alt="cleaning" />
          </div>
          <p>{item.text}</p>
          <span>
            <div className="color-primary font-size-sp-12 flex gap-10">
              Find out more
              <span>
                <img src="/img/home/service/arrow.svg" alt="arrow" />
              </span>
            </div>
          </span>
        </Link>
      </div>
    );
  };
  return <div className={styles.cleaningVarityItemContainer}>{handleRenderContent(item)}</div>;
};

export default CleaningVarityItem;
