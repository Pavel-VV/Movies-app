<template>
  <div class="loader-wrap" v-if="getLoader">
    <BSpinner type="grow" variant="light" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LoaderState",
  computed: {
    ...mapGetters(["getLoader"]),
  },
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>
