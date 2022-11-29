import {defineStore} from 'pinia'
import { $themeConfig } from '@themeConfig'

export const useVerticalMenuStore = defineStore('vertical-menu',{

   state: () => ({
      isVerticalMenuCollapsed: JSON.parse(localStorage.getItem('vertical_menu_collapse')) ? JSON.parse(localStorage.getItem('vertical_menu_collapse')) : $themeConfig.layout.menu.isCollapsed,
   }),

   actions:{
      UPDATE_VERTICAL_MENU_COLLAPSED(val) {
         localStorage.setItem('vertical_menu_collapse', val)
         this.isVerticalMenuCollapsed = val

      },
   }
})