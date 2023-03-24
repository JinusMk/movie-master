import Header from '../../Header';
import useLogic from './MovieList.logic';
import styles from './MovieList.module.scss';
import { ContentHolder } from '../../../common/UI/ContentHolder';
import MovieCard from './MovieCard';
import MovieSearch from './MovieSearch';
import MovieListFooter from './MovieListFooter';
import { Text } from 'common/UI/Text';
import { Icon, icons } from 'common/UI/Icon';

const MovieList = () => {
  const { movieList, movieListLoader, searchParams } = useLogic();

  const empty = movieListLoader ? null : (
    <div className={styles.noResultsWrapper}>
      <Icon source={icons.empty} size="14rem" />
      <Text fontSize={Text.fontSize.p20}>No results found</Text>
    </div>
  );

  return (
    <ContentHolder header={<Header />}>
      <MovieSearch />
      {searchParams && (
        <Text
          fontSize={Text.fontSize.p16}
          fontWeight={600}
          className={styles.searchResult}>{`Showing results for "${searchParams}"`}</Text>
      )}
      <div className={styles.movieListWrapper}>
        {!movieList?.length
          ? movieList?.map((movie) => <MovieCard key={movie?.id} movie={movie} />)
          : empty}
      </div>
      <MovieListFooter />
    </ContentHolder>
  );
};
export default MovieList;
