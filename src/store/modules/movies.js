import axios from "../../plugins/axios";
import IDs from "../mock/imdb_top250";

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    currentPage: 1,
    moviesPerPage: 12,
  },
  getters: {
    slicedIDs:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },
  mutations: {},
  actions: {
    async fetchMovies({ getters }) {
      const { currentPage, moviesPerPage, slicedIDs } = getters;
      const from = currentPage * moviesPerPage - moviesPerPage;
      const to = currentPage * moviesPerPage;
      // tt0111161
      const moviesToFetch = slicedIDs(from, to);
      const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
      const response = await Promise.all(requests);
      console.log(response);
    },
  },
};

export default moviesStore;
// 22.50
