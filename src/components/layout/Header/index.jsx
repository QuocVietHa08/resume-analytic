import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
        </div>
        <a href="https://github.com/QuocVietHa08/aws-bedrock-chatbot" target='_blank' className={styles.buttonLogin} rel="noreferrer">
           Repository 
        </a>

      </div>
    </div>
  );
};

export default Header;
