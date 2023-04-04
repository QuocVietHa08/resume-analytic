import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import Download from '../home/Download';
import Enquiry from '../home/Enquiry';
import Testimonials from '../home/Testimonials';
import Work from '../home/Work';
import CleaningService from '../office-cleaning/CleaningService';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import Disclaimer from '../office-cleaning/Disclaimer';
import IntroService from '../service/IntroService';
import Detail from './Detail';

const VARITYS = [
  {
    text: 'General Handyman Services',
    img: '/img/handyman-service/variety-service/handman',
    link: '/handyman-service',
    type: 'info',
  },
  {
    text: 'Aircon Servicing',
    img: '/img/handyman-service/variety-service/aircon',
    link: '/aircon-service',
    type: 'info',
  },
  {
    text: 'Pool Cleaning',
    img: '/img/handyman-service/variety-service/pool',
    link: '/pool-cleaning',
    type: 'info',
  },
  {
    text: 'Pest Control',
    img: '/img/handyman-service/variety-service/pest',
    link: '/pest-control',
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
    text: 'Flooring Services',
    link: ''
  }
]
const FlooringService = () => {
  return (
    <div>
      <IntroService title="Flooring Services" />
      <BreadCumbs pages={BREADCUMBS} />
      <Detail />
      <Disclaimer />
      <CleaningVarity title="Handy Home Services" arrayList={VARITYS}/>
      <Work />
      <Testimonials />
      <CleaningService title="Flooring Services" />
      <Enquiry isShowBgImage={false}/>
      <Download />
    </div>
  )
}

export default FlooringService;