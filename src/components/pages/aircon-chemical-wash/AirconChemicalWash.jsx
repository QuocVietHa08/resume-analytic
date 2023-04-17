import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const GENERAL_SERVICE = [
  'Inspect and clean the air filter, front panel, and cover of the air conditioning unit.',
  `Verify the deodorising and purifying filter to ensure it's functioning correctly.`,
  'Clean and inspect the indoor evaporator coil to remove any dirt and debris.',
  'Examine and clean the indoor drainage tray for proper functioning.',
  'Vacuum the drainage system to clear any blockages or debris.',
  'Check the fan bearing and lubricate if necessary to ensure optimal performance.',
  'Inspect the compressor suction and discharge pressure to verify the unit is operating efficiently.',
  'Perform an aircon gas top-up if necessary (chargeable service).',
  'Tighten electrical contacts to ensure safety and efficiency.'
];
const AirconChemicalWashDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        Aircon chemical wash is important for improving the performance of your air conditioning unit, enhancing indoor air quality,
        prolonging its lifespan, and identifying potential issues before they become major problems. Chemical washing removes the buildup of
        dirt and debris, which can reduce efficiency and cause wear and tear.
      </div>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        By removing mold, bacteria, and other harmful microorganisms, chemical washing improves the air quality inside your space. Overall,
        chemical washing is an essential preventative maintenance service that required every 6 month to keep your AC unit running smoothly
        and efficiently.
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

export default AirconChemicalWashDetail;
