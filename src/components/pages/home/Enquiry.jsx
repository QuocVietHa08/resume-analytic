import { Button, Form, Input } from 'antd';
import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Enquiry = ({ isShowBgImage = true }) => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.enquiryContainer}>
      {isShowBgImage && (
        <img
          className={styles.circleLeft}
          src={`${width > 780 ? `/img/home/enquiry/circleLeft.svg` : `/img/home/enquiry/circleLeft_sp.svg`}`}
          alt="arrow"
        />
      )}
      <div className={styles.enquiryWrapper}>
        <div className={styles.enquiryTitle}>
          <p>
            Have an <span>enquiry?</span>
          </p>
        </div>
        <div className={styles.enquiryDes}>
          Please fill in the form below and we will get back to you in 3 business days. For a faster response, WhatsApp us at +65 8838 0909.
        </div>
        <div className={styles.enquiryForm}>
          <Form>
            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div>
                  Name <span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div>
                  Phone No<span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div>
                  Email <span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div>
                  Message <span className="color-red">*</span>
                </div>
                <Input.TextArea rows={6} className={styles.formInputStyle} />
              </div>
            </Form.Item>
            <div className={styles.enquiryImageContainer}>
              <div className={styles.captchaWrapper}>
                <img src={`${width > 780 ? `/img/home/enquiry/captcha.svg` : `/img/home/enquiry/captcha_sp.svg`}`} alt="arrow" />
              </div>
              {width > 780 ? (
                <div className={styles.enquiryInfra}>
                  <img src="/img/home/enquiry/aws.svg" alt="logo" />
                  <img src="/img/home/enquiry/cloudflare.svg" alt="logo" />
                  <img src="/img/home/enquiry/logo.svg" alt="logo" />
                </div>
              ) : (
                <img src="/img/home/enquiry/service.svg" alt="service" />
              )}
            </div>
            <Form.Item className="flex">
              <Button className={styles.buttonFormStyle}>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {isShowBgImage && (
        <img
          className={styles.circleRight}
          src={`${width > 780 ? `/img/home/enquiry/circleRight.svg` : `/img/home/enquiry/circleRight_sp.svg`}`}
          alt="arrow"
        />
      )}
    </div>
  );
};

export default Enquiry;
