import Link from 'next/link';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}></div>
        <div className="flex items-center gap-20">
          <Link href="/" className={styles.buttonLogin} rel="noreferrer">
            Home
          </Link>
          <Link href="/resume-builder" className={styles.buttonLogin} rel="noreferrer">
            Resume Builder
          </Link>
          <Link href="/resume" className={styles.buttonLogin} rel="noreferrer">
            Contact
          </Link>
          {/* <Link href="/demo" className={styles.buttonLogin} rel="noreferrer">
            Demo 
          </Link> */}
          <a target="_blank" href="https://github.com/QuocVietHa08/resume-analytic" className={styles.buttonLogin} rel="noreferrer">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
