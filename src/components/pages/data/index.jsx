'use client';

import React, { useState } from 'react';
import ConvertApi from 'convertapi-js';
import { message, Modal } from 'antd';
import { useRouter } from 'next/router';
import { Button, Form, Input, InputNumber, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

const { TextArea } = Input;
const Data = () => {
  const convertApi = ConvertApi.auth('3po7Okkq2RYWSD6z');
  const router = useRouter();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileName, setFileeName] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleFileChange = async (event) => {
    event.preventDefault();
    setLoading(true);
    const params = convertApi.createParams();
    const file = event.target.files[0];
    setFileeName(file?.name);
    params.add('File', file);
    await convertApi
      .convert('pdf', 'txt', params)
      .then((result) => {
        handelFetchContentOfTxtFile(result?.dto?.Files?.[0]?.Url);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handelFetchContentOfTxtFile = async (url) => {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        message.success('Convert pdf to text successfully');
        setText(data);
      });
  };

  const handleOpenModalConfirm = () => {
    if (!text) {
      message.error('Please upload your data pdf file for training');
      return;
    }
    setOpenModal(true);
  };

  const handleTraingBot = () => {
    localStorage.setItem('dataTraining', text);
    router.push('/');
  };

  return (
    <div className={styles.trainContainer}>
      <div className={styles.trainWrapper}>
        <div className="text-center flex flex-column items-center">
          <span className={styles.title}>Upload your data pdf file</span>
          <div>Notes: The quality of the input determines the quality of the output</div>
        </div>
        <div className={styles.trainUpload}>
          <div className={styles.uploadData}>
            <div className="flex items-center justify-center gap-20">
              <label className={styles.buttonUpload} htmlFor="upload-pdf">
                Upload
              </label>
              <button disabled={loading} type="button" onClick={handleOpenModalConfirm} className={`${styles.buttonUpload} all-unset`}>
                Train your bot
              </button>
            </div>
            <input
              disabled={loading}
              className="none"
              id="upload-pdf"
              type="file"
              accept="application/pdf"
              multiple={false}
              onChange={handleFileChange}
            />
            {fileName && (
              <div className={styles.fileName}>
                <span> FileName </span>: {fileName}
              </div>
            )}
            <div className="mt-20">Data Training:{loading && ' Loading...'}</div>
            <textarea className={styles.pdfContent} value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className={styles.settingAccount}>
            <div className={styles.uploadData}>
              <div className="flex items-center justify-center gap-20">
                <label className={styles.buttonUpload}>Save</label>
              </div>
            </div>
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
                <Button>Button</Button>
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

export default Data;
