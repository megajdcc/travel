import { ref,watch } from 'vue'
import { isNavGroupActive } from '@core/layouts/utils'

import {useRoute} from 'vue-router'

export default function useHorizontalNavMenuHeaderGroup(item) {

  const route = useRoute();

  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  const isOpen = ref(false)

  const updateGroupOpen = val => {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val
  }

  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)

  const updateIsActive = () => {
    isActive.value = isNavGroupActive(item.children)
  }

  watch(route,() => updateIsActive())

  return {
    isOpen,
    isActive,
    updateGroupOpen,
    updateIsActive,
  }
}
