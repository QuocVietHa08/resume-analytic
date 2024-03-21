import { useState } from 'react';
import { Button, Divider, Form, Input, notification } from 'antd';
import Link from 'next/link';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';
import styles from './styles.module.scss';

const Footer = () => {
  const width = useDetectWindowSize();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [formSub] = Form.useForm();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        {width > 768 && (
          <div className={styles.footerLinkInfo}>
            <div className={styles.quickLinks}>
              <div className={styles.headerText}>Quick Links</div>
              <div>
                <Link className={styles.footerQuickLinkStyle} href="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className={styles.footerQuickLinkStyle} href="/services">
                  Services
                </Link>
              </div>
              <div>
                <Link className={styles.footerQuickLinkStyle} href="/about-us">
                  About
                </Link>
              </div>
              <div>
                <Link className={styles.footerQuickLinkStyle} href="/testimonials">
                  Testimonials
                </Link>
              </div>
              <div>
                <Link className={styles.footerQuickLinkStyle} href="/faq">
                  FAQ
                </Link>
              </div>
              <div>
                <Link className={styles.footerQuickLinkStyle} href="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className={styles.info}>
              <div>
                <img src="/img/footer/email.svg" alt="Email Icon" />
                <a href="mailto:info@kungfuhelper.com.sg" className={`ml-15 ${styles.footerQuickLinkStyle}`}>
                  info@kungfuhelper.com.sg
                </a>
              </div>
              <div>
                <img src="/img/footer/phone.svg" alt="Phone Icon" />
                <a href="https://api.whatsapp.com/send/?phone=6588380909" className={`ml-15 ${styles.footerQuickLinkStyle}`}>
                  +6588380909
                </a>
              </div>
              <div className="flex item-flex-start">
                <img src="/img/footer/address.svg" alt="Address Icon" />
                <a
                  href="https://www.google.com/maps/place/KUNG+FU+HELPER+PTE+LTD/@1.4365609,103.8034316,17z/data=!3m2!4b1!5s0x31da13769bf4e5e7:0xd29bc5ae026f3d42!4m6!3m5!1s0x31da1317fba6bb1d:0x3f92bcb285eca85e!8m2!3d1.4365555!4d103.8060065!16s%2Fg%2F11p0bchdzm"
                  className={`ml-15 ${styles.footerQuickLinkStyle} `}
                >
                  31 Woodlands Close <br /> #03-10 Woodlands Horizon <br /> Singapore 737855
                </a>
              </div>
            </div>
            <div>
              <div className={styles.headerText}>Find Us On</div>
              <div className={styles.socialMediaWrapper}>
                <a href="https://www.facebook.com/profile.php?id=100092323458037">
                  <img src="/img/footer/facebook.svg" alt="Facebook Icon" />
                </a>
                <a href="https://www.tiktok.com/@kungfuhelpersg">
                  <img src="/img/footer/tiktok.svg" alt="Tiktok Icon" />
                </a>
                <a href="https://www.instagram.com/kungfuhelper1/">
                  <img src="/img/footer/insta.svg" alt="Insta Icon" />
                </a>
                <img src="/img/footer/lazada.svg" alt="Lazada Icon" />
                <img src="/img/footer/shopee.svg" alt="Shopee Icon" />
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
