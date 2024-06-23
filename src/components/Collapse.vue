<template>
  <div>
    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
         aria-controls="collapseExample" @click.prevent="openedHandler">
        Link with href
      </a>
    </p>
    <div :class="className" id="collapseExample">
      <div class="card card-body">
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collapse",
  props: {
    text: {
      type: String,
      required: true
    },
    opened: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  methods: {
    openedHandler() {
      this.open = !this.open;
    }
  },
  data() {
    return {
      open: this.opened
    }
  },
  computed: {
    className() {
      return `collapse ${this.open ? ' show' : ''}`;
    }
  }
}
</script>
