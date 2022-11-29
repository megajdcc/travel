<template>
   <b-card>
     
         <!-- Form -->
         <b-form class="p-2 w-100"  @reset.prevent="resetForm">

            <b-row class="w-100">
               <b-col>
                  <b-tabs v-if="form" pills>

                     <!-- Tab: Cuenta -->
                     <b-tab active>

                        <template #title>
                           <font-awesome icon="user" class="me-1 mr-sm-1" />
                           <span class="d-none d-sm-inline">Cuenta</span>
                        </template>

                        <!-- Avatar -->
                        <!-- media -->
                        <b-media no-body v-if="form.id">
                           <b-media-aside>
                              <b-link>
                                 <b-img ref="previewEl" rounded :src="form.avatar" height="80" />
                              </b-link>
                              <!--/ avatar -->
                           </b-media-aside>

                           <b-media-body class="mt-75 ms-1">

                              <b-row>
                                 <b-col>
                                    <h4 class="mb-1" v-text="title(`${form.nombre} ${form.apellido}`)"></h4>
                                 </b-col>
                              </b-row>
                              <b-row>
                                 <!-- upload button -->
                                 <b-button 
                                    class="mb-75 me-1" @click="$refs.refInputEl.$el.click()">
                                    Actualizar
                                 </b-button>

                                 <b-form-file ref="refInputEl" v-model="profileFile" accept=".jpg, .png, .gif, .jpeg"
                                    :hidden="true" plain @input="cargarImagen" />
                                 <!--/ upload button -->
                                 <!--/ reset -->
                                 <b-card-text>Solo se permiten imagen del tipo JPG, GIF o PNG. Max tamaño de 800kB
                                 </b-card-text>
                              </b-row>
                           </b-media-body>
                        </b-media>
                        <!--/ media -->
                        <!-- End avatar -->


                        <!-- User Info: Input Fields -->
                        <b-form>
                           <b-row class="mt-1">

                              <!-- Field: nombre -->
                              <b-col cols="12" md="4">
                                
                                    <b-form-group label="Nombre" label-for="nombre">
                                       <b-form-input id="nombre" v-model="form.nombre" autofocus
                                          trim placeholder="" />
                                    </b-form-group>
                              </b-col>

                              <!-- Field: Apellido -->
                              <b-col cols="12" md="4">
                              
                                    <b-form-group label="Apellido" label-for="apellido">
                                       <b-form-input id="apellido" v-model="form.apellido" autofocus
                                          trim placeholder="Crespo" />

                                     
                                    </b-form-group>
                                
                              </b-col>


                              <!-- Field: Email -->
                              <b-col cols="12" md="4">
                                 <!-- Email -->
                                
                                    <b-form-group label="Email" label-for="email">
                                       <b-form-input id="email" v-model="form.email"
                                           trim />

                                    
                                    </b-form-group>
                                

                              </b-col>


                              <!-- Field: Rol de usuario -->
                              <b-col cols="12" md="4">
                                 
                                    
                                    <b-form-group label="Rol de usuario" label-for="user-role"
                                       :state="errors.length ? false : null">
                                       
                                       <v-select v-model="form.rol_id"
                                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="getRols"
                                          :reduce="val => val.value" :clearable="false" input-id="user-role" />

                                    </b-form-group>
                               
                              </b-col>

                           </b-row>
                        </b-form>

                     </b-tab>

                     <!-- Tab: Información -->
                     <b-tab>
                        <template #title>
                           <feather-icon icon="InfoIcon" size="16" class="me-1 mr-sm-50" />
                           <span class="d-none d-sm-inline">Información</span>
                        </template>


                        <!-- Header: Personal Info -->
                        <div class="d-flex">
                           <font-awesome icon="user"  />

                           <h4 class="mb-0 ms-1">
                              Información Personal
                           </h4>
                        </div>



                        <!-- Form: Informacion Personal -->

                        <b-row>

                           <!-- Field: Fecha Nacimiento -->
                           <b-col cols="12" md="6" lg="4">
                              <b-form-group label="Fecha Nacimiento" label-for="birth-date">
                                 <flat-pickr v-model="form.fecha_nacimiento" class="form-control"
                                    :config="{ dateFormat: 'Y-m-d'}" placeholder="YYYY-MM-DD" />
                              </b-form-group>
                           </b-col>

                           <!-- Telefono -->
                           <b-col cols="12" md="6" lg="4">
                              <b-form-group label="Telefono" label-for="telefono">
                                 <b-form-input id="telefono" v-model="form.telefono" />
                              </b-form-group>
                           </b-col>
                        </b-row>

                        <!-- Header: Personal Info -->
                        <div class="d-flex mt-2">
                           <feather-icon icon="MapPinIcon" size="19" />
                           <h4 class="mb-0 ms-1">
                              Dirección
                           </h4>
                        </div>

                        <!-- Form: Personal Info Form -->
                        <b-row class="mt-1">

                           <!-- Field: Address Line 1 -->
                           <b-col cols="12">
                              <b-form-group label="Dirección" label-for="direccion">
                                 <b-form-textarea id="direccion" v-model="form.direccion"
                                    placeholder="Ingrese la dirección" rows="2" max-rows="6"></b-form-textarea>

                              </b-form-group>
                           </b-col>

                        </b-row>
                     </b-tab>
                  </b-tabs>
               </b-col>
            </b-row>

            <b-row>
               <b-col>
                  <!-- Form Actions -->
                  <div class="d-flex mt-2">


                     <b-button-group size="sm">


                        <b-button @click="regresar" title="regresar">
                           <feather-icon icon="arrow-left" />
                           Regresar
                        </b-button>


                        <b-button v-if="!form.id" type="reset" variant="outline-secondary">
                           Limpiar
                        </b-button>

                     </b-button-group>

                  </div>
               </b-col>
            </b-row>



         </b-form>
     
   </b-card>
