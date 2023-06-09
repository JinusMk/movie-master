import { Loading } from 'common/components/Loading';
import { Paginate } from 'common/components/Paginate';
import useLogic from './MovieListFooter.logic';
import styles from './MovieListFooter.module.scss';

const MovieListFooter = () => {
  const { movieListLoader, currentPage, totalPages, showPagination, onPageChange } = useLogic();
  return (
    <div className={styles.movieListFooterWrapper}>
      <div className={styles.loading}>{movieListLoader && <Loading />}</div>
      {showPagination && (
        <Paginate
          pageCount={totalPages}
          currentPage={currentPage - 1 || 0}
          onChange={({ selected: page }) => {
            onPageChange(page + 1);
          }}
          className={styles.paginate}
        />
      )}
    </div>
  );
};
export default MovieListFooter;
