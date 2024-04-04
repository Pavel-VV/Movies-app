<template>
  <div class="movie-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header">Movie view</h6>
      <BIconX class="close-icon" @click="closeModal" />
    </header>
    <div class="movie-content-info">
      <BRow>
        <BCol sm="4">
          <div class="movie-poster-wrap">
            <div class="movie-poster-style" :style="posterStyle"></div>
          </div>
        </BCol>
        <BCol sm="8">
          <div class="movie-content-wrap">
            <h3 class="movie-title">{{ movieInfo.Title }}</h3>
            <BFormRating
              class="movie-rating"
              v-model="movieRating"
              readonly
              stars="10"
              no-border
              show-value
              show-value-max
              precision="1"
            />
          </div>
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieInfoModalContent",
  data: () => ({
    backgroundDefault: "linear-gradient(45deg, black 0%, rgb(87, 4, 87) 100%)",
  }),
  props: {
    movieInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  computed: {
    posterStyle() {
      return `background-image: ${this.posterBackground}`;
    },
    posterBackground() {
      return this.movieInfo
        ? `url(${this.movieInfo.Poster})`
        : this.backgroundDefault;
    },
    movieRating() {
      return this.movieInfo.imdbRating;
    },
  },
};
</script>

<style scoped>
.movie-info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(45deg, black 0%, rgb(87, 4, 87) 100%);
  color: #fff;
  padding: 1rem;
}

.movie-header {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}

.close-icon {
  cursor: pointer;
}

.movie-content-info {
  background-color: #fff;
  padding: 1rem;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster-style {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center, center;
}

.movie-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.movie-rating {
  padding: 0px !important;
}

.movie-rating:focus {
  box-shadow: none;
}

.movie-rating >>> .b-rating-star .b-rating-icon {
  color: #cad106 !important;
}

.movie-rating >>> .b-rating-star,
.movie-rating >>> .b-rating-value {
  flex-grow: 0 !important;
  padding: 0px;
  font-size: 1.3rem;
  font-weight: 300;
}

.movie-rating >>> .b-rating-star + .b-rating-star {
  margin-left: 4px;
}

.movie-rating >>> .b-rating-value {
  margin-left: 10px;
}
</style>
