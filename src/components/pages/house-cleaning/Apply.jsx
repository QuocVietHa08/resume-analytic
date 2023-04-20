import styles from './styles.module.scss';

const APPLY_DATA = [
  {
    imgSrc: '/img/house-cleaning/child-care-centre.svg',
    title: `Child Care\nCentre`,
  },
  {
    imgSrc: '/img/house-cleaning/offices.svg',
    title: 'Offices',
  },
  {
    imgSrc: '/img/house-cleaning/workout-facilities.svg',
    title: `Workout\nFacilities`,
  },
  {
    imgSrc: '/img/house-cleaning/laboratory.svg',
    title: 'Laboratory',
  },
  {
    imgSrc: '/img/house-cleaning/hotel-rooms.svg',
    title: 'Hotel Rooms',
  },
  {
    imgSrc: '/img/house-cleaning/apartments.svg',
    title: 'Apartments',
  },
  {
    imgSrc: '/img/house-cleaning/food-manufacturing.svg',
    title: `Food\nManufacturing`,
  },
  {
    imgSrc: '/img/house-cleaning/healthcare-facilities.svg',
    title: `Healthcare\nFacilities`,
  },
];

const Apply = ({ title }) => {
  return (
    <div className={styles.applyContainer}>
      <div className={styles.applyTitle}>
        <div className={styles.applyTitle}>{title}</div>
        <span>can be applied to</span>
      </div>
      <div className={styles.applyGrid}>
        {APPLY_DATA.map((item) => (
          <div key={item.title} className={styles.applyItem}>
            <div>
            <img src={item.imgSrc} alt="img" />
            </div>
            <div className={styles.applyItemTitle}>{item.title}</div>

          </div>
        ))}
      </div>
    </div>
  );
};
export default Apply;
