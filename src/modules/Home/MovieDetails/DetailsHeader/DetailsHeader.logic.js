import routes from 'lib/config/routes';
import { useNavigate } from 'react-router-dom';

const useLogic = () => {
  const navigate = useNavigate();
  const onNavigateBack = () =>
    navigate(routes.MOVIE_LIST, {
      replace: true,
    });
  return {
    onNavigateBack,
  };
};
export default useLogic;
