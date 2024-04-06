/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { PhoneFilled, MailFilled, GlobalOutlined, HomeFilled, GithubOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Button } from 'antd';
import styles from './styles.module.scss';

const Header = ({ info }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className={styles.header}>
      <ModalEditHeader info={info} open={open} onOpenModal={handleOpenModal} onCloseModal={handleCloseModal} />
      <div className={styles.name}>{info.name}</div>
      <div className={styles.content}>
        <div>
          <div className={styles.text}>
            <PhoneFilled /> {info.phone}
          </div>
          <div className={styles.text}>
            <HomeFilled /> {info.address}
          </div>
          <div className={styles.text}>
            <GithubOutlined /> {info.gitHubLink}
          </div>
        </div>
        <div>
          <div className={styles.text}>
            {' '}
            <MailFilled />
            {info.email}
          </div>
          <div className={styles.text}>
            <HomeFilled /> {info.role}
          </div>
          <div className={styles.text}>
            <GlobalOutlined /> {info.website}
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={info.avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;

const ModalEditHeader = ({ info, open, onOpenModal, onCloseModal }) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleFinish = (values) => {
    console.log('values', values);
  };

  return (
    <>
      <button type="button" className={styles.buttonEdit} onClick={onOpenModal}>
        Edit
      </button>
      <Modal closeIcon={<></>} title="Edit Header" open={open} footer={null}>
        <Form
          {...layout}
          form={form}
          initialValues={{
            ...info,
          }}
          onFinish={handleFinish}
        >
          <Form.Item name="avatar" label="Avatar URL">
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Full Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gitHubLink"
            label="Github"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="website" label="Website">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button className="ml-10" onClick={onCloseModal}>Close</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
