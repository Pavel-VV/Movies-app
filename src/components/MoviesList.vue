<template>
  <BContainer class="container-user">
    <h3 class="list-title">{{ onTitle }}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModalInfo="onShowMovieInfo"
          />
        </BCol>
      </template>
      <template v-else>
        <div class="empty-list">Is empty</div>
      </template>
    </BRow>
    <BModal :id="movieInfoModalID" size="lg" hide-footer hide-header>
      <p>Movie modal</p>
    </BModal>
  </BContainer>
</template>

<script>
import MovieItem from "./MovieItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    movieInfoModalID: "movie-info",
  }),
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    ...mapGetters("movies", ["toggleSearch"]),
    onTitle() {
      return this.toggleSearch ? "Search movies" : "IMDB Top 250";
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["setNotifMessage"]),
    async onRemoveItem({ id, title }) {
      const isConfirm = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete "${title}"?`
      );
      if (isConfirm) {
        this.removeMovie(id);
        this.setNotifMessage({
          msg: "Movie deleted successful",
          variant: "success",
          title: "success",
        });
      }
    },
    onShowMovieInfo(id) {
      console.log(id);
      this.$bvModal.show(this.movieInfoModalID);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}

.container-user {
  max-width: 960px;
}

.empty-list {
  color: #fff;
  font-size: 40px;
}
</style>
