<template>
  <!-- Error page-->
  <div class="misc-wrapper">
       <!-- Brand logo-->
      <b-link class="brand-logo" @click.stop="router.push('/')">
         <img :src="logo" alt="Logo" />
      </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
         Página no encontrada 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          ¡UPS! 😖 La URL solicitada no se encontró en este servidor. <br>
            <b-link @click="() => router.push('/')">
              Regresar a home
            </b-link>
        </p>
        <!-- image -->
        <b-img fluid :src="imgUrl" alt="Error page" />
      </div>
    </div>
  </div>
<!-- / Error page-->
</template>

<script setup>

import useLogotipos from '@core/utils/useLogotipos'
import {computed,toRefs} from 'vue'
import {useRouter} from 'vue-router'
import useAppConfig from '@core/app-config/useAppConfig'
import downImgDark from '@/assets/images/pages/error-dark.svg'
import downImg from '@/assets/images/pages/error.svg'

const {skin} = useAppConfig()
const router  = useRouter();

const imgUrl = computed(() => ['dark','semi-dark'].includes(skin.value) ? downImgDark : downImg)

const {
  logotipo, logotipobg
} = useLogotipos();


const logo = computed(() => {
  return ['semi-dark','dark'].includes(skin.value) ? logotipo.value : logotipobg.value;
})

</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
