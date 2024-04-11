import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logoWrapper} rel="noreferrer">
          <div className={styles.logoWrapper}>
            <img src="/img/file.png" alt="file" />
            Resume Analytic
          </div>
        </Link>
        <div className="flex items-center gap-20">
          {/* <Link href="/" className={styles.buttonLogin} rel="noreferrer">
            Home
          </Link> */}
          <Link href="/resume-builder" className={styles.buttonLogin} rel="noreferrer">
            Resume Builder
          </Link>
          <a target="_blank" href="https://github.com/QuocVietHa08/resume-analytic" className={styles.buttonStar} rel="noreferrer">
            <GithubOutlined />
            Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
