<template>
  <header>
    <nuxt-link to="/">
      MovieFinder
    </nuxt-link>

    <nav>
      <ul class="nav">
        <li>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/movies">
            Movies List
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
  header, .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .nav {
    list-style-type: none;
  }

</style>