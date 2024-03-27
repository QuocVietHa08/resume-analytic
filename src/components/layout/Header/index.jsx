import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}></div>
        <div className="flex items-center gap-20">
          <a target="_blank" href="https://github.com/QuocVietHa08/resume-analytic" className={styles.buttonLogin} rel="noreferrer">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
