import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DETAIL_LIST = [
  'Garden Design and Construction',
  'Planting schemes ',
  'Tree Removal ',
  'Paving, Patios ',
  'Fencing and Decking ',
  'Brickwork ',
  'Artificial Lawns ',
  'Turfing ',
  'Driveway Installation',
];

const LandscapingServiceDetail = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.poolCleaningDetailContainer}>
      <div>
        <img src={`${width > 779 ? '/img/landscaping/image.svg' : `/img/landscaping/image_sp.svg`}`} alt="img" />
      </div>
      <div>
        <p className={styles.poolingDes}>
          KungFu Helper provide All Solutions from one dedicated team <br /> Friendly customer service staff for your all questions! <br /> Our
          landscaping services include:
        </p>
        <div className="flex flex-column gap-30 gap-sp-10">
          {DETAIL_LIST.map((item) => (
            <div className={styles.poolingDetailContent} key={item}>
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
  );
};

export default LandscapingServiceDetail;
