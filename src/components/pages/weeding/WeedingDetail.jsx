import React from 'react';
import styles from './styles.module.scss';
import DetailItem from './WeedingDetailItem';

const DETAILS = [
  {
    id: 1,
    imgSrc: '/img/landscaping/weeding/detail/icon1.svg',
    text: `Aesthetics: Regular weeding keeps your garden looking neat and well-maintained by removing unsightly \n weeds that can spoil the appearance of your landscape.`,
  },
  {
    id: 2,
    imgSrc: '/img/landscaping/weeding/detail/icon2.svg',
    text: `Plant health: Weeds can compete with your plants for nutrients, water, and sunlight, leading to stunted \n growth or even death. Weeding helps to ensure that your plants have the resources they need to thrive.`,
  },
  {
    id: 3,
    imgSrc: '/img/landscaping/weeding/detail/icon3.svg',
    text: `Pest control: Weeds can attract pests and serve as breeding grounds for insects that can damage your \n plants. Removing weeds can help to reduce the risk of pest infestations.`,
  },
  {
    id: 4,
    imgSrc: '/img/landscaping/weeding/detail/icon4.svg',
    text: `Soil health: Weeds can also alter the pH levels of your soil, making it less hospitable to your plants. \n Weeding helps to maintain the pH balance of your soil and ensure that it remains healthy and fertile.`,
  },
  {
    id: 5,
    imgSrc: '/img/landscaping/weeding/detail/icon5.svg',
    text: `Time-saving: Hiring a professional weeding service can save you time and effort by taking on the task of \n weeding your garden, freeing you up to focus on other activities or simply enjoy your outdoor space.`,
  },
];

const WeedingDetail = () => {
  return (
    <div className={styles.grassCuttingDetailWrapper}>
      <div className={styles.content}>
        Weeding can be a time-consuming and physically demanding task. Weeding involves removing unwanted plants or weeds from the garden,
        lawn or landscape beds. Without proper weeding, these unwanted plants can compete with other plants for nutrients, water and
        sunlight, leading to poor growth and health of the desired plants. Additionally, weeds can be unsightly and detract from the overall
        appearance of the garden or lawn. Hiring a weeding service can save time and energy, while also ensuring that the garden or lawn is
        healthy and beautiful.
      </div>
      <div className={styles.detailWrapper}>
        {DETAILS.map((item) => (
          <DetailItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WeedingDetail;
