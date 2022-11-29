<template>
  <layout-full>
    <router-view #default="{ Component }">
      <transition :name="routerTransition" mode="out-in">
        <!-- <keep-alive> -->
          <component :is="Component" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </layout-full>
</template>

<script setup>
import LayoutFull from '@core/layouts/layout-full/LayoutFull.vue'
import useAppConfig from '@core/app-config/useAppConfig'
const { contentWidth, routerTransition } = useAppConfig()

</script>
