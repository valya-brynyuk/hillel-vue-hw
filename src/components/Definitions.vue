<template>
  <dl>
    <template v-for="(item) in data" :key="item.id">
      <dt>{{ item.dt }}</dt>
      <dd>{{ item.dd }}</dd>
    </template>
  </dl>
</template>

<script>
export default {
  name: "Definitions",
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
