import React from 'react';
import styles from '../styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DETAIL_LIST = [
  {
    imgSrc: '/img/furniture/calendar',
    title: 'Certified carpet cleaner',
    text: 'Send an inquiry to us and our team will arrange a time and day that suits you best.',
  },
  {
    imgSrc: '/img/furniture/user',
    title: 'Same-day and full weekly availability',
    text: 'Our carpet cleaners have all been through training and have in-depth knowledge of carpet cleaning solutions.',
  },
  {
    imgSrc: '/img/furniture/machine',
    title: 'Professional carpet machines',
    text: 'Our team uses professional equipment for carpet cleaning, assuring you amazing results after the services.',
  },
  {
    imgSrc: '/img/furniture/clean',
    title: 'Removing stains',
    text: 'Stains that are caused by food and drinks are no issue to KungFu helper, your carpets might look almost as good as new after our service.',
  },
  {
    imgSrc: '/img/furniture/like',
    title: 'Amazing end result for all carpets and rugs',
    text: 'Carpets can be very different from one another, KungFu helper are capable to clean all types of fabrics with their field experience and expertise knowledge.',
  },
];

const Detail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.airconServiceDetailContainer}>
      <div className={`${styles.introText} mt-100 mb-150 mt-sp-40 mb-sp-40`}>
        Feel your carpet as good as new, safety checklist with kids, pets, and the environment in mind
      </div>
      <div className={styles.serviceDetail}>
        <div>
          <img
            src={`${width > 779 ? '/img/furniture/carpet-cleaning-intro.png' : '/img/furniture/carpet-cleaning-intro_sp.png'}`}
            alt="img"
          />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introTextDetail} text-left mb-30 mb-sp-20`}>KungFu Helper carpet cleaning service</div>
          <div className="flex flex-column gap-30 gap-sp-10">
            {DETAIL_LIST.map((item) => (
              <div className={styles.poolingDetailContent} key={item}>
                <img src={`${width > 779 ? `${item.imgSrc}.svg` : `${item.imgSrc}.svg`}`} alt="img" />
                <div>
                  <div className={styles.poolingDetailTitle}>{item.title}</div>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.serviceBottom} />
    </div>
  );
};

export default Detail;
