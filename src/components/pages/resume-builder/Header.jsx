/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PhoneFilled,  MailFilled, GlobalOutlined, HomeFilled, GithubOutlined} from '@ant-design/icons';
import styles from './styles.module.scss';

const Header = ({ info }) => {
  return (
    <div className={styles.header}>
      <div className={styles.name}>{info.name}</div>
      <div className={styles.content}>
        <div>
          <div className={styles.text}><PhoneFilled /> {info.phone}</div>
          <div className={styles.text}><HomeFilled /> {info.address}</div>
          <div className={styles.text}><GithubOutlined /> {info.gitHubLink}</div>
        </div>
        <div>
          <div className={styles.text}> <MailFilled />{info.email}</div>
          <div className={styles.text}><HomeFilled /> {info.role}</div>
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
