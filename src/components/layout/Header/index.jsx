import { useState } from 'react';
import { Drawer, Space } from 'antd';
import Link from 'next/link';

import styles from './styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const Header = () => {
  const [open, setOpen] = useState(false);
  const width = useDetectWindowSize();
  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <img src="/img/header/avatart.svg" alt="avatar" />
      </div>
      <div>
        {width > 780 ? (
          <ul className="flex gap-10">
            <li><Link href="/">Home</Link></li>
            <li>
              <Link href="/service">Services</Link>{' '}
            </li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
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
          <p><Link href="/">Home</Link></p>
          <p><Link href="/service">Service</Link></p>
          <p><Link href="/faq">FAQ</Link></p>
          <p><Link href="/contact">Contact Us</Link></p>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
