import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const OrganisingServiceDetailItem = ({ item }) => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.organisingServicesDetailItemContainer}>
      <div>
        <img src={`${width > 779 ? `${item.img}.svg` : `${item.img}_sp.svg`}`} alt="img" />
      </div>
      <div className={styles.itemTitle}>{item.title}</div>
      <div className={styles.itemDesWrapper}>
        <p>{item.des}</p>
        {item.type === 'contact' && <Link href="/contact-us" className={styles.buttonContact}>Contact Us</Link>}
      </div>
    </div>
  );
};

export default OrganisingServiceDetailItem;
