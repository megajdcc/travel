<template>
  
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user">

    <template #button-content>

      <div class="d-flex">
        
        <div class="flex-shrink-1 me-1 d-flex flex-column align-items-end">
          <p class="user-name fw-bolder mb-0 ">
            {{ usuario.nombre || usuario.apellido }}
          </p>
          <span class="user-status">{{ usuario.rol.nombre }}</span>

        </div>
        <section class="flex-grow-1">
          <b-avatar  :src="usuario.avatar" variant="light-primary" badge class="badge-minimal" badge-variant="success"
            :text="avatarText(usuario.nombre+' '+usuario.apellido)" v-if="usuario.nombre">
          </b-avatar>
          <b-avatar  v-else :src="`${$uri}/storage/img-perfil/default.jpg`" variant="light-primary" badge
            class="badge-minimal" badge-variant="danger" />
        </section>

      </div>
    </template>


    <b-dropdown-item :to="{ name: 'home' }" link-class="d-flex align-items-center" v-if="usuario.id && $can('read','home')">
      <font-awesome icon="home" class="me-1" />
      <span>Home</span>
    </b-dropdown-item>

    <b-dropdown-item :to="{ name: 'miperfil' }" link-class="d-flex align-items-center" v-if="usuario.id">
      <font-awesome icon="gear" class="me-1" />
      <span>Mi perfil</span>
    </b-dropdown-item>
      
    
    <!-- <b-dropdown-item :to="{ name: 'perfil' }" link-class="d-flex align-items-center" v-if="$can('read','perfil')" >
      <font-awesome icon="cog" class="me-1" />
      <span>Configuración</span>
    </b-dropdown-item> -->

  

    <b-dropdown-item :to="{ name: 'faqs' }" link-class="d-flex align-items-center">
      <font-awesome icon="info" class="me-1"/>
      <span>FAQ</span>
    </b-dropdown-item>
    
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="logout"
      v-loading="loading"
      v-if="usuario.id">
      <font-awesome icon="right-from-bracket" class="me-1" />
     
      <span>Cerrar sesión</span>
    </b-dropdown-item>

    <b-dropdown-item link-class="d-flex align-items-center" :to="{name:'login'}" v-else v-loading="loading">
      <font-awesome icon="right-to-bracket" class="me-1" />

      <span>Iniciar sesión</span>
    </b-dropdown-item>


  </b-nav-item-dropdown>
</template>

<script setup>


import { avatarText } from '@core/utils/filter'
import { computed,toRefs } from 'vue';
import useAuth from '@core/utils/useAuth'

import {useUsuarioStore} from 'stores/usuario'
import {useRootStore} from 'stores/root'

const usuarioStore = useUsuarioStore()
const root = useRootStore();

const { usuario } = toRefs(usuarioStore)

// const usuario = computed(() => store.usuario)

const {
  logout,
} = useAuth();

const loading = computed(() => root.loading)

</script>

<style lang="scss">

.b-avatar .b-avatar-badge{
  font-size:8pt;
  border:2px solid white;
}

</style>