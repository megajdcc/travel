<template>
   <b-card v-if="usuarios.length">
      <template #header>
         <h2 class="fw-bolder">Mis Referidos</h2>
      </template>

      <b-container fluid>


         <b-row>
            <b-col cols="12" class="p-1" v-for="(usuario,i) in usuarios" :key="i" md="4">
               
               <section class="d-flex align-items-center shadow-lg" style="cursor:pointer;border-radius:10px ; border:1px dotted rgba(0,0,0,0.5);padding: .5rem;">

                  <article class="flex-shrink-1">
                     <b-avatar :src="usuario.imagen" :alt="usuario.nombre_completo || usuario.username" size="md" />
                  </article>

                  <main class="flex-grow-1 ms-1">
                     <h3>{{ usuario.nombre_completo || usuario.username }}</h3>
                  </main>

               </section>
              
            </b-col>
         </b-row>


         <b-row>
            <b-col cols="12">
               <paginate-table :dataMeta="dataMeta" v-model:perPage="perPage" :total="total" :currentPage="currentPage" />
            </b-col>
         </b-row>
      </b-container>

   </b-card>

</template>

<script setup>


import useMisInvitadosList from './useMisInvitadosList'
import {toRefs,computed,onMounted,watch} from 'vue'
import {useRootStore} from 'stores/root'
import { useUsuarioStore } from 'stores/usuario'


// import PerPage from 'components/PerPage.vue'
import PaginateTable from 'components/PaginateTable.vue'

const usuarioStore = useUsuarioStore();
const {usuario} = toRefs(usuarioStore);

const root = useRootStore();

// const usuario = computed(() => usuarioStore.usuario)

const {
   perPageOptions,
   currentPage,
   perPage,
   total,
   dataMeta,
   refetchData,
   fetchData,
   usuarios
} = useMisInvitadosList(usuario.value.id)

const loading =  computed(() => root.loading)


</script>