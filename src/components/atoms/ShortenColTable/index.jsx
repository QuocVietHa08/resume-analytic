import { Popover } from 'antd';

import style from './shortenColTable.module.scss'

const ShortenColTable = (str) => {
  const content = (
    <span className={style.fullContent}>
      {str}
    </span>
  )
  return (
    <Popover content={content}>
      <span className={style.colDescription}>{str}</span>
    </Popover>
  );
};

export default ShortenColTable;
