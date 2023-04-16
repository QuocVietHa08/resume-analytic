import React from 'react';
import styles from './styles.module.scss';
import Disclaimer from '../office-cleaning/Disclaimer';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import Work from '../home/Work';
import Testimonials from '../home/Testimonials';
import CleaningService from '../office-cleaning/CleaningService';
import Enquiry from '../home/Enquiry';
import Download from '../home/Download';
import PestControlDetail from './PestControlDetail';
import Introduction from '../home/Introduction';


const HANDYMAN_VARITY = [
  {
    text: 'General Handyman Services',
    img: '/img/handyman-service/variety-service/handman',
    link: '/services/general-handyman-services',
    type: 'info',
  },
  {
    text: 'Pool Cleaning',
    img: '/img/handyman-service/variety-service/pool',
    link: '/services/pool-cleaning',
    type: 'info',
  },
  {
    text: 'Pest Control',
    img: '/img/handyman-service/variety-service/pest',
    link: '/services/pest-control',
    type: 'info',
  },
  {
    text: 'Moving Services',
    img: '/img/handyman-service/variety-service/moving',
    link: '/services/moving-services',
    type: 'info',
  },
  {
    text: 'Landscaping Services',
    img: '/img/handyman-service/variety-service/landscaping',
    link: '/services/landscaping-services',
    type: 'info',
  },
  {
    text: 'Flooring Services',
    img: '/img/handyman-service/variety-service/flooring',
    link: '/services/flooring-services',
    type: 'info',
  },
  {
    text: 'Organising Services',
    img: '/img/handyman-service/variety-service/organising',
    link: '/services/organising-services',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
];

const PestControl = () => {
  return (
    <div className={styles.pestControlContainer}>
      <Introduction imgSrc="/img/handy-home/pest-control/banner" />
      <PestControlDetail />
      <Disclaimer />
      <CleaningVarity title="Handy Home Services" arrayList={HANDYMAN_VARITY} />
      <Work />
      <Testimonials />
      <CleaningService title="Pest Control Services" />
      <Enquiry isShowBgImage={false} />
      <Download />
    </div>
  )
}

export default PestControl