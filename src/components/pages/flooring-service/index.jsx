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

const FlooringService = () => {
  return (
    <div>
      <Introduction imgSrc="/img/handy-home/flooring/banner" />
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