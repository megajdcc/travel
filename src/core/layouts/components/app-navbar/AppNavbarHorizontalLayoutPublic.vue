<template>
      <div class="navbar-container d-flex content align-items-center ">
      
         <!-- Nav Menu Toggler -->
         <ul class="nav navbar-nav d-xl-none">
            <li class="nav-item">
               <b-button class="nav-link border-line-none" variant="transparent" @click="toggleVerticalMenuActive" >
                  <font-awesome icon="bars" size="xl" />
               </b-button>
            </li>
         </ul>
      
         <!-- Right Col -->
         
         <ul class="nav align-items-center ms-auto">
            <Locale class="d-none d-md-flex" />

            <li class="nav-item d-none d-lg-flex " v-for="(ruta,i) in rutas" :key="i" v-b-tooltip.hover.bottom :title="ruta.label">
               <router-link :to="ruta.ruta" :title="ruta.label" class="nav-link">
                  <font-awesome :icon="ruta.icon" size="lg" />
               </router-link>
            </li>
            <DarkToggler class="ms-2  d-none d-md-flex" />
            <notificacion />
            <user-dropdown class="order-1" />
         </ul>
         
      </div>
   
</template>

<script setup>

import Locale from './components/Locale.vue'
import {onMounted,computed,watch} from 'vue'

import DarkToggler from './components/DarkToggler.vue'
import notificacion from '@/components/notifications.vue'
import UserDropdown from './components/UserDropdown.vue'
import {toRefs} from 'vue'

import { useUsuarioStore } from 'stores/usuario'
const usuarioStore = useUsuarioStore();


const usuario = computed(() => usuarioStore.usuario)
const isUser = computed(() => usuario.value.id ? true : false)
const  props = defineProps({
   toggleVerticalMenuActive:Function
})


const rutas = [
   {label:'Quienes Somos?',ruta:{name:'about'},icon:'info'},
   { label: 'Tienda de Regalos', ruta: { name: 'inicio' }, icon:'bag-shopping'}, 
   { label: 'Contáctanos', ruta: { name: 'inicio' }, icon:'paper-plane' },
]


</script>