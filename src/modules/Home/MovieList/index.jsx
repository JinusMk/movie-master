import Header from 'modules/Header';
import useLogic from './MovieList.logic';
import styles from './MovieList.module.scss';
import { ContentHolder } from 'common/components/ContentHolder';
import MovieCard from 'modules/Home/components/MovieCard';
import MovieSearch from './MovieSearch';
import MovieListFooter from './MovieListFooter';
import { Text } from 'common/components/Text';
import { Icon, icons } from 'common/components/Icon';

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
        {movieList?.length
          ? movieList?.map(({ id, title, year, poster }) => (
              <MovieCard key={id} id={id} title={title} year={year} poster={poster} />
            ))
          : empty}
      </div>
      <MovieListFooter />
    </ContentHolder>
  );
};
export default MovieList;
