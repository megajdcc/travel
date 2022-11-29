<template>
   <b-card>
     
         <b-form>
            <b-container fluid>
               <b-row>
                  <b-col cols="12" md="6">
                     <b-form-group>
                        <template #label>
                           Nombre: <span class="text-danger"> *</span>
                        </template>

                       
                           <b-form-input v-model="formulario.nombre" 
                              placeholder="Nombre de la categoría" />

                         
                     </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                     <b-form-group>
                        <template #label>
                           Breve:
                        </template>

                      
                           <b-form-input v-model="formulario.breve" placeholder="Un breve de la categoría" />
                     
                     </b-form-group>
                  </b-col>
               </b-row>

               <b-row>
                  <b-col cols="12">
                     <b-button-group >
                        <b-button @click="regresar" title="Regresar" variant="outline-secondary">
                           <feather-icon icon="arrow-left" />
                           Regresar
                        </b-button>

                        <b-button type="submit" title="Guardar" variant="outline-primary">
                           <feather-icon icon="save" />
                           Guardar
                        </b-button>
                     </b-button-group>

                  </b-col>
               </b-row>
            </b-container>
         </b-form>
    
   </b-card>
</template>

<script>


import store from '@/store'
import { computed, ref } from 'vue'

import { regresar } from '@core/utils/utils';



import vSelect from 'vue-select'

export default {

   components: {
      vSelect,
      

   },

   setup(_, { emit }) {


      const formValidate = ref(null)

      const formulario = computed(() => store.getters['categoria-servicio/draft'])


      const guardar = () => {
         emit('save', formulario.value, formValidate.value)
      }

      return {
         formValidate,
         guardar,
         formulario,
         loading: computed(() => store.state.loading),
         regresar
        
       

      }
   }

}

</script>