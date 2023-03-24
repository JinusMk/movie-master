import { useEffect } from 'react';
import { useMovieList, useMovieListSearch } from '../store';
import { useLocation } from 'react-router-dom';

const useLogic = () => {
  const [{ movieList, movieListLoader }, actions] = useMovieList();
  const [movieListSearch] = useMovieListSearch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)?.get('search');

  useEffect(() => {
    //this is called when the component unmounts
    return actions.resetHomePage;
  }, []);

  useEffect(() => {
    const func = async () => {
      if (movieListSearch !== searchParams) {
        //this is triggered on refreshing of page with the search param on the URL
        await actions.updateMovieListSearch(searchParams);
        actions.getListOfMovies();
      } else {
        //trigger the getListOfMovies API on change of searchParams. Also, this will trigger the default list (cdm)
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
