<template>
  <the-header />
  <main  class="container">
    <aside>
      Lorem ipsum dolor sit amet.
    </aside>
    <slot />
  </main>
</template>

<script setup>

</script>

<style scoped>
.container {
  padding: 0 calc(50vw - 550px);
  display: flex;
  align-items: flex-start;
  gap: 50px;
}
aside {
  border-right: 1px solid #ccc;
  padding-right: 50px;
  width: 100%;
  max-width: 250px;
  box-sizing: border-box;
}
</style>