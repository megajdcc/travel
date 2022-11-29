<template>

   <div>
 
         <h1>{{ titulo }}</h1>
         <p>{{ subTitulo }}</p>

      <b-form @submit.prevent="guardar" ref="formSolicitud">

         <b-card>
            <h2>Información de negocio</h2>
            <hr>
            <b-container fluid>
               <b-row>
      
                  <b-col cols="12" md="8">

                     <!-- Nombre del negocio -->
                     <form-group v-b-tooltip.hover="'Los socios de TravelPoints pueden encontrar su negocio por su nombre.'">

                        <template #label>
                           Nombre del negocio:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                           <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        
                        </template>

                        <b-form-input v-model="nombre" :state="!errors.nombre" />
                        
                        <b-form-invalid-feedback :state="!errors.nombre">
                           {{ errors.nombre }}
                        </b-form-invalid-feedback>
                      
                     </form-group>
      
                     <!-- breve -->
                     <form-group v-b-tooltip.hover="'Describe tu negocio de manera concisa. Máximo 80 carácteres.'">  

                        <template #label>
                           Descripción corta: 
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />

                           <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        </template>
      
      
                        <b-form-textarea v-model="breve" :state="!errors.breve"
                           placeholder="Ejemplo: Restaurante de mariscos" :rows="4" ></b-form-textarea>
      
                        <b-form-invalid-feedback :state="!errors.breve">
                           {{ errors.breve }}
                        </b-form-invalid-feedback>
                     </form-group>
      
                  </b-col>
      
                  <b-col cols="12" md="4">
      
                     <!-- categoria_id  -->
                     <form-group>
                        <template #label>
                           Categoría del negocio:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                        </template>
      
                        <v-select v-model="categoria_id" :reduce="(val) => val.value" :options="categorias.map(val => ({label:val.categoria,value:val.id}))" placeholder="Seleccione Categoría"  />
      
      
                        <b-form-invalid-feedback :state="!errors.categoria_id">
                           {{ errors.categoria_id }}
                        </b-form-invalid-feedback>
                     </form-group>
      
                     <!-- tipo_comision del negocio  -->
                     
                     <form-group  v-b-tooltip.hover="'Elija entre pagar una comisión o un monto fijo por persona'">

                        <template #label>
                           Tipo de pago:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                           <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        </template>
                        
                        <b-form-radio-group v-model="tipo_comision" :options="[{text:'Comisión',value:1},{text:'Monto Fíjo',value:2}]"
                           button-variant="outline-primary px-1 " :state="!errors.tipo_comision" class="w-100 "   buttons value-field="value" @change="comision = 10" size="md btn-group mx-0 px-0 w-100 fw-bolder fs-5"   >
                        
                        </b-form-radio-group>
                        
                        <b-form-invalid-feedback :state="!errors.tipo_comision">
                           {{ errors.tipo_comision }}
                        </b-form-invalid-feedback>
                     </form-group>
         
                    
      
                     <!-- Comision en porcentaje del negocio -->
                     <form-group  v-b-tooltip.hover="'Se te cobrará este porcentaje por cada venta que registres en nuestro sistema. Una mayor comisión significa un mejor posicionamiento.'" v-if="tipo_comision == 1">
      
                        <template #label>
                           Comisión:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                           <font-awesome icon="circle-info" class="text-warning" size="sm" />
      
                        </template>

                        
                        <b-form-input type="number" :max="100" :min="6" v-model="comision" :state="!errors.comision" />
      
                        <b-form-invalid-feedback :state="!errors.comision">
                           {{ errors.comision }}
                        </b-form-invalid-feedback>
      
                     </form-group>
      
                     <!-- Comision en monto del negocio -->
                     <form-group v-b-tooltip.hover="'Se te cobrará este monto por cada venta que registres en el sistema a cada persona'" v-else>

                        <template #label>
                           Monto:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                           <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        </template>
      
                        <currency-input v-model.valor="comision" :options="optionsCurrency"
                           class="form-control" />
      
                        <b-form-invalid-feedback :state="!errors.comision ">
                           {{ errors.comision }}
                        </b-form-invalid-feedback>
      
      
                     </form-group>
      
                  </b-col>
               </b-row>
               
               <b-row>
                  <b-col cols="12">
      
                     <!-- Descripcion del negocio -->
                     <form-group v-b-tooltip.hover="'Explica con más detalle acerca de tu negocio. Los socios de TravelPoints tambien pueden encontrar tu negocio por su descripción. Puedes agregar palabras claves para facilitar la busqueda.'">
                        <template #label>
                           Descripción del negocio:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                           <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        </template>
      
      
                        <b-form-textarea v-model="descripcion" :state="!errors.descripcion" :row="3"
                           placeholder="Descripción del negocio" />
                        <b-form-invalid-feedback :state="!errors.descripcion">
                           {{ errors.descripcion }}
                        </b-form-invalid-feedback>
      
                     </form-group>
      
                  </b-col>
      
                  <b-col cols="12">
      
                     <!--  Url del negocio -->
                     <form-group v-b-tooltip.hover="'Este será el enlace directo al perfil de tú negocio.'">
                        <template #label>
                           Enlace desea del perfil de negocio: 
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                           <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        </template>
      
      
                        <b-input-group>
                           <b-input-group-prepend is-text>
                              {{ urlApp }}/
                           </b-input-group-prepend>
      
                           <b-form-input v-model="url" :state="!errors.url" placeholder="nombre-de-negocio" />
      
                        </b-input-group>
      
                        <b-form-invalid-feedback :state="!errors.url">
                           {{ errors.url }}
                        </b-form-invalid-feedback>
      
                     </form-group>
      
      
                  </b-col>
      
               </b-row>
      
            </b-container>
         </b-card>
      
         <b-card>
            <h2>Información de contacto del negocio</h2>
            <hr>
      
            <b-container fluid>
               <b-row>
                  <b-col cols="12" md="6">
      
                     <!-- Email del negocio -->
                     <form-group>
                        <template #label>
                           Correo electrónco del negocio: 
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                        </template>
      
      
                        <b-input-group>
      
                           <b-input-group-prepend is-text>
                              <font-awesome :icon="['fas','at']" />
                           </b-input-group-prepend>
      
                           <b-form-input type="email" v-model="email" :state="!errors.email"
                              placeholder="Correo electrónico del negocio" />
      
                        </b-input-group>

                        <b-form-invalid-feedback :state="!errors.email">
                           {{ errors.email }}
                        </b-form-invalid-feedback>
      
                     </form-group>
      
                  </b-col>
      
                  <b-col cols="12" md="6">
      
                     <!-- Numero de telefono del negocio -->
                     <form-group>

                        <template #label>
                           Número telefónico del negocio: 
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />

                        </template>
      
                        <b-input-group>
                           <b-input-group-prepend is-text>
                              <font-awesome icon="phone" />
                           </b-input-group-prepend>

                           <b-form-input  v-maska="'+#############'" v-model="telefono" :state="!errors.telefono"
                              placeholder="Número telefónico" />
                        </b-input-group>
      
      
                        <b-form-invalid-feedback :state="!errors.telefono">
                           {{ errors.telefono }}
                        </b-form-invalid-feedback>
      
      
                     </form-group>
                  </b-col>
      
                  <b-col cols="12">
      
                     <!-- Sitio web del negocio -->
                     <form-group v-b-tooltip.hover="'Si no tienes sitio web del negocio, dejalo en blanco'">
      
                        <template #label>
                           Sitio web del negocio:
                        </template>
                        <b-input-group>
      
                           <b-input-group-prepend is-text>
                              <font-awesome icon="globe" />
                           </b-input-group-prepend>
      
                           <b-form-input v-model="sitio_web" placeholder="Sitio web del negocio" />
      
                        </b-input-group>
      
                        <b-form-invalid-feedback :state="!errors.sitio_web">
                           {{ errors.sitio_web }}
                        </b-form-invalid-feedback>
                     </form-group>
      
                  </b-col>
      
               </b-row>
            </b-container>
      
         </b-card>
      
         <b-card>
            <h2>Ubicación del negocio</h2>
            <hr>
            <b-container fluid>
               <b-row>
                  <b-col cols="12" md="8">
      
                     <!-- Direccion  del negocio -->
                     <form-group>
                        <template #label>
                           Dirección del negocio:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />

                        </template>
      
                        <b-input-group>
                           <b-input-group-prepend is-text>
                              <font-awesome icon="map" />
                           </b-input-group-prepend>
                           <b-form-input v-model="direccion" :state="!errors.direccion" placeholder="Dirección del negocio" />
      
                        </b-input-group>
                        <b-form-invalid-feedback :state="!errors.direccion">
                           {{ errors.direccion }}
                        </b-form-invalid-feedback>
      
                     </form-group>
      
                  </b-col>
                  <b-col cols="12" md="4">
      
                     <!-- Codigo postal del negocio -->
                     <form-group>
                        <template #label>
                           Código postal del negocio:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                        </template>
                        <b-input-group>
                           <b-input-group-prepend is-text>
                              <font-awesome icon="envelope" />
      
                           </b-input-group-prepend>
                           <b-form-input v-model="codigo_postal" :state="!errors.codigo_postal"
                              placeholder="Código postal del negocio" />
      
                        </b-input-group>
                        <b-form-invalid-feedback :state="!errors.codigo_postal">
                           {{ errors.codigo_postal }}
                        </b-form-invalid-feedback>
                     </form-group>
      
                  </b-col>
               </b-row>
      
               <b-row>
                  <b-col cols="12" md="4">
                     <!-- PAis del negocio -->
                     <form-group>
                        <template #label>
                           Pais: 

                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />


                        </template>
      
                        <v-select v-model.value="pais_id" :reduce="option => option.value" :options="paises.map(val => ({label:val.pais,value:val.id}))"
                            />
      
                     </form-group>
                  </b-col>
                  <b-col cols="12" md="4">
      
                     <!-- Estado Del negocio -->
                     <form-group>
                        <template #label>
                           Estado:
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />

                        </template>
      
                        <v-select v-model.value="estado_id"  :reduce="option => option.value" :options="estados.map(val => ({label:val.estado, value:val.id}))"
                            />
      
                        <b-form-invalid-feedback :state="!errors.estado_id">
                           {{ errors.estado_id }}
                        </b-form-invalid-feedback>
      
                     </form-group>
      
                  </b-col>
                  <b-col cols="12" md="4">
      
                     <!-- Ciudad del negocio -->
                     <form-group>
                        <template #label>
                           Ciudad:
                        </template>
                        <v-select v-model.value="ciudad_id" :reduce="option => option.value" :options="ciudades.map(val => ({label:val.ciudad,value:val.id}))" />
                        <b-form-invalid-feedback :state="!errors.ciudad_id">
                           {{ errors.ciudad_id }}
                        </b-form-invalid-feedback>
                     </form-group>
      
                  </b-col>
               </b-row>
               <hr>
      
               <b-row>
                  <b-col>
                     <div class="form-group">
                        <label for="map-canvas" class="me-1">Posici&oacute;n en el mapa:</label>
                           <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />

                        <p >
                        <ul>
                           <li >Arrastra el marcador hacia la ubicaci&oacute;n del hotel.</li>
                           <li >Puedes apoyarte escribiendo una ubicaci&oacute;n como una ciudad,
                              municipio, colonia, etc. y seleccionar una de las opciones sugeridas.</li>
                        </ul>
                        Las coordenadas de la ubicaci&oacute;n se crean automaticamente.
                        </p>
                     </div>
      
      
                  </b-col>
               </b-row>
               <!-- google map -->
               <b-row>
                  <b-col>
      
                     <div class="d-none">
                      
               
                        <div class="input-group  mt-2  d-flex justify-content-center" id="myAutocomplete" >

                        
                           <div class="input-group-text bg-secondary">
                              <font-awesome icon="search"/>
                           </div>
      
                           <GMapAutocomplete class="w-75" @place_changed="setPlace" style="z-index:8000 !important">
   
                           </GMapAutocomplete>
      
                        </div>
                     </div>
      
                     <GMapMap ref="input" :center="{
                           	lat:getLatitud(),
                           	lng:getLongitud()
                           }" :zoom="zoom_map" :options="options_map"
                              style="width:100%; height:250px; display: flex; justify-content:center;">
                              <GMapMarker :key="0" :position="{
                              	lat:getLatitud(),
                              	lng:getLongitud()
                              }" :visible="visibleMarker" :draggable="true" :clickable="true" :icon="iconMarker"
                                 @mouseup="moviendomapa" @position_changed="posicionCambiada()">
                                 <GMapInfoWindow :options="optionsPlace">
                                 </GMapInfoWindow>
                              </GMapMarker>
      
                     </GMapMap>
      
                  </b-col>
               </b-row>
      
               <!-- Lat y lng  -->
               <b-row>
                  <b-col md="6">
      
                     <!-- Latitud del negocio -->
                     <form-group label="Latitud" v-b-tooltip.hover="'La latitud se establece cuando busca un lugar en el mapa'" >
      
                        <b-input-group>
                           <b-input-group-prepend is-text>
                              <font-awesome icon="map-marked-alt" />
      
                           </b-input-group-prepend>
      
                           <b-form-input v-model="lat" :state="!errors.lat" readonly />
      
                        </b-input-group>
                        <b-form-invalid-feedback :state="!errors.lat">
                           {{ errors.lat }}
                        </b-form-invalid-feedback>
      
      
                     </form-group>
      
                  </b-col>
      
                  <b-col md="6">
      
                     <!-- Longitud del negocio -->
                     <form-group label="Longitud" v-b-tooltip.hover="'La longitud se establece cuando busca un lugar en el mapa'">
      
                        <b-input-group>
                           <b-input-group-prepend is-text>
                              <font-awesome icon="map-marked-alt" />
                           </b-input-group-prepend>
                           <b-form-input v-model="lng" :state="!errors.lng" readonly />
                        </b-input-group>
      
                        <b-form-invalid-feedback :state="!errors.lng">
                           {{ errors.lng }}
                        </b-form-invalid-feedback>
      
                     </form-group>
      
                  </b-col>
               </b-row>
      
      
            </b-container>
      
         </b-card>
         
         <b-card>
            <h2>Imágenes del negocio</h2>
            <hr>
            
            <b-container fluid>
               <b-row>
                  <b-col cols="12" md="6">
            
                     <!-- Logo del negocio -->
                     <form-group
                        v-b-tooltip.hover="'Este logo aparecerá en el perfil de negocio, se recomienda una imagen cuadrada de mínimo 300x300 px y un peso inferior a 2mb. La imagen debe estar en formato jpg o png'"
                        description="Presiona encima del recuadro para buscar una imagen.">
                        <template #label>
                           Adjunta el logo de tu negocio:
                              <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                              <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        </template>
            
                        <section class="content-logo" @click="() => refLogo.$el.click()" :style="`background:url(${urlLogo})`">
            
                        </section>
            
                        <input-file v-model="logo" ref="refLogo" plain accept=".jpb, .png" hidden @input="logoSeleccionado"
                           :state="!errors.logo" />
            
            
                        <b-form-invalid-feedback :state="!errors.logo">
                           {{ errors.logo }}
                        </b-form-invalid-feedback>
            
            
                     </form-group>
                  </b-col>
                  <b-col cols="12" md="6">
            
                     <!-- Portada del negocio -->
                     <form-group
                        v-b-tooltip.hover="'Esta será la imagen de portada de tu negocio. Se recomienda una imagen horizontal panoramica y un peso inferior a 2mb, la imagen debe estar en formato jgg o png.'"
                        description="Presiona encima del recuadro para buscar una imagen.">
            
                        <template #label>
                           Adjunta una fotografía de tu negocio: 
                              <font-awesome icon="asterisk" class="me-1" color="#ac4953" size="xs" />
                              <font-awesome icon="circle-info" class="text-warning" size="sm" />
                        </template>
            
            
                        <section class="content-logo" @click="refFoto.$el.click()" :style="`background:url(${urlFoto})`">
                        </section>
            
            
                        <input-file v-model="foto" ref="refFoto" plain accept=".jpb, .png" hidden @input="fotoSeleccionada"
                           :state="!errors.foto" />
            
                        <b-form-invalid-feedback :state="!errors.foto">
                           {{ errors.foto }}
                        </b-form-invalid-feedback>
            
            
                     </form-group>
            
                  </b-col>
            
               </b-row>
            
            
               <b-row v-if="solicitud.solicitud.id">
                  <b-col cols="12">
                     <form-group label="Comentario"
                        description="Cuando una solicitud de negocio es regresada para su modificación, por lo general te la envían con un comentario,este es el comentario">
                        <b-form-textarea v-model="comentario" :rows="3" :readonly="!$can('delete','solicitudes')" />
                     </form-group>
                  </b-col>
               </b-row>
            
            </b-container>
         </b-card>
            
      
      
      
      
         
         <b-container fluid class="mb-1 mx-0 px-0">
            
            <!-- Actions de Botones -->
            <b-row>
               <b-col cols="12" md="8">
                  <span>Los campos marcados con <strong class="text-danger"><font-awesome icon="asterisk" class="" size="xs" /></strong> son obligatorios</span>
               </b-col>
      
               <b-col cols="12" md="4" class="d-flex justify-content-end">
      
                  <div class="btn-group btn-group-sm" v-if="![3,4].includes(solicitud.situacion)">

                     <b-button type="submit" variant="primary" v-loading="loading" v-if="!admin">
      
                        <font-awesome icon="paper-plane" class="me-1" />
                        <span v-if="solicitud.id && solicitud.usuario_id === usuario.usuario.id">
                           Reenviar
                           solicitud </span>
                        <span v-else>Enviar Solicitud</span>
                     </b-button>

                     <b-button type="button" variant="success" v-loading="loading" title="Aceptar solicitud" @click="aceptar"
                        v-if="admin">
                        <font-awesome icon="check" />
                        Aceptar Solicitud
                     </b-button>

      
                     <b-button type="button" variant="danger" v-loading="loading" title="Rechazar solicitud" @click="rechazar"
                        v-if="admin">
                        <font-awesome icon="xmark" />
                        Rechazar Solicitud
                     </b-button>
      
                     <b-button type="button" variant="info" v-loading="loading"
                        title="Regresar solicitud para su modificación" @click="regresar" v-if="admin">
                        <font-awesome icon="arrow-left" />
                        Regresar Solicitud
                     </b-button>
      
                  </div>
      
               </b-col>
            </b-row>

         </b-container>
      
      </b-form>
