import { Button, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';
// import axios from 'axios';
import api from '@/api/axios';

const Enquiry = ({ isShowBgImage = true }) => {
  const width = useDetectWindowSize();
  const [formSubmit] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data) => {
    try {

    setIsLoading(true);
    const dataSubmit = {
      content: `phone: ${data.phone}\n message:${data.message}`,
      receiverEmail: 'info@kungfuhelper.com.sg',
      senderEmail: data.email,
      senderName: data.name,
    };

    const url = 'https://send-in-blue-api.uc.r.appspot.com/v1/sendinblue/send';
    const headers = {
      domain_name: 'asure-pro',
    };

    api
      .post(url, dataSubmit, { headers })
      .then(() => {
        notification.open({
          type: 'success',
          message: 'Email has been sent successfully!',
        });
      })
      .catch((error) => {
        const errorMessage = JSON.parse(error?.response?.data?.message);

        notification.open({
          type: 'error',
          message: errorMessage?.message || 'Please try again!',
        });
      })
      .finally(() => {
        formSubmit.resetFields();
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error)
    }
  };

  const handleOnFinishFailed = (errorInfo) => {
    return errorInfo;
  };
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
          <a
            className="font-size-24 font-size-tb-16 font-size-sp-12 color-black text-underline"
            href="https://api.whatsapp.com/send/?phone=6588380909"
          >
            65 8838 0909
          </a>{' '}
          .
        </div>
        <div className={styles.enquiryForm}>
          <Form form={formSubmit} onFinishFailed={handleOnFinishFailed} onFinish={handleSubmit}>
            <Form.Item rules={[{ required: true, message: 'Please input your name!' }]} name="name">
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Name <span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: 'Please input your phone!' },
                {
                  pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                  message: 'Please enter a valid phone number',
                },
              ]}
              name="phone"
            >
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Phone No.<span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item
              rules={[
                {
                  type: 'email',
                  message: 'The input is not a valid email address',
                },
                { required: true, message: 'Please input your email!' },
              ]}
              name="email"
            >
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Email <span className="color-red">*</span>
                </div>
                <Input className={styles.formInputStyle} />
              </div>
            </Form.Item>

            <Form.Item name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
              <div className="flex flex-column item-flex-start">
                <div className="text-bold">
                  Message <span className="color-red">*</span>
                </div>
                <Input.TextArea rows={6} className={styles.formInputStyle} />
              </div>
            </Form.Item>
            <div className={styles.enquiryImageContainer}>
              <div className={styles.captchaWrapper}>
                <img src={`${width > 1600 ? `/img/home/enquiry/captcha.svg` : `/img/home/enquiry/captcha.jpeg`}`} alt="arrow" />
              </div>
              {/* {width > 780 ? ( */}
                <div className={styles.enquiryInfra}>
                  <img src="/img/home/enquiry/aws.jpeg" alt="logo" />
                  <img src="/img/home/enquiry/cloudflare.jpeg" alt="logo" />
                  <img src="/img/home/enquiry/logo.jpeg" alt="logo" />
                </div>
              {/* // ) : (
              //   // <img src="/img/home/enquiry/service.jpeg" alt="service" />
              // )} */}
            </div>
            <Form.Item className="flex">
              <Button loading={isLoading} size="large" htmlType="submit" className={styles.buttonFormStyle}>
                <span className="text-bold">Submit</span>
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
