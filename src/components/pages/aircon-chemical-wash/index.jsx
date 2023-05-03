import React from 'react';
import Introduction from '../home/Introduction';
import Enquiry from '../home/Enquiry';
import Disclaimer from '../office-cleaning/Disclaimer';
import CleaningService from '../office-cleaning/CleaningService';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import AirconChemicalWashDetail from './AirconChemicalWash';

const AIRCON_VARITY = [
  {
    text: 'AC Diagnostic Service',
    img: '/img/aircon/ac-diagnostic/icon',
    link: '/services/ac-diagnostic-service',
    type: 'info',
  },
  {
    text: 'General Servicing',
    img: '/img/aircon/general-servicing/icon',
    link: '/services/general-servicing',
    type: 'info',
  },
  {
    text: 'Aircon Chemical Wash',
    img: '/img/aircon/aircon-chemical-wash/icon',
    link: '/services/aircon-chemical-wash',
    type: 'info',
  },
  {
    text: 'Aircon Chemical Overhaul',
    img: '/img/aircon/aircon-chemical-overhaul/icon',
    link: '/services/aircon-chemical-overhaul',
    type: 'info',
  },
  {
    text: 'Condenser Dry Cleaning',
    img: '/img/aircon/condenser-dry-cleaning/icon',
    link: '/services/condenser-dry-cleaning',
    type: 'info',
  },
  {
    text: 'Air Filtration Installation',
    img: '/img/aircon/air-filtration/icon',
    link: '/services/air-filtration-installation',
    type: 'info',
  },
  {
    text: 'Gas Top Up',
    img: '/img/aircon/gas-top-up/icon',
    link: '/services/gas-top-up',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
]

const AirconChemicalWash = () => {
  return (
    <>
      <Introduction imgSrc="/img/aircon/aircon-chemical-wash/banner" />
       <AirconChemicalWashDetail />
      <Disclaimer />
      <CleaningVarity title="Aircon Services" arrayList={AIRCON_VARITY} />
      <CleaningService title="Aircon Services" /> 
      <Enquiry isShowBgImage={false} />
    </>
  )
}

export default AirconChemicalWash