import Header from '../Header';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.scss';

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
