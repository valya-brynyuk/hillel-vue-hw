<template>
  <Definitions :data="definitions"/>
</template>

<script>
import Definitions from "./components/Definitions.vue";

export default {
  name: "App",
  data() {
    return {
      definitions: [
        {dt: 'one', dd: 'two', id: 1},
        {dt: 'another term', dd: 'another description', id: 2},
      ]
    };
  },
  components: {
    Definitions
  }
}

</script>



