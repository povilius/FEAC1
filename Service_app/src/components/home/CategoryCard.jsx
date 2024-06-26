import { useNavigate, generatePath, useParams } from 'react-router-dom';
import classNames from 'classnames';
import UrlIcon from '@/components/common/UrlIcon';
import { ROUTES } from '@/router/consts';
import styles from './CategoryCard.module.scss';
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <div
      className={classNames(
        styles.card,
        activeCategory === name && styles.active
      )}
      onClick={() => navigate(categoryPath)}
    >
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
};

export default CategoryCard;
