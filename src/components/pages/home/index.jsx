import React from 'react'
import Introduction from './Introduction';
import ServiceFix from './ServiceFix';
import Work from './Work';
import Helper from './Helper';
// import Certification from './Certification';
import Testimonials from './Testimonials';
import Enquiry from './Enquiry';
import styles from './styles.module.scss';

const Home = () => {
  const imageSrc = "/img/home/intro/banner"
  return <div>
    <Introduction imgSrc={imageSrc}/>
    <ServiceFix />
    <Work />
    <Helper />
    {/* <Certification /> */}
    <Testimonials />
    <div className={styles.enquiryWrapperContainer}>
      <Enquiry />
    </div>
  </div>
}

export default Home;