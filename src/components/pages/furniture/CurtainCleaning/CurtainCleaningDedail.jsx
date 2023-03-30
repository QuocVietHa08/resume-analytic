import React from 'react';
import styles from '../styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DETAIL_LIST = [
  'Remove dirt, bacteria and allergens',
  'Remove stains and eliminate odours',
  'Refresh the appearance of your curtains and blinds',
  'Prolong the life of your curtains',
  'Apply long-lasting protection',
];

const Detail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.airconServiceDetailContainer}>
      <div className={`${styles.introText} mt-100 mb-150 mt-sp-40 mb-sp-40`}>
        Feel your curtain as good as new, safety checklist with kids, pets, and the environment in mind
      </div>
      <div className={styles.serviceDetail}>
        <div>
          <img
            src={`${width > 779 ? '/img/furniture/curtain-cleaning-intro-1.png' : '/img/furniture/curtain-cleaning-intro-1_sp.png'}`}
            alt="img"
          />
        </div>
        <div className={styles.serviceDetailContent}>
          <p>
            Based on the age and material of the curtains, our team will carry out the cleaning of hung curtains with the best possible
            solutions to ensure that delicate fabrics are not damaged. We use specialist dry curtain cleaning solutions to remove dirt and
            stains in situ, so there is no need to take down the curtain. We clean all types of fabrics and where necessary will undertake a
            colour test prior to cleaning.
          </p>
        </div>
      </div>

      <div className={`${styles.serviceDetailAignRight} ${styles.marginLeftBaseOnWidth} mb-100 mb-sp-50  flex-reverse`}>
        <div>
          <img
            src={`${width > 779 ? '/img/furniture/curtain-cleaning-intro-2.png' : '/img/furniture/curtain-cleaning-intro-2_sp.png'}`}
            alt="img"
          />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introTextDetail} text-left mb-30 mb-sp-20`}>Benefits of curtain cleaning</div>
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
    </div>
  );
};

export default Detail;
