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
    <BModal
      class="modal-movie2"
      body-class="modal-movie"
      :id="movieInfoModalID"
      size="lg"
      hide-footer
      hide-header
    >
      <MovieInfoModalContent
        :movie-info="selectedMovie"
        @closeModal="closeModalInfo"
      />
    </BModal>
  </BContainer>
</template>

<script>
import MovieItem from "./MovieItem";
import MovieInfoModalContent from "./MovieInfoModalContent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfoModalContent,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    movieInfoModalID: "movie-info",
    selectedMovieID: "",
  }),
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    ...mapGetters("movies", ["toggleSearch"]),
    onTitle() {
      return this.toggleSearch ? "Search movies" : "IMDB Top 250";
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : {};
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
      this.selectedMovieID = id;
      this.$bvModal.show(this.movieInfoModalID);
    },
    closeModalInfo() {
      this.selectedMovieID = null;
      this.$bvModal.hide(this.movieInfoModalID);
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

<style>
.modal-movie {
  padding: 0px !important;
}
</style>
