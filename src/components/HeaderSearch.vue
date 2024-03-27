<template>
  <header class="header">
    <BNavbar class="navbar-style" type="dark" variant="dark">
      <BContainer class="container-user">
        <BNavbarBrand href="#">MovieDB</BNavbarBrand>
        <BFormInput
          class="input-search"
          placeholder="Search"
          v-model="searchValue"
          debounce="500"
        ></BFormInput>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HeaderSearch",
  data: () => ({
    searchValue: "",
  }),
  watch: {
    searchValue: "searchMovies",
  },
  computed: {},
  methods: {
    ...mapActions("movies", [
      "loadSearchMovies",
      "fetchMovies",
      "changeToggleSearch",
    ]),
    searchMovies(input) {
      console.log(input);
      if (input) {
        this.loadSearchMovies(input);
        this.changeToggleSearch(true);
      } else {
        this.fetchMovies();
        this.changeToggleSearch(false);
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.container-user {
  max-width: 960px;
}

.navbar-style {
  display: flex;
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.input-search {
  width: 300px;
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;
}

.input-search::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.input-search:focus {
  width: 300px;
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;
}
</style>
