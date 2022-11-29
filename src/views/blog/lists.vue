<template>
   <b-card>
      <b-container fluid class="px-0 mx-0">
      
         <b-row class="mb-1">
            <b-col cols="12" md="4">
               <per-page v-model="perPage" :perPageOptions="perPageOptions" />
            </b-col>
            <b-col cols="12" md="8" class="mt-1 mt-md-0">

               <form-group :floating="true" label="Buscar Contenido">
                  <b-form-input type="search" v-model="searchQuery" placeholder="Buscar contenido..." />
               </form-group>
               <!-- <b-input-group size="sm">
                 
      
      
                  <b-input-group-append>
                     <b-button :to="{name:'create.blog'}" v-if="$can('write','contenidos')" variant="outline-primary"
                        class="d-flex align-items-center">
                        Nuevo Contenido
                     </b-button>
                  </b-input-group-append>
               </b-input-group> -->
            </b-col>
         </b-row>
      
         <b-row class="blog-list-wrapper w-100">

            <section class="w-100 d-flex justify-content-center" v-if="loading">
               <b-spinner variant="primary" label="Cargando..." class="d-flex justify-content-center text-center" type="grow">
               </b-spinner>
            </section>
      
            <b-col v-for="blog in contenidos" :key="blog.id" md="4">

               <b-card tag="article" no-body>
                  
                  <b-link :to="{ name: 'show.contenido', params: { id: blog.id } }">
                     <b-img :src="`${$uri}/storage/blog-banner/${blog.banner}`" :alt="blog.titulo.slice(5)" class="card-img-top" />
                  </b-link>

                  <b-card-body style="padding:0.5rem">
                     <b-card-title>
                        <b-link :to="{ name: 'show.contenido', params: { id: blog.id } }"
                           class="blog-title-truncate text-body-heading">
                           {{ blog.titulo }}
                        </b-link>
                     </b-card-title>
      
                     
                     <section class="d-flex align-items-center" >
                        
                        <article class="flex-shrink-1 me-1">
                              <b-avatar href="javascript:void(0)" size="24" :src="blog.usuario.avatar" />
                        </article>

                        <main class="flex-grow-1">
                           <small class="text-muted me-1">Por</small>
                           <small>
                              <b-link class="text-body">{{ `${blog.usuario.nombre} ${blog.usuario.apellido}` }}</b-link>
                           </small>
                           <br>
                           <small class="text-muted">{{ getFecha(blog.created_at)  }}</small>
                        </main>
                     </section>
                    

                     <div class="py-10">
                        <b-link v-for="(categoria,index) in blog.categorias" :key="index">
                           <b-badge pill class="me-1" :style="{
                              'background-color':colorRand()
                           }">
                              <font-awesome :icon="categoria.icono" />
                              {{ categoria.nombre }}
                           </b-badge>
                        </b-link>
                     </div>
      
                     <!-- <b-card-text class="blog-content-truncate">
                           {{ blog.contenido }}
                        </b-card-text> -->
      
                     <hr>
      
                     <div class="d-flex justify-content-between align-items-center">
      
                        <div class="d-flex align-items-center">
                           <b-link :to="{ name:'show.contenido',params:{id:blog.id}}" class="me-1 text-decoration-none">
                              <div class="d-flex align-items-center text-body">

                                 <font-awesome icon="messages" class="me-1" />
                                 
                                 <span class="fw-bold">{{ kFormatter(blog.comentarios.length) }} Comentarios</span>
                              </div>
                           </b-link>
      
                           
                           <b-link class="text-decoration-none" @click="alternarFavorito({contenido_id:blog.id,usuario_id:usuario.id},isFavorito(usuario.id,blog.id))">
                                 <font-awesome icon="heart" class="me-1" :class="{'text-danger' : isFavorito(usuario.id,blog.id)}" />
                           </b-link>

                           <b-link href="#" class="text-decoration-none">
                              <div class="text-body">
                                 {{ kFormatter(blog.likes.length) }}
                              </div>
                           </b-link>
                        </div>
      
                        <b-link :to="{ name: 'show.contenido', params: { id: blog.id } }" class="fw-bold">
                           Leer Mas
                        </b-link>
                     </div>
                     <div class="btn-group mt-1" role="group" >
                        <b-button @click="eliminar(blog.id)" variant="danger" title="Eliminar" v-if="$can('delete','contenidos')" size="sm">
                           <font-awesome icon="trash" />
                           Eliminar
                        </b-button>
                        
                        <b-button size="sm" @click="() => router.push({name:'edit.blog',params:{id:blog.id}})" variant="primary" title="Editar"
                           v-if="$can('update','contenidos')">
                           <font-awesome icon="file-pen" />
                           Editar
                        </b-button>
                     </div>
                     <!-- <b-button-group size="sm" class="mt-1">
                        
      
                     </b-button-group> -->
                  </b-card-body>
               </b-card>
            </b-col>
         </b-row>
      
         <b-row>
            <b-col cols="12">
               <paginate-table :dataMeta="dataMeta" :currentPage="currentPage" :perPage.sync="perPage" :total="total" />
            </b-col>
         </b-row>
      
      </b-container>
   </b-card>



</template>

<script setup>

import { kFormatter } from '@core/utils/filter'


import {computed,toRefs,ref,onMounted} from 'vue'

import useContenidoList from './useContenidoList.js'
import { colorRand,getFecha } from '@core/utils/utils'
import PaginateTable from 'components/PaginateTable.vue'
import PerPage from 'components/PerPage.vue'

import {useUsuarioStore} from 'stores/usuario'
import { useRootStore } from 'stores/root'
import { useContenidoStore } from 'stores/contenido'
import FormGroup from 'components/FormGroup.vue'
import { useRouter } from 'vue-router'

const usuarioStore = useUsuarioStore();
const root = useRootStore();
const contenido = useContenidoStore();

const router = useRouter();

const {usuario} = toRefs(usuarioStore)

   const {
      contenidos,
      perPageOptions,
      isSortDirDesc,
      sortBy,
      searchQuery,
      perPage,
      currentPage,
      total,
      fetchData,
      refetchData,
      dataMeta,
      eliminar,
      alternarFavorito
   } = useContenidoList();

   onMounted(() => {
      refetchData();
   })

const loading =  computed(() => root.loading)

const isFavorito =  computed({
      get: () => contenido.isFavorito,
      set: (usuario_id, contenido_id) => contenido.isFavorito(usuario_id, contenido_id)
})
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-blog.scss';
</style>
