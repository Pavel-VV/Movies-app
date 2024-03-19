<template>
  <div id="app">
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

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
  },
  data: () => ({
    posterBg: "",
  }),
  mounted() {},
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "moviesLength",
      "currentPage",
      "moviesPerPage",
    ]),
  },
  created() {
    if (this.$route.query.page) {
      this.setCurrentPage(Number(this.$route.query.page));
    } else this.setCurrentPage(1);
    // this.setCurrentPage();
  },
  methods: {
    ...mapActions("movies", ["setCurrentPage"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onChangeCurrentPage(page) {
      this.$router.push({ query: { page } });
      this.setCurrentPage(page);
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
// 23:43
