import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '../service/IntroService';
// import styles from './styles.module.scss';
import Disclaimer from '../office-cleaning/Disclaimer';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import Work from '../home/Work';
import Testimonials from '../home/Testimonials';
import CleaningService from '../office-cleaning/CleaningService';
import Enquiry from '../home/Enquiry';
import Download from '../home/Download';
import MovingDetailService from './MovingServiceDetail';
import Introduction from '../home/Introduction';

const VARITYS = [
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
    link: '/moving-services',
    type: 'info',
  },
  {
    text: 'Landscaping Services',
    img: '/img/handyman-service/variety-service/landscaping',
    link: '/landscaping-services',
    type: 'info',
  },
  {
    text: 'Flooring Services',
    img: '/img/handyman-service/variety-service/flooring',
    link: '/flooring-services',
    type: 'info',
  },
  {
    text: 'Organising Services',
    img: '/img/handyman-service/variety-service/organising',
    link: '/organising-services',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
];

const BREADCUMBS = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Services',
    link: '/service'
  },
  {
    text: 'Moving Services',
    link: ''
  }
]
const MovingService = () => {
  return (
    <div>
      {/* <IntroService title="Moving Services" /> */}
      {/* <BreadCumbs pages={BREADCUMBS} /> */}
      <Introduction imgSrc="/img/handy-home/moving/banner" />
      <MovingDetailService />
      <Disclaimer />
      <CleaningVarity title="Handy Home Services" arrayList={VARITYS}/>
      <Work />
      <Testimonials />
      <CleaningService title="Moving Services" />
      <Enquiry isShowBgImage={false}/>
      <Download />
    </div>
  )
}

export default MovingService