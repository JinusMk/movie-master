import { useEffect } from "react";
import { useMovieList } from "../store";

const useLogic = () => {
  const [{ movieList, movieListLoader }, actions] = useMovieList();

  useEffect(() => {
    actions.getListOfMovies();
  }, []);

  return {
    movieList,
    movieListLoader,
  };
};

export default useLogic;
