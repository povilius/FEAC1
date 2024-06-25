import Button from '@/components/Button';
import styles from './BusinessCard.module.scss';
// import * as businesses from '@/consts/business';
import PropTypes from 'prop-types';
// import { businesses } from '@/consts/business';

const BusinessCard = ({ businesses }) => {
  return (
    <div className={styles.card}>
      {businesses.images.length && (
        <img
          src={businesses.images[0].url}
          alt={businesses.name}
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{businesses.category}</span>
        <h3 className={styles.name}>{businesses.name}</h3>
        <p className={styles.contactPerson}>{businesses.contactPerson}</p>
        <p className={styles.address}>{businesses.address}</p>
        <Button>Book now</Button>
      </div>
    </div>
  );
};

export default BusinessCard;

BusinessCard.propTypes = {
  category: PropTypes.string,
  businesses: PropTypes.array,
};
