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
      // don't reset the movie search input value if search query param is present and corresponding movie list is shown
      handleMovieSearchChange('');
    }
    //reset the suggestions list every time when the user clicks outside the input to close the suggestions list dropdown
    actions.resetSuggestionsList();
  });

  const handleMovieSearchChange = (value) => {
    actions.updateMovieListSearch(value);
  };

  const handleLoadeMore = () => {
    // call the API with the next page number
    actions.getListOfSuggestion({ page: currentPage + 1 });
  };

  const handleClearSearch = async () => {
    handleMovieSearchChange('');
    if (searchParams) {
      //if searchParams is present and user tries to clear the search, reset the movie list also to the default list
      navigate(routes.MOVIE_LIST, {
        replace: true,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      //update the URL with the search parameter to get the list of movies with the movie search input value
      navigate(`${routes.MOVIE_LIST}?search=${movieListSearch}`, {
        replace: true,
      });
      actions.resetSuggestionsList();
    }
  };

  useEffect(() => {
    if (movieListSearch) {
      //use a debouncer to make sure the getListOfSuggestion API don't get fired so often
      debouncer(() => {
        actions.getListOfSuggestion({ page: 1 });
      }, 600);
    } else {
      //this is to reset the suggestions list if movie list search input value is empty
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
