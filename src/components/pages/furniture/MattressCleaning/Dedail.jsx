import React from 'react';
import styles from '../styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const DETAIL_LIST = [
  {
    imgSrc: '/img/furniture/bug',
    title: 'Remove dust mites',
    text: `Dust mites are one of the common causes of allergies and asthma and can be very difficult to eliminate. However fret not, as KungFu helper team will enhance your home’s healthy environment, and remove potential threats that will harm your family with our mattress cleaning service.`,
  },
  {
    imgSrc: '/img/furniture/smoke',
    title: 'Eliminating odour and stains',
    text: `Is your mattress stained by food or full of pet odour? KungFu helper utilises detergents that can remove stubborn stains and odour that troubles you.
Restore your mattress like new.`,
  },
  {
    imgSrc: '/img/furniture/earth',
    title: 'Environmentally friendly cleaning methods',
    text: `All of our cleaning products and methods are environmentally friendly, they do not contain harmful chemicals and are safe to use on all types of mattresses.`,
  },
  {
    imgSrc: '/img/furniture/user',
    title: 'Experienced cleaning professionals',
    text: 'Our team cleaners are all well-trained and certified with assured professionalism. Backed by years of field experience and knowledge in the industry and undergo regular quality control checks.',
  },
  {
    imgSrc: '/img/furniture/bed',
    title: 'Cleaning all types of mattresses',
    text: `We have cleaned countless of mattresses regardless of its size and type. From memory foam bed pieces to spring mattresses, we know what’s the best cleaning approach and can easily tailor the service according to your needs.`,
  },
];

const Detail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.airconServiceDetailContainer}>
      <div className={`${styles.introText} mt-100 mb-150 mt-sp-40 mb-sp-40`}>
        Feel your mattress as good as new, safety checklist with kids, pets, and the environment in mind
      </div>
      <div className={styles.serviceDetail}>
        <div className={`${styles.serviceDetailContent} margin-center`}>
          <div className={`${styles.introTextDetail} text-left mb-30 mb-sp-20`}>
            Top 5 reasons to trust us with your mattress cleaning needs
          </div>
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
