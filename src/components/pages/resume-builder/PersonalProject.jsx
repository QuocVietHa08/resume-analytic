import React from 'react';
import styles from './styles.module.scss';

const PersonalProject = ({ info }) => {
  return (
    <div className={styles.personalProject}>
      <div className={styles.title}>
        <div className={styles.text}>Personal Projects</div>
        <div className={styles.line}></div>
      </div>
      <div className="flex flex-column gap-10">
        {info.map((item) => (
          <PersonalProjectItem key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default PersonalProject;

const PersonalProjectItem = ({ info }) => {
  return (
    <div className={styles.item}>
      <span className="text-bold">{info.name}: </span>
      <span className={styles.description}>{info.description}</span>
    </div>
  );
};
