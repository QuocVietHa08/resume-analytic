import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const ServiceItem = ({ activeService, title, imgSrc, services, handleOnClick }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    setIsActive(activeService === title)
  }, [activeService, title])

  const handleClickItem = () => {
    if (activeService === title) return handleOnClick('') 
    return handleOnClick(title)
  }
  return (
    <div
      onClick={handleClickItem}
      onKeyDown={handleClickItem}
      role="button"
      tabIndex={0}
      className={`${isActive ? styles.serviceItemContainerActive : styles.serviceItemContainer}`}
    >
      <div>{isActive ? <img src={`${imgSrc}_active.svg`} alt="img" /> : <img src={`${imgSrc}.svg`} alt="img" />}</div>
      <div className="flex flex-column gap-sp-5">
        <span className={`text-bold ${isActive ? 'color-white-i' : 'color-primary'}`}>{title} </span>
        <>
          <div className="flex flex-column gap-10">
            <div className="flex item-center gap-20 gap-sp-10">
              <p className={`${isActive ? 'color-white-i' : ''}`}>View Services</p>
              <span className={styles.dropdownStyle}>
                <img src="/img/home/service/dropdown.svg" alt="dropdown" />
              </span>
            </div>
              {/* {activeService === title && ( */}
                <div className={`${ !isActive ? 'none' : ''} transition-height flex flex-column gap-10`}>
                  {services?.map((service) => (
                    <div key={service} className="font-size-18 font-size-sp-12 text-capitalize color-white text-bold">
                      {service}
                    </div>
                  ))}
                </div>
              {/* )} */}
          </div>
        </>
      </div>
    </div>
  );
};
export default ServiceItem;
