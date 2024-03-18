/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const SIDEBAR_ICON = [
  {
    id: 1,
    imgSrc: 'https://www.gstatic.com/images/icons/material/system/1x/directions_white_18dp.png',
    title: 'Direction',
    link: "https://www.google.com/maps/dir//31+WOODLANDS+CLOSE+%2303-11+WOODLANDS+HORIZON,+KUNG+FU+HELPER+PTE+LTD,+Singapore+737855/@1.4365609,103.8034262,17z/data=!3m1!5s0x31da13769bf4e5e7:0xd29bc5ae026f3d42!4m9!4m8!1m0!1m5!1m1!1s0x31da1317fba6bb1d:0x3f92bcb285eca85e!2m2!1d103.8060065!2d1.4365555!3e0"
  },
  {
    id: 2,
    imgSrc: 'https://www.gstatic.com/images/icons/material/system_gm/2x/bookmark_border_gm_blue_18dp.png',
    title: 'Save',
    link: "https://www.google.com/maps/dir//31+WOODLANDS+CLOSE+%2303-11+WOODLANDS+HORIZON,+KUNG+FU+HELPER+PTE+LTD,+Singapore+737855/@1.4365609,103.8034262,17z/data=!3m1!5s0x31da13769bf4e5e7:0xd29bc5ae026f3d42!4m9!4m8!1m0!1m5!1m1!1s0x31da1317fba6bb1d:0x3f92bcb285eca85e!2m2!1d103.8060065!2d1.4365555!3e0"
  },
  {
    id: 3,
    imgSrc: 'https://www.gstatic.com/images/icons/material/system_gm/2x/share_location_gm_blue_18dp.png',
    title: 'Nearby',
    link: "https://www.google.com/maps/dir//31+WOODLANDS+CLOSE+%2303-11+WOODLANDS+HORIZON,+KUNG+FU+HELPER+PTE+LTD,+Singapore+737855/@1.4365609,103.8034262,17z/data=!3m1!5s0x31da13769bf4e5e7:0xd29bc5ae026f3d42!4m9!4m8!1m0!1m5!1m1!1s0x31da1317fba6bb1d:0x3f92bcb285eca85e!2m2!1d103.8060065!2d1.4365555!3e0"
  },
  {
    id: 4,
    imgSrc: "https://maps.gstatic.com/consumer/images/icons/2x/send_to_mobile_alt_gm_blue_18dp.png",
    title: 'Send to phone',
    link: "https://www.google.com/maps/dir//31+WOODLANDS+CLOSE+%2303-11+WOODLANDS+HORIZON,+KUNG+FU+HELPER+PTE+LTD,+Singapore+737855/@1.4365609,103.8034262,17z/data=!3m1!5s0x31da13769bf4e5e7:0xd29bc5ae026f3d42!4m9!4m8!1m0!1m5!1m1!1s0x31da1317fba6bb1d:0x3f92bcb285eca85e!2m2!1d103.8060065!2d1.4365555!3e0"
  },
  {
    id: 5,
    imgSrc: 'https://www.gstatic.com/images/icons/material/system_gm/2x/share_gm_blue_18dp.png',
    title: 'Share',
    link: "https://www.google.com/maps/dir//31+WOODLANDS+CLOSE+%2303-11+WOODLANDS+HORIZON,+KUNG+FU+HELPER+PTE+LTD,+Singapore+737855/@1.4365609,103.8034262,17z/data=!3m1!5s0x31da13769bf4e5e7:0xd29bc5ae026f3d42!4m9!4m8!1m0!1m5!1m1!1s0x31da1317fba6bb1d:0x3f92bcb285eca85e!2m2!1d103.8060065!2d1.4365555!3e0"
  },
];

const SIDEBAR_INFO = [
  {
    id: 1,
    iconSrc: "https://www.gstatic.com/images/icons/material/system_gm/2x/place_gm_blue_24dp.png",
    text: "31 WOODLANDS CLOSE #03-11 WOODLANDS HORIZON, 737855"
  },
  {
    id: 2,
    iconSrc: "https://www.gstatic.com/images/icons/material/system_gm/2x/phone_gm_blue_24dp.png",
    text: "8383 0909",
  },  
  {
    id: 3,
    iconSrc: "https://maps.gstatic.com/mapfiles/maps_lite/images/2x/ic_plus_code.png",
    text: "CRP4+JC Singapore",
  },
  {
    id: 4,
    iconSrc: "https://maps.gstatic.com/consumer/images/icons/2x/send_to_mobile_alt_gm_blue_24dp.png",
    text: "Send to your phone"
  }, 
  {
    id: 5,
    iconSrc: "https://www.gstatic.com/images/icons/material/system_gm/2x/label_gm_blue_24dp.png",
    text: "Add a label"
  }
]

const SidebarMap = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true)
  const handleRenderSidebarIcon = () => {
    return SIDEBAR_ICON.map((icon) => {
      return (
        <a href={icon.link} key={icon.id} className={styles.iconWrapper}>
          <div className={icon.id === 1 ? styles.activeIconStyle : styles.iconStyle}>
            <img src={icon.imgSrc} alt="icon" />
          </div>
          <div className={styles.title}>{icon.title}</div>
        </a>
      );
    });
  };

  const handleRenderSidebarContent = () => {
    return SIDEBAR_INFO.map((item) => {
      return (
        <div key={item.id} className={styles.itemWrapper}>
          <div className={styles.iconImageWrapper}>
            <img src={item.iconSrc} alt="icon" />
          </div>
          <span>
            {item.text}
          </span>
        </div>
      )
    })
  }

  const handleCLoseSidebar = () => {
    setIsOpenSidebar((prev) => !prev)
  }
 
  return (
    <div className={isOpenSidebar ? styles.sidebarMapWrapper : styles.sidebarMapWrapperClose}>
      <div onClick={handleCLoseSidebar} role="button" tabIndex={0} className={isOpenSidebar ? styles.closeSidebarButton : styles.closeSidebarButtonClose}>
        <img src={isOpenSidebar ? "https://maps.gstatic.com/tactile/pane/arrow_left_2x.png" : "https://maps.gstatic.com/tactile/pane/arrow_left_2x.png"} alt="icon" />
      </div>
      <div onClick={handleCLoseSidebar} role="button" tabIndex={0} className={isOpenSidebar ? styles.closeIconWrapper : 'none'}>
        <CloseCircleOutlined />
      </div>
      <div className={styles.imageWrapper}>
        <img src="/img/contact/sidebarMap/image.jpeg" alt="contact" />
      </div>

      <div className={styles.sidebarTitlePlace}>
        <p>KUNG FU HELPER PTE LTD</p>
        <span>House cleaning service</span>
      </div>

      <div className={styles.sidebarIcon}>{handleRenderSidebarIcon()}</div>
      <div className={styles.sidebarContent}>{handleRenderSidebarContent()}</div>
    </div>
  );
};

export default SidebarMap;
