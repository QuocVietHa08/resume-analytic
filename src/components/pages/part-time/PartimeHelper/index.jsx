import styles from '@/components/pages/part-time/styles.module.scss';

import PartTimeItem from './PartimeItem';

const PARTTIME_DATA = [
  {
    id: 1,
    title: 'General Cleaning Tasks',
    imgSrc: '/img/parttime-helper/general-cleaning.svg',
    content: `• Dusting
• Vacuuming
• Wiping Down Surfaces
• Disposing Garbage

These tasks are typically applicable to all areas of the home and are focused on maintaining cleanliness and removing dirt and dust.`,
  },
  {
    id: 2,
    title: 'Kitchen Tasks',
    imgSrc: '/img/parttime-helper/kitchen-tasks.svg',
    content: `• Cleaning Countertops
• Washing Dishes
• Wiping Down Appliances

These tasks are specific to the kitchen and are focused on maintaining cleanliness and hygiene in this area.`,
  },
  {
    id: 3,
    title: 'Bathroom Tasks',
    imgSrc: '/img/parttime-helper/bathroom-tasks.svg',
    content: `• Cleaning and Disinfecting
• Toilets
• Sinks
• Showers

These tasks are specific to the bathroom and are focused on maintaining cleanliness and hygiene in this area.`,
  },
  {
    id: 4,
    title: 'Bedroom Tasks',
    imgSrc: '/img/parttime-helper/bedroom-tasks.svg',
    content: `• Making Beds
• Organizing Closets and Shelves
• Washing and Drying Linens.

These tasks are specific to the bedroom and are focused on maintaining cleanliness and organization in this area.`,
  },
  {
    id: 5,
    title: 'Additional Tasks',
    imgSrc: '/img/parttime-helper/additional-tasks.svg',
    content: `• Cleaning Windows (Interior) and Mirrors
• Ironing Clothes and Linens

These tasks are typically applicable to indoor areas of the home and are focused on maintaining cleanliness and removing dirt and streaks.
    `,
  },
  {
    id: 6,
    title: 'Things to Note',
    imgSrc: '/img/parttime-helper/things-to-note.svg',
    content: `• Service duration depends on the quantity and complexity of tasks. Not sure how long to book your Part time Helper for? WhatsApp us at +65 8838 0909.
• Cleaning materials are to be provided for a smooth cleaning experience. See list of cleaning equipment`,
  },
];

const ParttimeHelper = () => {
  return (
    <div className={styles.partimeContainer}>
      {PARTTIME_DATA.map((item) => (
        <PartTimeItem key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default ParttimeHelper;
