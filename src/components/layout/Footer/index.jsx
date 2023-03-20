import { Button, Divider, Input } from 'antd';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

import styles from './styles.module.scss';

const Footer = () => {
  const width = useDetectWindowSize();
  // const viewPort = useViewport();

  return (
    <>
      <div className={styles.footerWrapper}>
        {width > 779 ? (
          <div className={styles.footerLinkInfo}>
            <div className={styles.quickLinks}>
              <div className={styles.headerText}>Quick Links</div>
              <div>Home</div>
              <div>About</div>
              <div>Testimonials</div>
              <div>FAQ</div>
              <div>Contact Us</div>
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
              <img src="/img/footer/logo.svg" alt="" />
            </div>
          </div>
        ) : (
          <div className={styles.footerLinkInfo}>
            <div>
              <div className="flex flex-column">
                <div className={styles.quickLinks}>
                  <div className={styles.headerText}>Quick Links</div>
                  <div>Home</div>
                  <div>About</div>
                  <div>Testimonials</div>
                  <div>FAQ</div>
                  <div>Contact Us</div>
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
                  <div className="ml-15">
                    31 Woodlands Close <br /> #03-10 Woodlands Horizon <br /> Singapore 737855{' '}
                  </div>
                </div>
                <img src="/img/footer/logo.svg" alt="" />
              </div>
            </div>
            <div>
              <div>
                <div className={styles.headerText}>Subscribe to our Newsletter</div>
                <div className={styles.inputWrapper}>
                  <Input className={styles.inputStyle} placeholder="Email" />
                  <Button className={styles.buttonSubs}>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        )}
        <Divider />
        {width > 779 ? (
          <div className={styles.footerCopyRight}>
            <div className="flex item-center justify-evenly gap-25">
              <div>© 2022 KungFu Helper Pte Ltd. All rights reserved.</div>
              <div>|</div>
              <div>Privacy Policy</div>
              <div>|</div>
              <div>Terms & Conditions</div>
            </div>

            <div>
              <img src="/img/footer/cyber-save.svg" alt="" />
              <span>ENTERPRISE ON ASSET-BASED CYBER DEFENSE AN INITIATIVE BY CSA</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-column item-center justify-center gap-10">
              <div>© 2022 KungFu Helper Pte Ltd. All rights reserved.</div>
              <div className="flex gap-10 font-size-12">
                <p className="text-bold">Privacy Policy</p>
                <div>|</div>
                <div className="text-bold">Terms & Conditions</div>
              </div>
            </div>

            <div className="flex item-center justify-center">
              <img src="/img/footer/cyber-save.svg" alt="" />
              <span>ENTERPRISE ON ASSET-BASED CYBER DEFENSE AN INITIATIVE BY CSA</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
