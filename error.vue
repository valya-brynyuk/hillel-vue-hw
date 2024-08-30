<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.statusMessage }}</h2>

    <nuxt-link to="/">
      Go to home
    </nuxt-link>
  </div>
</template>

<script setup>

const {error} = defineProps(['error'])

</script>

<style lang="scss" scoped>

</style>