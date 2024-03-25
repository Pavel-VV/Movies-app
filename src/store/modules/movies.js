import axios from "../../plugins/axios";
import IDs from "../mock/imdb_top250";
import mutations from "../mutations";

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const {
  MOVIES,
  CURRENT_PAGE,
  REMOVE_MOVIE,
  TOGGLE_SEARCH,
  CHANGE_IDS_CURRENT_PAGE,
} = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: "",
    currentPage: 1,
    moviesPerPage: 12,
    movies: {},
    toggleSearch: false,
  },
  getters: {
    slicedIDs:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    moviesList: ({ movies }) => movies,
    moviesLength: ({ top250IDs }) => top250IDs.length,
    toggleSearch: ({ toggleSearch }) => toggleSearch,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
    [REMOVE_MOVIE](state, index) {
      state.top250IDs.splice(index, 1);
    },
    [TOGGLE_SEARCH](state, bool) {
      state.toggleSearch = bool;
    },
    [CHANGE_IDS_CURRENT_PAGE](state, idArr) {
      state.top250IDs = idArr;
      state.currentPage = 1;
    },
  },
  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ getters, commit, dispatch, state }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        state.top250IDs = IDs;
        const { currentPage, moviesPerPage, slicedIDs } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);
        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        const response = await Promise.all(requests);
        const movies = serializeResponse(response);
        console.log(movies);
        commit(MOVIES, movies);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    setCurrentPage({ commit, dispatch }, page) {
      commit(CURRENT_PAGE, page);
      dispatch("fetchMovies");
    },
    removeMovie({ commit, dispatch, state }, id) {
      const indexMovie = state.top250IDs.indexOf(id);
      if (indexMovie !== -1) {
        console.log(indexMovie);
        commit(REMOVE_MOVIE, indexMovie);
        dispatch("fetchMovies");
      }
    },
    async loadSearchMovies({ commit, dispatch }, query) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const response = await axios.get(`/?s=${query}`);
        console.log(response.Search);
        if (response.Error) {
          throw Error(response.Error);
        }
        const movies = serializeResponse(response.Search);
        commit(MOVIES, movies);
        commit(CHANGE_IDS_CURRENT_PAGE, response.Search);
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    changeToggleSearch({ commit }, bool) {
      commit(TOGGLE_SEARCH, bool);
    },
  },
};

export default moviesStore;
