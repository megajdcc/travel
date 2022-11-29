<template>
  <ul>
    
    <component v-for="item in items" :is="resolveNavItemComponent(item)"  :key="item.header || item.title" :item="item" >

    </component>
  </ul>
</template>

<script setup>

import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from 'vue'
// import VerticalNavMenuHeader from '../vertical-nav-menu-header/index.vue'
// import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
// import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'

const props  = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

provide('openGroups', ref([]))

</script>

<style lang="scss">
@import "@core/scss/base/core/menu/menu-types/vertical-menu.scss";
</style>