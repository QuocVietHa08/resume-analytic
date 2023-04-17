import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const GENERAL_SERVICE = [
  'Inspect and clean the air filter, front panel, and cover of the air conditioning unit.',
  'Check the deodorising and purifying filter for any signs of wear and tear or damage.',
  'Clean and inspect the indoor evaporator coil to remove any dirt and debris.',
  'Check and clean the indoor drainage tray for wall-mounted fan coils.',
  'Vacuum the drainage pan for ceiling-mounted fan coils. ',
  'Vacuum the drainage system to remove any blockages or debris.',
  'Brush and inspect the outdoor condenser coil for any dirt or debris.',
  'Check the fan bearing and lubricate if necessary to ensure optimal performance.',
  'Inspect the compressor suction and discharge gas pressure to ensure that the unit is operating efficiently.',
];
const GeneralServicingDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
      A well-maintained air conditioning system can also help to reduce energy consumption and lower energy bills. It is recommended to service air conditioning units 2 to 4 time a year, depending on usage and environmental conditions. Neglecting to service your air conditioning unit can lead to costly repairs, higher energy bills, and decreased indoor air quality.
      </div>
      <div className={`${styles.introText}`}>General Servicing</div>
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

export default GeneralServicingDetail;
