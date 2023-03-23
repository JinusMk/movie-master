import config from "../../../lib/config";
import fetcher from "../../../lib/fetcher";

import {
  movieDetailsMapper,
  movieListMapper,
  paginationMapper,
} from "./mapper";

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
          s: movieListSearch,
          page,
          type: "movie",
        };
        const resp = await fetcher(config.BASE_API, {
          params,
        });
        if (resp?.data && resp?.ok) {
          setState({
            movieList: movieListMapper(resp.data?.Search),
            movieListPagination: paginationMapper({
              totalResults: resp?.data?.totalResults,
              page,
            }),
          });
        } else {
          throw new Error("Invalid response");
        }
      } catch (err) {
        window.console.log("err", err);
      } finally {
        setState({
          movieListLoader: false,
        });
      }
    },
  getListOfSuggestion:
    (page = 1) =>
    async ({ setState, getState }) => {
      setState({
        suggestionsLoader: true,
      });
      try {
        const { movieListSearch } = getState();
        const params = {
          s: movieListSearch,
          page,
          type: "movie",
        };
        const resp = await fetcher(config.BASE_API, {
          params,
        });
        if (resp?.data && resp?.ok) {
          setState({
            suggesions: movieListMapper(resp?.data?.Search),
            suggestionsPagination: paginationMapper({
              totalResults: resp?.data?.totalResults,
              page,
            }),
          });
        } else {
          throw new Error("Invalid response");
        }
      } catch (err) {
        window.console.log("err", err);
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
