<template>
  <Collapse :text="text" :opened="opened"/>
</template>

<script>


import Collapse from "./components/Collapse.vue";

export default {
  name: "App",
  data() {
    return {
      text: 'Це прихований текст',
      opened: true
    }
  },
  components: {
    Collapse

  }
}

</script>



