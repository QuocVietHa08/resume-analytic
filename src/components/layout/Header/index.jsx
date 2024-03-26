import Link from 'next/link';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}></div>
        <div className="flex items-center gap-20">
        <Link className={styles.buttonLogin} href="train">
          Training
        </Link>
        <a href="https://github.com/QuocVietHa08/aws-bedrock-chatbot" target="_blank" className={styles.buttonLogin} rel="noreferrer">
          Repository
        </a>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