</template>


<script>


import formValidation from '@core/comp-functions/forms/form-validation'


import vSelect from 'vue-select'
import {useRolStore} from 'stores/rol'

import {onMounted, ref, watch,toRefs,computed} from 'vue'
import { avatarText,title } from '@core/utils/filter'
import flatPickr from 'vue-flatpickr-component'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import useUsersList from './useUsersList'

import {regresar} from '@core/utils/utils'
import {useUsuarioStore} from 'stores/usuario'


export default {
   
   components:{
   
      vSelect,
     
      flatPickr,
     

   },

   directives:{
      Ripple
   },

   setup(props, { emit }) {
      
      const rol = useRolStore();
      const usuario = useUsuarioStore()

      const { resolveUserRoleVariant } = useUsersList()
      const getRols = computed(() => rol.getRols)
      const { refFormObserver, getValidationState, resetForm } = formValidation(resetuserData)
      const profileFile = ref(null)
      // const {usuario:form} = toRefs(store.state.usuario)
      const form = computed(() => usuario.draft)

      const cargarform = () => {

         if(!getRols.value.length){
            rol.cargarRoles()
         }

      }

      onMounted(() => {
         cargarform()
      })


      watch([form], () => {
         cargarform();
      })

      const resetuserData = () => usuario.clearUsuario()

      const guardar =  () => {
         emit('save',form.value,refFormObserver.value)
      }

      const whatsappOptions = [
         { text: 'Si', value: true },
         { text: 'No', value: false }
      ]

       // ? Demo Purpose => Update image on click of update
      const refInputEl = ref(null)
      const previewEl = ref(null)

      const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl)

      const cargarImagen = (file) => {

         let dat = new FormData();
         dat.append('filepond', profileFile.value);

         usuario.updateAvatarUser(dat).then(({data:datos}) => {
            usuario.actualizarAvatarDeUsuario(datos)
         }).catch(e => console.log(e))

      }

      return {
         refFormObserver,
         getValidationState,
         resetForm,
         guardar,
         form,
         cargarform,
         whatsappOptions,
         avatarText,
         title,
         inputImageRenderer,
         refInputEl,
         previewEl,
         resolveUserRoleVariant,
         regresar,
        
         profileFile,
         loading:computed(() => root.loading),
         getRols,
         cargarImagen
         
      }
  }
}

</script>

<style lang="scss">
// @import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
