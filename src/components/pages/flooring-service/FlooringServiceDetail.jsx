import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const FlooringServiceDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.airconServiceDetailContainer}>
      <div className={styles.serviceDetail}>
        <div>
          <img src={`${width > 779 ? '/img/flooring/image.svg' : `/img/flooring/image_sp.svg`}`} alt="img" />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} text-left mb-30 mb-sp-20`}>Flooring Jobs</div>
          <p>
            Our handyman team handles everything from repairs to grout cleaning and floor tear-out. whether you need help in the bathroom, kitchen, or living room, our professional team will arrive at your home with all the equipment required to get the job done effectively.
          </p>
        </div>
      </div>

      <div className={`${styles.serviceDetailAignRight} ${styles.marginLeftBaseOnWidth} mb-100 mb-sp-50  flex-reverse`}>
        <div>
          <img src={`${width > 779 ? '/img/aircon/image-detail2.svg' : `/img/aircon/image-detail2_sp.svg`}`} alt="img" />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} text-left mb-30 mb-sp-20`}>Floor Sanding & Floor Tiling</div>
          <p>
          Whether you are looking for full floor restoration, or in need of floor maintenance, the team is here to help you. Our team uses a wide range of highly effective equipment and techniques to restore your floor to its former glory and ensure that your floor always clean and safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlooringServiceDetail;
