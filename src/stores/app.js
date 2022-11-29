import { defineStore } from 'pinia'
import { $themeBreakpoints  } from '@themeConfig'

export const useAppStore = defineStore('app',{

   state: () => ({
      windowWidth: 0,
      shallShowOverlay: false,
      version: String(localStorage.getItem('version-app')) | null,
      showComposeEmail: false
   }),

   getters:{
      
      currentBreakPoint: state => {
         const { windowWidth } = state
         if (windowWidth >= $themeBreakpoints.xl) return 'xl'
         if (windowWidth >= $themeBreakpoints.lg) return 'lg'
         if (windowWidth >= $themeBreakpoints.md) return 'md'
         if (windowWidth >= $themeBreakpoints.sm) return 'sm'
         return 'xs'
      },
   },


   actions:{
      
      UPDATE_WINDOW_WIDTH(val) {
         this.windowWidth = val
      },
      TOGGLE_OVERLAY(val) {
         this.shallShowOverlay = val !== undefined ? val : !this.shallShowOverlay
      },

      setVersion(version) {
         localStorage.setItem('version-app', version)
         this.version = version
      },

      toggleShowComposeEmail() {
         this.showComposeEmail = !this.showComposeEmail
      }

   }




})
