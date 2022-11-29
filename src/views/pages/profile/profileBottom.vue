<template>
  <div class="text-center mb-2">
    <!-- overlay on button -->
    <b-overlay
      :show="show"
      rounded="sm"
      spinner-variant="primary"
      spinner-small
      class="d-inline-block"
    >
      <b-button
       
        variant="primary"
        size="sm"
        @click="onClick"
      >
        Load More
      </b-button>
    </b-overlay>
    <!-- overlay on button -->
  </div>
</template>

<script>


export default {

  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    onClick() {
      this.show = true
      // Simulate an async request
      setTimeout(() => {
        this.show = false
      }, 5000)
    },
  },
}
</script>
