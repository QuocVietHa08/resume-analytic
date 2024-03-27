'use client';

import React, { useState } from 'react';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { Button, Form, Input, InputNumber, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

const { TextArea } = Input;
const Setting = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleTraingBot = () => {
    router.push('/');
  };

  return (
    <div className={styles.trainContainer}>
      <div className={styles.trainWrapper}>
        <div className="text-center flex flex-column items-center">
          <span className={styles.title}>Setting</span>
        </div>
        <div className={styles.trainUpload}>
          <div className={styles.settingAccount}>
            <Form labelCol={{ span: 6}}  wrapperCol={{ span: 14 }} className="w-full" layout="horizontal" style={{ marginTop: 30 }}>
              <Form.Item label="Name">
                <Input />
              </Form.Item>
              <Form.Item label="TextArea">
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item label="Max tokens">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload action="/upload.do" listType="picture-card">
                  <button style={{ border: 0, background: 'none' }} type="button">
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button className={styles.buttonUpload}>Save</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Modal centered footer={null} open={openModal} onCancel={() => setOpenModal(false)} onClose={() => setOpenModal(false)}>
        <div className="text-center mt-10 font-size-18">Are you sure you want to train the bot with this data ?</div>
        <div className="text-center">This data will be reset when you refresh the page</div>
        <div className="flex justify-center gap-20 mt-20">
          <button type="button" onClick={() => setOpenModal(false)} className={styles.buttonCancelTrain}>
            Cancel
          </button>
          <button type="button" onClick={handleTraingBot} className={styles.buttonTrain}>
            Train
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Setting;
