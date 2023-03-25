import { Button, Divider, Input } from 'antd';
import Link from 'next/link';

import useDetectWindowSize from '@/hooks/useDetectWindowSize';
import styles from './styles.module.scss';

const Footer = () => {
  const width = useDetectWindowSize();

  return (
    <>
      <div className={styles.footerWrapper}>
        {width > 779 ? (
          <div className={styles.footerLinkInfo}>
            <div className={styles.quickLinks}>
              <div className={styles.headerText}>Quick Links</div>
              <div><Link className="color-primary" href="/">Home</Link></div>
              <div><Link className="color-primary" href="/about-us">About</Link></div>
              <div><Link className="color-primary" href="/testimonials">Testimonials</Link></div>
              <div><Link className="color-primary" href="faq">FAQ</Link></div>
              <div><Link className="color-primary" href="contact">Contact Us</Link></div>
            </div>
            <div className={styles.info}>
              <div>
                <img src="/img/footer/email.svg" alt="" />
                <span className="ml-15">info@kungfuhelper.com.sg</span>
              </div>
              <div>
                <img src="/img/footer/phone.svg" alt="" />
                <span className="ml-15">+6588380909</span>
              </div>
              <div className="flex item-flex-start">
                <img src="/img/footer/address.svg" alt="" />
                <div className="ml-15">
                  31 Woodlands Close <br /> #03-10 Woodlands Horizon <br /> Singapore 737855{' '}
                </div>
              </div>
            </div>
            <div>
              <div className={styles.headerText}>Follow Us</div>
              <div className="mt-20 flex gap-25">
                <img src="/img/footer/facebook.svg" alt="" />
                <img src="/img/footer/insta.svg" alt="" />
              </div>
            </div>
            <div>
              <div className={styles.headerText}>Subscribe to our Newsletter</div>
              <div className={styles.inputWrapper}>
                <Input className={styles.inputStyle} placeholder="Email" />
                <Button className={styles.buttonSubs}>Subscribe</Button>
              </div>
              <img src="/img/footer/logo.svg" className="w-114 h-81" alt="" />
            </div>
          </div>
        ) : (
          <div className={styles.footerLinkInfo}>
            <div className={styles.spLinkInfo}>
              <div className="flex flex-column gap-20">
                <div className={styles.quickLinks}>
                  <div className={styles.headerText}>Quick Links</div>
                  <p>Home</p>
                  <p>About</p>
                  <p>Testimonials</p>
                  <p>FAQ</p>
                  <p>Contact Us</p>
                </div>
                <div>
                  <div className={styles.headerText}>Follow Us</div>
                  <div className="mt-20 flex gap-25">
                    <img src="/img/footer/facebook.svg" alt="" />
                    <img src="/img/footer/insta.svg" alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.info}>
                <div>
                  <img src="/img/footer/email.svg" alt="" />
                  <span className="ml-15">info@kungfuhelper.com.sg</span>
                </div>
                <div>
                  <img src="/img/footer/phone.svg" alt="" />
                  <span className="ml-15">+6588380909</span>
                </div>
                <div className="flex item-flex-start">
                  <img src="/img/footer/address.svg" alt="" />
                  <span className="ml-15">
                    31 Woodlands Close <br /> #03-10 Woodlands Horizon <br /> Singapore 737855{' '}
                  </span>
                </div>
                <img src="/img/footer/logo.svg" className="w-75 h-55" alt="" />
              </div>
            </div>
            <div>
              <div className={styles.headerText}>Subscribe to our Newsletter</div>
              <div className={styles.inputWrapper}>
                <Input className={styles.inputStyle} placeholder="Email" />
                <Button className={styles.buttonSubs}>Subscribe</Button>
              </div>
            </div>
          </div>
        )}
        <Divider className={styles.dividerStyle} />
        {width > 779 ? (
          <div className={styles.footerCopyRight}>
            <div className="flex item-center justify-evenly gap-25">
              <div>© 2022 KungFu Helper Pte Ltd. All rights reserved.</div>
              <div>|</div>
              <div><Link href="/policy" className="color-primary-dark">Privacy Policy</Link></div>
              <div>|</div>
              <div><Link href="/term" className="color-primary-dark">Terms & Conditions</Link></div>
            </div>

            <div>
              <img src="/img/footer/cyber-save.svg" alt="" />
              <span>ENTERPRISE ON ASSET-BASED CYBER DEFENSE AN INITIATIVE BY CSA</span>
            </div>
          </div>
        ) : (
          <div className={styles.footerCopyRight}>
            <div className="flex flex-column item-center justify-center gap-10">
              <p>© 2022 KungFu Helper Pte Ltd. All rights reserved.</p>
              <div className="flex gap-10 font-size-12">
                <p className="text-bold"><Link href="/policy" className="color-primary-dark text-bold">Privacy Policy</Link></p>
                <div>|</div>
                <div className="text-bold"><Link href="/term" className="color-primary-dark text-bold">Terms & Conditions</Link></div>
              </div>
            </div>

            <div className="flex item-center justify-center">
              <img src="/img/footer/cyber-save.svg" alt="" />
              <p>ENTERPRISE ON ASSET-BASED CYBER DEFENSE AN INITIATIVE BY CSA</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
