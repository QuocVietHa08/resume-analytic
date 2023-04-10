import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ServiceItem from './ServiceItem';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const SERVICE_DETAIL_SP = [
  {
    name: 'Furniture & Upholstery Cleaning',
    type: 'service',
    imgSrc: '/img/home/service/furniture',
    services: ['Curtain Cleaning', 'Carpet Cleaning', 'Sofa Cleaning', 'Mattress Cleaning', 'Upholstery Cleaning'],
    links: [
      '/furniture/curtain-cleaning',
      '/furniture/carpet-cleaning',
      '/furniture/sofa-cleaning',
      '/furniture/mattress-cleaning',
      '/furniture/upholstery-cleaning',
    ],
  },
  {
    name: 'House Cleaning',
    type: 'service',
    imgSrc: '/img/home/service/house_cleaning',
    services: ['Post-Renovation Cleaning', 'Move In / Move out cleaning', 'Spring Cleaning', 'house disinfection'],
    links: ['/house-service/post-renovation', '/house-service/move', '/house-service/spring', '/house-service/house-disinfection'],
  },
  {
    name: 'Handy Home Services',
    type: 'service',
    imgSrc: '/img/home/service/home_service',
    services: [
      'General handyman services',
      'aircon servicing',
      'pool cleaning',
      'pest control',
      'landscaping',
      'flooring',
      'organising',
      'moving',
    ],
    links: [
      'handyman-service',
      'aircon-service',
      'pool-cleaning',
      'pest-control',
      'landscaping-services',
      'flooring-services',
      'organising-services',
      'moving-services',
    ],
  },
  {
    name: 'Office Cleaning',
    type: 'service',
    imgSrc: '/img/home/service/office_cleaning',
    services: ['General office cleaning', 'Office Disinfection'],
    links: ['office-cleaning', 'office-disinfection'],
  },
];

const SERVICE_DETAIL = [
  [
    {
      name: 'Furniture & Upholstery Cleaning',
      type: 'service',
      imgSrc: '/img/home/service/furniture',
      services: ['Curtain Cleaning', 'Carpet Cleaning', 'Sofa Cleaning', 'Mattress Cleaning', 'Upholstery Cleaning'],
      links: [
        '/furniture/curtain-cleaning',
        '/furniture/carpet-cleaning',
        '/furniture/sofa-cleaning',
        '/furniture/mattress-cleaning',
        '/furniture/upholstery-cleaning',
      ],
    },
    {
      name: 'House Cleaning',
      type: 'service',
      imgSrc: '/img/home/service/house_cleaning',
      services: ['Post-Renovation Cleaning', 'Move In / Move out cleaning', 'Spring Cleaning', 'house disinfection'],
      links: ['/house-service/post-renovation', '/house-service/move', '/house-service/spring', '/house-service/house-disinfection'],
    },
  ],
  [
    {
      name: 'Handy Home Services',
      type: 'service',
      imgSrc: '/img/home/service/home_service',
      services: [
        'General handyman services',
        'aircon servicing',
        'pool cleaning',
        'pest control',
        'landscaping',
        'flooring',
        'organising',
        'moving',
      ],
      links: [
        'handyman-service',
        'aircon-service',
        'pool-cleaning',
        'pest-control',
        'landscaping-services',
        'flooring-services',
        'organising-services',
        'moving-services',
      ],
    },
    {
      name: 'Office Cleaning',
      type: 'service',
      imgSrc: '/img/home/service/office_cleaning',
      services: ['General office cleaning', 'Office Disinfection'],
      links: ['office-cleaning', 'office-disinfection'],
    },
  ],
];

const Service = () => {
  const [activeService, setActiveService] = useState('');
  const width = useDetectWindowSize();
  const router = useRouter();
  const handlSetActiveService = (id) => {
    setActiveService(id);
  };

  return (
    <div className={styles.serviceContainer}>
      <h4>
        What
        <span>Services</span>
        Do {width < 768 && <br />} We Provice ?
      </h4>
      <div>
        <p className={styles.serviceDes}>
          We offer a wide range of services at Kungfu Helper, click on each of our main service category below to find out more on what we
          provide in detail!
        </p>
        {width > 1600 && (
          <div className={styles.serviceItemsWrapperPC}>
            {SERVICE_DETAIL.map((serviceItems, index) => (
              <>
                {index === 0 && (
                  <div className="flex flex-column">
                    <div className={`${styles.serviceItemContainer}`}>
                      <div>
                        <img src="/img/home/service/part_time.svg" alt="img" />
                      </div>
                      <div className="flex flex-column gap-sp-5">
                        <span className="text-bold color-primary">Part-time Helper </span>
                        <>
                          <Link href="/part-time-helper">
                            <div className="flex gap-10 item-center">
                              <p>Find Out More</p>
                              <span className={styles.dropdownStyle}>
                                <img src="/img/home/service/arrow.svg" alt="arrow" />
                              </span>
                            </div>
                          </Link>
                        </>
                      </div>
                    </div>
                    {serviceItems.map((item) => (
                      <React.Fragment key={item.name}>
                        <ServiceItem
                          activeService={activeService}
                          handleOnClick={handlSetActiveService}
                          imgSrc={item.imgSrc}
                          services={item.services}
                          links={item.links}
                          title={item.name}
                          type={item.type}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {index === 1 && (
                  <div className="flex flex-column">
                    {serviceItems.map((item) => (
                      <React.Fragment key={item.name}>
                        <ServiceItem
                          activeService={activeService}
                          handleOnClick={handlSetActiveService}
                          imgSrc={item.imgSrc}
                          services={item.services}
                          links={item.links}
                          title={item.name}
                          type={item.type}
                        />
                      </React.Fragment>
                    ))}
                    <div className={`${styles.serviceItemContactContainer}`}>
                      <span className="text-bold color-white ">Unable to find the service you are looking for?</span>
                      <>
                        <button type="button" onClick={() => router.push('/contact')} className={styles.contactButton}>
                          <span>Contact Us</span>
                        </button>
                      </>
                    </div>
                  </div>
                )}
              </>
            ))} 
          </div>
        )}
        {width < 1600 && (
          <div className={styles.serviceItemsWrapper}>
            <div className={`${styles.serviceItemContainer}`}>
              <div className={styles.serviceItemImageWrapper}>
                <img src="/img/home/service/part_time.svg" alt="img" />
              </div>
              <div className="flex flex-column gap-20 gap-tb-0 gap-sp-5">
                <span className="text-bold font-size-tb-16 color-primary">Part-time Helper </span>
                <>
                  <Link href="/part-time-helper">
                    <div className="flex gap-10 item-center">
                      <p className="font-size-tb-16">Find Out More</p>
                      <span className={styles.dropdownStyle}>
                        <img src="/img/home/service/arrow.svg" alt="arrow" />
                      </span>
                    </div>
                  </Link>
                </>
              </div>
            </div>

            {SERVICE_DETAIL_SP.map((item) => (
              <React.Fragment key={item.name}>
                <ServiceItem
                  activeService={activeService}
                  handleOnClick={handlSetActiveService}
                  imgSrc={item.imgSrc}
                  services={item.services}
                  links={item.links}
                  title={item.name}
                  type={item.type}
                />
              </React.Fragment>
            ))}
            <div className={`${styles.serviceItemContactContainer}`}>
              <span className="text-bold color-white font-size-tb-16 ">Unable to find the service you are looking for?</span>
              <>
                <button type="button" onClick={() => router.push('/contact')} className={styles.contactButton}>
                  <span className="font-size-tb-16">Contact Us</span>
                </button>
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
