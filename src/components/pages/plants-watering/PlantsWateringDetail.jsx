import React from 'react';
import styles from './styles.module.scss';
import DetailItem from './PlantWateringItem';

const DETAILS = [
  {
    id: 1,
    imgSrc: '/img/landscaping/plants-watering/detail/icon1.svg',
    text: `Healthy Plants: Regular watering keeps your plants healthy and prevents them from wilting or drying out. This \n promotes healthy growth and vibrant blooms.`,
  },
  {
    id: 2,
    imgSrc: '/img/landscaping/plants-watering/detail/icon2.svg',
    text: `Consistent Moisture: Plants need consistent moisture to thrive, and a professional watering service can ensure that \n they receive the right amount of water at the right time.`,
  },
  {
    id: 3,
    imgSrc: '/img/landscaping/plants-watering/detail/icon3.svg',
    text: `Time-Saving: If you have a busy schedule, it can be challenging to find time to water your plants regularly. \n A watering service can take care of this task for you, saving you time and hassle.`,
  },
  {
    id: 4,
    imgSrc: '/img/landscaping/plants-watering/detail/icon4.svg',
    text: `Expertise: Professional plant waterers have the knowledge and expertise to determine how much water each plant \n needs and when it needs it. They can also identify and address any potential issues before they become a problem.`,
  },
  {
    id: 5,
    imgSrc: '/img/landscaping/plants-watering/detail/icon5.svg',
    text: `Increased Property Value: Well-maintained plants and landscapes can increase the value of your property. Regular \n watering can help ensure that your plants look healthy and vibrant, which can attract potential buyers or renters.`,
  },
  {
    id: 6,
    imgSrc: '/img/landscaping/plants-watering/detail/icon6.svg',
    text: `Stress Reduction: Watering plants can be a relaxing and therapeutic activity, but it can also be stressful if you are \n not confident in your abilities. Hiring a professional can help alleviate this stress and give you peace of mind \n knowing that your plants are in good hands.`,

  }
];

const PlantWateringDetail = () => {
  return (
    <div className={styles.grassCuttingDetailWrapper}>
      <div className={styles.content}>
        Plants need consistent and adequate watering to thrive, and sometimes it can be challenging for individuals to maintain a regular watering schedule due to a busy lifestyle or lack of knowledge about plant care. Hiring a professional plant watering service can provide peace of mind that plants will receive the proper amount of water, helping them to stay healthy and vibrant. Additionally, plant watering services can help individuals maintain an aesthetically pleasing and welcoming environment, as plants can contribute to the overall ambiance and beauty of a space.
      </div>
      <div className={styles.detailWrapper}>
        {DETAILS.map((item) => (
          <DetailItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PlantWateringDetail;
