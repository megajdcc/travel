<template>

   <b-container fluid class="px-0">
      <b-row>
         <b-col cols="12">
            <h1>Solicitudes enviadas</h1>
         </b-col>
      </b-row>
      <b-row>
         <b-col cols="12">
            <b-card>
               <b-container fluid class="px-0">
                  <b-row class="mb-1">
                     <b-col cols="12" md="6">
                        <per-page  v-model:perPage="perPage" size="md" :perPageOptions="perPageOptions"/>
                     </b-col>

                     <b-col cols="12" md="6">
                        <form-group>
                           <div class="input-group">
                              <div class="input-group-text">
                                 <font-awesome icon="search"/>
                              </div>
                              <b-form-input type="text" v-model="searchQuery" class="form-control" placeholder="Buscar" />
                           </div>
                          
                        
                        </form-group>
                        
                     </b-col>
                  </b-row>
                  <b-row>
                     <b-col cols="12">
                      
                     </b-col>
                  </b-row>

                  <b-row>
                     <b-col cols="12">
                        <paginate-table :dataMeta="dataMeta" v-model:currentPage="currentPage" :total="total"
                           :perPage="perPage" />
                     </b-col>
                  </b-row>

                  <b-row>
                     <b-col cols="12">
                        <b-button variant="primary" :to="{name:'socio.negocio.afiliar'}" >
                           <font-awesome icon="plus"/>
                           Afiliar Negocio
                        </b-button>
                     </b-col>
                  </b-row>
               </b-container>

            </b-card>
         </b-col>
      </b-row>

   </b-container>


</template>

<script setup>


import useSolicitudesList from './useSolicitudesList.js';
import {getSituacionSolicitud}  from '@core/utils/utils'

import PaginateTable from 'components/PaginateTable.vue'
import PerPage from 'components/PerPage.vue';
import edit from 'views/socio/negocio/solicitudes/edit.vue'
import FormGroup from 'components/FormGroup.vue'

const {
   perPageOptions,
   currentPage,
   perPage,
   searchQuery,
   sortBy,
   isSortDirDesc,
   refTable,
   total,
   dataMeta,
   refetchData,
   tableColumns,
   fetchData
} = useSolicitudesList();

   

</script>