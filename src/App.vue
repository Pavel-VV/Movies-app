<template>
  <div id="app">
    <LoaderState />
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @changeCurrentPage="onChangeCurrentPage"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList";
import PosterBg from "./components/PosterBg";
import MoviesPagination from "./components/MoviesPagination";
import LoaderState from "./components/LoaderState";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    LoaderState,
  },
  data: () => ({
    posterBg: "",
  }),
  watch: {
    "$route.query": {
      handler: "onChangePage",
      immediate: true,
      deep: true,
    },
  },
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "moviesLength",
      "currentPage",
      "moviesPerPage",
    ]),
  },
  methods: {
    ...mapActions("movies", ["setCurrentPage"]),
    onChangePage({ page = 1 }) {
      this.setCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onChangeCurrentPage(page) {
      this.$router.push({ query: { page } });
    },
  },
};
</script>

<style>
#app {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
