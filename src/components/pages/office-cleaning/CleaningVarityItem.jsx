import React, { useState } from 'react';
import { useRouter  } from 'next/router';
import Link from 'next/link';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const CleaningVarityItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
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

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    return (
      <div className={styles.itemContent} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href={item.link} className="h-full flex flex-column justify-between">
          <div className={styles.itemImageWrapper}>
            <img src={`${width > 768 ? `${isHovered ? `${item.img}_active`: item.img}.svg` : `${item.img}_sp.svg`}`} className={styles.itemImage} alt="cleaning" />
          </div>
          <div className="h-50pr font-size-tb-20 flex flex-column justify-between">
          <p className="font-size-tb-16">{item.text}</p>
          <span className={styles.findMore}>
            <div className="color-primary font-size-tb-16 item-center item-sp-unset font-size-sp-12 text-bold flex gap-10">
              <p className="mb-0"> 
                {router.route === "/services/part-time-helper" ? "View Services" : "Find out more"}
              </p>
              <span>
                <img src={`/img/home/service/${isHovered ? 'arrow_active': 'arrow'}.svg`} alt="arrow" />
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
