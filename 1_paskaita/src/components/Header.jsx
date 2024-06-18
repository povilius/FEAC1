import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <div>
      <div>
        <img src="../public/logo.svg" alt="Logo" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/aboutus">About Us</Link>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Header;
