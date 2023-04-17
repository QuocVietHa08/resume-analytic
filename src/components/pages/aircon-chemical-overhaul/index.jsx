import React from 'react';
import Introduction from '../home/Introduction';
import Enquiry from '../home/Enquiry';
import Disclaimer from '../office-cleaning/Disclaimer';
import CleaningService from '../office-cleaning/CleaningService';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import AirconChemicalOverhaulDetail from './AirconChemicalOverhau';

const HANDYMAN_VARITY = [
  {
    text: 'AC Diagnostic Service',
    img: '/img/handyman-service/variety-service/handman',
    link: '/services/ac-diagnostic-service',
    type: 'info',
  },
  {
    text: 'General Servicing',
    img: '/img/handyman-service/variety-service/pool',
    link: '/services/general-servicing',
    type: 'info',
  },
  {
    text: 'Aircon Chemical Wash',
    img: '/img/handyman-service/variety-service/pest',
    link: '/services/aircon-chemical-wash',
    type: 'info',
  },
  {
    text: 'Aircon Chemical Overhaul',
    img: '/img/handyman-service/variety-service/moving',
    link: '/services/aircon-chemical-overhaul',
    type: 'info',
  },
  {
    text: 'Condenser Dry Cleaning',
    img: '/img/handyman-service/variety-service/landscaping',
    link: '/services/condenser-dry-cleaning',
    type: 'info',
  },
  {
    text: 'Air Filtration Installation',
    img: '/img/handyman-service/variety-service/flooring',
    link: '/services/air-filtration-installation',
    type: 'info',
  },
  {
    text: 'Gas Top Up',
    img: '/img/handyman-service/variety-service/organising',
    link: '/services/gas-top-up',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
]

const AirconChemicalOverhaul = () => {
  return (
    <>
      <Introduction imgSrc="/img/aircon/aircon-chemical-overhaul/banner" />
       <AirconChemicalOverhaulDetail />
      <Disclaimer />
      <CleaningVarity title="Aircon Services" arrayList={HANDYMAN_VARITY} />
      <CleaningService title="Aircon Services" /> 
      <Enquiry isShowBgImage={false} />
    </>
  )
}

export default AirconChemicalOverhaul