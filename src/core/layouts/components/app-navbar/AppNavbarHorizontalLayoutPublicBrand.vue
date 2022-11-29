<template>
  <div class="navbar-header  d-xl-block d-none">
    <ul class="nav navbar-nav">
      <li class="nav-item">
        <b-link class="navbar-brand wow slideInLeft"  to="/" data-wow-duration="1s">

          <span class="logo">
            <b-img :src="logo" alt="logo" />
          </span>
        
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { $themeConfig } from '@themeConfig'
import {computed } from 'vue'
import useLogotipos from '@core/utils/useLogotipos.js'


import { useAppConfigStore } from 'stores/appConfig'

const { appName } = $themeConfig.app
const storeAppConfig = useAppConfigStore();

const skin  = computed(() => storeAppConfig.layout.skin)
 
const {
  logotipo,
  logotipobg
} = useLogotipos();


const logo =  computed(() => {
  return skin.value == 'semi-dark' ? logotipobg.value : logotipo.value;
})

</script>
