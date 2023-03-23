import { Image } from 'common/UI/Image';
import { Text } from 'common/UI/Text';
import useLogic from './MovieCard.logic';
import styles from './MovieCard.module.scss';

const MovieCard = ({ movie }) => {
  const { imdbID, title, year, poster } = movie;
  const { onCardClick } = useLogic();

  return (
    <div
      className={styles.movieCardWrapper}
      role="presentation"
      onClick={() => onCardClick(imdbID)}>
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

export default MovieCard;
