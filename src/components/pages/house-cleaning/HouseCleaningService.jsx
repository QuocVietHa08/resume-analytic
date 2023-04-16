import React from 'react';

import CleaningVarity from '@/components/pages/office-cleaning/CleaningVarity';

const HOUSE_SERVICE = [
  {
    text: 'Post-Renovation Cleaning',
    img: '/img/house-cleaning/post-renovation',
    link: '/services/post-rennovation-cleaning',
    type: 'info',
  },
  {
    text: 'Move In/Move Out Cleaning',
    img: '/img/house-cleaning/move',
    link: '/services/move',
    type: 'info',
  },
  {
    text: 'Spring Cleaning',
    img: '/img/house-cleaning/spring',
    link: '/services/spring-cleaning',
    type: 'info',
  },
  {
    text: 'House Disinfection',
    img: '/img/house-cleaning/house-disinfection',
    link: '/services/house-disinfection',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
];

const HouseCleaningService = () => {
  return <CleaningVarity arrayList={HOUSE_SERVICE} title="House Cleaning Services" />;
};

export default HouseCleaningService;
