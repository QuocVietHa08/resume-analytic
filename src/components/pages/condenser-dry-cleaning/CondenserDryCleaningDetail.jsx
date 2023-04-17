import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const GENERAL_SERVICE = [
  'Inspect and clean the air filter, front panel, and cover of the air conditioning unit..',
  'Unscrew the protective cover or grille to access the condenser fins.',
  'Use a specialized cleaning tool or compressed air to remove dirt and debris from the condenser fins.',
  'Brush or wipe the fins with a soft brush or cloth to remove any remaining dirt or debris.',
  'Check the condenser fan for any signs of damage or wear.',
  'Check for any refrigerant leaks or other signs of damage.',
  'Replace the protective cover or grille and secure it with screws.',
  'Reconnect the power supply and turn on the aircon to test its performance.',
  'Document the date and results of the condenser dry cleaning for future reference.'
];
const CondenserDryCleaningDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        Condenser Dry Cleaning for aircon is crucial in maintaining the efficiency of the air conditioning system. The condenser unit, responsible for releasing the heat, can accumulate dirt, dust, and debris, reducing its ability to release heat and leading to increased energy consumption. Through the use of compressed air or a specialized cleaning tool, Condenser Dry Cleaning removes debris from the condenser unit's fins, improving cooling capacity, energy consumption, and the equipment's lifespan.
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

export default CondenserDryCleaningDetail;
