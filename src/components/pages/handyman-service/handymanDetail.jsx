import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const HandymanServiceDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className={`${styles.introText} mt-100 mb-150 mt-sp-40 mb-sp-40`}>
        Our team provides a wide range of house maintenance services, repair, improvement, and refurbishments.
      </div>
      <div className={styles.serviceDetail}>
        <div>
          <img src={`${width > 779 ? '/img/handyman-service/intro-image.svg' : `/img/handyman-service/intro-image_sp.svg`}`} alt="img" />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} text-inherit mb-sp-20`}>Kung Fu Handyman Services</div>
          <p className="line-height-40 line-height-sp-28">
            From in-and-out handyman jobs such as wallpaper hanging, roller blind fitting, curtain hanging, changing switches, and picture
            hanging to larger projects such as repairs to plasterboard walls, bathroom renovation, kitchen fitting, and flooring
            installation - We can do it all. We also offer a variety of handyman services for seniors, including installation of grab bars,
            widening of doorways, installation of guardrails and handrails, and more.
          </p>
        </div>
      </div>

    </div>
  );
};

export default HandymanServiceDetail;
