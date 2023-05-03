import React from 'react';
import { useRouter  } from 'next/router';
import Link from 'next/link';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const CleaningVarityItem = ({ item }) => {
  const width = useDetectWindowSize();
  const router = useRouter();
  
  const handleRenderContent = (itemInfo) => {
    if (itemInfo.type === 'contact') {
      return (
        <div className={styles.itemContentContact}>
          <p>{itemInfo.text}</p>
          <button onClick={() => router.push('/contact-us')} type="button" className={styles.contactButton}>
            <span className="text-bold">Contact Us</span>
          </button>
        </div>
      );
    }

    return (
      <div className={styles.itemContent}>
        <Link href={item.link} className="h-full flex flex-column justify-between">
          <div>
            <img src={`${width > 1600 ? `${item.img}.svg` : `${item.img}_sp.svg`}`} className={styles.itemImage} alt="cleaning" />
          </div>
          <div className="h-50pr font-size-tb-20 flex flex-column justify-between">
          <p className="font-size-tb-16">{item.text}</p>
          <span>
            <div className="color-primary font-size-tb-16 font-size-sp-12 text-bold flex gap-10">
              Find out more
              <span>
                <img src="/img/home/service/arrow.svg" alt="arrow" />
              </span>
            </div>
          </span>
          </div>
        </Link>
      </div>
    );
  };
  return <div className={styles.cleaningVarityItemContainer}>{handleRenderContent(item)}</div>;
};

export default CleaningVarityItem;
