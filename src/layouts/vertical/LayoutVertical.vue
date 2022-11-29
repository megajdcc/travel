<template>
  <layout-vertical :nav-menu-items="navMenuItems">

    <router-view #default="{Component}">
      <component :is="Component"/>
    </router-view>

    <template #customizer>
      <app-customizer v-if="showCustomizer" />
    </template>
   

  </layout-vertical>
</template>

<script setup>
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'
import navMenuItems from '@/navigation/vertical'

const { customizer: showCustomizer } = $themeConfig.layout


</script>
