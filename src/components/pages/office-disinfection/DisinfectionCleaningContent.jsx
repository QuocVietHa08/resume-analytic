import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DISINFECTIONS = [
  {
    text: 'Desktops and work surfaces ',
    img: '/img/office-disinfection/detail-disinfection/desktop',
  },
  {
    text: 'Light switches, door handles and door plates',
    img: '/img/office-disinfection/detail-disinfection/door',
  },
  {
    text: 'Telephone equipment and photocopiers ',
    img: '/img/office-disinfection/detail-disinfection/phone',
  },
  {
    text: 'Computer keyboards and mouse ',
    img: '/img/office-disinfection/detail-disinfection/computer',
  },
  {
    text: 'Chairs ',
    img: '/img/office-disinfection/detail-disinfection/chairs',
  },
  {
    text: 'Toilets, taps, and dispensers',
    img: '/img/office-disinfection/detail-disinfection/taps',
  },
];

const DisinfectionCleaningContent = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.disinfectionCleaningContentContainer}>
      <div className={styles.des}>
        <p>
          Kung Fu Helper cleans all common touchpoints to ensure they are properly disinfected. Some of the most common touchpoints include:
        </p>
        <div className="flex flex-column gap-50 gap-sp-25">
          {DISINFECTIONS.map((item) => (
            <div key={item.text} className={styles.disinfectionItemWrapper}>
              <div className={styles.imageWrappers}>
              <img src={`${width > 779 ? `${item.img}.svg` : `${item.img}_sp.svg`}`} alt="img" />
              </div>
              <span className={styles.text}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default DisinfectionCleaningContent;
