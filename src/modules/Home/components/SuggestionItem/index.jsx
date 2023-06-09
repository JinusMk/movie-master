import { Image } from 'common/components/Image';
import { Text } from 'common/components/Text';
import styles from './SuggestionItem.module.scss';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import routes from 'lib/config/routes';
import PropTypes from 'prop-types';

const SuggestionItem = ({ title, year, poster, id }) => {
  return (
    <Link to={routes.MOVIE_DETAILS.replace(':id', id)} className={styles.suggestionItemWrapper}>
      <Image url={poster} alt={title} className={styles.imageWrapper} />
      <div className={styles.textContent}>
        <Text ellipsis fontSize={Text.fontSize.p16} className={styles.title} fontWeight={500}>
          {title}
        </Text>
        <Text fontSize={Text.fontSize.p12} className={styles.year} fontWeight={400}>
          {year}
        </Text>
      </div>
    </Link>
  );
};

SuggestionItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string,
  id: PropTypes.string,
};
export default memo(SuggestionItem);
