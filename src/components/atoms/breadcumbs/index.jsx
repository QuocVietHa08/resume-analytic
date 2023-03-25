import React from 'react';
import styles from './styles.module.scss';

const BreadCumbs = ({ pages }) => {
  return (
    <div className={styles.breadcumbsContainer}>
      <div className={styles.breadcumbsWrapper}>
        {pages.map((page, index) => (
          <span key={page}>
            <span className={`${index === pages?.length - 1 ? 'color-primary-i' : ''} mr-10 mr-sp-5`}>{page}</span>
            <span className="mr-10 mr-sp-5">{index !== pages?.length - 1 ? '>' : ''}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreadCumbs;
