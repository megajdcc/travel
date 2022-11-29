<template>
  <li
    v-if="canViewHorizontalNavMenuLink(item)"
    :class="{
      'active': isActive,
      'disabled': item.disabled
    }"
  >
    <b-link
      v-bind="linkProps"
      class="dropdown-item"
    >
      <font-awesome :icon="item.icon" />
      <span class="menu-title">{{ item.title }}</span>
    </b-link>
  </li>
</template>

<script>
import { useUtils as useAclUtils } from '@core/libs/acl'
import useHorizontalNavMenuLink from './useHorizontalNavMenuLink'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isActive, linkProps, updateIsActive } = useHorizontalNavMenuLink(props.item)

    const { canViewHorizontalNavMenuLink } = useAclUtils()

    return {
      isActive,
      linkProps,
      updateIsActive,

      // ACL
      canViewHorizontalNavMenuLink,

    }
  },

}
</script>
