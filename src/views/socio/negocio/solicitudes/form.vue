<template>

      <!-- <h1>{{ titulo }}</h1>
      <p>{{ subTitulo }}</p> -->
      <b-form @submit.prevent="guardar" ref="formSolicitud">
         <b-card>
            <h2>Información de negocio</h2>
            <hr>
            <b-container fluid>
               <b-row>

                  <b-col cols="12" md="8">
                     <!-- Nombre del negocio -->
                     <b-form-group title="Los socios de TravelPoints pueden encontrar su negocio por su nombre."
                        v-b-tooltip.hover.v-warning>
                        <template #label>
                           Nombre del negocio: <span class="text-danger">*</span>
                           <font-awesome icon="circle-info" class="text-warning"/>
                       
                        </template>

                           <b-form-input v-model="nombre" :state="!errors.nombre ? false : null"
                              placeholder="Nombre del negocio" />

                           <b-form-invalid-feedback :state="!errors.nombre">
                              {{ errors.nombre }}
                           </b-form-invalid-feedback>
                     </b-form-group>

                     <!-- breve -->
                     <b-form-group title="Describe tu negocio de manera concisa. Máximo 80 carácteres."
                        v-b-tooltip.hover.v-warning>
                        <template #label>
                           Descripción corta: <span class="text-danger">*</span>
                           <font-awesome icon="circle-info" class="text-warning" />
                        </template>

                      
                           <b-form-input v-model="breve" :state="!errors.breve ? false : null"
                              placeholder="Ejemplo: Restaurante de mariscos" :rows="4" />

                           <b-form-invalid-feedback :state="!errors.breve">
                              {{ errors.breve }}
                           </b-form-invalid-feedback>
                     </b-form-group>

                  </b-col>

                  <b-col cols="12" md="4">

                     <!-- categoria_id  -->
                     <b-form-group>
                        <template #label>
                           Categoría del negocio: <span class="text-danger">*</span>
                        </template>

                         <v-select v-model="categoria_id" :options="categorias.map(val => ({label:val.categoria,value:val.id}))" :reduce="(option) => option.value" placeholder="Seleccione Categoría" />
                         

                           <b-form-invalid-feedback :state="!errors.categoria_id">
                              {{ errors.categoria_id }}
                           </b-form-invalid-feedback>
                     </b-form-group>

                     <!-- tipo_comision del negocio  -->
                     <b-form-group v-b-tooltip.hover.v-warning
                        title="Elija entre pagar una comisión o un monto fijo por persona">
                        <template #label>
                           Tipo de pago: <span class="text-danger">*</span>
                           <font-awesome icon="circle-info" />
                        </template>

                      

                           <b-form-radio-group v-model="tipo_comision"
                              :options="[{text:'Comisión',value:1},{text:'Monto Fíjo',value:2}]"
                              button-variant="outline-primary" buttons size="md" :state="!errors.tipo_comision"
                              class="w-100" @change="comision = 10">

                           </b-form-radio-group>

                           <b-form-invalid-feedback :state="!errors.tipo_comision">
                              {{ errors.tipo_comision }}
                           </b-form-invalid-feedback>


                     </b-form-group>
                     
                     <!-- Comision en porcentaje del negocio -->
                     <b-form-group v-b-tooltip.hover.v-warning
                        title="Se te cobrará este porcentaje por cada venta que registres en nuestro sistema. Una mayor comisión significa un mejor posicionamiento."
                        v-if="tipo_comision == 1">

                        <template #label>
                           Comisión: <span class="text-danger">*</span>
                           <font-awesome icon="circle-info" />

                        </template>

                           <b-form-input type="number" :max="100" :min="6" v-model="comision"
                              :state="!errors.comision" />

                           <b-form-invalid-feedback :state="!errors.comision">
                              {{ errors.comision }}
                           </b-form-invalid-feedback>

                     </b-form-group>

                     <!-- Comision en monto del negocio -->
                     <b-form-group v-b-tooltip.hover.v-warning
                        title="Se te cobrará este monto por cada venta que registres en el sistema a cada persona"
                        v-else>
                        <template #label>
                           Monto: <span class="text-danger">*</span>
                           <font-awesome icon="circle-info" />
                        </template>

                           <currency-input :value="comision" @input="comision = $event"
                              :options="optionsCurrency" class="form-control" />

                           <b-form-invalid-feedback :state="!errors.comision ">
                              {{ errors.comision }}
                           </b-form-invalid-feedback>


                     </b-form-group>

                  </b-col>
               </b-row>
               <b-row>
                  <b-col cols="12">

                     <!-- Descripcion del negocio -->
                     <b-form-group
                        title="Explica con más detalle acerca de tu negocio. Los socios de TravelPoints tambien pueden encontrar tu negocio por su descripción. Puedes agregar palabras claves para facilitar la busqueda."
                        v-b-tooltip.hover.v-warning>
                        <template #label>
                           Descripción del negocio: <span class="text-danger">*</span>
                           <font-awesome icon="circle-info" />
                        </template>

                       
                           <b-form-textarea v-model="descripcion" :state="!errors.descripcion"
                              :row="3" placeholder="Descripción del negocio" />
                           <b-form-invalid-feedback :state="!errors.descripcion">
                              {{ errors.descripcion }}
                           </b-form-invalid-feedback>

                     </b-form-group>

                  </b-col>

                  <b-col cols="12">

                     <!--  Url del negocio -->
                     <b-form-group title="Este será el enlace directo al perfil de tú negocio."
                        v-b-tooltip.hover.v-warning>
                        <template #label>
                           Enlace desea del perfil de negocio: <span class="text-danger">*</span>
                           <font-awesome icon="circle-info" />
                        </template>

                    
                           <b-input-group>
                              <b-input-group-prepend is-text>
                                 {{ url }}/
                              </b-input-group-prepend>

                              <b-form-input v-model="url" :state="!errors.url"
                                 placeholder="nombre-de-negocio" />

                           </b-input-group>

                           <b-form-invalid-feedback :state="!errors.url">
                              {{ errors.url }}
                           </b-form-invalid-feedback>

                     </b-form-group>


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
                     <b-form-group>
                        <template #label>
                           Correo electrónco del negocio: <span class="text-danger">*</span>
                        </template>

                    
                           <b-input-group>

                              <b-input-group-prepend is-text>
                                 <font-awesome icon="at" />
                              </b-input-group-prepend>

                              <b-form-input type="email" v-model="email"
                                 :state="!errors.email" placeholder="Correo electrónico del negocio" />

                           </b-input-group>
                           <b-form-invalid-feedback :state="!errors.email">
                              {{ errors.email }}
                           </b-form-invalid-feedback>

                     </b-form-group>
                  
                  </b-col>

                  <b-col cols="12" md="6">

                     <!-- Numero de telefono del negocio -->
                     <b-form-group>
                        <template #label>
                           Número telefónico del negocio: <span class="text-danger">*</span>
                        </template>

                           <b-input-group>
                              <b-input-group-prepend is-text>
                                 <font-awesome icon="phone" />
                              </b-input-group-prepend>
                              <b-form-input type="tel" v-model="telefono"
                                 :state="!errors.telefono" placeholder="Número telefónico" />
                           </b-input-group>


                           <b-form-invalid-feedback :state="!errors.telefono">
                              {{ errors.telefono }}
                           </b-form-invalid-feedback>
                        

                     </b-form-group>
                  </b-col>

                  <b-col cols="12">

                     <!-- Sitio web del negocio -->
                     <b-form-group v-b-tooltip.hover.v-warning
                        title="Si no tienes sitio web del negocio, dejalo en blanco">

                        <template #label>
                           Sitio web del negocio:
                        </template>
                           <b-input-group>

                              <b-input-group-prepend is-text>
                                 <font-awesome icon="globe" />
                              </b-input-group-prepend>

                              <b-form-input v-model="sitio_web"
                                 :state="!errors.sitio_web" placeholder="Sitio web del negocio" />

                           </b-input-group>

                           <b-form-invalid-feedback :state="!errors.sitio_web">
                              {{ errors.sitio_web }}
                           </b-form-invalid-feedback>
                     </b-form-group>

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
                     <b-form-group>
                        <template #label>
                           Dirección del negocio: <span class="text-danger">*</span>
                        </template>
                        
                           <b-input-group>
                              <b-input-group-prepend is-text>
                                 <font-awesome icon="map"/>
                              </b-input-group-prepend>
                              <b-form-input v-model="direccion" :state="!errors.direccion"
                                 placeholder="Dirección del negocio" />

                           </b-input-group>
                           <b-form-invalid-feedback :state="!errors.direccion">
                              {{ errors.direccion }}
                           </b-form-invalid-feedback>
                       
                     </b-form-group>

                  </b-col>
                  <b-col cols="12" md="4">

                     <!-- Codigo postal del negocio -->
                     <b-form-group>
                        <template #label>
                           Código postal del negocio: <span class="text-danger">*</span>
                        </template>
                           <b-input-group>
                              <b-input-group-prepend is-text>
                                 <font-awesome icon="mail"/>

                              </b-input-group-prepend>
                              <b-form-input v-model="codigo_postal" :state="!errors.codigo_postal"
                                 placeholder="Código postal del negocio" />

                           </b-input-group>
                           <b-form-invalid-feedback :state="!errors.codigo_postal">
                              {{ errors.codigo_postal }}
                           </b-form-invalid-feedback>
                     </b-form-group>

                  </b-col>
               </b-row>

               <b-row>
                  <b-col cols="12" md="4">
                     <!-- PAis del negocio -->
                     <b-form-group>
                        <template #label>
                           Pais: <span class="text-danger">*</span>
                        </template>

                        <v-select v-model="pais_id" :options="paises.map(val => ({label:val.pais,value:val.id}))" @change="cargarEstados" />

                     </b-form-group>
                  </b-col>
                  <b-col cols="12" md="4">
                     
                     <!-- Estado Del negocio -->
                     <b-form-group>
                        <template #label>
                           Estado: <span class="text-danger">*</span>
                        </template>

                        <v-select v-model="estado_id" :options="estados.map(val => ({label:val.estado, value:val.id}))" @change="cargarCiudades" />

                           <b-form-invalid-feedback :state="!errors.estado_id">
                              {{ errors.estado_id }}
                           </b-form-invalid-feedback>

                     </b-form-group>

                  </b-col>
                  <b-col cols="12" md="4">

                     <!-- Ciudad del negocio -->
                     <b-form-group>
                        <template #label>
                           Ciudad:
                        </template> 


                        <v-select  v-model="ciudad_id" :options="ciudades.map(val => ({label:val.ciudad,value:val.id}))" />
                           <b-form-invalid-feedback :state="!errors.ciudad_id">
                              {{ errors.ciudad_id }}
                           </b-form-invalid-feedback>
                     </b-form-group>

                  </b-col>
               </b-row>
               <hr>

               <b-row>
                  <b-col>
                     <div class="form-group">
                        <label for="map-canvas">Posici&oacute;n en el mapa <span class="required">*</span></label>
                        <p class="text-grey">
                        <ul>
                           <li class="text-grey">Arrastra el marcador hacia la ubicaci&oacute;n del hotel.</li>
                           <li class="text-grey">Puedes apoyarte escribiendo una ubicaci&oacute;n como una ciudad,
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
                        <div class="input-group col-md-6 mt-2" id="myAutocomplete">
                           <div class="input-group-prepend">
                              <div class="input-group-text bg-secondary">
                                 <span class="fas fa-search text-white" aria-hidden="true"></span>
                              </div>
                           </div>

                           <!-- <gmap-autocomplete class="form-control py-1 " style="z-index:8000 !important"
                              @place_changed="setPlace">

                           </gmap-autocomplete> -->

                        </div>
                     </div>

                     <!-- <GmapMap ref="input" :center="{
                     	lat:getLatitud(),
                     	lng:getLongitud()
                     }" :zoom="zoom_map" :options="options_map"
                        style="width:100%; height:250px; display: flex; justify-content:center;">
                        <GmapMarker :key="0" :position="{
                        	lat:getLatitud(),
                        	lng:getLongitud()
                        }" :visible="visibleMarker" :draggable="true" :clickable="true" :icon="iconMarker"
                           @mouseup="moviendomapa" @position_changed="posicionCambiada()">
                           <GmapInfoWindow :options="optionsPlace">
                           </GmapInfoWindow>
                        </GmapMarker>

                     </GmapMap> -->

                  </b-col>
               </b-row>

               <!-- Lat y lng  -->
               <b-row>
                  <b-col md="6">

                     <!-- Latitud del negocio -->
                     <b-form-group label="Latitud">
                       
                           <b-input-group>
                              <b-input-group-prepend is-text>
                                 <font-awesome icon="map-marked-alt" />

                              </b-input-group-prepend>

                              <b-form-input v-model="lat" :state="!errors.lat" />

                           </b-input-group>
                           <b-form-invalid-feedback :state="!errors.lat">
                              {{ errors.lat }}
                           </b-form-invalid-feedback>


                     </b-form-group>

                  </b-col>

                  <b-col md="6">

                     <!-- Longitud del negocio -->
                     <b-form-group label="Longitud">

                           <b-input-group>
                              <b-input-group-prepend is-text>
                                 <font-awesome icon="map-marked-alt"/>
                              </b-input-group-prepend>
                              <b-form-input v-model="lng" :state="!errors.lng" />
                           </b-input-group>
                        
                           <b-form-invalid-feedback :state="!errors.lng">
                              {{ errors.lng }}
                           </b-form-invalid-feedback>

                     </b-form-group>

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
                     <b-form-group
                        title="Este logo aparecerá en el perfil de negocio, se recomienda una imagen cuadrada de mínimo 300x300 px y un peso inferior a 2mb. La imagen debe estar en formato jpg o png"
                        v-b-tooltip.hover.v-warning description="Presiona encima del recuadro para buscar una imagen.">
                        <template #label>
                           Adjunta el logo de tu negocio: <span class="text-danger">*</span>
                           <font-awesome icon="help"/>
                        </template>

                        <section class="content-logo" @click="() => refLogo.$refs.input.click()"
                           :style="`background:url(${urlLogo})`">

                        </section>

                        <input-file v-model.valor="logo"  ref="refLogo" plain accept=".jpb, .png" hidden @input="logoSeleccionado" :state="!errors.logo" />
                          

                           <b-form-invalid-feedback :state="!errors.logo">
                              {{ errors.logo }}
                           </b-form-invalid-feedback>


                     </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6">

                     <!-- Portada del negocio -->
                     <b-form-group
                        title="Esta será la imagen de portada de tu negocio. Se recomienda una imagen horizontal panoramica y un peso inferior a 2mb, la imagen debe estar en formato jgg o png."
                        v-b-tooltip.hover.v-warning description="Presiona encima del recuadro para buscar una imagen.">

                        <template #label>
                           Adjunta una fotografía de tu negocio: <span class="text-danger">*</span>
                           <font-awesome icon="info" class="text-warning" />
                        </template>


                        <section class="content-logo" @click="refFoto.$refs.input.click()"
                           :style="`background:url(${urlFoto})`">
                        </section>

                           
                        <input-file v-model.valor="foto"  ref="refFoto" plain accept=".jpb, .png" hidden
                              @input="fotoSeleccionada" :state="!errors.foto" />
                       

                           <b-form-invalid-feedback :state="!errors.foto">
                              {{ errors.foto }}
                           </b-form-invalid-feedback>


                     </b-form-group>

                  </b-col>

               </b-row>

               
               <!-- <b-row v-if="solicitud.id">
                  <b-col cols="12">
                     <b-form-group label="Comentario"
                        description="Cuando una solicitud de negocio es regresada para su modificación, por lo general te la envían con un comentario,este es el comentario">
                        <b-form-textarea v-model="formulario.comentario" :rows="3"
                           :readonly="!$can('delete','solicitudes')" />
                     </b-form-group>
                  </b-col>
               </b-row> -->

            </b-container>



         </b-card>

         <b-container fluid class="mb-1">
            <b-row>
               <b-col cols="12" md="8">
                  <span>Los campos marcados con <strong class="text-danger">*</strong> son obligatorios</span>
               </b-col>

               <b-col cols="12" md="4" class="d-flex justify-content-end">

                  <div class="btn-group btn-group-sm" v-if="![3,4].includes(solicitud.situacion)" >
                     <b-button type="submit" variant="success" v-loading="loading" v-if="!admin">

                        <font-awesome icon="paper-plane-top" />
                        <span v-if="solicitud.id && solicitud.usuario_id === usuario.usuario.id">
                           Reenviar
                           solicitud </span>
                        <span v-else>Enviar Solicitud</span>
                     </b-button>
                     <b-button type="button" variant="success" v-loading="loading" title="Aceptar solicitud" @click="aceptar" v-if="admin">
                        <font-awesome icon="check" />
                        Aceptar Solicitud
                     </b-button>

                      <b-button type="button" variant="danger" v-loading="loading" title="Rechazar solicitud" @click="rechazar" v-if="admin">
                        <font-awesome icon="xmark" />
                        Rechazar Solicitud
                     </b-button>

                      <b-button type="button" variant="info" v-loading="loading" title="Regresar solicitud para su modificación" @click="regresar" v-if="admin">
                        <font-awesome icon="arrow-left" />
                        Regresar Solicitud
                     </b-button>

                  </div>

               </b-col>
            </b-row>
         </b-container>

      </b-form>



