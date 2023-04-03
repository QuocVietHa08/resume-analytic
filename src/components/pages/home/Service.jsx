import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ServiceItem from './ServiceItem';
import styles from './styles.module.scss';

const SERVICE_DETAIL = [
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
      'landscaping-service',
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

const Service = () => {
  const [activeService, setActiveService] = useState('');
  const router = useRouter();
  const handlSetActiveService = (id) => {
    setActiveService(id);
  };

  return (
    <div className={styles.serviceContainer}>
      <h4>
        What
        <span>Service</span>
        Do We Provice
      </h4>
      <div>
        <p className={styles.serviceDes}>
          We offer a wide range of services at Kungfu Helper, click on each of our main service category below to find out more on what we
          provide in detail!
        </p>
        <div>
          <Link href="/part-time-helper">
            <div className={`${styles.serviceItemContainer}`}>
              <div>
                <img src="/img/home/service/part_time.svg" alt="img" />
              </div>
              <div className="flex flex-column gap-20 gap-sp-0">
                <span className="text-bold color-primary">Part-time Helper </span>
                <>
                  <div className="flex gap-10 item-center">
                    <p>Find Out More</p>
                    <span className={styles.dropdownStyle}>
                      <img src="/img/home/service/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </>
              </div>
            </div>
          </Link>

          {SERVICE_DETAIL.map((item) => (
            <div key={item.name}>
              <ServiceItem
                activeService={activeService}
                handleOnClick={handlSetActiveService}
                imgSrc={item.imgSrc}
                services={item.services}
                links={item.links}
                title={item.name}
                type={item.type}
              />
            </div>
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
      </div>
    </div>
  );
};

export default Service;
