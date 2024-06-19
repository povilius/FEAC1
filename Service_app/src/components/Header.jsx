import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.leftSide}>
        <img src="../public/logo.svg" alt="Logo" />
        <div className={styles.navigation}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/services" className={styles.link}>
            Services
          </Link>
          <Link to="/aboutus" className={styles.link}>
            About Us
          </Link>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Button>Login / Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
