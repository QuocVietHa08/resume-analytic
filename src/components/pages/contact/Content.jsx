import React from 'react';
import styles from './styles.module.scss';
import BreadCumbs from '@/components/atoms/breadcumbs';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Content = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.contactContentContainer}>
      <BreadCumbs pages={['Home', 'Contact Us']} links={['/']}/>
      <div className={styles.contactAddress}>
        <img src={`${width > 780 ? `/img/contact/map.svg` : `/img/contact/map_sp.svg`}`} alt="item" />
        <div className={styles.contactInfoCard}>
          <section>
              <img src={`${width > 780 ? `/img/contact/phone.svg` : `/img/contact/phone_sp.svg`}`} alt="item" />
              <p>Contact No.</p>
              <span>+6588380909</span>
          </section>

          <section>
              <img src={`${width > 780 ? `/img/contact/email.svg` : `/img/contact/email_sp.svg`}`} alt="item" />
              <p>Email Address</p>
              <span className="text-underline">info@kungfuhelper.com.sg</span>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Content