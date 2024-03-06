import axios from "../../plugins/axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies({ commit }) {
      console.log(commit);
      // tt0111161
      const response = await axios.get("/", {
        params: {
          apikey: process.env.VUE_APP_API_KEY,
          plot: "full",
          i: "tt0111161",
        },
      });
      console.log(response);
    },
  },
};

export default moviesStore;
