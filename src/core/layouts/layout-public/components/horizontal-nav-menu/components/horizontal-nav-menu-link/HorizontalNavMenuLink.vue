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
    <font-awesome :icon="item.icon"/>
    <span class="menu-title">{{ item.title }}</span>
    </b-link>
  </li>
</template>

<script>
// import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { useUtils as useAclUtils } from '@core/libs/acl'
import useHorizontalNavMenuLink from './useHorizontalNavMenuLink'
import mixinHorizontalNavMenuLink from './mixinHorizontalNavMenuLink'

export default {
  mixins: [mixinHorizontalNavMenuLink],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isActive, linkProps, updateIsActive } = useHorizontalNavMenuLink(props.item)

    // const { t } = useI18nUtils()
    const { canViewHorizontalNavMenuLink } = useAclUtils()

    return {
      isActive,
      linkProps,
      updateIsActive,

      // ACL
      canViewHorizontalNavMenuLink,

      // i18n
      // t,
    }
  },

}
</script>
