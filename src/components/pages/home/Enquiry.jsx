import { Button, Form, Input } from 'antd';
import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Enquiry = ({ isShowBgImage = true }) => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.enquiryContainer}>
      {/* {isShowBgImage && (
        <img
          className={styles.circleLeft}
          src={`${width > 1600 ? `/img/home/enquiry/circleLeft.svg` : `/img/home/enquiry/circleLeft_sp.svg`}`}
          alt="arrow"
        />
      )} */}
      <div className={styles.enquiryWrapper}>
        <div className={styles.enquiryTitle}>
          <p>
            Have an <span>enquiry?</span>
          </p>
        </div>
        <div className={styles.enquiryDes}>
          Please fill in the form below and we will get back to you in 3 business days. For a faster response, WhatsApp us at +
          <a className="font-size-24 font-size-tb-16 font-size-sp-12 color-black text-underline" href="https://api.whatsapp.com/send/?phone=6588380909">65 8838 0909</a> .
        </div>
        <div className={styles.enquiryForm}>
          <Form>
            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Name <span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Phone No.<span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Email <span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Message <span className="color-red">*</span>
                </div>
                <Input.TextArea rows={6} className={styles.formInputStyle} />
              </div>
            </Form.Item>
            <div className={styles.enquiryImageContainer}>
              <div className={styles.captchaWrapper}>
                <img src={`${width > 1600 ? `/img/home/enquiry/captcha.svg` : `/img/home/enquiry/captcha_sp.svg`}`} alt="arrow" />
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
              <Button size="large" className={styles.buttonFormStyle}>
                <span className="text-bold">
                Submit
                  </span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* {isShowBgImage && (
        <img
          className={styles.circleRight}
          src={`${width > 1600 ? `/img/home/enquiry/circleRight.svg` : `/img/home/enquiry/circleRight_sp.svg`}`}
          alt="arrow"
        />
      )} */}
    </div>
  );
};

export default Enquiry;
