import React from 'react';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const HELPER_NUMBERS = [
  {
    value: '100%',
    text: 'Satisfaction',
  },
  {
    value: '30+',
    text: 'Services Completed',
  },
  {
    value: '100+',
    text: 'Dedicated Staff',
  },
];

const HELPER_NUMERS_SP = [
  {
    value: '100%',
    text: 'Satisfaction',
  },
  {
    value: '100',
    text: 'Services Completed',
  },
  {
    value: '21',
    text: 'Award winner',
  },
];

const HELPER_INFO_VALUES = [
  {
    imgSrc: '/img/home/helper/cost',
    title: 'Cost-Effective One-stop solutions',
    des: 'We provide one-stop service solutions for your home or business needs at affordable rates.',
  },
  {
    imgSrc: '/img/home/helper/team',
    title: 'Expert Team',
    des: 'Our cleaners go through rigorous training and selection to ensure that we provide our customers with exceptional quality services',
  },
  {
    imgSrc: '/img/home/helper/enviroment',
    title: 'Environmental Protection Agency (EPA) Approved Chemicals',
    des: 'As a professional cleaning company, we supply state-of-the-art technology and premium cleaning resources which are safe for children, pets and improve indoor air quality.',
  },
];

const HELPER_INFO_VALUES_SP = [
  {
    imgSrc: '/img/home/helper/cost',
    title: `Cost-Effective \n One-stop solutions`,
    des: `We Provide One-Stop Service Solutions To \n Your Home Or Business Needs At \n Affordable Rates`,
  },
  {
    imgSrc: '/img/home/helper/team',
    title: 'Expert Team',
    des: `Our cleaners go through rigorous \n training and selection to ensure that \n we provide our customers with hotel \n exceptional quality services`,
  },
  {
    imgSrc: '/img/home/helper/enviroment',
    title: `Environmental Protection Agency \n(EPA) Approved Chemicals`,
    des: 'As a professional cleaning company, we \n supply state-of-the-art technology and \n premium cleaning resources which are safe for \n children, pets and improve indoor air quality.',
  },
];
const Helper = () => {
  const width = useDetectWindowSize();

  return (
    <div className={styles.helperContainer}>
      <div className={styles.helperTitle}>Why Choose Kung Fu Helper? </div>
      <div className={styles.helperStatisticWrapper}>
        <section>
          {width > 769 ? (
            HELPER_NUMBERS.map((item) => (
              <div key={item.text} className={styles.helperItem}>
                <p>{item.value}</p>
                <span>{item.text}</span>
              </div>
            ))
          ) : (
            <>
              {HELPER_NUMERS_SP.map((item) => (
                <div key={item.text} className={styles.helperItem}>
                  <p>{item.value}</p>
                  <span>{item.text}</span>
                </div>
              ))}
            </>
          )}
        </section>
      </div>

      <div className={styles.helperInfoValue}>
        <section>
          {width > 768 ? (
            HELPER_INFO_VALUES.map((item) => (
              <div key={item.title} className={styles.helperInfoItem}>
                <div className={styles.helperInfoItemImageWrapper}>
                  <img src={`${width > 780 ? `${item.imgSrc}.svg` : `${item.imgSrc}_sp.svg`}`} alt="item" />
                </div>
                <p>{item.title}</p>
                <span>{item.des}</span>
              </div>
            ))
          ) : (
            <>
              {HELPER_INFO_VALUES_SP.map((item) => (
                <div key={item.title} className={styles.helperInfoItem}>
                  <div className={styles.helperInfoItemImageWrapper}>
                    <img src={`${width > 780 ? `${item.imgSrc}.svg` : `${item.imgSrc}_sp.svg`}`} alt="item" />
                  </div>
                  <p>{item.title}</p>
                  <span>{item.des}</span>
                </div>
              ))}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Helper;
