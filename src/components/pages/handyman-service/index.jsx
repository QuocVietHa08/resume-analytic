import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '../service/IntroService';
import styles from './styles.module.scss';
import HandymanServiceDetail from './handymanDetail';
import Disclaimer from '../office-cleaning/Disclaimer';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import Work from '../home/Work';
import Testimonials from '../home/Testimonials';
import CleaningService from '../office-cleaning/CleaningService';
import Enquiry from '../home/Enquiry';
import Download from '../home/Download';

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

const HandymanService = () => {
  return (
    <div className={styles.handymanServiceContainer}>
      <IntroService title="General Handyman Services" />
      <div className="mt-sp-30 mt-50">
        <BreadCumbs pages={['Home', 'Service', 'General Handyman Service']} />
      </div>
      <HandymanServiceDetail />
      <div className="mt-150 mt-sp-20 mb-170 mb-sp-100">
        <Disclaimer />
      </div>
      <CleaningVarity arrayList={HANDYMAN_VARITY} />
      <Work />
      <Testimonials />
      <CleaningService title="General Handyman Services" />
      <Enquiry isShowBgImage={false} />
      <Download />
    </div>
  );
};

export default HandymanService;