</div>

</template>

<script setup>

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import inputFile from 'components/InputFile.vue'
import FormGroup from 'components/FormGroup.vue'
import * as yup from 'yup'
import {useForm} from 'vee-validate'

import { useSolicitudNegocioStore } from 'stores/solicitudNegocio';
import {useUsuarioStore} from 'stores/usuario';
import {useRootStore} from 'stores/root'
import { useCategoriaNegocioStore } from 'stores/negocios/categoria';

import { toRefs, ref, onMounted, watch, computed,inject } from 'vue'

import { optionsCurrency } from '@core/utils/utils'
import useDireccion from '@core/utils/useDireccion'
import CurrencyInput from 'components/CurrencyInput.vue'
import { number } from '@intlify/core-base';

const {titulo,subTitulo,admin} = defineProps({
   titulo: {
      type: String,
      default: '¡Afilia tu negocio!',
      required: false
   },
   subTitulo: {
      type: String,
      default: 'Envíanos una solicitud para publicar tu negocio en nuestro directorio.',
      required: false
   },
   admin: {
      type: Boolean,
      default: false,
      required: false
   }
})

const emits = defineEmits(['save'])

const solicitud = useSolicitudNegocioStore();
const usuario = useUsuarioStore();
const root = useRootStore();
const categoriaNegocio = useCategoriaNegocioStore();


