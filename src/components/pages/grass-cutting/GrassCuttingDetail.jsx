import React from 'react';
import styles from './styles.module.scss';
import DetailItem from './DetailItem';

const DETAILS = [
  { 
    id: 1,
    imgSrc: "/img/landscaping/grass-cutting/detail/icon1.svg",
    text: `Saves time and effort: Hiring a professional lawn care service saves you the time and effort \n of maintaining your lawn yourself.`
  },
  {
    id: 2,
    imgSrc: "/img/landscaping/grass-cutting/detail/icon2.svg",
    text: `Consistent results: Professional lawn care services have the expertise and equipment needed to ensure \n a consistently well-maintained lawn.`
  },
  {
    id: 3,
    imgSrc: "/img/landscaping/grass-cutting/detail/icon3.svg",
    text: `Improves curb appeal: A well-maintained lawn can significantly improve the appearance and value \n of your home.`
  },
  {
    id: 4,
    imgSrc: "/img/landscaping/grass-cutting/detail/icon4.svg",
    text: `Promotes healthy growth: Regular lawn maintenance, including grass cutting, can help promote healthy \n growth and prevent lawn diseases and pests.`
  },
  {
    id: 5,
    imgSrc: "/img/landscaping/grass-cutting/detail/icon5.svg",
    text: `Safety: Professional lawn care services have the proper safety equipment and training to ensure safe \n and efficient lawn maintenance.`
  }
]

const GrassCuttingDetail = () => {
  return (
    <div className={styles.grassCuttingDetailWrapper}>
      <div className={styles.content}>With a busy schedule, it can be challenging to find the time to mow the lawn regularly. Hiring a professional lawn care service can help ensure that the lawn is well-maintained, lush, and healthy. Additionally, a well-kept lawn adds curb appeal to the home, increasing its value and making it more inviting to guests. Professional lawn care services have the necessary equipment and expertise to keep the lawn in top condition, including cutting the grass to the appropriate height, fertilizing, and ensuring proper irrigation. Overall, a home grass cutting service can provide convenience, aesthetic appeal, and a healthy, thriving lawn.</div>
      <div className={styles.detailWrapper}>
          {DETAILS.map((item) => (
            <DetailItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}


export default GrassCuttingDetail