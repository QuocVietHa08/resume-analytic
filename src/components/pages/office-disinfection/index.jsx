import React from 'react';
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
import Introduction from '../home/Introduction';

const CLEANING_VARITY = [
  {
    text: 'General Office Cleaning',
    img: '/img/office-cleaning/cleaing-variety/office-cleaning',
    link: '/office-cleaning',
    type: 'info'
  },
  {
    text: 'Office Dsinfection',
    img: '/img/office-cleaning/cleaing-variety/office-dsinfection',
    link: '/office-disinfection',
    type: 'info'
  }, {
    text: 'Unable to find the service you are looking for?',
    type: 'contact'
  }

]

const OfficeDisinfection = () => {
  return (
    <div className={styles.officeCleaningContainer}>
      <Introduction imgSrc="/img/office-disinfection/banner" />
      <DisinfectionDetail />
      <DisinfectionCleaningContent />
      <Disclaimer />
      <CleaningVarity arrayList={CLEANING_VARITY} />
      <Work />
      <Testimonials />
      <CleaningService title="Office Disinfection Services" />
      <Enquiry isShowBgImage={false} />
      <Download />
    </div>
  )
}

export default OfficeDisinfection