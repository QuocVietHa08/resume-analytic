import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const BreadCumbs = ({ pages, links = [] }) => {
  const router = useRouter();
  const redirect = (link) => {
    if (!link) return;
    router.push(link);
  };
  return (
    <div className={styles.breadcumbsContainer}>
      <div className={styles.breadcumbsWrapper}>
        {pages.map((page, index) => (
          <span key={page}>
            <span
              className={`${index === pages?.length - 1 ? 'color-primary-i' : ''} mr-10 mr-sp-5`}
              onClick={() => redirect(links?.[index])}
            >
              {page}
            </span>
            <span className="mr-10 mr-sp-5">{index !== pages?.length - 1 ? '>' : ''}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreadCumbs;
