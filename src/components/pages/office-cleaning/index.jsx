import React from 'react';
import Download from '../home/Download';
import Enquiry from '../home/Enquiry';
import Testimonials from '../home/Testimonials';
import styles from './styles.module.scss';
import CleaningDetail from './CleaningDetail';
import Disclaimer from './Disclaimer';
import CleaningVarity from './CleaningVarity';
import CleaningService from './CleaningService';
import Introduction from '../home/Introduction';

const CLEANING_VARITY = [
  {
    text: 'General Office Cleaning',
    img: '/img/office-cleaning/cleaing-variety/office-cleaning',
    link: '/office-cleaning',
    type: 'info',
  },
  {
    text: 'Office Disinfection',
    img: '/img/office-cleaning/cleaing-variety/office-dsinfection',
    link: '/office-disinfection',
    type: 'info',
  },
  {
    text: 'Unable to find the service you are looking for?',
    type: 'contact',
  },
];

const OfficeCleaning = () => {
  return (
    <div className={styles.officeCleaningContainer}>
      <Introduction imgSrc="/img/office-cleaning/banner" />
      <CleaningDetail />
      <Disclaimer />
      <div> 
        <CleaningVarity arrayList={CLEANING_VARITY} />
      </div>
      <Testimonials />
      <CleaningService title="General Office Cleaning Services" />
      <Enquiry isShowBgImage={false} />
      <Download />
    </div>
  );
};

export default OfficeCleaning;
