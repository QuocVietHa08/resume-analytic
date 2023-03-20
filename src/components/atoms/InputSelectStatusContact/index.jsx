import { useEffect, useState } from 'react';
import { Select, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '@/redux/slices/selectContactSlice';
import useTrans from '@/i18n/useTrans';

const InputSelectStatusContact = ({ onChange }) => {
  const trans = useTrans()
  const [valueOptions, setValueOptions] = useState(null);
  const dispath = useDispatch();
  const valueStatus = useSelector((state) => state.contactSelect.status);

  const dataOptions = [
    {
      value: null,
      label: trans.inputSelectStatusContact.all,
    },
    {
      value: 0,
      label: trans.inputSelectStatusContact.pending,
    },
    {
      value: 1,
      label: trans.inputSelectStatusContact.done,
    },
    {
      value: 2,
      label: trans.inputSelectStatusContact.onHold,
    },
  ];

  useEffect(() => {
    setValueOptions(valueStatus);
  }, [valueStatus]);

  const handleChange = (e) => {
    const chainOption = dataOptions.filter((option) => option.value === e);
    onChange(e);
    dispath(changeStatus(chainOption[0]));
  };

  return (
    <Col xs={24} sm={24} md={11} lg={5} xl={4}>
      <Select
        className="cpnInputSelect"
        defaultValue={valueOptions}
        optionFilterProp="children"
        onChange={handleChange}
        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
        options={dataOptions}
      />
    </Col>
  );
};
export default InputSelectStatusContact;
