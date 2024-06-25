import CategoryCard from '@/components/home/CategoryCard';
import Hero from '../components/Hero';
import BusinessList from '@/components/home/BusinessList';
import styles from './Home.module.scss';

function Home() {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <h2 className={styles.title}>Popular businesses</h2>
      <BusinessList />
    </div>
  );
}

export default Home;
