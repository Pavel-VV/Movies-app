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
        <BCol sm="8"></BCol>
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
</style>
