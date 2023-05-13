import React from 'react';
import Introduction from '../home/Introduction';
import Disclaimer from '../office-cleaning/Disclaimer';
import GrassCuttingDetail from './GrassCuttingDetail';
import Work from '../home/Work';
import Enquiry from '../home/Enquiry';
import styles from './styles.module.scss';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import CleaningService from '../office-cleaning/CleaningService';

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
    link: '/services/flooring-services',
    type: 'info',
  },
  {
    text: 'Plants Watering',
    img: '/img/landscaping/grass-cutting/variety/icon5',
    link: '/services/plants-watering',
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

const GrassCutting = () => {
  return (
    <div>
      <Introduction imgSrc="/img/landscaping/grass-cutting/banner" />
      <GrassCuttingDetail />      
      <Disclaimer />
      <CleaningVarity title="Landscaping Services" arrayList={VARITYS} />
      <div className={styles.workContainer}>
        <Work />
      </div>
      <CleaningService title="General Handyman Services" />
      <Enquiry />
    </div>
  )
}

export default GrassCutting