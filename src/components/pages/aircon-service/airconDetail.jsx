import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const AIRCON_DETAIL = [
  'Daily, weekly & monthly bespoke package',
  'Photo identification badges & uniformed staff',
  'Electronic Time sheets',
  'In house training',
  'Cover of staff in the event of illness or any other reason.',
  'Provision of all equipment and cleaning materials included in the price',
  'A responsible approach to health & safety',
  'Environmentally aware working practices',
  'Comprehensive insurances',
  'Affordable pricing',
  'Free site visit'
]

const ACRCION_DETAIL2 = [
  'Clean & check air filter, front panel & cover',
  'Check deodorising and purifying filter',
  'Cleaning & checking indoor evaporator coil',
  'Cleaning & checking indoor drainage tray',
  'Vacuuming of drainage system',
  'Checking fan bearing and lubrication (if necessary)',
  'Checking compressor suction and discharge pressure',
  'Aircon gas top up(chargeable, if necessary)',
  'Tightening electrical contacts'
]


const AirconDetail = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.airconServiceDetailContainer}>
      <div className={styles.serviceDetail}>
        <div>
          <img src={`${width > 1600 ? '/img/aircon/image-detail1.svg' : `/img/aircon/image-detail1_sp.svg`}`} alt="img" />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} text-left mb-30 mb-sp-20`}>Aircon General maintainence</div>
          <p>
            Every aircon is recommended to have a check every 3 or 4 months once to ensure that the aircon is cooling properly. Regular
            maintenance will prolong the lifespan of your aircon and will address issues earlier before it turns faulty.
          </p>

          <div className="flex flex-column gap-30 gap-tb-20 gap-sp-20">
          {AIRCON_DETAIL.map((item) => (
            <div className={styles.airconItem} key={item}>
              <img
                src={`${
                  width > 1600 ? '/img/office-cleaning/cleaning-detail/check.svg' : `/img/office-cleaning/cleaning-detail/check_sp.svg`
                }`}
                alt="img"
              />
              <span>{item}</span>
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className={`${styles.serviceDetailAignRight} ${styles.marginLeftBaseOnWidth} mb-100 mb-sp-50 mb  flex-reverse`}>
        <div>
          <img src={`${width > 1600 ? '/img/aircon/image-detail2.svg' : `/img/aircon/image-detail2_sp.svg`}`} alt="img" />
        </div>
        <div className={styles.serviceDetailContent}>
          <div className={`${styles.introText} text-left mb-30 mb-sp-20`}>Aircon Chemical Wash</div>
          <p>
          Chemical wash is needed when your aircon causes water leakage and bad odour. Chemical wash can prevent all these from happening, and more. It is also recommended for the aircon to be chemically washed every 6 months.
          </p>

          <div className="flex flex-column gap-30 gap-tb-20 gap-sp-20">
          {ACRCION_DETAIL2.map((item) => (
            <div className={styles.airconItem} key={item}>
              <img
                src={`${
                  width > 1600 ? '/img/office-cleaning/cleaning-detail/check.svg' : `/img/office-cleaning/cleaning-detail/check_sp.svg`
                }`}
                alt="img"
              />
              <span>{item}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirconDetail;
