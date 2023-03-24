import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../store';

const useLogic = () => {
  const { id } = useParams();
  const [{ movieDetails, movieDetailsLoader }, actions] = useMovieDetails();

  useEffect(() => {
    actions.getMovieDetails(id);
  }, []);

  return {
    movieDetails,
    movieDetailsLoader,
  };
};
export default useLogic;
