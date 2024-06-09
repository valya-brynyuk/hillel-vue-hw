<template>
  <div class="progress">
    <div
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="progressbar"
        :style="style"
    />
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    percentage: {
      type: Number,
      required: true,
    }
  },
  computed: {
    style() {
      return {
        width: `${this.percentage}%`
      };
    }
  }
}
</script>
