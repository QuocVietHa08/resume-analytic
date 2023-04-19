/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Drawer, Space } from 'antd';
import Link from 'next/link';

import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const width = useDetectWindowSize();
  const [breadcumbs, setBreadCumbs] = useState([]);
  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    const pathname = router.pathname.split('/');
    const cloneBreadcumb = pathname.map((url, index) =>
      url === '' ? 'home /' : pathname.length > 2 && index < pathname.length - 1 ? `${url} /` : url.split("-").join(" "),
    );
    setBreadCumbs(cloneBreadcumb);
  }, [router]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <img src="/img/header/avatart.svg" alt="avatar" />
          </Link>
        </div>
        <div>
          {width > 780 ? (
            <ul className="flex mb-0 gap-10 text-font-family">
              <li>
                <Link href="/" className="text-font-family text-normal">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-font-family text-normal">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-font-family text-normal">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-font-family text-normal">
                  Contact Us
                </Link>
              </li>
            </ul>
          ) : (
            <div role="button" tabIndex={0} onKeyPress={showDrawer} onClick={showDrawer}>
              <img src="/img/header/menu.svg" alt="menu" />
            </div>
          )}
        </div>

        <Drawer
          onClose={onClose}
          open={open}
          title={<div className="none">hello</div>}
          closable={false}
          extra={
            <Space>
              <div role="button" tabIndex={0} onKeyPress={onClose} onClick={onClose}>
                <img src="/img/header/close.svg" alt="close" />
              </div>
            </Space>
          }
        >
          <div className={styles.drawerWrapper}>
            <p onClick={onClose} role="button" tabIndex={0} onKeyDown={onClose}>
              <Link href="/" className="text-font-family">
                Home
              </Link>
            </p>
            <p onClick={onClose} role="button" tabIndex={0} onKeyDown={onClose}>
              <Link href="/services" className="text-font-family">
                Service
              </Link>
            </p>
            <p onClick={onClose} role="button" tabIndex={0} onKeyDown={onClose}>
              <Link href="/faq" className="text-font-family">
                FAQ
              </Link>
            </p>
            <p onClick={onClose} role="button" tabIndex={0} onKeyDown={onClose}>
              <Link href="/contact" className="text-font-family">
                Contact Us
              </Link>
            </p>
          </div>
        </Drawer>
      </div>
      {router.pathname !== '/' && (
        <div className={styles.headerBreadCumbWrapper}>
          {breadcumbs?.map((page, index) => (
            <span key={page}>
              <span className="mr-10 mr-sp-5">
                <Link
                  href={page === 'home /' ? '/' : page}
                  className={`${
                    index === breadcumbs?.length - 1
                      ? 'color-primary-i text-capitalize font-size-24 font-size-tb-16 font-size-sp-12 text-bold'
                      : 'color-black text-bold text-capitalize font-size-sp-12 font-size-tb-16 font-size-24'
                  }`}
                >
                  {page}
                </Link>
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
