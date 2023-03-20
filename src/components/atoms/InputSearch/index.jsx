import { Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useTrans from '@/i18n/useTrans';

const InputSearch = ({ onChange, value }) => {
  const trans = useTrans()
  return (
    <>
      <Col xs={24} sm={24} md={11} lg={11} xl={7}>
        <Input
          value={value}
          className="inputSearch mb-10"
          prefix={<SearchOutlined className="font-size-16" />}
          placeholder={trans.common.search}
          onChange={onChange}
        />
      </Col>
    </>
  );
};

export default InputSearch;
