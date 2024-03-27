import Link from 'next/link';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}></div>
        <div className="flex items-center gap-20">
          <Link className={styles.buttonLogin} href="/">
            Home
          </Link>
          <Link className={styles.buttonLogin} href="train">
            Training
          </Link>
          <Link className={styles.buttonLogin} href="data">
            Data
          </Link>
          <Link className={styles.buttonLogin} href="setting">
            Setting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
