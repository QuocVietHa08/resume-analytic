import React from 'react';

import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '../service/IntroService';
import styles from './styles.module.scss';
import DisinfectionDetail from './DisinfectionDetail';
import Disclaimer from '../office-cleaning/Disclaimer';
import CleaningVarity from '../office-cleaning/CleaningVarity';
import Testimonials from '../home/Testimonials';
import Work from '../home/Work';
import CleaningService from '../office-cleaning/CleaningService';
import Enquiry from '../home/Enquiry';
import Download from '../home/Download';
import DisinfectionCleaningContent from './DisinfectionCleaningContent';

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

const OfficeDisinfection = () => {
  return (
    <div className={styles.officeCleaningContainer}>
      <IntroService title="Office Disinfection" />
      <BreadCumbs pages={['Home', 'Services', 'Office Disinfection']} />
      <DisinfectionDetail />
      <DisinfectionCleaningContent />
      <Disclaimer />
      <CleaningVarity arrayList={CLEANING_VARITY} />
      <Work />
      <Testimonials />
      <CleaningService />
      <Enquiry isShowBgImage={false} />
      <Download /> 
    </div>
  )
}

export default OfficeDisinfection