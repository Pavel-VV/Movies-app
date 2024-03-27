<template>
  <div class="notification"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NotificationMessage",
  watch: {
    getNotifMessage: "showNotification",
  },
  computed: {
    ...mapGetters(["getNotifMessage"]),
  },
  methods: {
    showNotification({ msg, title, variant }) {
      this.$bvToast.toast(msg, {
        title,
        variant,
        autoHideDelay: 5000,
        solid: true,
      });
    },
  },
};
</script>

<style>
/* body >>> .b-toaster .b-toaster-slot .b-toast .toast:not(.show) {
  display: block;
} */
.toast:not(.show) {
  display: block !important;
}
</style>
