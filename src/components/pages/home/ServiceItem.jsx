import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const ServiceItem = ({ activeService, title, imgSrc, handleOnClick }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(activeService === title);
  }, [activeService, title]);

  const handleClickItem = () => {
    return handleOnClick(title);
  };
  return (
    <div
      onClick={handleClickItem}
      onKeyDown={handleClickItem}
      role="button"
      tabIndex={0}
      className={`${isActive ? styles.serviceItemContainerActive : styles.serviceItemContainer}`}
    >
      <div>{isActive ? <img src={`${imgSrc}_active.svg`} alt="img" /> : <img src={`${imgSrc}.svg`} alt="img" />}</div>
      <div className="flex flex-column text-center items-center gap-sp-5">
        <span className={`text-normal ${isActive ? 'color-white-i' : 'color-primary'}`}>{title} </span>
      </div>
    </div>
  );
};
export default ServiceItem;
