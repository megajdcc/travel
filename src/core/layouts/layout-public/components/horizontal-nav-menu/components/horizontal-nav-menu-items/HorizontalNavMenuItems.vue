<template>
  <ul id="main-menu-navigation" class="nav navbar-nav" >
    <component  v-for="item in items" :key="item.header || item.title" :item="item" :is="resolveNavComponent(item)" />
  </ul>
</template>

<script setup>

import HorizontalNavMenuHeaderLink from '../horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue'
import HorizontalNavMenuHeaderGroup from '../horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const resolveNavComponent = item => {
  if (item.children) return HorizontalNavMenuHeaderGroup
  return HorizontalNavMenuHeaderLink
}

</script>
