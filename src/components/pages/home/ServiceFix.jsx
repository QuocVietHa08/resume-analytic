import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ServiceItem from './ServiceItem';
import ServiceItemFix from './ServiceItemFix';
import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

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
      '/services/part-time-helper',
      '/services/part-time-helper',
      '/services/part-time-helper',
      '/services/part-time-helper',
      '/services/part-time-helper',
      '/services/part-time-helper',
      '/services/part-time-helper',
    ],
  },
  {
    name: 'Upholstery Cleaning',
    type: 'service',
    imgSrc: '/img/home/service/furniture',
    services: ['Curtain Cleaning', 'Carpet Cleaning', 'Sofa Cleaning', 'Mattress Cleaning', 'Upholstery Cleaning'],
    links: [
      '/services/curtain-cleaning',
      '/services/carpet-cleaning',
      '/services/sofa-cleaning',
      '/services/mattress-cleaning',
      '/services/upholstery-cleaning',
    ],
  },
  {
    name: 'House Cleaning',
    type: 'service',
    imgSrc: '/img/home/service/house_cleaning',
    services: ['Post-Renovation Cleaning', 'Move In / Move out cleaning', 'Spring Cleaning', 'house disinfection'],
    links: ['/services/post-renovation-cleaning', '/services/move', '/services/spring-cleaning', '/services/house-disinfection'],
  },
  {
    name: 'Handy Home Services',
    type: 'service',
    imgSrc: '/img/home/service/home_service',
    services: ['General handyman services', 'pool cleaning', 'pest control', 'landscaping', 'flooring', 'organising', 'moving'],
    links: [
      '/services/general-handyman-services',
      '/services/pool-cleaning',
      '/services/pest-control',
      '/services/landscaping-services',
      '/services/flooring-services',
      '/services/organising-services',
      '/services/moving-services',
    ],
  },
  {
    name: 'Landscaping Services',
    type: 'service',
    imgSrc: '/img/home/service/landscaping',
    services: [
      'Grass Cutting',
      'Shrubs and Plants Trimming',
      'Weeding',
      'Tree Pruning (Below 3m)',
      'Plants Watering',
      'Insecticide Spraying',
    ],
    links: [
      '/services/grass-cutting',
      '/services/shrubs-and-plants-trimming',
      '/services/weeding',
      '/services/tree-pruning',
      '/services/plants-watering',
      '/services/insecticide-spraying'
    ],
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
    links: [
      '/services/ac-diagnostic-service',
      '/services/general-servicing',
      '/services/aircon-chemical-wash',
      '/services/aircon-chemical-overhaul',
      '/services/condenser-dry-cleaning',
      '/services/air-filtration-installation',
      '/services/gas-top-up',
    ],
  },
];

const ServiceFix = () => {
  const [activeService, setActiveService] = useState('');
  const width = useDetectWindowSize();
  const router = useRouter();
  const handlSetActiveService = (id) => {
    setActiveService(id);
  };

  const handleRenderActiveService = useCallback(() => {
    return SERVICE_DETAIL_FIX.map((service) => {
      if (service.name === activeService) {
        return (
          <div className={styles.showServiceItemDetail} key={service.name}>
            <div>
              <img src={`${service.imgSrc}.svg`} alt="img" />
            </div>
            <div className={styles.detail}>
              <p>{service.name}</p>
              <div className={styles.serviceLinkWrapper}>
                {service.services?.map((serviceItem, index) => (
                  <Link key={serviceItem} href={service.links?.[index] || '/service'}>
                    <div className="font-size-sp-12 hover-underline text-capitalize color-black">{serviceItem}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      }
      return <></>;
    });
  }, [activeService]);

  return (
    <div className={`${styles.serviceContainerFix} ${router.pathname === '/services' ? 'mt-50' : ''}`}>
      {router.pathname !== '/services' && (
        <h4>
          What
          <span>Services</span>
          Do {width < 768 && <br />} We Provide ?
        </h4>
      )}
      <>
        <p className={styles.serviceDes}>
          {width > 768 ? (
            <span>
              We offer a wide range of services at Kungfu Helper, click on each of our <br /> main service category below to find out more
              on what we provide in detail!
            </span>
          ) : (
            <span>
              We offer a wide range of services at Kungfu Helper, <br /> click on each of our main service category below to <br /> find out
              more on what we provide in detail!
            </span>
          )}
        </p>
        {width > 768 && (
          <>
            <div className={styles.serviceItemsWrapperPCFix}>
              {SERVICE_DETAIL_FIX.map((serviceItems) => (
                <React.Fragment key={serviceItems}>
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
              <span className="text-bold font-size-36 font-size-tb-16"> Unable to find the service you are looking for?</span>
              <Link href="/contact-us" className={styles.buttonContactCannotFind}>
                Contact Us
              </Link>
            </div>
          </>
        )}
        {width < 768 && (
          <div>
            <div className={styles.serviceItemsWrapper}>
              {SERVICE_DETAIL_FIX.map((item) => (
                <React.Fragment key={item.name}>
                  <ServiceItem activeService={activeService} handleOnClick={handlSetActiveService} imgSrc={item.imgSrc} title={item.name} />
                </React.Fragment>
              ))}
            </div>
            {activeService.length > 0 && <div className={styles.showServicesDetail}>{handleRenderActiveService()}</div>}
            <div className={styles.cannotFindServiceWrapper}>
              <span className="text-bold font-size-tb-16"> Unable to find the service you are looking for?</span>
              <Link href="/contact-us" className={styles.buttonContactCannotFind}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ServiceFix;
