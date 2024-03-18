import React from 'react';
import styles from './styles.module.scss';
import DetailItem from './TreePruningItem';

const DETAILS = [
  {
    id: 1,
    imgSrc: '/img/landscaping/tree-pruning/detail/icon1.svg',
    text: `Promotes healthy growth: Pruning helps remove damaged, diseased or dead branches that can impact \n the tree's overall health, allowing it to grow more vigorously.`,
  },
  {
    id: 2,
    imgSrc: '/img/landscaping/tree-pruning/detail/icon2.svg',
    text: `Enhances appearance: Proper pruning can improve the tree's aesthetic appeal by removing overgrown or \n unsightly branches, making it look more attractive.`,
  },
  {
    id: 3,
    imgSrc: '/img/landscaping/tree-pruning/detail/icon3.svg',
    text: `Increases safety: Removing weak or damaged branches can reduce the risk of falling limbs and debris, \n making the area safer for people and property.`,
  },
  {
    id: 4,
    imgSrc: '/img/landscaping/tree-pruning/detail/icon4.svg',
    text: `Increases sun exposure: Pruning can thin out dense foliage, allowing more sunlight to penetrate the canopy \n and reach the ground, promoting the growth of grass, shrubs, and other plants.`,
  },
  {
    id: 5,
    imgSrc: '/img/landscaping/tree-pruning/detail/icon5.svg',
    text: `Improves fruit production: Pruning fruit trees can encourage them to produce larger and more abundant fruit, \n as well as improve their shape and structure.`,
  },
  {
    id: 6,
    imgSrc: '/img/landscaping/tree-pruning/detail/icon6.svg',
    text: `Reduces pests and diseases: Pruning can also help prevent the spread of pests and diseases by removing \n affected branches and promoting better air circulation.`,

  }
];

const TreePruningDetail = () => {
  return (
    <div className={styles.grassCuttingDetailWrapper}>
      <div className={styles.content}>
        Regular pruning can promote healthy growth by removing dead or diseased branches, allowing for more sunlight and air circulation, and reducing the risk of damage from storms. Additionally, pruning can improve the appearance of trees by shaping them and enhancing their natural beauty. Pruning can also help prevent trees from obstructing views, damaging structures, or interfering with power lines, making it a necessary service for homeowners who want to maintain a safe and beautiful outdoor environment.
      </div>
      <div className={styles.detailWrapper}>
        {DETAILS.map((item) => (
          <DetailItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TreePruningDetail;
