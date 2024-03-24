import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import loader from "./modules/loader";
import search from "./modules/search";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    search,
  },
});

// store.dispatch("initMoviesStore");

export default store;
