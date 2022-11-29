<template>
  <li
    v-if="canViewVerticalNavMenuGroup(item)"
    class="dropdown dropdown-submenu"
    :class="{
      'show': isOpen,
      'disabled': item.disabled,
      'sidebar-group-active active open': isActive,
      'openLeft': openChildDropdownOnLeft
    }"
    @mouseenter="() => updateGroupOpen(true)"
    @mouseleave="() => updateGroupOpen(false)"
  >
    <b-link
      class="dropdown-item"
      href="#"
      :class="{'dropdown-toggle': item.children}"
      @click="() => updateGroupOpen(!isOpen)"
    >

    <font-awesome :icon="item.icon" />
    <span class="menu-title">{{ item.title }}</span>
    
  </b-link>
    <ul
      ref="refChildDropdown"
      class="dropdown-menu"
    >
      <component
        :is="resolveNavItemComponent(child)"
        v-for="child in item.children"
        :key="child.header || child.title"
        ref="groupChild"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup>
import { resolveHorizontalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
// import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { useUtils as useAclUtils } from '@core/libs/acl'

// Composition Function
import useHorizontalNavMenuGroup from './useHorizontalNavMenuGroup'


  const props = defineProps({
    item:{
      type:Object,
      required:true
    }
  })

   const {
      refChildDropdown,
      isActive,
      isOpen,
      updateGroupOpen,
      updateIsActive,
      openChildDropdownOnLeft,
    } = useHorizontalNavMenuGroup(props.item)

    // const { t } = useI18nUtils()
    const { canViewVerticalNavMenuGroup } = useAclUtils()

</script>

<style>

</style>
