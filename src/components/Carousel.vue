<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :class="['carousel-item', {active: activeIndex === index}]" :key="image">
        <img alt="" class="d-block w-100" :src="image">
      </div>
    </div>
    <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev"
            @click="prevHandler">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next"
            @click="nextHandler">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    prevHandler() {
      if (!this.images.length) {
        return;
      }
      this.activeIndex = this.activeIndex - 1 < 0 ? this.images.length - 1 : this.activeIndex - 1;
    },
    nextHandler() {
      if (!this.images.length) {
        return;
      }
      this.activeIndex = this.images.length <= this.activeIndex + 1 ? 0 : this.activeIndex + 1;
    },
  }
}
</script>
