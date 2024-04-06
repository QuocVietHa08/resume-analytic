import React from 'react';
import { Row, Col } from 'antd';
import styles from './styles.module.scss';

const Experience = ({ info }) => {
  return (
    <div className={styles.experience}>
      <div className={styles.title}>
        <div className={styles.text}>Experience</div>
        <div className={styles.line}></div>
      </div>
      <div className="flex flex-column gap-10">
        {info.map((item) => (
          <ExperienceItem key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

const ExperienceItem = ({ info }) => {
  return (
    <div className={styles.item}>
      <Row>
        <Col span={8} className="text-bold">
          {info.role}
        </Col>
        <Col span={8} className="text-bold text-center text-underline">
          {info.company}
        </Col>
        <Col span={8} className="text-bold text-right">
          {info.location}, {info.startDate} - {info.endDate}
        </Col>
      </Row>
      <div>{info.description}</div>
    </div>
  );
};
