import {defineStore} from 'pinia'

import {  $themeConfig } from '@themeConfig'

export const useAppConfigStore = defineStore('AppConfig',{

   state: () => ({

      layout: {

         skin: localStorage.getItem('vuexy-skin') || $themeConfig.layout.skin,
         routerTransition: localStorage.getItem('transition') || $themeConfig.layout.routerTransition,
         type: localStorage.getItem('layout_type') || $themeConfig.layout.type,

         contentWidth: $themeConfig.layout.contentWidth,

         menu: {
            hidden: $themeConfig.layout.menu.hidden,
         },

         navbar: {
            type: localStorage.getItem('navbar_type') || $themeConfig.layout.navbar.type,
            backgroundColor: localStorage.getItem('navbar_color') || $themeConfig.layout.navbar.backgroundColor,
         },

         footer: {
            type: localStorage.getItem('footer_type') || $themeConfig.layout.footer.type,
         },

      },

   }),

   actions:{
      
      UPDATE_SKIN(skin) {
         this.layout.skin = skin

         // Update value in localStorage
         localStorage.setItem('vuexy-skin', skin)

         // Update DOM for dark-layout
         if (skin === 'dark') document.body.classList.add('dark-layout')
         else if (document.body.className.match('dark-layout')) document.body.classList.remove('dark-layout')
      },

      UPDATE_ROUTER_TRANSITION(val) {


         this.layout.routerTransition = val

         localStorage.setItem('transition', val)


      },

      UPDATE_LAYOUT_TYPE(val) {
         this.layout.type = val

         localStorage.setItem('layout_type', val)


      },

      UPDATE_CONTENT_WIDTH(val) {
         this.layout.contentWidth = val
      },

      UPDATE_NAV_MENU_HIDDEN(val) {
         this.layout.menu.hidden = val

         // localStorage.setItem('menu_hidden', val)

      },

      UPDATE_NAVBAR_CONFIG(obj) {


         Object.assign(this.layout.navbar, obj)

         const k = Object.keys(obj)[0]

         if (k == 'backgroundColor') {
            localStorage.setItem('navbar_color', obj.backgroundColor);
         }

         if (k == 'type') {
            localStorage.setItem('navbar_type', obj.type)
         }

      },

      UPDATE_FOOTER_CONFIG( obj) {
         Object.assign(this.layout.footer, obj)

         if (obj.type) {
            localStorage.setItem('footer_type', obj.type)
         }
      },
   }



})