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

const BREADCUMBS = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Services',
    link: '/service'
  },
  {
    text: 'Office Disinfection',
    link: ''
  }
]

const OfficeDisinfection = () => {
  return (
    <div className={styles.officeCleaningContainer}>
      {/* <IntroService title="Office Disinfection" /> */}
      {/* <div className="mt-sp-30 mt-90">
        <BreadCumbs pages={BREADCUMBS} />
      </div> */}
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