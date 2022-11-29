<template>
   <layout-public>
      <router-view #default="{Component}"> 
         <transition :name="routerTransition" mode="out-in">
            <component :is="Component" />
         </transition>
      </router-view>
   </layout-public>
</template>

<script setup>
   import LayoutPublic from '@core/layouts/layout-public/LayoutPublic.vue';
   import useAppConfig from '@core/app-config/useAppConfig'

   const {
      routerTransition
   } = useAppConfig();
</script>
