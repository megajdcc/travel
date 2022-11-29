<template>
   <div >
      <perfil-info :usuario="usuario" />
      <invitados class="mt-1" />
   </div>

</template>

<script setup>

import {computed,toRefs,ref} from 'vue'

import PerfilInfo  from 'components/PerfilInfo.vue'
import invitados from './invitados/index.vue'

import {useUsuarioStore} from 'stores/usuario'
import {useRootStore} from 'stores/root'

const root = useRootStore();

const usuarioStore = useUsuarioStore();
const usuario = computed(() => usuarioStore.usuario)
const loading = computed(() => root.loading)

</script>