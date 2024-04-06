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
        <Col span={8} className="text-bold text-center flex-i justify-center">
          <div className="text-bold text-center border-bottom-1 no-wrap w-min-content">{info.company}</div>
        </Col>
        <Col span={8} className="text-bold text-right">
          {info.location}, {info.startDate} - {info.endDate}
        </Col>
      </Row>
      <div>
        <ul>
          {info.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="text-bold">Projects: </div>
      <ul>
        {info.projects.map((project) => (
          <li key={project.id}>
            <span className="text-bold">{project.name}: </span>
            <span>{project.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
