<template>
  <li v-if="canViewHorizontalNavMenuHeaderLink(item)" class="nav-item p-0" :class="{'sidebar-group-active active': isActive}">

    <b-link class="nav-link" :to="{ name: item.route }" size="sm" >
      <font-awesome :icon="item.icon"/>
     
      <span>{{ item.title }}</span>
    </b-link>
  </li>
</template>

<script setup>
import { useUtils as useAclUtils } from '@core/libs/acl'
import useHorizontalNavMenuHeaderLink from './useHorizontalNavMenuHeaderLink'

import {toRefs,onMounted} from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { isActive } = useHorizontalNavMenuHeaderLink(props.item)

const { canViewHorizontalNavMenuHeaderLink } = useAclUtils()

const { item } = toRefs(props)


</script>
