import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const BreadCumbs = ({ pages }) => {
  return (
    <div className={styles.breadcumbsContainer}>
      <div className={styles.breadcumbsWrapper}>
        {pages.map((page, index) => (
          <span key={page.text}>
            <span className="mr-10 mr-sp-5">
              <Link href={page?.link} className={`${index === pages?.length - 1 ? 'color-primary-i font-size-24 font-size-sp-12 text-bold' : 'color-black text-bold font-size-sp-12 font-size-24'}`}>
                {page.text}
              </Link>
            </span>
            <span className="mr-10 mr-sp-5">{index !== pages?.length - 1 ? '>' : ''}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreadCumbs;
