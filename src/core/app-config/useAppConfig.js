import { computed } from 'vue'

import { useAppConfigStore } from 'stores/appConfig.js'
import { useVerticalMenuStore } from 'stores/verticalMenu'

export default function useAppConfig() {
   
   const appConfigStore = useAppConfigStore();
   const verticalMenu = useVerticalMenuStore();


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
   // Skin
   // ------------------------------------------------
   const skin = computed({
      get: () => appConfigStore.layout.skin,
      set: val => {

         appConfigStore.UPDATE_SKIN(val)
      },
   })

   const skinClasses = computed(() => {
      if (skin.value === 'bordered') return 'bordered-layout'
      if (skin.value === 'semi-dark') return 'semi-dark-layout'

      // Do not return any class for dark layout because dark layout updates class in body
      // Do not return any class for light layout as that is default layout
      return null
   })

   // ------------------------------------------------
   // routerTransition
   // ------------------------------------------------
   const routerTransition = computed({
      get: () => appConfigStore.layout.routerTransition,
      set: val => {
         appConfigStore.UPDATE_ROUTER_TRANSITION(val)
      },
   })

   // *===============================================---*
   // *--------- LAYOUT ---------------------------------------*
   // *===============================================---*

   // ------------------------------------------------
   // layoutType
   // ------------------------------------------------

   const layoutType = computed({

      get: () => appConfigStore.layout.type ,
      
      set: val => {
         appConfigStore.UPDATE_LAYOUT_TYPE(val)
      },
      
   })

   // Reset skin if skin is semi-dark and move to horizontal layout
   // watch(layoutType, val => {
   //   if (val && val === 'horizontal' && skin.value === 'semi-dark') skin.value = 'light'
   // })

   // ------------------------------------------------
   // Content Width (Full/Boxed)
   // ------------------------------------------------
   const contentWidth = computed({
      get: () => appConfigStore.layout.contentWidth,
      set: val => appConfigStore.UPDATE_CONTENT_WIDTH(val),
   })

   // ------------------------------------------------
   // isNavMenuHidden
   // ------------------------------------------------
   const isNavMenuHidden = computed({
      get: () => appConfigStore.layout.menu.hidden,
      set: val => {
         appConfigStore.UPDATE_NAV_MENU_HIDDEN(val)
      },
   })

   // *===============================================---*
   // *--------- NAVBAR ---------------------------------------*
   // *===============================================---*

   const navbarBackgroundColor = computed({
      get: () => appConfigStore.layout.navbar.backgroundColor,
      set: val => {
         appConfigStore.UPDATE_NAVBAR_CONFIG({ backgroundColor: val })
         
      },
   })

   const navbarType = computed({
      get: () => appConfigStore.layout.navbar.type,
      set: val => {
         appConfigStore.UPDATE_NAVBAR_CONFIG({ type: val })
      },
   })

   const toggleDark = () => {

      if (skin.value === 'dark') {
         skin.value = 'semi-dark'
      }  else{
         skin.value = 'dark'
      }


   }

   const icon = computed(() => skin.value === 'dark' ? 'sun' : 'moon')


   // *===============================================---*
   // *--------- FOOTER ---------------------------------------*
   // *===============================================---*

   const footerType = computed({
      get: () => appConfigStore.layout.footer.type,
      set: val => {
         appConfigStore.UPDATE_FOOTER_CONFIG({type:val})
      },
   })




   return {
      isVerticalMenuCollapsed,
      skin,
      skinClasses,
      routerTransition,

      // Navbar
      navbarBackgroundColor,
      navbarType,

      // Footer
      footerType,

      // Layout
      layoutType,
      contentWidth,
      isNavMenuHidden,
      toggleDark,
      icon
   }
}
