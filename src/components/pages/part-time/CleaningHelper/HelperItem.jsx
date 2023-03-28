import styles from '@/components/pages/part-time/styles.module.scss';

const HelperItem = ({ title, imgSrc, content }) => {
  return (
    <div className={styles.partimeItem}>
      <img src={imgSrc} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
export default HelperItem;
