<template>
  <div>
    <h1>Movies list</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, assumenda eum illo incidunt libero magni
      nemo officiis praesentium quam ratione saepe similique veritatis voluptate voluptatibus?
    </p>
    <form @submit.prevent="getMovies">
      <input type="text" v-model="query">
      <button type="submit">
        Search
      </button>
    </form>

    <section class="movies-list" v-if="moviesList.length">
      <article class="movies-card" v-for="movie in moviesList" :key="movie.imdbID">
        <h2>
          {{ movie.Title }}
        </h2>
        <img :src="movie.Poster" :alt="`${movie.Title} poster`">
        <nuxt-link :to="`movies/${movie.imdbID}`">
          Read more >
        </nuxt-link>
      </article>
    </section>
  </div>
</template>
<script setup>
import {useMoviesDb} from "~/composables/useMoviesDb";

const query = ref('')
const moviesList = ref([])
const moviDbClient = useMoviesDb()

const getMovies = async () => {
  const data = await moviDbClient.searchMovies(query.value);

  moviesList.value = (data.value.Search)
}
</script>

<style>
.movies-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.movies-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.movies-card h2 {
  margin: 0;
}

</style>