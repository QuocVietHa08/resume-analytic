/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './styles.module.scss';
import DetailItem from './DetailItem';

const DETAILS = [
  {
    id: 1,
    imgSrc: '/img/landscaping/insecticide-spraing/detail/icon1.svg',
    text: `Pest control: Insecticide spraying helps to control and eliminate pests such as mosquitoes, ants, termites, \n and cockroaches, which can carry diseases and cause damage to structures.`,
  },
  {
    id: 2,
    imgSrc: '/img/landscaping/insecticide-spraing/detail/icon2.svg',
    text: `Health benefits: Insecticide spraying can help to reduce the risk of diseases spread by pests, such as malaria, \n dengue fever, and Zika virus. It can also prevent allergic reactions and illnesses caused by insect bites.`,
  },
  {
    id: 3,
    imgSrc: '/img/landscaping/insecticide-spraing/detail/icon3.svg',
    text: `Cost-effective: Insecticide spraying can be a cost-effective solution for controlling pests compared to other \n methods, such as manual removal or the use of traps.`,
  },
  {
    id: 4,
    imgSrc: '/img/landscaping/insecticide-spraing/detail/icon4.svg',
    text: `Time-saving: Insecticide spraying can be a time-saving solution for pest control as it can cover large \n areas quickly.`,
  },
  {
    id: 5,
    imgSrc: '/img/landscaping/insecticide-spraing/detail/icon5.svg',
    text: `Preventive measure: Regular insecticide spraying can be a preventive measure to keep pests at bay and \n avoid infestations, reducing the need for more extensive pest control measures in the future.`,
  },
  {
    id: 6,
    imgSrc: '/img/landscaping/insecticide-spraing/detail/icon6.svg',
    text: `Environmentally friendly: Some insecticides are environmentally friendly and do not harm plants, animals, \n or humans, making them a safe and effective choice for pest control.`
  }
];

const TreePruningDetail = () => {
  return (
    <div className={styles.grassCuttingDetailWrapper}>
      <div className={styles.content}>
      Insecticide spraying is a method used to control and prevent insect infestations in homes, gardens, and other outdoor areas. It involves the application of insecticides in a spray form to the affected areas. Insecticide spraying can effectively eliminate various pests, including mosquitoes, ants, termites, and cockroaches. The benefits of insecticide spraying include reduced health risks associated with pest-borne diseases, prevention of property damage, and the overall improvement of the living environment. However, it's essential to follow safety guidelines during the process and ensure that the insecticides used are safe for humans and pets.

      </div>
      <div className={styles.detailWrapper}>
        {DETAILS.map((item) => (
          <DetailItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TreePruningDetail;
