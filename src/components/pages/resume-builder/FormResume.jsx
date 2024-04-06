import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

import styles from './styles.module.scss';

const FormResume = ({ info, onChangeInfo }) => {
  console.log('info', info);

  return (
    <div className={styles.formResumeContainer}>
      <div>
        <Button type="button">Donwload PDf</Button>
      </div>
    </div>
  );
};

export default FormResume;
