import React from 'react';
import styles from './styles.module.scss';
import BreadCumbs from '@/components/atoms/breadcumbs';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';
import GoogleMapComponent from "./Map"

// const BREADCUMBS = [
//   {
//     text: 'Home',
//     link: '/',
//   },
//   {
//     text: 'Contact Us',
//     link: '',
//   },
// ];
const Content = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.contactContentContainer}>
      {/* <BreadCumbs pages={BREADCUMBS} /> */}
      <div className={styles.contactAddress}>
        <div className={styles.googleMapWrapper}>
          <GoogleMapComponent />
        </div>
        {/* <img src={`${width > 780 ? `/img/contact/map.svg` : `/img/contact/map_sp.svg`}`} alt="item" /> */}
        <div className={styles.contactInfoCard}>
          <section>
            <img src={`${width > 780 ? `/img/contact/phone.svg` : `/img/contact/phone_sp.svg`}`} alt="item" />
            <p>Contact No.</p>
            <span>
              <a className="color-black" href="https://api.whatsapp.com/send/?phone=6588380909">
                +65 8838 0909
              </a>
              .
            </span>
          </section>

          <section>
            <img src={`${width > 780 ? `/img/contact/email.svg` : `/img/contact/email_sp.svg`}`} alt="item" />
            <p>Email Address</p>
            <span className="text-underline">info@kungfuhelper.com.sg</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;
