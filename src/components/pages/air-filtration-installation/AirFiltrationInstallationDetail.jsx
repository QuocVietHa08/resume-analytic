import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const GENERAL_SERVICE = [
  'Inspect and clean the air filter, front panel, and cover of the air conditioning unit.',
  'Install the air filtration system in the aircon unit.',
  'Make sure the air filtration system is securely attached to the aircon unit and sealed properly.',
  `Turn on the air conditioning system and test the air filtration system's performance.`,
  'Ensure that the air filtration system is maintained and replaced on a regular schedule to ensure optimal performance.'
];

const AirFiltrationInstallationDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.handymanServiceDetail}>
      <div className="font-size-24 font-size-sp-12 font-size-tb-16 mb-50 mb-sp-30 mb-tb-40">
        Air Filtration Installation for aircon is required to improve the indoor air quality of a room or building. Air conditioning units can circulate air that contains pollutants, such as dust, pollen, mold spores, and bacteria. These contaminants can cause health problems for individuals who are sensitive to them or have respiratory issues. Air Filtration Installation involves installing air filters that can capture these pollutants and prevent them from circulating in the indoor environment. The installation of air filters can help reduce allergies, asthma, and other respiratory issues, and improve the overall air quality of a room or building.
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

export default AirFiltrationInstallationDetail;
