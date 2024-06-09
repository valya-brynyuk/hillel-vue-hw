<template>
  <div :class="className" role="alert">{{ text }}</div>
</template>
<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].includes(value);
      }
    },
    text: {
      type: String,
      required: true,
    }
  },
  computed: {
    className() {
      return `alert alert-${this.type}`;
    }
  }
}
</script>

<style scoped>

</style>