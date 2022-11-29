<template>
   <div>
      <perfil-info :usuario="usuario"></perfil-info>
      <b-card>
            <!-- form -->
            <b-form @submit.prevent="guardar">
               <b-container fluid>

                  <b-row>
                     <b-col cols="12">
                        <h2>Información Personal</h2>
                     </b-col>
                  </b-row>
                  <hr>

                  <b-row>
                     <b-col cols="12" md="6">

                        <b-form-group>
                           <template #label>
                              Username: <span class="text-danger">*</span>
                           </template>

                           <!-- Required -->
                              <b-form-input v-model="username" disabled :state="errors.username" />

                              <b-form-invalid-feedback >
                                 {{ errors.username }}
                              </b-form-invalid-feedback>

                        </b-form-group>

                        <b-form-group>

                              <template #label>
                                 Nombre: <span class="text-danger">*</span>
                              </template>

                              <b-form-input v-model="nombre" :state="!errors.nombre" />

                              <b-form-invalid-feedback>
                                 {{ errors.nombre }}
                              </b-form-invalid-feedback>

                        </b-form-group>

                        <b-form-group>

                           <template #label>
                              Apellido: <span class="text-danger">*</span>
                           </template>
                           <!-- required -->
                           <b-form-input v-model="apellido" :state="errors.apellido ? false : true" />
                           <b-form-invalid-feedback>
                              {{ errors.apellido }}
                           </b-form-invalid-feedback>

                        </b-form-group>


                     </b-col>

                     <b-col cols="12" md="6">

                        <b-form-group>
                           <template #label>
                              Email: <span class="text-danger">*</span>
                           </template>

                              <!-- required -->
                              <b-form-input v-model="email" type="email" :state="errors.email ? false : true"/>

                              <b-form-invalid-feedback>
                                 {{ errors.email }}
                              </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group label-for="example-datepicker" label="Fecha de Nacimiento">

                              <flat-pickr v-model="fecha_nacimiento" class="form-control" name="date" placeholder="Fecha de nacimiento" :config="{locale:Spanish}" />

                              <b-form-invalid-feedback :state="!errors.fecha_nacimiento">
                                {{ errors.fecha_nacimiento }}
                              </b-form-invalid-feedback>

                        </b-form-group>

                        <b-form-group>

                           <template #label>
                              Teléfono:
                           </template>
                           
                              <b-form-input v-model="telefono" v-maska="'+#############'" :state="!errors.telefono" placeholder="+584128519120" />
                       
                             
                              <b-form-invalid-feedback :state="errors.telefono" >
                                 {{ errors.telefono }}
                              </b-form-invalid-feedback>
                          
                        </b-form-group>

                        <b-form-group v-if="telefono">

                           <template #label>
                              ¿El número está asociado a WhatsApp?
                           </template>
                           <b-form-radio-group v-model="is_whatsapp" :options="[{ text: 'Sí', value: true }, { text: 'Nó', value: false }]" :state="!errors.is_whatsapp"/>

                           <b-form-invalid-feedback :state="errors.is_whatsapp" >
                              {{ errors.is_whatsapp }}
                           </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group>

                           <template #label>
                              Sexo
                           </template>


                              <b-form-radio-group v-model="genero" :options="[{ text: 'Masculino', value: 1 }, { text: 'Femenino', value: 2 }]" :state="!errors.genero"/>

                              <b-form-invalid-feedback :state="errors.genero" >
                                    {{ errors.genero }}
                              </b-form-invalid-feedback>
                        </b-form-group>



                     </b-col>
                  </b-row>

                  <el-divider content-position="left">Dirección</el-divider>

                  <b-row>

                     <!-- Direccion -->
                     <b-col cols="12">
                        <b-form-group label="Dirección" label-for="bio-domicilio">
                           <b-form-textarea id="bio-domicilio" v-model="direccion" rows="4" placeholder="Dirección de domicilio" :state="!errors.direccion" />

                              <b-form-invalid-feedback :state="errors.genero">
                                 {{ errors.genero }}
                              </b-form-invalid-feedback>

                        </b-form-group>
                     </b-col>
                  </b-row>

                  <b-row>
                     <b-col cols="12" md="4">
                        <b-form-group label="Pais">
                           <v-select placeholder="Seleccione" v-model="pais_id" :options="paises.map(val  => ({label:val.pais,value:val.id}))"  :reduce="(option) => option.value" />
                          
                        </b-form-group>
                     </b-col>
                     <b-col cols="12" md="4">

                        <b-form-group label="Estado">


                           <v-select v-model="estado_id" placeholder="Seleccionoe" :options="estados" :reduce="(val) => val.id" label="estado"/>
                         
                        </b-form-group>

                     </b-col>
                     <b-col cols="12" md="4">

                        <b-form-group label="Ciudad">
                           
                           <v-select v-model="ciudad_id" :options="ciudades" :reduce="(val) => val.id" label="ciudad" placeholder="Seleccione" />



                        </b-form-group>

                     </b-col>

                     <b-col cols="12" md="4">
                        <b-form-group label="Código Postal">

                              <b-form-input v-model="codigo_postal" :state="!errors.codigo_postal" />

                              <b-form-invalid-feedback :state="errors.codigo_postal" >
                                 {{ errors.codigo_postal }}
                              </b-form-invalid-feedback>

                        </b-form-group>
                     </b-col>

                  </b-row>

                  <el-divider content-position="left">Acerca de usted</el-divider>

                  <b-row>


                     <!-- bio -->
                     <b-col cols="12">
                        <b-form-group label="" label-for="bio-area">
                           <b-form-textarea id="bio-area" v-model="bio" rows="4"
                              placeholder="Redacte algo de usted, una pequeña Bio ... " :state="!errors.bio" />

                              
                        </b-form-group>
                     </b-col>



                     <!-- Country -->
                     <b-col md="6">
                        <b-form-group label-for="website" label="Sitio web">
                           <b-form-input id="website" v-model="website" placeholder="Sitio web" :state="!errors.website" />
                        </b-form-group>
                     </b-col>
                     <!--/ Country -->

                  </b-row>


                  <el-divider content-position="left">Redes Sociales</el-divider>

                  <b-row>
                     <b-col cols="12" md="4">
                        <b-form-group label="Facebook">
                           <b-input-group>
                              <b-input-group-prepend is-text>
                                 <font-awesome :icon="['fab','facebook']" />
                              </b-input-group-prepend>
                              <b-form-input v-model="facebook" />
                           </b-input-group>
                        </b-form-group>
                     </b-col>
                     <b-col cols="12" md="4">
                        <b-form-group label="Instagram">
                           <b-input-group>
                              <b-input-group-prepend is-text>
                                    <font-awesome :icon="['fab','instagram']" />
                              </b-input-group-prepend>
                              <b-form-input v-model="instagram" />
                           </b-input-group>
                        </b-form-group>

                     </b-col>
                     <b-col cols="12" md="4">
                        <b-form-group label="Twitter">
                           <b-input-group>

                              <b-input-group-prepend is-text>
                                 <font-awesome :icon="['fab','twitter']" />
                              </b-input-group-prepend>

                              <b-form-input v-model="twitter" />
                           </b-input-group>
                        </b-form-group>
                     </b-col>
                  </b-row>

                  <b-row>
                     <b-col cols="12">

                        <div class="btn-group btn-group-sm">
                           <b-button v-ripple="50" variant="primary" type="submit" title="Guardar" v-loading="loading" :disabled="!meta.valid">
                              <font-awesome icon="save" />
                              Guardar
                           </b-button>
                           
                           <b-button v-ripple="50"  @click="resetForm" variant="secondary">
                              Limpiar
                           </b-button>
                        </div>
                     </b-col>
                  </b-row>
               </b-container>

            </b-form>
      </b-card>
   </div>

