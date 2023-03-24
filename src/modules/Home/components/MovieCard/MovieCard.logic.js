import { useNavigate } from 'react-router-dom';
import routes from 'lib/config/routes';

const useLogic = () => {
  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(routes.MOVIE_DETAILS.replace(':id', id));
  };
  return {
    onCardClick,
  };
};
export default useLogic;
