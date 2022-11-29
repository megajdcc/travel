<template>
  <div class="app-content content " :class="[{'show-overlay': app.shallShowOverlay}, $route.meta.contentClass]">
    
    <div class="content-overlay" />
    
    <div class="header-navbar-shadow" />
    
    <div class="content-wrapper " :class="contentWidth === 'boxed' ? 'container p-0' : null" >
      <slot name="breadcrumb">
        <app-breadcrumb class="mt-1 px-1" />
      </slot>
    
      <div class="content-body">
    
        <transition name="fade" mode="out-in">
          <slot />
        </transition>
      </div>
    
    
    
    </div>
   
  </div>
</template>

<script setup>
import AppBreadcrumb from '@core/layouts/components/AppBreadcrumb.vue'
import useAppConfig from '@core/app-config/useAppConfig'
import { useAppStore } from 'stores/app'

const { routerTransition, contentWidth } = useAppConfig()
const app = useAppStore();

</script>
