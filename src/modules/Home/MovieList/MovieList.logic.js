import { useEffect } from 'react';
import { useMovieList, useMovieListSearch } from '../store';
import { useLocation } from 'react-router-dom';

const useLogic = () => {
  const [{ movieList, movieListLoader }, actions] = useMovieList();
  const [movieListSearch] = useMovieListSearch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)?.get('search');

  useEffect(() => {
    return actions.resetHomePage;
  }, []);

  useEffect(() => {
    const func = async () => {
      if (movieListSearch !== searchParams) {
        //reloading of page
        await actions.updateMovieListSearch(searchParams);
        actions.getListOfMovies();
      } else {
        actions.getListOfMovies();
      }
    };
    func();
  }, [searchParams]);

  return {
    movieList,
    movieListLoader,
    searchParams,
  };
};

export default useLogic;