</template>

<script setup>

   import vSelect from 'vue-select'
   import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css';

import { Spanish } from 'flatpickr/dist/l10n/es';
   import { useUsuarioStore } from 'stores/usuario'
   import { useRootStore } from 'stores/root'
   import { useForm } from 'vee-validate'

   import {ref,toRefs,onMounted,computed,watch } from 'vue'

   import * as yup from 'yup'

   import useDireccion from '@core/utils/useDireccion';
   import PerfilInfo from 'components/PerfilInfo.vue';

   const usuarioStore = useUsuarioStore();
   const root = useRootStore();
   const usuario = computed(() => usuarioStore.usuario)
   const esquema = yup.object({
                        username: yup.string().required(),
                        nombre: yup.string().required(),
                        apellido:yup.string().required(),
                        email:yup.string().email().required(),
                        fecha_nacimiento: yup.string().nullable(),
                        telefono:yup.string().nullable(),
                        is_whatsapp:yup.boolean().required().default(false),
                        genero:yup.number().nullable().default(1),
                        direccion: yup.string().nullable(),
                        ciudad_id: yup.number().nullable(),
                        codigo_postal:yup.string().nullable(),
                        bio:yup.string().nullable(),
                        website:yup.string().nullable(),
                        twitter: yup.string().nullable(),
                        facebook: yup.string().nullable(),
                        instagram: yup.string().nullable(),
                     })


const { errors, meta, handleSubmit, useFieldModel,resetForm } = useForm({
   initialValues: usuario.value,
   validationSchema: esquema,
   // validateOnMount: false
})


const [username,nombre,apellido,email,fecha_nacimiento,telefono,is_whatsapp,genero,direccion,ciudad_id,codigo_postal,bio,website,twitter,facebook,instagram] = useFieldModel(['username', 'nombre', 'apellido', 'email', 'fecha_nacimiento','telefono','is_whatsapp','genero','direccion','ciudad_id','codigo_postal','bio','website','twitter','facebook','instagram'])
  
   
   const clevePhone = {
      phone: true,
      phoneRegionCode: 'US',
   }

   const countryOption = ['USA', 'India', 'Canada']

   const {
         paises,
         ciudades,
         estados,
         pais_id,
         estado_id
      } = useDireccion();

   const guardar =  handleSubmit((valores,actions)  => {

      usuarioStore.guardarUsuario(valores).then(({usuario:user,result}) => {

         if(result){
            toast.success('Se ha guardado con Éxito el perfil')
            
         }else{
            toast.error('Los cambios no surtierón efecto, inténtelo de nuevo')
         }

      }).catch(e => {
         console.log(e)
         if(e.response.status === 422){
            actions.setErrors(e.response.data.errors)
         }

      })

   });

      
   const cargarForm = () => {
      if (usuario.value.ciudad_id) {
         pais_id.value = usuario.value.ciudad.estado.pais_id;
         estado_id.value = usuario.value.ciudad.estado_id;
      }
   }

   onMounted(() => cargarForm())

   watch([usuario,paises],() => cargarForm())

   const loading = computed(() => root.loading)

</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
