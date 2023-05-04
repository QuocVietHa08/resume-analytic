/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const AC_LIST = [
  'Check thermostat and temperature readings',
  'Inspect electrical connections and wiring',
  'Check refrigerant levels and pressure',
  'Inspect and clean evaporator and condenser coils',
  'Check and clean filters',
  'Inspect and lubricate fan motor',
  'Check and calibrate system controls and safety switches',
  'Inspect and test contactors',
  'Test compressor and compressor motor',
  'Check and test defrost control (for heat pumps)',
];
const AcDiagnosticDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        Aircon Diagnostic Service is required to identify and diagnose any issues or problems with an air conditioning system. Over time,
        aircon systems can develop faults or experience a decline in performance, which can lead to increased energy consumption, reduced
        cooling capacity, and higher utility bills. Diagnostic service involves a thorough examination of the aircon unit to identify any
        underlying problems, including issues with the compressor, refrigerant leaks, faulty electrical components, or issues with the air
        ducts.
      </div>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        By identifying these issues early on, the aircon technician can recommend the appropriate repairs or services required to restore
        the unit's optimal performance, prevent further damage, and extend its lifespan. Diagnostic service can also help to prevent
        unexpected breakdowns, reduce repair costs, and improve the overall efficiency and performance of the air conditioning system.
      </div>
      <div className={`${styles.introText}`}>Checklist for Aircon Diagnostic Service:</div>
      <div className="flex mt-50 mt-sp-30 mt-tb-40 flex-column gap-30 mb-100 mb-sp-50 gap-sp-20">
        {AC_LIST.map((item) => (
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

export default AcDiagnosticDetail;
