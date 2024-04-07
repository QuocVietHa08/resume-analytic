import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

const Introduction = ({ info, onChangeInfo }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  if (!info) return null;

  return (
    <div className={styles.introduction}>
      <ModalEditIntroduction
        info={info}
        onSubmit={onChangeInfo}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        open={open}
      />
      <div className={styles.title}>
        <div className={styles.text}>Introduction</div>
        <div className={styles.line}></div>
      </div>
      <div>{info}</div>
    </div>
  );
};

export default Introduction;

const ModalEditIntroduction = ({ info, open, onOpenModal, onCloseModal, onSubmit }) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };

  const handleFinish = (values) => {
    const { introduction } = values
    onSubmit(introduction, 'introduction');
    onCloseModal();
  };

  const handleCancel = () => {
    onCloseModal();
    form.resetFields();
  };
  
  const initialValues = {
    introduction: info
  };

  return (
    <>
      <button type="button" className={styles.buttonEdit} onClick={onOpenModal} aria-label="Edit">
        <EditOutlined />
      </button>
      <Modal closeIcon={<></>} width={1000}  title="Edit Education" open={open} footer={null}>
        <Form {...layout} form={form} initialValues={initialValues} onFinish={handleFinish}>
        <Form.Item
            name="introduction"
            label="Introduction"
          >
            <Input.TextArea rows={8} />
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
