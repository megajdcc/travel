import { ref,watch,onMounted } from 'vue'
import { isNavLinkActive, navLinkProps } from '@core/layouts/utils'
import { useRoute } from 'vue-router'
export default function useVerticalNavMenuLink(item) {
  const isActive = ref(false)
  const route = useRoute();

  const linkProps = navLinkProps(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  onMounted(() => updateIsActive())

  
  watch(route,() => updateIsActive())
  
  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
