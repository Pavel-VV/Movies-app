<template>
  <div class="movies-pagination">
    <BPagination
      v-model="currentPage"
      :total-rows="total"
      :per-page="perPage"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  data: () => ({
    currentPage: 1,
    total: 100,
    perPage: 12,
  }),
};
</script>

<style scoped>
.movies-pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  color: #fff;
  font-size: 12px;
  box-shadow: none;
}

.movies-pagination >>> .pagination .page-item.active .page-link {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}

.movies-pagination >>> .pagination .page-item.disabled .page-link {
  color: lightgray;
}
</style>
