import React from 'react';
import styles from './styles.module.scss';

const Achivement = ({ info }) => {
  return (
    <div className={styles.achivement}>
      <div className={styles.title}>
        <div className={styles.text}>Achivements</div>
        <div className={styles.line}></div>
      </div>
      <div className="flex flex-column gap-5">
        {info.map((item) => (
          <AchivementItem key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Achivement;

const AchivementItem = ({ info }) => {
  return (
    <div className={styles.item}>
      <span className="text-bold">{info.name}: </span>
      <span className={styles.description}>
        {info.description}
        <span className="ml-5 text-bold">({info.startDate}-{info.endDate})</span>
        </span>
    </div>
  );
};
