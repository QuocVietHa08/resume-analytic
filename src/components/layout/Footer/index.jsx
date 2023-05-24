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

  const handleSubmitForm = (data) => {
    try {
      setIsLoading(true);

      const url = `${process.env.SEND_IN_BLUE_URL}/v1/sendinblue/subscription`;

      const myHeaders = new Headers();
      myHeaders.append('domain_name', 'kungfu-helper');
      myHeaders.append('Content-Type', 'text/plain');
      const raw = data.email;

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (result === 'Successful') {
            notification.open({
              type: 'success',
              message: 'Subscription successfully!',
            });
          } else {
            notification.open({
              type: 'error',
              message: 'Please try again!',
            });
          }
        })
        .catch(() => {
          notification.open({
            type: 'error',
            message: 'Please try again!',
          });
        })
        .finally(() => {
          setIsLoading(false);
          formSub.resetFields();
          setInputValue('');
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        {width > 768 ? (
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
                <img src="/img/footer/email.svg" alt="" />
                <a href="mailto:info@kungfuhelper.com.sg" className={`ml-15 ${styles.footerQuickLinkStyle}`}>
                  info@kungfuhelper.com.sg
                </a>
              </div>
              <div>
                <img src="/img/footer/phone.svg" alt="" />
                <a href="https://api.whatsapp.com/send/?phone=6588380909" className={`ml-15 ${styles.footerQuickLinkStyle}`}>
                  +6588380909
                </a>
              </div>
              <div className="flex item-flex-start">
                <img src="/img/footer/address.svg" alt="" />
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
                  <img src="/img/footer/facebook.svg" alt="" />
                </a>
                <a href="https://www.tiktok.com/@kungfuhelpersg">
                  <img src="/img/footer/tiktok.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/kungfuhelper1/">
                  <img src="/img/footer/insta.svg" alt="" />
                </a>
                <img src="/img/footer/lazada.svg" alt="" />
                <img src="/img/footer/shopee.svg" alt="" />
              </div>
            </div>
            <div>
              <div className={styles.headerText}>Subscribe to our Newsletter</div>
              <div className="footer-input-wrapper">
                <Form onFinish={handleSubmitForm} layout="vertical" form={formSub}>
                  <Form.Item name="email">
                    <Input className={styles.inputStyle} placeholder="Email" />
                  </Form.Item>
                  <Form.Item>
                    <Button loading={isLoading} htmlType="submit" className={styles.buttonSubs}>
                      Subscribe
                    </Button>
                  </Form.Item>
                </Form>
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
                  <p>
                    <Link className={`color-primary ${styles.footerQuickLinkStyle}`} href="/">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link className={`color-primary ${styles.footerQuickLinkStyle}`} href="/services">
                      Services
                    </Link>
                  </p>
                  <p>
                    <Link className={`color-primary ${styles.footerQuickLinkStyle}`} href="/about-us">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link className={`color-primary ${styles.footerQuickLinkStyle}`} href="/testimonials">
                      Testimonials
                    </Link>
                  </p>
                  <p>
                    <Link className={`color-primary ${styles.footerQuickLinkStyle}`} href="/faq">
                      FAQ
                    </Link>
                  </p>
                  <p>
                    <Link className={`color-primary ${styles.footerQuickLinkStyle}`} href="/contact-us">
                      Contact Us
                    </Link>
                  </p>
                </div>
                <div>
                  <div className={styles.headerText}>Find Us On</div>
                  <div className={styles.socialMediaWrapper}>
                    <a href="https://www.facebook.com/profile.php?id=100092323458037">
                      <img src="/img/footer/facebook.jpeg" alt="" />
                    </a>
                    <a href="https://www.tiktok.com/@kungfuhelpersg">
                      <img src="/img/footer/tiktok.jpeg" alt="" />
                    </a>
                    <a href="https://www.instagram.com/kungfuhelper1/">
                      <img src="/img/footer/insta.jpeg" alt="" />
                    </a>
                    <img src="/img/footer/lazada.jpeg" alt="" />
                    <img src="/img/footer/shopee.jpeg" alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.info}>
                <div>
                  <img src="/img/footer/email.svg" alt="" />
                  <a href="mailto:info@kungfuhelper.com.sg" className={`ml-15 ${styles.footerQuickLinkStyle}`}>
                    info@kungfuhelper.com.sg
                  </a>
                </div>
                <div>
                  <img src="/img/footer/phone.svg" alt="" />
                  <a href="https://api.whatsapp.com/send/?phone=6588380909" className={`ml-15 ${styles.footerQuickLinkStyle}`}>
                    +6588380909
                  </a>
                </div>
                <div className="flex item-flex-start">
                  <img src="/img/footer/address.svg" alt="" />
                  <a
                    href="https://www.google.com/maps/place/KUNG+FU+HELPER+PTE+LTD/@1.4365609,103.8034316,17z/data=!3m2!4b1!5s0x31da13769bf4e5e7:0xd29bc5ae026f3d42!4m6!3m5!1s0x31da1317fba6bb1d:0x3f92bcb285eca85e!8m2!3d1.4365555!4d103.8060065!16s%2Fg%2F11p0bchdzm"
                    className={`ml-15 ${styles.footerQuickLinkStyle}`}
                  >
                    31 Woodlands Close <br /> #03-10 Woodlands Horizon <br /> Singapore 737855{' '}
                  </a>
                </div>
                <img src="/img/footer/logo.svg" className="w-75 h-55 mt-sp-30" alt="" />
              </div>
            </div>
            <div className="w-full max-width-400px">
              <div className={styles.headerText}>Subscribe to our Newsletter</div>
              <div className="footer-input-wrapper">
                <Form name={formSub} layout="vertical" onFinish={handleSubmitForm}>
                  <Form.Item name="email">
                    <div className="flex w-full">
                      <Input
                        className={styles.inputStyle}
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Email"
                      />
                      <Button loading={isLoading} htmlType="submit" className={styles.buttonSubs}>
                        <span className="text-bold">Subscribe</span>
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        )}
        <div className={styles.dividerWrapper}>
          <Divider className={styles.dividerStyle} />
        </div>
        {width > 768 ? (
          <div className={styles.footerCopyRight}>
            <div className="flex item-center justify-evenly gap-25 gap-tb-15">
              <div>© 2022 KungFu Helper Pte Ltd. All rights reserved.</div>
              <div>|</div>
              <div>
                <Link href="/privacy-policy" className="color-primary-dark">
                  Privacy Policy
                </Link>
              </div>
              <div>|</div>
              <div>
                <Link href="/term" className="color-primary-dark">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div className="flex item-center">
              <img src="/img/footer/cyber-save.svg" alt="" />
              <span>ENTERPRISE ON ASSET-BASED CYBER DEFENSE AN INITIATIVE BY CSA</span>
            </div>
          </div>
        ) : (
          <div className={styles.footerCopyRight}>
            <div className="flex flex-column item-center mb-15 justify-center gap-10">
              <p>© 2022 KungFu Helper Pte Ltd. All rights reserved.</p>
              <div className="flex item-center gap-10 font-size-12">
                <p className="text-bold">
                  <Link href="/privacy-policy" className="color-primary-dark font-size-12 text-bold">
                    Privacy Policy
                  </Link>
                </p>
                <div>|</div>
                <div className="text-bold">
                  <Link href="/term" className="color-primary-dark font-size-12 text-bold">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex item-center justify-center">
              <img src="/img/footer/cyber-save.svg" alt="" />
              <p className="text-weight-400">
                ENTERPRISE ON ASSET-BASED CYBER <br /> DEFENSE AN INITIATIVE BY CSA
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
