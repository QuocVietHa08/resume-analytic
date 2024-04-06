import React from 'react';
import styles from './styles.module.scss';

const Education = ({ info }) => {
  return (
    <div className={styles.education}>
      <div className={styles.title}>
        <div className={styles.text}>Education</div>
        <div className={styles.line}></div>
        </div>
      <div>
        <div className="flex items-center justify-between">
          <div>{info.major}, {info.school}</div>
          <div>{info.startDate}-{info.endDate}</div>
        </div>
        <div>Degree: {info.degree}</div>
      </div>
    </div>
  )
}

export default Education;