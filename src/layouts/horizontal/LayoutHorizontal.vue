<template>
   <layout-horizontal>
      
      <router-view #default="{Component}" >
         <component :is="Component" />
      </router-view>

      <template #customizer>
         <app-customizer v-if="showCustomizer"/>
      </template>
     
   </layout-horizontal>


</template>

<script setup>
import LayoutHorizontal from '@core/layouts/layout-horizontal/LayoutHorizontal.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

const showCustomizer = $themeConfig.layout.customizer

</script>
