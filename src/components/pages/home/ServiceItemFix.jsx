import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const ServiceItemFix = ({ title, imgSrc, services, links = [] }) => {

  return (
    <div className={styles.serviceItemWrapperFix}>
      <div className={styles.serviceItemImageWrapper}>
        <img src={`${imgSrc}.svg`} alt="img" />
      </div>
      <div className="flex flex-column gap-sp-5">
        <span className="text-bold font-size-20 font-size-tb-18 text-bold pt-tb-15 pt-25 pb-20">{title} </span>
        <div className="flex flex-column gap-10 gap-tb-5">
          <div className="transition-height flex flex-column gap-10">
            {services?.map((service, index) => (
              <Link key={service} href={links?.[index] || '/service'}>
                <div className="font-size-18 font-size-tb-14 hover-underline text-capitalize color-black ">{service}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceItemFix;
