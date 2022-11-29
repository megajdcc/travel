<template>
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <b-link class="brand-logo">
        
         <img src="/storage/logotipo.png" alt="Logo" />
        <!-- <h2 class="brand-text text-primary ms-1">
          Boda y Playa
        </h2> -->
      </b-link>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          No estas autorizado! 🔐
        </h2>
        <p class="mb-2">
          No tienes permiso para acceder a esta página. Vuelve a casa!!
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          :to="loginRoute()"
        >De vuelta a casa</b-button>
        <b-img
          fluid
          :src="imgUrl"
          alt="Not authorized page"
        />
      </div>
    </div>
  </div>
</template>

<script setup>


import downImg from '@/assets/images/pages/not-authorized.svg'
import downImgDark from '@/assets/images/pages/not-authorized-dark.svg'

import { useUsuarioStore } from 'stores/usuario'
import { useAppConfigStore } from 'stores/appConfig'
import { useRouter } from 'vue-router'

const usuarioStore = useUsuarioStore();
const appConfigStore = useAppConfigStore();
const router = useRouter();

const usuario = computed(() => usuarioStore.usuario)

const imgUrl = computed(() => appConfigStore.layout.skin === dark ? downImgDark : downImg )


const loginRoute = () => {
  if (usuario.value.id) {
    router.push('/home')
  } else {
    router.push({ name: 'login' })
  }

}

</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
