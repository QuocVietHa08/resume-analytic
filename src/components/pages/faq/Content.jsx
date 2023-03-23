import React from 'react';
import { Collapse } from 'antd';

import styles from './styles.module.scss';
import BreadCumbs from '@/components/atoms/breadcumbs';
import Work from '../home/Work';

const { Panel } = Collapse;
const Content = () => {
  return (
    <div className={`${styles.contentContainer} pt-40 pt-sp-20`}>
      <BreadCumbs pages={['Home', 'FAQ']} />
      <div className="faqCollapseContainer">
        <Collapse
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
          <Panel header="How does KungFu Helper work?" key="6">
            <>
              <div className="mb-sp-10 ">You can make a booking via our mobile app. It takes just five simple steps to make a booking as illustrated below:</div>
              <Work />
            </>
          </Panel>
          <Panel header="How does Kung Fu Helper ensure service quality?" key="1">
            <div>
              Our expert cleaners go through rigourous trainings and selections before we send them out for servicing. This ensures that
              they have the right attitude to provide excellent services to our customers.
            </div>
          </Panel>
          <Panel header="Am I able to reschedule my booking? " key="2">
            <div>
              Yes, you may reschedule your booking by selecting an appointment you would like to reschedule from the bookings tab and click
              on “Reschedule”.
            </div>
          </Panel>
          <Panel header="What happens after I submit booking?" key="3">
            <div>
              Upon submitting your booking, our staff will process the booking and a cleaning expert will be assigned to you based on your
              selected service(s).{' '}
            </div>
          </Panel>
          <Panel header="Am I able to choose which cleaning expert I want?" key="4">
            <div>Yes, you may either choose your preferred cleaning expert or we can arrange a random one for you.</div>
          </Panel>

          <Panel header="How does the referral system work?" key="5">
            <div>
              <div>The referral system works as illustrated below:</div>
              <Work />
            </div>
          </Panel>
          <Panel header="Do I have to be present when the cleaner arrives?" key="7">
            <div>
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
