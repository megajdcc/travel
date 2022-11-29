<template>
  <li
    v-if="canViewHorizontalNavMenuHeaderGroup(item)"
    class="dropdown nav-item p-0"
    :class="{
      'sidebar-group-active active open': isActive,
      'show': isOpen,
    }"
    @mouseenter="() => updateGroupOpen(true)"
    @mouseleave="() => updateGroupOpen(false)">

    <b-link class="nav-link dropdown-toggle d-flex justify-content-center align-items-center" >

      <font-awesome :icon="item.icon" />

      <span>{{ item.header }}</span>
    </b-link>
    <ul class="dropdown-menu">
      <component
        :is="resolveHorizontalNavMenuItemComponent(child)"
        v-for="child in item.children"
        :key="child.title"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup>

import { resolveHorizontalNavMenuItemComponent } from '@core/layouts/utils'
import { useUtils as useAclUtils } from '@core/libs/acl'
import useHorizontalNavMenuHeaderGroup from './useHorizontalNavMenuHeaderGroup'


const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})

const {
  isActive,
  updateIsActive,
  isOpen,
  updateGroupOpen,
} = useHorizontalNavMenuHeaderGroup(props.item)

const { canViewHorizontalNavMenuHeaderGroup } = useAclUtils()

</script>
