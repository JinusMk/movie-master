import { useMovieList, useMovieListPagination } from 'modules/Home/store';

const useLogic = () => {
  const [{ currentPage, totalPages }, actions] = useMovieListPagination();
  const [{ movieListLoader }] = useMovieList();
  const showPagination = totalPages > 1;

  const onPageChange = (page) => {
    actions.getListOfMovies(page);
  };
  return {
    currentPage,
    totalPages,
    movieListLoader,
    showPagination,
    onPageChange,
  };
};
export default useLogic;
