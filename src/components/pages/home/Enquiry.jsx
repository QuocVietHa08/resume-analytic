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

  const renderEmailContent = (receiverEmail, fullname, userEmail, phone, message) => {
    return `<!doctype html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
      /* -------------------------------------
      GLOBAL RESETS
      ------------------------------------- */

      /*All the styling goes here*/

      img {
      border: none;
      -ms-interpolation-mode: bicubic;
      max-width: 100%;
    }

      body {
      background-color: #f6f6f6;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

      table {
      border-collapse: separate;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      width: 100%; }
      table td {
      font-family: sans-serif;
      font-size: 14px;
      vertical-align: top;
    }

      /* -------------------------------------
      BODY & CONTAINER
      ------------------------------------- */

      .body {
      background-color: #f6f6f6;
      width: 100%;
    }

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
      display: block;
      margin: 0 auto !important;
      /* makes it centered */
      max-width: 580px;
      padding: 10px;
      width: 580px;
    }

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
      max-width: 580px;
      padding: 10px;
    }

      /* -------------------------------------
      HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
      background: #ffffff;
      border-radius: 3px;
      width: 100%;
    }

      .wrapper {
      box-sizing: border-box;
      padding: 20px;
    }

      .content-block {
      padding-bottom: 10px;
      padding-top: 10px;
    }

      .footer {
      clear: both;
      margin-top: 10px;
      text-align: center;
      width: 100%;
    }
      .footer td,
      .footer p,
      .footer span,
      .footer a {
      color: #999999;
      font-size: 12px;
      text-align: center;
    }

      /* -------------------------------------
      TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {
      color: #000000;
      font-family: sans-serif;
      font-weight: 400;
      line-height: 1.4;
      margin: 0;
      margin-bottom: 30px;
    }

      h1 {
      font-size: 35px;
      font-weight: 300;
      text-align: center;
      text-transform: capitalize;
    }

      p,
      ul,
      ol {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: normal;
      margin: 0;
      margin-bottom: 15px;
    }
      p li,
      ul li,
      ol li {
      list-style-position: inside;
      margin-left: 5px;
    }

      a {
      color: #3498db;
      text-decoration: underline;
    }

      /* -------------------------------------
      BUTTONS
      ------------------------------------- */
      .btn {
      box-sizing: border-box;
      width: 100%; }
      .btn > tbody > tr > td {
      padding-bottom: 15px; }
      .btn table {
      width: auto;
    }
      .btn table td {
      background-color: #ffffff;
      border-radius: 5px;
      text-align: center;
    }
      .btn a {
      background-color: #ffffff;
      border: solid 1px #3498db;
      border-radius: 5px;
      box-sizing: border-box;
      color: #3498db;
      cursor: pointer;
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      margin: 0;
      padding: 12px 25px;
      text-decoration: none;
      text-transform: capitalize;
    }

      .btn-primary table td {
      background-color: #3498db;
    }

      .btn-primary a {
      background-color: #3498db;
      border-color: #3498db;
      color: #ffffff;
    }

      /* -------------------------------------
      OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {
      margin-bottom: 0;
    }

      .first {
      margin-top: 0;
    }

      .align-center {
      text-align: center;
    }

      .align-right {
      text-align: right;
    }

      .align-left {
      text-align: left;
    }

      .clear {
      clear: both;
    }

      .mt0 {
      margin-top: 0;
    }

      .mb0 {
      margin-bottom: 0;
    }

      .preheader {
      color: transparent;
      display: none;
      height: 0;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
      mso-hide: all;
      visibility: hidden;
      width: 0;
    }

      .powered-by a {
      text-decoration: none;
    }

      hr {
      border: 0;
      border-bottom: 1px solid #f6f6f6;
      margin: 20px 0;
    }

      /* -------------------------------------
      RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
      table.body h1 {
      font-size: 28px !important;
      margin-bottom: 10px !important;
    }
      table.body p,
      table.body ul,
      table.body ol,
      table.body td,
      table.body span,
      table.body a {
      font-size: 16px !important;
    }
      table.body .wrapper,
      table.body .article {
      padding: 10px !important;
    }
      table.body .content {
      padding: 0 !important;
    }
      table.body .container {
      padding: 0 !important;
      width: 100% !important;
    }
      table.body .main {
      border-left-width: 0 !important;
      border-radius: 0 !important;
      border-right-width: 0 !important;
    }
      table.body .btn table {
      width: 100% !important;
    }
      table.body .btn a {
      width: 100% !important;
    }
      table.body .img-responsive {
      height: auto !important;
      max-width: 100% !important;
      width: auto !important;
    }
    }

      /* -------------------------------------
      PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
      .ExternalClass {
      width: 100%;
    }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
      line-height: 100%;
    }
      .apple-link a {
      color: inherit !important;
      font-family: inherit !important;
      font-size: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      text-decoration: none !important;
    }
      #MessageViewBody a {
      color: inherit;
      text-decoration: none;
      font-size: inherit;
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
      .btn-primary table td:hover {
      background-color: #34495e !important;
    }
      .btn-primary a:hover {
      background-color: #34495e !important;
      border-color: #34495e !important;
    }
    }

    </style>
  </head>
    <body>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p>Full Name: ${fullname}</p>
                        <p>Email Address: ${userEmail}</p>
                        <p>Contact No: ${phone}</p>
                        <p>Messages: ${message}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
    </body>
  </html>`;
  };
  
  const handleSubmit = (data) => {
    try {
    setIsLoading(true);
    const dataSubmit = {
      content: renderEmailContent(data.receiverEmail, data.name, data.email, data.phone, data.message),
      receiversEmail: ['info@kungfuhelper.com.sg'],
      senderEmail: data.email,
      senderName: "KungFu-helper",
    };

    const url = process.env.SEND_IN_BLUE_URL
    const headers = {
      domain_name: 'kungfu-helper',
    };

    api
      .post(url, dataSubmit, { headers })
      .then(() => {
        notification.open({
          type: 'success',
          message: 'Email has been sent successfully!',
        });
      })
      .catch(() => {
        // const errorMessage = JSON.parse(error?.response?.data?.message || "Please try again");
        notification.open({
          type: 'error',
          // message: errorMessage?.message || 'Please try again!',
          message:'Please try again!',
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
