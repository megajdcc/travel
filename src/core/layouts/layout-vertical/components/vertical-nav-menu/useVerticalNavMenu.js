import { ref, computed } from 'vue'
import {useVerticalMenuStore} from 'stores/verticalMenu'

export default function useVerticalNavMenu(props) {

  const verticalMenu = useVerticalMenuStore()
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  const isVerticalMenuCollapsed = computed({
    get: () => verticalMenu.isVerticalMenuCollapsed,
    set: val => {
      verticalMenu.UPDATE_VERTICAL_MENU_COLLAPSED(val)
    },
  })

  // ------------------------------------------------
  // collapseTogglerIcon
  // ------------------------------------------------
  const collapseTogglerIcon = computed(() => {
    
    if (props.isVerticalMenuActive) {
      return isVerticalMenuCollapsed.value ? 'circle' : 'dot-circle'
    }
    return 'circle-xmark'
  })

  const isMouseHovered = ref(false)

  const updateMouseHovered = val => {
    isMouseHovered.value = val
  }

  const toggleCollapsed = () => {
    isVerticalMenuCollapsed.value = !isVerticalMenuCollapsed.value
  }

  return {
    isMouseHovered,
    isVerticalMenuCollapsed,
    collapseTogglerIcon,
    toggleCollapsed,
    updateMouseHovered,
  }
}
