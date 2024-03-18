import React from 'react';
import styles from './styles.module.scss';
import DetailItem from './ShrubPlantsItem';

const DETAILS = [
  { 
    id: 1,
    imgSrc: "/img/landscaping/scrubs-plants/detail/icon1.svg",
    text: `Saves time and effort: Hiring a professional lawn care service saves you the time and effort \n of maintaining your lawn yourself.`
  },
  {
    id: 2,
    imgSrc: "/img/landscaping/scrubs-plants/detail/icon2.svg",
    text: `Consistent results: Professional lawn care services have the expertise and equipment needed to ensure \n a consistently well-maintained lawn.`
  },
  {
    id: 3,
    imgSrc: "/img/landscaping/scrubs-plants/detail/icon3.svg",
    text: `Improves curb appeal: A well-maintained lawn can significantly improve the appearance and value \n of your home.`
  },
  {
    id: 4,
    imgSrc: "/img/landscaping/scrubs-plants/detail/icon4.svg",
    text: `Promotes healthy growth: Regular lawn maintenance, including grass cutting, can help promote healthy \n growth and prevent lawn diseases and pests.`
  },
  {
    id: 5,
    imgSrc: "/img/landscaping/scrubs-plants/detail/icon5.svg",
    text: `Safety: Professional lawn care services have the proper safety equipment and training to ensure safe \n and efficient lawn maintenance.`
  }
]

const ShrubPlants = () => {
  return (
    <div className={styles.grassCuttingDetailWrapper}>
      <div className={styles.content}>Shrubs and Plants Trimming service can help to enhance the appearance of your garden and maintain the health of your plants. Regular trimming can promote new growth and improve the overall shape and structure of your shrubs and plants. Trimming also prevents overgrowth, which can lead to the blocking of walkways, windows, or other areas. Professional trimming services have the expertise and tools to perform precise cuts and shape your plants according to your preferences, creating a visually appealing and tidy garden. Additionally, trimming can remove diseased or damaged parts of plants, preventing the spread of diseases and ensuring the health and longevity of your garden.</div>
      <div className={styles.detailWrapper}>
          {DETAILS.map((item) => (
            <DetailItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}


export default ShrubPlants