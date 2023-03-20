import { useEffect, useState } from 'react';
import { Select, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { changeValueSelectChain } from '@/redux/slices/selectSlice';

const InputSelect = ({ onChange, onSearch, selectedChain }) => {
  const dispath = useDispatch();
  const [valueOptions, setValueOptions] = useState('');
  const [isValueOption, setIsValueOption] = useState(false);
  const valueChain = useSelector((state) => state.chainSelect.chain);
  const router = useRouter();

  const dataOptions = [
    {
      value: '1',
      label: 'ETH',
    },
    {
      value: '2',
      label: 'Polygon',
    },
  ];

  useEffect(() => {
    if (!router.asPath.includes('chain')) {
      setValueOptions(valueChain.value);
      localStorage.setItem('chain', selectedChain === '1' ? 'ETH' : 'MATIC');
      setIsValueOption(true);
      return;
    }
    setValueOptions(selectedChain);
    if (selectedChain == valueOptions) {
      handleChange(valueOptions);
      localStorage.setItem('chain', selectedChain === '1' ? 'ETH' : 'MATIC');
      setIsValueOption(true);
    }
  }, [selectedChain, valueOptions]);

  const handleChange = (e) => {
    const chainOption = dataOptions.filter((option) => option.value === e);
    onChange(e);
    dispath(changeValueSelectChain(chainOption[0]));
    localStorage.setItem('chain', e === '1' ? 'ETH' : 'MATIC');
  };

  return (
    isValueOption && (
      <Col xs={24} sm={24} md={11} lg={5} xl={4}>
        <Select
          className="cpnInputSelect"
          showSearch
          defaultValue={valueOptions}
          optionFilterProp="children"
          onChange={handleChange}
          onSearch={onSearch}
          filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
          options={dataOptions}
        />
      </Col>
    )
  );
};

export default InputSelect;
