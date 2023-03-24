import { Image } from 'common/UI/Image';
import { Text } from 'common/UI/Text';
import styles from './MovieOverview.module.scss';
import PropTypes from 'prop-types';

const MovieOverview = ({
  title,
  poster,
  year,
  genre,
  runtime,
  country,
  language,
  imdbRating,
  imdbVotes,
}) => {
  const MetaItem = (value) => (
    <Text className={styles.item} fontSize={Text.fontSize.p16}>
      {value}
    </Text>
  );
  return (
    <div className={styles.movieOverviewWrapper}>
      <Image url={poster} className={styles.poster} />
      <div className={styles.overviewWrapper}>
        <div className={styles.titleWrapper}>
          <Text
            className={styles.title}
            title={title}
            fontWeight={700}
            fontSize={Text.fontSize.p24}
            ellipsis>
            {title}
          </Text>
          <Text className={styles.year} fontWeight={400} fontSize={Text.fontSize.p16}>
            ({year})
          </Text>
        </div>
        <Text className={styles.genre} fontSize={Text.fontSize.p16} fontWeight={500}>
          {genre}
        </Text>
        <div className={styles.meta}>
          {MetaItem(country)} | {MetaItem(language)} | {MetaItem(runtime)}
        </div>
        <div className={styles.imdbRatings}>
          <Text className={styles.imdb} fontWeight={700} fontSize={Text.fontSize.p16}>
            IMDb: &nbsp;
            <Text>{`${imdbRating} ( ${imdbVotes} )`}</Text>
          </Text>
        </div>
      </div>
    </div>
  );
};
MovieOverview.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
  runtime: PropTypes.string,
  country: PropTypes.string,
  language: PropTypes.string,
  imdbRating: PropTypes.string,
  imdbVotes: PropTypes.string,
};
export default MovieOverview;