const loading = computed(() => root.loading)

const {solicitudes } = toRefs(solicitud)

const uri = inject('$uri');

const { categorias } = toRefs(categoriaNegocio)
const urlApp = ref(window.location.origin)
const buscadormap = ref('');
const visibleMarker = ref(true);
const zoom_map = ref(10);
const markers = ref([]);
const iconMarker = ref('');
const input = ref(null)
const refLogo = ref(null)
const refFoto = ref(null)
const urlLogo = ref(null)
const urlFoto = ref(null)
const formSolicitud = ref(null)

const { meta, errors, handleSubmit, useFieldModel, resetForm, handleReset,setValues } = useForm({
      initialValues:{...solicitud.solicitud, ...{logo:null,foto:null}},
      validateOnMount:false,
      validationSchema:yup.object({
         nombre: yup.string().required(),
         breve: yup.string().required(),
         categoria_id: yup.string().required(),
         tipo_comision: yup.number().required(),
         comision: yup.number().required(),
         descripcion: yup.string().required(),
         url: yup.string().required(),
         email: yup.string().email(),
         telefono: yup.string().required(),
         sitio_web: yup.string().url().nullable(),
         direccion: yup.string().required(),
         codigo_postal: yup.string().required(),
         estado_id: yup.number().required(),
         ciudad_id: yup.number().required(),
         lat: yup.number().required(),
         lng: yup.number().required(),
         logo: yup.mixed().nullable(),
         foto: yup.mixed().nullable(),
         comentario:yup.string().nullable()
      })

   });


   const [nombre, breve, categoria_id, tipo_comision, comision, descripcion, url, email, telefono, sitio_web, direccion, codigo_postal, estado_id, ciudad_id, lat, lng, logo, foto,comentario] = useFieldModel(["nombre", "breve", "categoria_id", "tipo_comision", "comision", "descripcion", "url", "email", "telefono", "sitio_web", "direccion", "codigo_postal", "estado_id", "ciudad_id", "lat", "lng", "logo", "foto","comentario"])

   const guardar = handleSubmit((valores,action) => {
      emits('save',valores,action)
   })

   const optionsPlace = ref({
      content: '<strong>Méxio City</strong>',
   })

   const options_map = ref({
      mapTypeControl: false,
      zoomControl: true,
   })


   const {
      paises,
      ciudades,
      estados,
      cargarCiudades,
      pais_id
   } = useDireccion();


   const cargarForm = () => {

      if (!categorias.value.length) {
         categoriaNegocio.getCategorias()
      }

      if (solicitud.solicitud.id) {

         urlLogo.value = uri+'/'+solicitud.solicitud.logo 
      

         urlFoto.value = `${uri}/${solicitud.solicitud.foto}`


         // solicitud.solicitud.logo = null
         // solicitud.solicitud.foto = null
         pais_id.value = solicitud.solicitud.estado.pais_id
         cargarCiudades(solicitud.solicitud.estado_id)

      }


   }

   onMounted(() =>{
      cargarForm()

      input.value.$mapPromise.then((map) => {
         var myControl = document.getElementById('myAutocomplete');
         myControl.index = 1;
         map.controls[google.maps.ControlPosition.TOP_CENTER].push(myControl);
      });


   })

   
   watch(solicitud,() => {
      cargarForm()
      setValues({...solicitud.solicitud, ...{logo:null,foto:null}});
   })



   const getLatitud = () => {
      return Number(lat.value)
   }

   const getLongitud = () => {
      return Number(lng.value);
   }

   const moviendomapa = (dato) => {
      lat.value = Number(dato.latLng.lat())
      lng.value = Number(dato.latLng.lng())
   }

   const posicionCambiada = (dato) => { }

   const logoSeleccionado = (file) => {
        if(typeof file != 'string'){
         logo.value = file;
         urlLogo.value = URL.createObjectURL(file)
        
      }
     
   }

   const fotoSeleccionada = (file) => {

      if(typeof file != 'string'){
         foto.value = file;
         urlFoto.value = URL.createObjectURL(file)
      }
       
   }

   const aceptar = () => {
      situacion.value = 3
      guardar()
   }

   const rechazar = () => {

      situacion.value = 4
      guardar();

   }

   const regresar = () => {

      situacion.value = 2
      guardar();

   }

   const setPlace = (place) => {
         visibleMarker.value = false;
         var address = '';
         if (place.address_components) {
            address = [
               (place.address_components[0] && place.address_components[0].short_name || ''),
               (place.address_components[1] && place.address_components[1].short_name || ''),
               (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
         }

         zoom_map.value = 17

         lat.value = Number(place.geometry.location.lat());
         lng.value = Number(place.geometry.location.lng());

         iconMarker.value = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
         };

         visibleMarker.value = true;

         optionsPlace.value.content = '<div><strong>' + place.name + '</strong><br>' + address
   }


   const cargarCiudads = (estado) => {
      alert(estado)
      estado_id.value = estado
      cargarCiudades(estado)
   }  


   watch(estado_id,(val) => {
      cargarCiudades(val)
   })





</script>

<style lang="scss" scoped>
.content-logo {
   border: 1px solid rgba(44, 23, 23, 0.568);
   height: 150px;
   border-radius: 10px;
   box-shadow: -5px 10px 25px rgb(0 0 0 / 50%);
   cursor: pointer;
   background-repeat: no-repeat !important;
   background-size: contain !important;
   background-position: center center !important;

   transition: 3s all ease;
   &::after {
      content: "Buscar la imagen";
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-weight: bolder;
   }

   &:hover {
      transform: scale3d(2, 2, 3.5);
      
      &::after {
         content: "" !important;
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100%;
         font-weight: bolder;
         position:absolute;
      }


   }





}
</style>