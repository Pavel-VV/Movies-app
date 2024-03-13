<template>
  <div class="background-poster" :style="posterStyle"></div>
</template>

<script>
export default {
  name: "PosterBg",
  props: {
    poster: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    defaultPosterBg: "linear-gradient(45deg, black 0%, rgb(87, 4, 87) 100%)",
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.defaultPosterBg;
    },
  },
};
</script>

<style scoped>
.background-poster {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  z-index: -1;
  /* background-image: linear-gradient(45deg, black 0%, rgb(87, 4, 87) 100%); */
  background-position: center;
  transition: all 0.2s ease;
}

.background-poster::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(45deg, black 0%, rgb(87, 4, 87) 100%);
  opacity: 0.7;
  transition: all 0.2s ease;
}
</style>
