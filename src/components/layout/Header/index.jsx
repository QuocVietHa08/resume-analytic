/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useRouter } from 'next/router';

import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Header = () => {
  const router = useRouter();
  const width = useDetectWindowSize(); 

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
        </div>
        <button type="button" className={styles.buttonLogin}>
          → Login / Signup
        </button>

      </div>
    </div>
  );
};

export default Header;
