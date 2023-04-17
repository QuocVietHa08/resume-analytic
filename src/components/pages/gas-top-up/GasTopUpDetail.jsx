import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const GENERAL_SERVICE = [
  'Check the refrigerant level',
  'Recover the remaining refrigerant',
  'Vacuum system to remove moisture and non-condensable gases',
  'Refill system with the proper amount of refrigerant',
  'Check for proper cooling operation'
];
const GasTopUpDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        Aircon gas refill/top-up is important because the refrigerant gas in the air conditioning system is responsible for absorbing heat from the indoor environment and releasing it outside. Over time, the refrigerant gas level in the system can decrease due to leaks or evaporation, causing the aircon to become less effective at cooling the indoor environment. This can lead to increased energy consumption, reduced efficiency, and eventually, the complete breakdown of the air conditioning system.
      </div>

      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        Refilling or topping up the refrigerant gas can restore the aircon's cooling capacity and improve its efficiency, reducing energy consumption and prolonging the lifespan of the equipment. It is important to note that topping up refrigerant gas should only be done by a qualified technician, as adding too much or too little gas can cause further problems with the system.
      </div>

      <div className={styles.introText}>
      Checklist for Aircon Gas Refill/Top Up:
      </div>

      <div className="flex mt-20 mt-sp-10 mt-tb-15 flex-column gap-30 mb-100 mb-sp-50 gap-sp-20">
        {GENERAL_SERVICE.map((item) => (
          <div className={styles.cleaningItem} key={item}>
            <img
              src={`${
                width > 779 ? '/img/office-cleaning/cleaning-detail/check.svg' : `/img/office-cleaning/cleaning-detail/check_sp.svg`
              }`}
              alt="img"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GasTopUpDetail;
