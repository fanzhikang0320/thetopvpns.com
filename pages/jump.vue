<template>
  <div></div>
</template>

<script>
export default {
    layout: 'white',
    mounted() {
        let href = window.location.href.split('?url=')[1];
        window.location.href = window.decodeURIComponent(href);
    }
}
</script>

<style>

</style>