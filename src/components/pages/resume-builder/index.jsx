import React from 'react';
import Header from './Header';
import styles from './styles.module.scss';

const ResumeBuilder = () => {
  const [info, setInfo] = React.useState({
    header: {
      name: 'Ha Quoc Viet',
      email: 'quocvietha08@gmail.com',
      phone: '0123456789',
      address: 'My Dinh, Ha Noi, Viet Name',
      avatar: 'https://avatars.githubusercontent.com/u/56016006?v=4',
      role: 'Frontend Developer',
      gitHubLink: 'https://github.com/QuocVietHa08',
      website: 'https://github.com/QuocVietHa08',
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.resume}>
          <Header info={info.header} />
        </div>
        <div className={styles.formContainer}></div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