</template>

<script setup>

import { useForm } from 'vee-validate'
import * as yup from 'yup'

import useDireccion from '@core/utils/useDireccion'
import CurrencyInput from 'components/CurrencyInput.vue'

import {toRefs,ref,onMounted,watch,computed} from 'vue'
import { optionsCurrency } from '@core/utils/utils'

// stores
import {useSolicitudNegocioStore} from 'stores/solicitudNegocio'
import {useUsuarioStore} from 'stores/usuario';
import {useRootStore} from 'stores/root'


import {useCategoriaNegocioStore} from 'stores/negocios/categoria';

const solicitud = useSolicitudNegocioStore();
const categoriaNegocio = useCategoriaNegocioStore();
const usuario = useUsuarioStore();
const root = useRootStore();

   const props = defineProps({
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

   const emits = defineEmits(['save']);

   const {meta,handleSubmit,errors,useFieldModel} = useForm({
      initialValues:solicitud.solicitud,
      validationSchema:yup.object({
         nombre:yup.string().required(),
         breve:yup.string().required(),
         categoria_id:yup.string().required(),
         tipo_comision:yup.required(),
         comision:yup.number().required(),
         descripcion:yup.string().required(),
         url:yup.string().required(),
         email:yup.string().email(),
         telefono:yup.string().required(),
         sitio_web:yup.string().nullable(),
         direccion:yup.string().required(),
         codigo_postal:yup.string().required(),
         estado_id:yup.number().required(),
         ciudad_id:yup.number().required(),
         lat:yup.number().nullable(),
         lng:yup.number().nullable(),
         logo:yup.required(),
         foto:yup.required(),
      })
      
   });


const [nombre, breve, categoria_id, tipo_comision,comision,descripcion,url,email,telefono,sitio_web,direccion,codigo_postal,estado_id,ciudad_id,lat,lng, logo,foto ] = useFieldModel(["nombre", "breve", "categoria_id", "tipo_comision","comision","descripcion","url","email","telefono","sitio_web","direccion","codigo_postal","estado_id","ciudad_id","lat","lng","logo","foto"])

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
   const urlLogo= ref(null)
   const urlFoto = ref(null)
   const formSolicitud = ref(null)


      const optionsPlace = ref({
         content: '<strong>Méxio City</strong>',
      })
      
      const options_map = ref({
         mapTypeControl: false,
         zoomControl: true,
      })


      const guardar = handleSubmit((valores,action) => {
         
         if(logo.value){
            valores.logo = logo.value
           
         }

         if(foto.value){
            valores.foto = foto.value
         }

         emits('save',valores,action)
      })

      const {
         paises,
         ciudades,
         estados,
         cargarEstados,
         cargarCiudades,
         pais_id
      } = useDireccion();

      const cargarForm = () => {
         
         if(!categorias.value.length){
            categoriaNegocio.getCategorias().then((data) => categorias.value = data)
         }

         if(solicitud.solicitud.id){
            urlLogo.value = solicitud.solicitud.logo
            urlFoto.value = solicitud.solicitud.foto
            solicitud.solicitud.logo = null
            solicitud.solicitud.foto = null
            pais_id.value = solicitud.solicitud.estado.pais_id
            cargarCiudades(solicitud.solicitud.estado_id)

         }


      }


      // onMounted(() =>{

      //    cargarForm()
      //       input.value.$mapPromise.then((map) => {
      //       // var myControl = document.getElementById('myAutocomplete');
      //       // myControl.index = 1;
      //       // map.controls[google.maps.ControlPosition.TOP_CENTER].push(myControl);
      //    });

      // })

      
      // watch(solicitud,() => cargarForm())

      const getLatitud = () => {
         return Number(solicitud.solicitud.lat)
      }

      const getLongitud = () => {
         return Number(solicitud.solicitud.lng);
      }

      const setPlace = (place) => {
         // visibleMarker.value = false;
         // var address = '';
         // if (place.address_components) {
         //    address = [
         //       (place.address_components[0] && place.address_components[0].short_name || ''),
         //       (place.address_components[1] && place.address_components[1].short_name || ''),
         //       (place.address_components[2] && place.address_components[2].short_name || '')
         //    ].join(' ');
         // }

         // zoom_map.value = 17

         // lat.value = Number(place.geometry.location.lat());
         // lng.value = Number(place.geometry.location.lng());

         // iconMarker.value = {
         //    url: place.icon,
         //    size: new google.maps.Size(71, 71),
         //    origin: new google.maps.Point(0, 0),
         //    anchor: new google.maps.Point(17, 34),
         //    scaledSize: new google.maps.Size(35, 35)
         // };

         // visibleMarker.value = true;

         // optionsPlace.value.content = '<div><strong>' + place.name + '</strong><br>' + address
      }


      const moviendomapa = (dato) => {
         // lat.value = Number(dato.latLng.lat())
         // lng.value = Number(dato.latLng.lng())
      }

      const posicionCambiada = (dato) => { }

      const logoSeleccionado = (file) => {
         urlLogo.value =  URL.createObjectURL(file)
      }

      const fotoSeleccionada = (file) => {
         urlFoto.value = URL.createObjectURL(file)
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

      const loading = computed(() => root.loading)

</script>

<style lang="scss" scoped>

.content-logo{
   border: 3px dotted rgba(44, 23, 23, 0.568);
   height: 150px;
   border-radius: 10px;
   box-shadow: -5px 10px 25px rgb(0 0 0 / 50%);
   cursor: pointer;
   background-repeat: no-repeat !important;
   background-size: contain !important;
   background-position: center center !important;

   &::after {
         content: "Buscar la imagen";
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100%;
         font-weight: bolder;
   }
   
   &:hover{
          transform: scale3d(1.2, 1.2, 3.5);
         
         &::after {
               content: "" !important;
               display: flex;
               justify-content: center;
               align-items: center;
               height: 100%;
               font-weight:bolder;
         }
         
     
   }

  

  

}

</style>