import config from '../../../lib/config';
import fetcher from '../../../lib/fetcher';
import initialState from './initialState';

import { movieDetailsMapper, movieListMapper, paginationMapper } from './mapper';

const actions = {
  getListOfMovies:
    (page = 1) =>
    async ({ setState, getState }) => {
      setState({
        movieListLoader: true,
      });
      try {
        const { movieListSearch } = getState();
        const params = {
          s: movieListSearch || 'hello', //passing 'hello' by default to get a list of movies with pagination to show on FrontEnd, if no value is sending then the API will throw Error saying too many results found
          page,
          type: 'movie',
        };
        const resp = await fetcher(config.BASE_API, {
          params,
        });
        if (resp?.data && resp?.ok) {
          if (resp?.data?.Error) {
            //reset the list
            setState({
              movieList: [...initialState.movieList],
              movieListPagination: { ...initialState.movieListPagination },
            });
          }
          setState({
            movieList: movieListMapper(resp.data?.Search),
            movieListPagination: paginationMapper({
              totalResults: resp?.data?.totalResults,
              page,
            }),
          });
        } else {
          throw new Error('Invalid response');
        }
      } catch (err) {
        window.console.log('err', err);
      } finally {
        setState({
          movieListLoader: false,
        });
      }
    },
  getListOfSuggestion:
    ({ page = 1 }) =>
    async ({ setState, getState }) => {
      setState({
        suggestionsLoader: true,
      });
      try {
        const { movieListSearch } = getState();
        const params = {
          s: movieListSearch,
          page,
          type: 'movie',
        };
        const resp = await fetcher(config.BASE_API, {
          params,
        });
        if (resp?.data && resp?.ok) {
          const newSuggestions = movieListMapper(resp?.data?.Search);
          const suggestionsPagination = paginationMapper({
            totalResults: resp?.data?.totalResults,
            page,
          });
          const suggestions =
            page > 1 ? [...getState()?.suggestions, ...newSuggestions] : newSuggestions;
          setState({
            suggestions,
            suggestionsPagination,
          });
        } else {
          throw new Error('Invalid response');
        }
      } catch (err) {
        window.console.log('err', err);
      } finally {
        setState({
          suggestionsLoader: false,
        });
      }
    },
  updateMovieListSearch:
    (movieListSearch) =>
    ({ setState }) =>
      setState({
        movieListSearch,
      }),
  resetSuggestionsList:
    () =>
    ({ setState }) =>
      setState({
        suggestions: [...initialState.suggestions],
        suggestionsPagination: { ...initialState.suggestionsPagination },
      }),
  resetHomePage:
    () =>
    ({ setState }) =>
      setState({
        movieListLoader: initialState.movieListLoader,
        movieList: [...initialState.movieList],
        movieListPagination: { ...initialState.movieListPagination },
        suggestionsLoader: initialState.suggestionsLoader,
        movieListSearch: initialState.movieListSearch,
        suggestions: [...initialState.suggestions],
        suggestionsPagination: { ...initialState.suggestionsPagination },
      }),
  getMovieDetails:
    (id) =>
    async ({ setState }) => {
      setState({
        movieDetailsLoader: true,
      });
      try {
        const params = {
          i: id,
        };
        const resp = await fetcher(config.BASE_API, {
          params,
        });
        if (resp?.data && resp?.ok) {
          setState({
            movieDetails: movieDetailsMapper(resp?.data),
          });
        }
      } catch (err) {
      } finally {
        setState({
          movieDetailsLoader: false,
        });
      }
    },
};
export default actions;
