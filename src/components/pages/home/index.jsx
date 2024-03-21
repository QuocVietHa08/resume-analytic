import React from 'react';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.HomeWrapper}>
      <div>
      <div className={styles.imageWrapper}>
        <img src="/img/bedrock.png" alt="Bedrock logo" />
        <img src="/img/react.png" alt="React logo" />
      </div>
      <span >AWS Chatbot Bedrock and ReactJs</span>
      </div>
    </div>
  );
};

export default Home;
