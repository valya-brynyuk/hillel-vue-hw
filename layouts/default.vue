<template>
  <div class="main">

  <the-header />
  <main class="container">
    <slot />
  </main>
  <footer>
    All rights reserved &copy;
  </footer>
  </div>

</template>

<script setup>

</script>

<style scoped>

.main {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.container {
  padding: 0 calc(50vw - 550px);
}
</style>