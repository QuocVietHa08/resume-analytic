import styles from '../styles.module.scss';

const PRODUCTS = [
  { imgSrc: '/img/house-cleaning/environmental-friendly.svg', title: `Environmental\nFriendly` },
  { imgSrc: '/img/house-cleaning/comprehensive-disinfection.svg', title: `Comprehensive\nDisinfection` },
  { imgSrc: '/img/house-cleaning/safety-guarantee.svg', title: `Safety\nGuarantee` },
];

const SERVICES = [
  { imgSrc: '/img/house-cleaning/coronavirus.svg', title: 'Coronavirus preventable' },
  { imgSrc: '/img/house-cleaning/certified.svg', title: 'Certified organic ingredients and anti-virus coating' },
  { imgSrc: '/img/house-cleaning/medical.svg', title: `Medical grade environmentally friendly disinfection solution` },
  { imgSrc: '/img/house-cleaning/advance.svg', title: 'Advance sterilization technology ' },
  { imgSrc: '/img/house-cleaning/equipment.svg', title: 'Equipment and products have been certified by EU-recognized laboratory ' },
  { imgSrc: '/img/house-cleaning/safe.svg', title: `Safe and harmless to humans and pets ` },
  { imgSrc: '/img/house-cleaning/space.svg', title: 'The space needs to be vacated for a minimum of 2 hours after disinfection' },
];

const HouseDisinfectionSection = () => {
  return (
    <div className={styles.houseSectionConatiner}>
      <div className={styles.houseTitle}>
        <span className="text-font-family">Product And Technologies Used</span>
        <p>
          KungFu Helper will be providing effective product / device for the disinfection service, every medical disinfectant is comply with
          international standards.{' '}
        </p>
      </div>
      <div className={styles.productGrid}>
        {PRODUCTS.map((pro) => (
          <div key={pro.title} className={styles.productItem}>
            <img src={pro.imgSrc} alt="img" />
            <div className={styles.title}>{pro.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.houseTitle}>
        <span className="text-font-family">Our House Disinfection Service Includes:</span>
      </div>
      {SERVICES.map((service) => (
        <div key={service.title} className={styles.serviceItem}>
          <img src={service.imgSrc} alt="img" />
          <div className={styles.serviceTitle}>{service.title}</div>
        </div>
      ))}
    </div>
  );
};
export default HouseDisinfectionSection;
