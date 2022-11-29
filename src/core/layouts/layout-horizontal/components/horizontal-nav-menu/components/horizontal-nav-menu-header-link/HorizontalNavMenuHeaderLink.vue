<template>
  <li
    v-if="canViewHorizontalNavMenuHeaderLink(item)"
    class="nav-item p-0"
    :class="{'sidebar-group-active active': isActive}">

    <b-link class="nav-link d-flex justify-content-center align-items-center" :to="{ name: item.route }" size="sm">
      <font-awesome :icon="item.icon" class="me-1"  />
      <span>{{ item.title }}</span>
    </b-link>
  </li>
</template>

<script>
// import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { useUtils as useAclUtils } from '@core/libs/acl'
import useHorizontalNavMenuHeaderLink from './useHorizontalNavMenuHeaderLink'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isActive, updateIsActive } = useHorizontalNavMenuHeaderLink(props.item)

    // const { t } = useI18nUtils()
    const { canViewHorizontalNavMenuHeaderLink } = useAclUtils()

    return {
      isActive,
      updateIsActive,

      // ACL
      canViewHorizontalNavMenuHeaderLink,

      // i18n
      // t,
    }
  },
}
</script>
