<template>
  <div>{{ movie.Title }}</div>
</template>

<script>
export default {
  name: "MoviesItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
