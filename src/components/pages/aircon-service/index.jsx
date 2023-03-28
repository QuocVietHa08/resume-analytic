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
import styles from './styles.module.scss';
import AirconDetail from './airconDetail';

const HANDYMAN_VARITY = [
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

const AirconService = () => {
  return (
    <div className={styles.airconServiceContainer}>
      <IntroService title="Aircon Service" />
      <div className="mt-sp-30 mt-50">
        <BreadCumbs pages={['Home', 'Services', 'Aircon Servicing']} />
      </div>
      <AirconDetail />
      <Disclaimer />
      <CleaningVarity arrayList={HANDYMAN_VARITY} />
      <Work />
      <Testimonials />
      <CleaningService title="Aircon Servicing"/>
      <Enquiry isShowBgImage={false} />
      <Download />
    </div>
  )
}

export default AirconService;