import React from 'react';
import styles from './styles.module.scss'
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const AIRCON_DETAIL = [
 'Reliable, punctual, trustworthy movers',
'Moving pads to prevent damages to your furniture and belongings',
'Movers trained how to move without damaging walls and floors',
'We will disassemble and reassemble all furniture that does not fit through doorways',
'We will disconnect and reconnect all washer and dryer units',
'Take apart bed frames and reassemble on arrival',
'Upon arrival of move will place furniture and boxes in desired locations',
]

const ACRCION_DETAIL2 = [
'Packing and unpacking services',
'Packing materials (boxes, packing paper, tape)',
'Antique handling',
'Additional movers',
'Warehouse storage',
'Safes (up to 800 lbs)',
'Pianos, including Grand and Baby Grand',
]


const MovingDetailService = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.airconServiceDetailContainer}>
      <div className={styles.serviceDetail}>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} text-left mb-30 mb-sp-20`}>General moving services include:</div>
          <div className="flex flex-column gap-30 gap-sp-20">
          {AIRCON_DETAIL.map((item) => (
            <div className={styles.airconItem} key={item}>
              <img
                src={`${
                  width > 779 ? '/img/office-cleaning/cleaning-detail/check.svg' : `/img/office-cleaning/cleaning-detail/check_sp.svg`
                }`}
                alt="img"
              />
              <span>{item}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={width > 1600 ? "/img/moving/intro.svg" : "/img/moving/intro_sp.svg"} alt="intro" />
      </div>

      <div className={`${styles.serviceDetailAignRight} mb-100 mb-sp-50 `}>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} text-left mb-30 mb-sp-20`}>Additional Services</div>

          <div className="flex flex-column gap-30 gap-sp-20">
          {ACRCION_DETAIL2.map((item) => (
            <div className={styles.airconItem} key={item}>
              <img
                src={`${
                  width > 779 ? '/img/office-cleaning/cleaning-detail/check.svg' : `/img/office-cleaning/cleaning-detail/check_sp.svg`
                }`}
                alt="img"
              />
              <span>{item}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingDetailService;
