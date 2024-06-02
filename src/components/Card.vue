<template>
  <div class="card">
    <div class="card-body">
      <h4 v-if="title?.length" class="card-title">{{ title }}</h4>
      <p v-if="text?.length" class="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    }
  },

}
</script>