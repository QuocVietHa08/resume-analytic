import React from 'react';

import CleaningVarity from '@/components/pages/office-cleaning/CleaningVarity';

const FUNITURE_SERVICE = [
  {
    text: 'Curtain Cleaning',
    img: '/img/furniture/curtain-cleaning',
    link: '/furniture/curtain-cleaning',
    type: 'info',
  },
  {
    text: 'Carpet Cleaning',
    img: '/img/furniture/carpet-cleaning',
    link: '/furniture/carpet-cleaning',
    type: 'info',
  },
  {
    text: 'Sofa Cleaning',
    img: '/img/furniture/sofa-cleaning',
    link: '/furniture/sofa-cleaning',
    type: 'info',
  },
  {
    text: 'Mattress Cleaning',
    img: '/img/furniture/mattress-cleaning',
    link: '/furniture/mattress-cleaning',
    type: 'info',
  },
  {
    text: 'Upholstery Cleaning',
    img: '/img/furniture/upholstery-cleaning',
    link: '/furniture/upholstery-cleaning',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
];

const FurnitureUpholsteryService = () => {
  return <CleaningVarity arrayList={FUNITURE_SERVICE} title="Furniture & Upholstery" />;
};

export default FurnitureUpholsteryService;
