<template>
  <b-tabs vertical content-class="col-12 col-md-9 mt-1 mt-md-0" pills nav-wrapper-class="col-md-3 col-12" nav-class="nav-left" >

    <!-- general tab -->
    <b-tab active>

      <!-- title -->
      <template #title>
        <font-awesome icon="user" class="me-1" />
        <span class="fw-bold">General</span>
      </template>

      <configuracion-general/>
    </b-tab>
    <!--/ general tab -->

    <!-- change password tab -->
    <b-tab>

      <!-- title -->
      <template #title>
        <font-awesome icon="lock" class="me-1" />
        <span class="fw-bold">Cambiar contraseña</span>
      </template>

      <cambiar-password />
    </b-tab>
    <!--/ change password tab -->

    <!-- info -->
    <b-tab>

      <!-- title -->
      <template #title>

        <font-awesome icon="info" class="me-1"/>
        
        <span class="fw-bold">Información</span>
      </template>

      <cuenta-informacion-form />
    </b-tab>

  

  </b-tabs>
</template>

<script setup>
import ConfiguracionGeneral from './ConfiguracionGeneral.vue'
import CambiarPassword from './CambiarPassword.vue'
import CuentaInformacionForm from './CuentaInformacionForm.vue'
import {useUsuarioStore} from 'stores/usuario'

const usuarioStore = useUsuarioStore();
const usuario = computed(() => usuarioStore.usuario)

</script>
