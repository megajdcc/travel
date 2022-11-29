import {useAppStore} from 'stores/app'

import { ref, watch, computed } from 'vue'

export const useResponsiveAppLeftSidebarVisibility = () => {
  const app = useAppStore()

  const mqShallShowLeftSidebar = ref(false)
  // Close Active Sidebars and other stuff when going in large device
  const currentBreakPoint = computed(() => app.currentBreakPoint)
  watch(currentBreakPoint, (val, oldVal) => {
    // Reset chats & contacts left sidebar
    if (oldVal === 'md' && val === 'lg') mqShallShowLeftSidebar.value = false
  })

  return {
    mqShallShowLeftSidebar,
  }
}

export const _ = {}
