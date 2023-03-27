import React from 'react';
import OrganisingServiceDetailItem from './OrganisingServivesDetailItem';
import styles from './styles.module.scss';

const OrganisingServicesDetail = () => {
  const LIST = [
    {
      img: '/img/organising/police',
      title: 'Why Call KungFu Helper Organiser',
      des: 'Try once KungFu Helper organising service and experience the difference it makes to your life. Clearing the clutter from your home and getting organised can have a hugely positive impact on your mindset and health. And not only for you, but for your family.',
      type: 'info'
    },
    {
      img: '/img/organising/decluttering',
      title: 'A Full Range of Decluttering Services',
      des: 'We have a range of services available from decluttering and organising a single room through to a whole house re-organisation. Take the stress out of moving by letting us clear and pack up your whole house before a move. We can even unpack and organise for you at your new home.',
      type: 'info'
    },
    {
      img: '/img/organising/simplify',
      title: 'Simplify Your Life',
      des: 'Simplify your life and take back control. Get in contact today.',
      type: 'contact'
    }
  ]
  return (
    <div className={styles.organisingServiceDetailContainer}>
      {LIST.map((item) => (
        <React.Fragment key={item.title}>
          <OrganisingServiceDetailItem item={item} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default OrganisingServicesDetail;