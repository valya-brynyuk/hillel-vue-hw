<template>
  <div v-if="movie">
    <h1>{{movie.value.Title}}</h1>
    <img :src="movie.value.Poster" :alt="movie.value.Title">
    <p>
      {{movie.value.Plot}}
    </p>
    <table>
      <tr>
        <th>Director</th>
        <td>{{movie.value.Director}}</td>
      </tr>
      <tr>
        <th>
          Awards
        </th>
        <td>
          {{movie.value.Awards}}
        </td>
      </tr>
      <tr>
        <th>
          DVD
        </th>
        <td>
          {{movie.value.DVD}}
        </td>
      </tr>
      <tr>
        <th>
          IMDB ID
        </th>
        <td>{{movie.value.imdbID}}</td>
      </tr>
      <tr>
        <th>
          IMDB Rating
        </th>
        <td>{{movie.value.imdbRating}}</td>
      </tr>
      <tr>
        <th>
          IMDB Votes
        </th>
        <td>{{movie.value.imdbVotes}}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>

import {useMoviesDb} from "~/composables/useMoviesDb";

definePageMeta({
   layout: 'single-movie'
 })

const movie = ref(null);
const route = useRoute()
const moviDbClient = useMoviesDb()


onMounted(async () => {
  movie.value = await moviDbClient.getSingleMovie(route.params.id);

  console.log(movie.value.value.Title)
})



</script>

<style lang="scss" scoped>

</style>