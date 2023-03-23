import useOnClickOutside from 'common/hooks/useOnClickOutside';
import { debouncer } from 'lib/debouncer';
import { useMovieListSearch, useSuggestions, useSuggestionsPagination } from 'modules/Home/store';
import { useEffect, useRef } from 'react';

const useLogic = () => {
  const [movieListSearch, actions] = useMovieListSearch();
  const [{ suggestions, suggestionsLoader }] = useSuggestions();
  const [{ currentPage, totalPages }] = useSuggestionsPagination();
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    actions.resetSuggestionsList();
  });

  const handleMovieSearchChange = (value) => {
    actions.updateMovieListSearch(value);
  };

  const handleLoadeMore = () => {
    actions.getListOfSuggestion({ page: currentPage + 1 });
  };

  const handleClearSearch = () => {
    handleMovieSearchChange('');
    actions.resetSuggestionsList();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      actions.getListOfMovies();
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
