import useOnClickOutside from 'common/hooks/useOnClickOutside';
import routes from 'lib/config/routes';
import { debouncer } from 'lib/debouncer';
import { useMovieListSearch, useSuggestions, useSuggestionsPagination } from 'modules/Home/store';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useLogic = () => {
  const [movieListSearch, actions] = useMovieListSearch();
  const [{ suggestions, suggestionsLoader }] = useSuggestions();
  const [{ currentPage, totalPages }] = useSuggestionsPagination();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)?.get('search');
  const navigate = useNavigate();
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (!searchParams) {
      handleMovieSearchChange('');
    }
    actions.resetSuggestionsList();
  });

  const handleMovieSearchChange = async (value) => {
    await actions.updateMovieListSearch(value);
  };

  const handleLoadeMore = () => {
    actions.getListOfSuggestion({ page: currentPage + 1 });
  };

  const handleClearSearch = async () => {
    await handleMovieSearchChange('');
    actions.resetSuggestionsList();
    if (searchParams) {
      navigate(routes.MOVIE_LIST, {
        replace: true,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`${routes.MOVIE_LIST}?search=${movieListSearch}`, {
        replace: true,
      });
      actions.resetSuggestionsList();
      ref?.current?.blur();
    }
  };

  useEffect(() => {
    if (movieListSearch) {
      debouncer(() => {
        actions.getListOfSuggestion({ page: 1 });
      }, 600);
    } else {
      actions.resetSuggestionsList();
    }
  }, [movieListSearch]);

  const showLoadMore = totalPages > 1 && currentPage < totalPages && !suggestionsLoader;
  const openSuggestions = suggestions?.length > 0;

  return {
    movieListSearch,
    suggestions,
    suggestionsLoader,
    handleMovieSearchChange,
    handleLoadeMore,
    showLoadMore,
    openSuggestions,
    handleClearSearch,
    handleKeyDown,
    ref,
  };
};
export default useLogic;
