import mutations from "../mutations";

const { SEARCH_MOVIES } = mutations;

const searchStore = {
  namespaced: true,
  state: {
    search: "",
  },
  mutations: {
    [SEARCH_MOVIES](state, input) {
      state.search = input;
    },
  },
  getters: {
    loadSearchMovies: ({ search }) => search,
  },
  actions: {
    changeSearch({ commit }, input) {
      commit(SEARCH_MOVIES, input);
    },
  },
};

export default searchStore;
