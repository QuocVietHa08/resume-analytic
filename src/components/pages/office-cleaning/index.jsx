
import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import Download from '../home/Download';
import Enquiry from '../home/Enquiry';
import Testimonials from '../home/Testimonials';
import IntroService from '../service/IntroService';
import styles from './styles.module.scss';
import CleaningDetail from './CleaningDetail';
import Disclaimer from './Disclaimer';
import CleaningVarity from './CleaningVarity';
import CleaningService from './CleaningService';

const CLEANING_VARITY = [
  {
    text: 'General Office Cleaning',
    img: '/img/office-cleaning/cleaing-variety/office-cleaning',
    type: 'info'
  },
  {
    text: 'Office Dsinfection',
    img: '/img/office-cleaning/cleaing-variety/office-dsinfection',
    type: 'info'
  }, {
    text: 'Unable to find the service you are looking for?',
    type: 'contact'
  }

]

const OfficeCleaning = () => {
  return (
    <div className={styles.officeCleaningContainer}>
      <IntroService title="General Office Cleaning" />
      <BreadCumbs pages={['Home', 'Service', 'General Office Cleaning']} />
      <CleaningDetail />
      <Disclaimer />
      <CleaningVarity arrayList={CLEANING_VARITY} />
      <Testimonials />
      <CleaningService />
      <Enquiry isShowBgImage={false} />
      <Download />
    </div>
  )
}

export default OfficeCleaning;