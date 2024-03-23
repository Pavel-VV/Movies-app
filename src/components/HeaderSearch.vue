<template>
  <header class="header">
    <BNavbar class="navbar-style" type="dark" variant="dark">
      <BContainer>
        <BNavbarBrand href="#">MovieDB</BNavbarBrand>
        <BFormInput class="input-search" placeholder="Search"></BFormInput>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
export default {
  name: "HeaderSearch",
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
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
