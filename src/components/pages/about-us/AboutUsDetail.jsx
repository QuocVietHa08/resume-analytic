import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const AboutUsDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className="pb-100 pb-sp-0">
      <div className={styles.aboutUsDetailContainer}>
      <div className={styles.imageWrapper}>
          <img src={`${width > 779 ? '/img/about-us/detail/banner1.svg' : `/img/about-us/detail/banner1_sp.svg`}`} alt="img" />
        </div>
        <div className={styles.descWrapper}>
          <h3 className="text-font-family">Our Story</h3>
          <p>
            Established in late 2017, KungFu Helper consists of an experienced work force that is committed to provide unmatched values and
            services to support its business partners.
          </p>
          <p>
            KungFu Helper is dedicated to creating cost effective and innovative solutions that enhances productivity and reduce operational
            costs.
          </p>
          <p>We are here to understand your requirements and to match a carefully balanced solution that satisfies your expectations!</p>
        </div>
       
      </div>

      <div className={styles.aboutUsDetailContainer}>
        <div className={styles.imageWrapper}>
          <img src={`${width > 779 ? '/img/about-us/detail/banner2.svg' : `/img/about-us/detail/banner2_sp.svg`}`} alt="img" />
        </div>
        <div className={`${styles.descWrapper} mt-50 mt-sp-20`}>
          <span className="text-font-family">
            Your <h3 className="text-font-family">Satisfaction</h3>, Our <h3 className="text-font-family">Promise</h3>
          </span>
          <p>
            We take pride in your satisfaction. If you are unsatisfied, we will always try make it right. Our friendly customer service
            agents are always here to provide assistance. Before, during, and after you make a booking with us, our customer service
            personnel will always be delighted to help you in any way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetail;
