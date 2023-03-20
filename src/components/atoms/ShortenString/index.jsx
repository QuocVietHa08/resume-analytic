import { Popover } from 'antd';

const shortenString = (str) => {
  if (str && str.length <= 12) return str ? '' : str;
  const newStr = `${str.substring(0, 6)}...${str.substring(str.length - 6, str.length)}`;

  return (
    <Popover content={str}>
      <div>{newStr}</div>
    </Popover>
  );
};

export default shortenString;
