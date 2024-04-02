<template>
  <div class="movie-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header">Movie view</h6>
      <BIconX class="close-icon" @click="closeModal" />
    </header>
  </div>
</template>

<script>
export default {
  name: "MovieInfoModalContent",
  props: {
    movieInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      console.log("close");
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
</style>
