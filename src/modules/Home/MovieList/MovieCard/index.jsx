import { memo } from 'react';
import { Image } from 'common/UI/Image';
import { Text } from 'common/UI/Text';
import useLogic from './MovieCard.logic';
import styles from './MovieCard.module.scss';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { id, title, year, poster } = movie;
  const { onCardClick } = useLogic();

  return (
    <div className={styles.movieCardWrapper} role="presentation" onClick={() => onCardClick(id)}>
      <Image url={poster} alt={title} className={styles.imageWrapper} />
      <div className={styles.textContent}>
        <Text
          title={title}
          ellipsis
          fontSize={Text.fontSize.p20}
          className={styles.title}
          fontWeight={700}>
          {title}
        </Text>
        <Text fontSize={Text.fontSize.p14} className={styles.year} fontWeight={500}>
          {year}
        </Text>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
  }),
};
export default memo(MovieCard);
