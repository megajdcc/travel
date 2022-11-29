<template>
  <li
    v-if="canViewVerticalNavMenuLink(item)"
    class="nav-item"
    :class="{
      'active': isActive,
      'disabled': item.disabled
    }"
  >
  
    <b-link
      v-bind="linkProps"
      class="d-flex align-items-center"
    >
    
    <font-awesome :icon="item.icon" size="1x" />

      <!-- <feather-icon :icon="item.icon || 'CircleIcon'" /> -->
      <span class="menu-title text-truncate">{{ item.title }}</span>
      <b-badge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'primary'"
        class="me-1 ms-auto"
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
  </li>
</template>

<script setup>

import { useUtils as useAclUtils } from '@core/libs/acl'
// import { useUtils as useI18nUtils } from '@core/libs/i18n'
import useVerticalNavMenuLink from './useVerticalNavMenuLink'
// import mixinVerticalNavMenuLink from './mixinVerticalNavMenuLink'

import {onMounted} from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { isActive, linkProps, updateIsActive } = useVerticalNavMenuLink(props.item)
// const { t } = useI18nUtils()
const { canViewVerticalNavMenuLink } = useAclUtils()



</script>
