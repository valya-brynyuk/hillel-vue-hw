<template>
  <div class="btn-group" role="group">
    <button type="button" :class="['btn', 'left', getBtnClass('left')]" @click="btnClickHandler('left')">Left</button>
    <button type="button" :class="['btn', 'right', getBtnClass('right')]" @click="btnClickHandler('right')">Right
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnGroup",
  methods: {
    btnClickHandler(type) {
      this.activeButton = type
    },
    getBtnClass(type) {
      return this.activeButton === type ? 'btn-primary' : 'btn-secondary'
    }
  },
  data() {
    return {
      activeButton: ''
    };
  }
}
</script>
