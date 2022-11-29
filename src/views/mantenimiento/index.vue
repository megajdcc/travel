<template>
  <!-- Under maintenance-->
  <div class="misc-wrapper">
   <!-- Brand logo-->
      <b-link class="brand-logo" :to="{name:'home'}">
        
         <!-- <img src="/storage/logotipo.png" alt="Logo" /> -->
        <!-- <h2 class="brand-text text-primary ms-1">
          Boda y Playa
        </h2> -->
      </b-link>
      <!-- /Brand logo-->

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          En mantenimiento 🛠
        </h2>

        <p class="mb-3">
          Disculpe las molestias, pero estamos realizando algunas tareas de mantenimiento en este momento. <br>
          <b-link href="/" title="Ir al Home " target="_self">
            Ir a Home
          </b-link>
        </p>
        <!-- img -->
        <b-img
          fluid
          :src="imgUrl"
          alt="Under maintenance page"
          :style="{
            height:'450px'
          }"
        />
      </div>
    </div>
  </div>
<!-- / Under maintenance-->
</template>

<script>
/* eslint-disable global-require */

import VuexyLogo from '@core/layouts/components/Logo.vue'


import {computed,toRefs,ref} from 'vue'

import useLogotipos from '@core/utils/useLogotipos'
import { useAppConfigStore } from 'stores/appConfig'

export default {
  components: {   
    VuexyLogo,
  },


  setup(){
    const appConfig = useAppConfigStore();
    const downImg = require('@/assets/images/pages/under-maintenance.svg')
    const { skin } = toRefs(appConfig.layout)
   

    const {
      logotipo,
      logotipobg
    } = useLogotipos();

    return {
      imgUrl:computed(() => {

        if (skin.value === 'dark') {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          downImg = require('@/assets/images/pages/under-maintenance-dark.svg')
          return downImg
        }

        return downImg
      }),

      logo: computed(() => {
        return skin.value == 'semi-dark' ? logotipo.value : logotipobg.value;
      }),
      downImg
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
