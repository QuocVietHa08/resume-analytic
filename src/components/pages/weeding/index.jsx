import React from 'react';
import Introduction from '../home/Introduction';
import Disclaimer from '../office-cleaning/Disclaimer';
import Work from '../home/Work';
import Enquiry from '../home/Enquiry';
import styles from './styles.module.scss';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import CleaningService from '../office-cleaning/CleaningService';
import Testimonials from '../home/Testimonials';
import WeedingDetail from './WeedingDetail';

const VARITYS = [
  {
    text: 'Grass Cutting',
    img: '/img/landscaping/grass-cutting/variety/icon1',
    link: '/services/grass-cutting',
    type: 'info',
  },
  {
    text: 'Shrubs and Plants Trimming',
    img: '/img/landscaping/grass-cutting/variety/icon2',
    link: '/services/shrubs-and-plants-trimming',
    type: 'info',
  },
  {
    text: 'Weeding',
    img: '/img/landscaping/grass-cutting/variety/icon3',
    link: '/services/weeding',
    type: 'info',
  },
  {
    text: 'Tree Pruning (Below 3m)',
    img: '/img/landscaping/grass-cutting/variety/icon4',
    link: '/services/tree-pruning',
    type: 'info',
  },
  {
    text: 'Plants Watering',
    img: '/img/landscaping/grass-cutting/variety/icon5',
    link: '/services/moving-services',
    type: 'info',
  },
  {
    text: 'Insecticide Spraying',
    img: '/img/landscaping/grass-cutting/variety/icon6',
    link: '/services/insecticide-spraying',
    type: 'info',
  },  
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
]

const Weeding = () => {
  return (
    <div className={styles.shrubPlantsContainer}>
      <Introduction imgSrc="/img/landscaping/weeding/banner" />
      <WeedingDetail />
      <Disclaimer />
      <CleaningVarity title="Landscaping Services" arrayList={VARITYS} />
      <div className={styles.workContainer}>
        <Work />
      </div>
      <div className={styles.testimonialsContainer}>
       <Testimonials />
      </div>
      <CleaningService title="General Handyman Services" />
      <Enquiry />
    </div>
  )
}

export default Weeding