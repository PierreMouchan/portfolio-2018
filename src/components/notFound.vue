<template>
  <div></div>
</template>

<script>
export default {
  name: "notFound",
  data() {
    return {};
  },
  methods: {
    backHome: function() {
      window.location.href = "/";
    }
  },
  mounted() {
    this.backHome();
  }
};
</script>

<style lang="scss" scoped>
</style>
