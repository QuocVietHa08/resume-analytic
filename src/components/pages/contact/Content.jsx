import React from 'react';
import styles from './styles.module.scss';
import SidebarMap from './SidebarMap';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';
import GoogleMapComponent from "./Map"

const Content = () => {
  const width = useDetectWindowSize();
  return (
    <div className={styles.contactContentContainer}>
      <div className={styles.contactAddress}>
        <div className={styles.googleMapWrapper}>
          <SidebarMap />
          <GoogleMapComponent />
        </div>
        <div className={styles.contactInfoCard}>
          <section>
            <img src={`${width > 780 ? `/img/contact/phone.svg` : `/img/contact/phone_sp.svg`}`} alt="item" />
            <p>Contact No.</p>
            <span>
              <a className="color-black font-size-sp-12" href="https://api.whatsapp.com/send/?phone=6588380909">
                +65 8838 0909
              </a>
              .
            </span>
          </section>

          <section>
            <img src={`${width > 780 ? `/img/contact/email.svg` : `/img/contact/email_sp.svg`}`} alt="item" />
            <p>Email Address</p>
            <a className="text-underline font-size-sp-12 color-black" href="mailto:info@kungfuhelper.com.sg">info@kungfuhelper.com.sg</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;
