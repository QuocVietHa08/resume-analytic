/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PhoneOutlined, MailOutlined, GlobalOutlined, HomeOutlined, GithubOutlined} from '@ant-design/icons';
import styles from './styles.module.scss';

const Header = ({ info }) => {
  return (
    <div className={styles.header}>
      <div className={styles.name}>{info.name}</div>
      <div className={styles.content}>
        <div>
          <div className={styles.text}><PhoneOutlined /> {info.phone}</div>
          <div className={styles.text}><HomeOutlined /> {info.address}</div>
          <div className={styles.text}><GithubOutlined /> {info.gitHubLink}</div>
        </div>
        <div>
          <div className={styles.text}> <MailOutlined />{info.email}</div>
          <div className={styles.text}><HomeOutlined /> {info.role}</div>
          <div className={styles.text}><GlobalOutlined /> {info.website}</div>
        </div>
        <div className={styles.avatar}>
          <img src={info.avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
