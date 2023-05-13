import React, { useState } from 'react';
import { Collapse } from 'antd';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Work from '../home/Work';
import ReFerralWork from './ReFerralWork';

const { Panel } = Collapse;
const Content = () => {
  const [activeKey, setActiveKey] = useState('');

  const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  const router = useRouter();
  return (
    <div className={`${styles.contentContainer}`}>
      {router.pathname !== '/faq' && (
        <div className={styles.titleStyle}>
          <span>Frequently Asked Questions</span>
        </div>
      )}
      <div className="faqCollapseContainer">
        <Collapse
          accordion
          activeKey={activeKey}
          onChange={handlePanelChange}
          ghost
          expandIcon={(props) => {
            if (props.isActive) {
              return (
                <div>
                  <img src="/img/faq/minus.svg" alt="plus" />
                </div>
              );
            }
            return (
              <div>
                <img src="/img/faq/plus.svg" alt="plus" />
              </div>
            );
          }}
          expandIconPosition="end"
        >
          <Panel header={<CustomePanerlHeader text="How does KungFu Helper work?" active={activeKey === "6"} />} key="6">
            <>
              <div className="pt-sp-10 font-size-20 font-size-sp-12 ">You can make a booking via our mobile app. It takes just five simple steps to make a booking as illustrated below:</div>
              <Work />
            </>
          </Panel>
          <Panel header={<CustomePanerlHeader text="How does Kung Fu Helper ensure service quality?" active={activeKey === "1"} />} key="1">
            <div className="font-size-20 font-size-sp-12">
              Our expert cleaners go through rigourous trainings and selections before we send them out for servicing. This ensures that
              they have the right attitude to provide excellent services to our customers.
            </div>
          </Panel>
          <Panel header={<CustomePanerlHeader text="Am I able to reschedule my booking?" active={activeKey === "2"} />} key="2">
            <div className="font-size-20 font-size-sp-12">
              Yes, you may reschedule your booking by selecting an appointment you would like to reschedule from the bookings tab and click
              on “Reschedule”.
            </div>
          </Panel>
          <Panel header={<CustomePanerlHeader text="What happens after I submit booking?" active={activeKey === "3"} />} key="3">
            <div className="font-size-20 font-size-sp-12">
              Upon submitting your booking, our staff will process the booking and a cleaning expert will be assigned to you based on your
              selected service(s).
            </div>
          </Panel>
          <Panel header={<CustomePanerlHeader text="Am I able to choose which cleaning expert I want?" active={activeKey === "4"} />} key="4">
            <div className="font-size-20 font-size-sp-12">Yes, you may either choose your preferred cleaning expert or we can arrange a random one for you.</div>
          </Panel>

          <Panel header={<CustomePanerlHeader text="How does the referral system work?" active={activeKey === "5"} />} key="5">
            <div className={styles.reFerralWorkContainer}>
              <div className="font-size-20 font-size-sp-12">The referral system works as illustrated below:</div>
              <ReFerralWork />
            </div>
          </Panel>
          <Panel header={<CustomePanerlHeader text="Do I have to be present when the cleaner arrives?" active={activeKey === "7"} />} key="7">
            <div className="font-size-20 font-size-sp-12">
              Yes, we recommend that you welcome your expert cleaner to guide him/her around the area and to also ensure that they are
              providing you with the correct services.
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Content;

const CustomePanerlHeader = ({active, text}) => {
  return (
    <div className={active ? styles.panelActive : styles.panelInActive}>{text}</div>
  )
}