import { ref,watch } from 'vue'
import { isNavLinkActive, navLinkProps } from '@core/layouts/utils'

import { useRoute } from 'vue-router'
export default function useHorizontalNavMenuLink(item) {
  const isActive = ref(false)
  const route = useRoute()
  const linkProps = navLinkProps(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  watch(route,() => {
    updateIsActive();
  })


  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
