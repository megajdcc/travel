<template>
  <div class="app-content content" :class="[{'show-overlay': app.shallShowOverlay}, $route.meta.contentClass]" >
    <div class="content-overlay" />
    <div class="header-navbar-shadow" />

    <transition :name="routerTransition" mode="out-in" >
      <div class="content-area-wrapper" :class="contentWidth === 'boxed' ? 'container p-0' : null" >
        <slot name="breadcrumb">
          <app-breadcrumb />
        </slot>

        <!-- <portal-target name="content-renderer-sidebar-left" slim /> -->
        
        <div class="content-right">
          <div class="content-wrapper">
            <div class="content-body">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import AppBreadcrumb from '@core/layouts/components/AppBreadcrumb.vue'
  import useAppConfig from '@core/app-config/useAppConfig'

import { useAppStore } from 'stores/app'

const app = useAppStore();

  const { routerTransition, contentWidth } = useAppConfig()
</script>

