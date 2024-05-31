<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">
        <slot/>
      </p>
      <button type="button" class="btn btn-primary">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    }
  },

}
</script>

<style lang="scss" scoped>

</style>