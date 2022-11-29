
<template>
   <div id="app" class="h-100" :class="[skinClasses]">
      <component :is="layout">
         <router-view  v-slot="{ Component }">
            <transition name="fade" mode="out-in">
               <keep-alive>
                  <component :is="Component"/>
               </keep-alive>
            </transition>
         </router-view>
      </component>
      <scroll-to-top v-if="enableScrollToTop" />
   </div>
</template>


<script setup>
   import LayoutFull from '@/layouts/full/LayoutFull.vue'
   import LayoutVertical from '@/layouts/vertical/LayoutVertical.vue'
   import LayoutHorizontal from '@/layouts/horizontal/LayoutHorizontal.vue'
   import LayoutPublic from '@/layouts/public/LayoutPublic.vue'
   
   import {computed,watch, onMounted,onBeforeMount} from 'vue'

   import {useRoute} from 'vue-router'
   
   import { $themeColors, $themeBreakpoints, $themeConfig } from '@themeConfig'

   import { useWindowSize, useCssVar, useNetwork } from '@vueuse/core'
   
   import useAppConfig  from '@core/app-config/useAppConfig.js'
   
   import ScrollToTop from '@core/components/scroll-to-top/ScrollToTop.vue'   
   import { useAppStore } from 'stores/app'
   import { useUsuarioStore } from 'stores/usuario.js'



const { skin, skinClasses, layoutType } = useAppConfig()
   const { enableScrollToTop } = $themeConfig.layout;


   const appStore = useAppStore();
   const usuarioStore = useUsuarioStore();


   const route = useRoute();


   const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']


   for (let i = 0, len = colors.length; i < len; i++) {
      $themeColors[colors[i]] = useCssVar(`--bs-${colors[i]}`, document.documentElement).value.trim()
   }

   const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl','xxl']

   const puntos = [0,576,768,992,1200,1400]

   for (let i = 0, len = breakpoints.length; i < len; i++) {

      // $themeBreakpoints[breakpoints[i]] = useCssVar(`bs-${breakpoints[i]}`, document.documentElement).value.slice(0, -2)
      $themeBreakpoints[breakpoints[i]] = puntos[i];

   }

   const contentLayoutType = computed(() => {
      return $themeConfig.layout.type
   }) 

   
   const layout = computed(() => {
      
      if (route.meta.layout === 'full') {
         return LayoutFull
      } else if (route.meta.layout === 'public') {
         return LayoutPublic
      } else {
         return layoutType.value == 'vertical' ? LayoutVertical : LayoutHorizontal
      }

   })


 

   // If skin is dark when initialized => Add class to body
   if (skin.value === 'dark') document.body.classList.add('dark-layout')

   // Set Window Width in store
   appStore.UPDATE_WINDOW_WIDTH(window.innerWidth)
   const { width: windowWidth } = useWindowSize()

   watch(windowWidth, (val) => {
      appStore.UPDATE_WINDOW_WIDTH(val)
   })


   onBeforeMount(() => {
      if (localStorage.getItem('token')) {
         usuarioStore.cargarUser(JSON.parse(localStorage.getItem('userData')))
      }

   })

   // onMounted(() => {
         
   //    if (localStorage.getItem('token')) {
   //       usuarioStore.cargarUser(JSON.parse(localStorage.getItem('userData')))
   //    }

   // })

</script>

<style scoped>
.logo {
   height: 6em;
   padding: 1.5em;
   will-change: filter;
}

.logo:hover {
   filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
   filter: drop-shadow(0 0 2em #42b883aa);
}
</style>