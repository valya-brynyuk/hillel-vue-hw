<template>
  <ul>
    <li v-for="(child, index) in $slots.default()" :key="`list-item-${index}`">
      <component :is="child" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListGroup",
}
</script>
