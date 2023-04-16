import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ServiceItem from './ServiceItem';
import ServiceItemFix from './ServiceItemFix';
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

const SERVICE_DETAIL_FIX = [
  {
    name: 'Part-Time Helper',
    type: 'service',
    imgSrc: '/img/home/service/part_time',
    services: [
      'Vacuuming & Mopping',
      'Bedroom Cleaning',
      'Bathroom Cleaning',
      'Kitchen Cleaning',
      'Regular Dusting',
      'Rubbish Removal',
      'Ironing',
    ],
    links: [
      '/furniture/curtain-cleaning',
      '/furniture/carpet-cleaning',
      '/furniture/sofa-cleaning',
      '/furniture/mattress-cleaning',
      '/furniture/upholstery-cleaning',
    ],
  },
  {
    name: 'Upholstery Cleaning',
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
    services: ['General handyman services', 'pool cleaning', 'pest control', 'landscaping', 'flooring', 'organising', 'moving'],
    links: [
      'handyman-service',
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
  {
    name: 'Aircon Services',
    type: 'service',
    imgSrc: '/img/home/service/aircon_service',
    services: [
      'AC Diagnostic Service',
      'General Servicing',
      'Aircon Chemical Wash',
      'Aircon Chemical Overhaul',
      'Condenser Dry Cleaning',
      'Air Filtration Installation',
      'Gas Top Up ',
    ],
    links: ['', ''],
  },
];

const ServiceFix = () => {
  const [activeService, setActiveService] = useState('');
  const width = useDetectWindowSize();
  const router = useRouter();
  const handlSetActiveService = (id) => {
    setActiveService(id);
  };

  return (
    <div className={styles.serviceContainerFix}>
      <h4>
        What
        <span>Services</span>
        Do {width < 768 && <br />} We Provice ?
      </h4>
      <>
        <p className={styles.serviceDes}>
          We offer a wide range of services at Kungfu Helper, click on each of our <br /> main service category below to find out more on
          what we provide in detail!
        </p>
        {width > 1600 && (
          <>
          <div className={styles.serviceItemsWrapperPCFix}>
            {SERVICE_DETAIL_FIX.map((serviceItems, index) => (
              <React.Fragment key={index}>
                <ServiceItemFix
                  imgSrc={serviceItems.imgSrc}
                  services={serviceItems.services}
                  links={serviceItems.links}
                  title={serviceItems.name}
                  type={serviceItems.type}
                />
              </React.Fragment>
            ))}
          </div>
          <div className={styles.cannotFindServiceWrapper}>
            <span className="text-bold font-size-36"> Unable to find the service you are looking for?</span>
            <div className={styles.buttonContactCannotFind}>Contact Us</div>
          </div>
          </>
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
      </>
    </div>
  );
};

export default ServiceFix;
