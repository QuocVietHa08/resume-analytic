import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const GENERAL_SERVICE = [
  'Inspect and clean the air filter, front panel, and cover of the air conditioning unit.',
  'Soak the components in a chemical solution to remove stubborn dirt and grime.',
  'Use a high-pressure water jet to flush out the chemical solution and any remaining dirt or debris from the components.',
  'Replace any worn-out parts such as the fan belt or bearings.',
  'Clean the condenser coil and fins using a chemical solution and high-pressure water jet.',
  'Check the fan bearing and lubricate if necessary to ensure optimal performance.',
  'Flush the drainage system with a chemical solution to remove any blockages or buildup.',
  'Assemble the components back together and test the unit to ensure it is functioning correctly.',
  'Perform a final inspection to ensure all parts are properly installed and functioning correctly.'
];

const AirconChemicalOverhaulDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
       
        Aircon chemical overhaul is required when regular cleaning and filter replacement is no longer enough to restore optimal performance. This process involves disassembling the unit, cleaning its coils and components with chemicals, and replacing worn-out parts. Chemical overhaul can improve an air conditioning unit's efficiency, reduce energy consumption, and extend its lifespan. It can also improve indoor air quality by removing contaminants that may have built up in the unit. This service is recommended for older or neglected air conditioning units. Regular maintenance can help prevent the need for chemical overhaul and keep the system running efficiently.
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

export default AirconChemicalOverhaulDetail;
