import { createStore, defaults, createHook } from "react-sweet-state";

import actions from "./actions";
import initialState from "./initialState";

defaults.devtools = true;
const Store = createStore({
  name: "MOVIE-MASTER-home-" + window.location.origin,
  initialState,
  actions,
});

export const useMovieList = createHook(Store, {
  selector: ({ movieList, movieListLoader }) => ({
    movieList,
    movieListLoader,
  }),
});

export const useMovieListSearch = createHook(Store, {
  selector: (state) => state.movieListSearch,
});

export const useSuggestions = createHook(Store, {
  selector: ({ suggestions, suggestionsLoader }) => ({
    suggestions,
    suggestionsLoader,
  }),
});

export const useMovieListPagination = createHook(Store, {
  selector: (state) => state.movieListPagination,
});

export const useSuggestionsPagination = createHook(Store, {
  selector: (state) => state.suggestionsPagination,
});

export const useMovieDetails = createHook(Store, {
  selector: ({ movieDetails, movieDetailsLoader }) => ({
    movieDetails,
    movieDetailsLoader,
  }),
});
