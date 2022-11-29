<template>
<b-container fluid>
   <b-row>
      <b-col cols="12" class="d-flex justify-content-center">
         <ul class="nav justify-content-center" :class="{ 'w-75': windowWidth >= 762 }">
            <li class="nav-item" v-if="!is_loggin">
               <b-link :to="{ name: 'login' }" class="nav-link px-2 fw-bolder">
                  Inicia Sesión
               </b-link>
            </li>

            <li class="nav-item" v-if="!is_loggin">
               <b-link :to="{ name: 'inicio' }" class="nav-link px-2 fw-bolder">
                  Hazte socio
               </b-link>
            </li>

            <li class="nav-item">
               <b-link :to="{ name: 'inicio' }" class="nav-link px-2 fw-bolder">
                  Afilia tú negocio
               </b-link>
            </li>
            <li class="nav-item">
               <b-link :to="{ name: 'inicio' }" class="nav-link px-2 fw-bolder">
                  Porque afiliar tu negocio?
               </b-link>
            </li>


            <li class="nav-item">
               <b-link :to="{ name: 'faqs' }" class="nav-link px-2 fw-bolder">
                  Preguntas Frecuentes
               </b-link>
            </li>

            <li class="nav-item">
               <b-link :to="{ name: 'about' }" class="nav-link px-2 fw-bolder">
                  Acerca de {{ app_name }}
               </b-link>
            </li>

            <li class="nav-item">
               <b-link :to="{ name: 'politicas.privacidad' }" class="nav-link px-2 fw-bolder">
                  Políticas de privacidad
               </b-link>
            </li>

            <li class="nav-item">
               <b-link :to="{ name: 'terminos-condiciones' }" class="nav-link px-2 fw-bolder">
                  Términos y condiciones
               </b-link>
            </li>




         </ul>

      </b-col>
   </b-row>

   <b-row class="clearfix border-top">
      <b-col cols="12" class="d-flex justify-content-center mt-1 mb-0">
         <p class="text-center">
            Marina Vallarta Business Center, Oficina 204, Plaza Marina. <br>
            Puerto Vallarta, México. <br>
            01 800 400 INFO (4636), (322) 225 9635.
         </p>
      </b-col>

      <b-col cols="12" class="mb-0">
         <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-1">

            <ul class="list-unstyled d-flex m-0">
               
               <li class="me-3">
                  <b-link href="#" target="_blank" class="text-secondary" title="Twitter" >
                     <font-awesome :icon="['fab','twitter']" size="2x" :color="skin == 'dark' ? 'white' : 'black'" />
                  </b-link>
               </li>

               <li class="me-3">
                  <b-link href="#" target="_blank" class="text-secondary" title="Instagram" >
                     <font-awesome :icon="['fab','instagram']" size="2x" :color="skin == 'dark' ? 'white' : 'dark'" />
                  </b-link>
               </li>
               
               <li>
                  <b-link href="#" target="_blank" class="text-secondary" title="Facebook" >
                     <font-awesome :icon="['fab','facebook']" size="2x" :color="skin == 'dark' ? 'white' : 'dark'" />
                  </b-link>
               </li>

            </ul>


            <span class="float-md-left d-block d-md-inline-block mt-25">
               COPYRIGHT © {{ new Date().getFullYear() }}
               <b-link class="ms-2" href="#" target="_blank">TravelPoints</b-link>
               <span class="d-none d-sm-inline-block">, Todos los derechos reservados</span>
            </span>


         </div>
      </b-col>
   </b-row>
</b-container>
</template>

<script setup>



import useAuth from '@core/utils/useAuth'
import { $themeConfig } from '@themeConfig'
import { toRefs, computed,ref } from 'vue'

import useAppConfig from '@core/app-config/useAppConfig.js'

import { useAppStore } from 'stores/app'

const {skin} = useAppConfig();

const appStore = useAppStore();

const {
   appName: app_name
} = $themeConfig.app;


const {
   is_loggin
} = useAuth()

const windowWidth = computed(() => appStore.windowWidth)

</script>
