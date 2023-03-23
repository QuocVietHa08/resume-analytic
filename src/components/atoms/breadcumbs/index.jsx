import React from 'react';
import styles from './styles.module.scss';

const BreadCumbs = ({ pages }) => {
  return (
    <div className={styles.breadcumbsContainer}>
      {pages.map((page, index) => (
        <span key={page}>{page} {index !== (pages?.length-1) ?  '>': ''}</span>
      ))}
    </div>
  );
};

export default BreadCumbs;
