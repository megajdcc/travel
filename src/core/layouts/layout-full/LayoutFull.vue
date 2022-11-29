<template>
  <div :class="contentWidth === 'boxed' ? 'container p-0' : null">
    
    <router-view #default="{Component}">
      <transition :name="routerTransition" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import useAppConfig from '@core/app-config/useAppConfig'
const { contentWidth, routerTransition } = useAppConfig()
</script>
