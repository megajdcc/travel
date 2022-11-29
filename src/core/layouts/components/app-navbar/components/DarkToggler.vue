<template>
  <li class="nav-item cursor-pointer "  @click="toggleDark">
    <font-awesome :icon="icon" size="lg" />
  </li>  
</template>
<script setup>
import useAppConfig from '@core/app-config/useAppConfig'
const {  toggleDark, icon } = useAppConfig()
</script>
