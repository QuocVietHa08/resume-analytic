/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { PhoneFilled, MailFilled, GlobalOutlined, HomeFilled, GithubOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const Header = ({ info, onChangeInfo }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className={styles.header}>
      <ModalEditHeader info={info} onSubmit={onChangeInfo} open={open} onOpenModal={handleOpenModal} onCloseModal={handleCloseModal} />
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
            <MailFilled />
            {info.email}
          </div>
          <div className={styles.text}>
            <HomeFilled /> {info.role}
          </div>
          {info.website && (
            <div className={styles.text}>
              <GlobalOutlined /> {info.website}
            </div>
          )}
        </div>
        <div className={styles.avatar}>
          <img src={info.avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;

const ModalEditHeader = ({ info, open, onOpenModal, onCloseModal, onSubmit }) => {
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
    onSubmit(values, 'header');
    onCloseModal();
  };

  const handleCancel = () => {
    onCloseModal();
    form.resetFields();
  };

  return (
    <>
      <button type="button" className={styles.buttonEdit} onClick={onOpenModal} aria-label="Edit">
        <EditOutlined />
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
          <Form.Item
            name="avatar"
            label="Avatar URL"
            rules={[
              {
                required: true,
                message: 'Please input your avatar URL!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
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
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Please enter a valid email address!',
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
                message: 'Please input your phone number!',
              },
              {
                pattern: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit phone number!',
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
                message: 'Please input your address!',
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
                message: 'Please input your role!',
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
                message: 'Please input your GitHub link!',
              },
              {
                type: 'url',
                message: 'Please enter a valid URL!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[
              {
                type: 'url',
                message: 'Please enter a valid URL!',
              },
            ]}
          >
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
            <Button className="ml-10" onClick={handleCancel}>
              Close
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
