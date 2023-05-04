import React from 'react';
import styles from './styles.module.scss';

const HandymanServiceDetail = () => {

  return (
    <div className={styles.handymanServiceDetail}>
      <div className={`${styles.introText}`}>
      Kung Fu Handyman Services
      </div>
      <div className={styles.serviceDetail}>
        <div className={styles.serviceDetailContent}>
          <div className="font-size-24 font-size-sp-12 font-size-tb-16 text-inherit mb-50 mb-tb-30 mb-sp-20">Our team provides a wide range of house maintenance services, repair, improvement, and refurbishments.</div>
          <p className="line-height-40 line-height-sp-28 font-size-24 font-size-sp-12 font-size-tb-16">
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
