<template>
  <Carousel :images="images"/>
</template>

<script>

import Carousel from "./components/Carousel.vue";

export default {
  name: "App",
  data() {
    return {
      images: [
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
      ]
    }
  },
  components: {
    Carousel
  }
}

</script>



