<template>
  <div class="app-content content" :class="[{'show-overlay': app.shallShowOverlay}, $route.meta.contentClass]">
    
    <div class="content-overlay" />
    
    <div class="header-navbar-shadow" />

    <div class="content-wrapper" :class="contentWidth === 'boxed' ? 'container p-1' : null">
      <slot name="breadcrumb">
        <app-breadcrumb />
      </slot>

      <div class="content-body">
        <transition :name="routerTransition" mode="out-in">
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

const app = useAppStore();

const { routerTransition, contentWidth } = useAppConfig()

</script>