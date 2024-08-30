<template>
  <div v-if="text?.length" class="el-form-item__error">{{text}}</div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    text: {
      type: String,
    }
  }
}
</script>
