import { ref,watch,onMounted } from 'vue'
import { isNavLinkActive } from '@core/layouts/utils'
import { useRoute } from 'vue-router'
export default function useHorizontalNavMenuHeaderGroup(item) {

  const route = useRoute()

  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }


  onMounted(() => updateIsActive())
  watch(route,() => updateIsActive())
  
  return {
    isActive,
    updateIsActive,
  }
}
