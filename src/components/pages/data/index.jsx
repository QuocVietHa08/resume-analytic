'use client';

import React  from 'react';
import {  Space, Table } from 'antd';

import styles from './styles.module.scss';



const dataSource = [
  {
    key: '1',
    template: 'Mike',
    token: 32,
    createDate: '10 Downing Street',
    action: '',
  },
  {
    key: '2',
    template: 'John',
    token: 42,
    createDate: '10 Downing Street',
    action: '',
  },
];

const { Column } = Table;
const Data = () => {
  return (
    <div className={styles.trainContainer}>
      <div className={styles.trainWrapper}>
        <div className="text-center flex flex-column items-center">
          <span className={styles.title}>Data</span>
        </div>
        <div className={styles.trainUpload}>
          <Table dataSource={dataSource} style={{ width: '100%' }}>
            <Column title="Template" dataIndex="template" key="template" />
            <Column title="Token" dataIndex="token" key="token" />
            <Column title="Create Date" dataIndex="createDate" key="createDate" />
            <Column
              title="Action"
              key="action"
              render={() => (
                <Space size="middle">
                  <button type="button" className={styles.buttonUpload}>
                    Apply
                  </button>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Data;
