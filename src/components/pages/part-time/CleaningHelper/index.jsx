import styles from '@/components/pages/part-time/styles.module.scss';

import HelperItem from './HelperItem';

const CleaningHelper = ({ data }) => {
  return (
    <div className={styles.partimeContainer}>
      {data.map((item) => (
        <HelperItem key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default CleaningHelper;
