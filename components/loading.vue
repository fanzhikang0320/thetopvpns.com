<template lang="html">
  <div class="loading-page" v-if="loading">
    <img src="@/assets/image/loading.gif" alt="loading..."/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1B1D1C;
  }
  img {
      width: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%)
    }
</style>