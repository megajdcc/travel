<template>
  <b-card no-body>
    <b-card-body class="d-flex justify-content-between align-items-center">
      <div class="truncate">
        <h2 class="mb-25 fw-bolder">
          {{ statistic }}
        </h2>
        <span v-html="statisticTitle" />
      </div>
      
      <b-avatar :variant="`light-${color}`" size="lg"  >
        <font-awesome :icon="icon" size="xl" />
      </b-avatar>

    </b-card-body>
  </b-card>
</template>

<script setup>

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  statistic: {
    type: [Number, String],
    required: true,
  },
  statisticTitle: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
})

</script>
<style lang="scss">
.badge svg{
  height:auto !important;
  width:auto !important;
}
</style>