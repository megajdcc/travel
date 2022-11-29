<template>
   <div>
      <b-card>
         <template #header>
            <header class="d-flex justify-content-between align-items-center w-100">
               <h2 class="fw-bolder">Mi código de referidor</h2>
            </header>
         </template>
         <h2>Gana puntos ($Tp) envíando tu código de referidor a tus amigos.</h2>
         <p class="text-justify">Aumenta tus puntos ($Tp) por cada Amigo que se haya registrado con tu código de
            referidor
            y haya consumado una
         reserva. <br> Por cada reserva consumada de tus referidos tu ganarás saldo ($Tp) que luego podrás usar en
            nuestras tiendas de destinos que tenemos para Tí.</p>

            <b-form @submit.prevent="guardar">
               <b-form-group label="Comparte tu link">
                  
                     <!-- required -->
                     <b-input-group  class="w-100">
                        <b-input-group-prepend is-text>
                           {{ urlPath }}
                        </b-input-group-prepend>

                        <b-form-input v-model="codigo_referidor" :disabled="usuario.codigo_referidor ? true : false" :state="meta.valid" />

                        <b-input-group-append>
                           <b-button @click="copiarLink"  v-if="usuario.codigo_referidor ? true : false" variant="primary" class="py-0 fw-bolder" >
                              Copiar link
                           </b-button>

                           <b-button variant="primary" type="submit" class="py-0 fw-bolder" 
                              :disabled="!codigo_referidor ? true : false" v-else v-loading="loading">
                              Crear Link
                           </b-button>

                        </b-input-group-append>
                     </b-input-group>

                     <b-form-invalid-feedback :state="errors.codigo_referidor ? false : null">
                        {{ errors.codigo_referidor }}
                     </b-form-invalid-feedback>

                
               </b-form-group>

               <div class="btn-group btn-group-sm" v-if="usuario.codigo_referidor">
                  <b-button @click="compartirFacebook" style="background:#376BC8" variant="primary" v-ripple="50">
                     <font-awesome :icon="['fab','facebook']" />
                     Facebook
                  </b-button>
                  
                  <b-button @click="compartirWhatsapp" variant="success">
                     <font-awesome :icon="['fab','whatsapp']" />
                     WhatsApp
                  </b-button>
               </div>
             
            </b-form>

      </b-card>

      <!-- Mis referidos -->

      <referidos class="mt-1"/>
      

   </div>

</template>

<script setup>

import { ref,computed,toRefs,onMounted} from 'vue'

import {useRootStore} from 'stores/root'
import { useUsuarioStore } from 'stores/usuario'


import { useForm } from 'vee-validate'
import * as yup from 'yup'


import referidos from './list.vue'


const root = useRootStore();
const usuarioStore = useUsuarioStore(); 

yup.setLocale({
   mixed: {
      required: "Este Campo es importante",
      default: "Este Campo es important",
      notType:"Este campo debe ser ${type} y se ha pasado ${notType}"
   },

   string:{
      length: 'Este campo debe ser una cadena',
   },

   
})

const esquema = yup.object({
   codigo_referidor:yup.string().required()
})

const { useFieldModel,errors,handleSubmit,meta } = useForm({
   initialValues:usuarioStore.usuario,
   validationSchema:esquema,
}) 

const [codigo_referidor] = useFieldModel(['codigo_referidor']);

const usuario = computed(() => usuarioStore.usuario)
const url = ref('');
const url_app = ref(window.location.origin)

const link_referido = computed(() => {
   return `${url_app.value}/register/${codigo_referidor.value}`;

})

const compartirFacebook = () => {
   url.value = `https://www.facebook.com/sharer/sharer.php?u=${link_referido.value}`
   window.open(url.value, '_blank');
}

const compartirWhatsapp = () => {
   url.value = `https://wa.me/?text=Registrate en ${url_app.value} y gana puntos $Tp  con TravelPoint. ${link_referido.value}`
   window.open(url.value, '_blank');
}

const copiarLink = () => {
   navigator.clipboard.writeText(link_referido.value)
   toast.success("Link Copiado.")
}

const guardar = handleSubmit((valores,action) => {

   usuarioStore.crearLinkReferido(valores).then(({ result }) => {

      if (result) {
         toast.success('Su código de referido ha sido creado con éxito...')

      } else {
         toast.error('Su código de referido no se pudo crear, inténtelo de nuevo mas tarde...')
      }
   })

})
const  loading =  computed(() => root.loading)
const urlPath =  computed(() => `${window.location.origin}/register/`)

</script>