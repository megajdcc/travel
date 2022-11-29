<template>
   <div class="auth-wrapper auth-v1 px-2">
      <div class="auth-inner py-1">

         <!-- Login v1 -->
         <b-card style="z-index:100">

            <b-link class="brand-logo " :to="{name:'inicio'}">
               <img :src="logo" alt="Villamizar jaraba" style="max-width:220px !important; height:auto !important">
            </b-link>

            <!-- <b-card-title class="mb-1 text-center fw-bolder">
               Villamizar Jaraba! 👋
            </b-card-title> -->

            <b-card-text class=" text-center fw-bold">
               Inicia sesión en tu cuenta y comienza la aventura 👋
            </b-card-text>

               <b-form class="auth-login-form " @submit.prevent="iniciar">

                  <b-form-group label-for="email" label="Email" :invalid-feedback="errors.email" label-class="mb-0" >
                        <b-form-input id="email" v-model="email" name="login-email"  placeholder="john@example.com" autofocus :state="errors.email ? false : true" />
                  </b-form-group>
                
                  <b-form-group :invalid-feedback="errors.passowrd" label="Password" label-for="password" labal-class="mb-0"   >
                  
                     <template #label>
                        <div class="d-flex justify-content-between ">
                           <label for="password" class="mb-0">Password</label>
                           <b-link :to="{ name: 'auth-forgot-password' }">
                              <small>Olvidaste la contraseña?</small>
                           </b-link>
                          
                        </div>
                     </template>
                       

                        <b-input-group >
                           <b-form-input id="password" v-model="password" :type="passwordFieldType" name="login-password" placeholder="Password"
                              :state="errors.password ? false : null" />

                           <b-input-group-append is-text @click.stop="togglePasswordVisibility" class="cursor-pointer">
                              <font-awesome :icon="passwordToggleIcon" class="cursor-pointer" @click.stop="togglePasswordVisibility"/>
                           </b-input-group-append>

                        </b-input-group>

                  </b-form-group>

                  <b-form-group>

                     <b-form-checkbox id="remember-me" v-model="remember" name="checkbox-1" :state="errors.remember ? false : null">
                        Recordarme
                     </b-form-checkbox>

                     <b-form-invalid-feedback :state="errors.remember ? false : true">
                        {{ errors.remember }}
                     </b-form-invalid-feedback>
                  
                  </b-form-group>

                  <b-button variant="primary" type="submit" block :disabled="!meta.valid" class="w-100" v-loading="loading" v-ripple="50" >
                     <font-awesome icon="paper-plane" size="xl"   />
                     Iniciar
                  </b-button>

               </b-form>
         </b-card>
         <!-- /Login v1 -->
      </div>
   </div>
</template>


<script setup>

import { useForm } from 'vee-validate'

import * as yup from 'yup'


import { useTogglePasswordVisibility } from '@core/mixins/ui/forms'
import { useAppConfigStore } from 'stores/appConfig'
import {useUsuarioStore} from 'stores/usuario'
import { useRootStore } from 'stores/root'

import { computed, toRefs,onMounted } from 'vue';
import useAuth from '@core/utils/useAuth'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import {useRouter} from 'vue-router'

import { getHomeRouteForLoggedInUser } from '@/auth/utils'
import { $themeConfig } from '@themeConfig'
import useLogotipos from '@core/utils/useLogotipos'



const appConfigStore = useAppConfigStore();
const usuarioStore = useUsuarioStore();
const rootStore = useRootStore();   
const sideImg = import('@/assets/images/pages/login-v2.svg')
const router  = useRouter();

const {
   login,
   esquema,
   csrf
} = useAuth();




const { errors, meta, handleSubmit, useFieldModel } = useForm({
   initialValues:{
      email:'',
      password:'',
      remember:false
   },
   validationSchema: esquema,
   // validateOnMount: false
})

const [email, password, remember] = useFieldModel(['email', 'password', 'remember'])


   const imgUrl = computed(() => {

      if (appConfigStore.layout.skin === 'dark') {
         return import('@/assets/images/pages/login-v2-dark.svg')
      }
      
      return sideImg
   })

   const usuario = computed(() => usuarioStore.usuario)
   const { appName, appLogoImage, applogoImageWhite } = $themeConfig.app
   const { skin } = toRefs(appConfigStore.layout)

   const {
      logotipo,
      logotipobg
   } = useLogotipos()

const { passwordFieldType,
   togglePasswordVisibility, passwordToggleIcon } = useTogglePasswordVisibility()

   const iniciar = handleSubmit((valores,actions) => {

         login(valores,actions).then((result) => {

            if (result) {

               router.replace(getHomeRouteForLoggedInUser(usuario.value.rol.nombre)).then(
                  () => {
                     toast({
                        component: ToastificationContent,
                        props: {
                           title: `Bienvenido ${usuario.value.nombre || usuario.value.apellido}`,
                           icon: 'mug-hot',
                           variant: 'success',
                           text: `Ha iniciado sesión correctamente como ${usuario.value.rol.nombre}. ¡Ahora puedes empezar a explorar!`,
                        },
                     }, {
                        position: 'bottom-right',
                        timeout: 4000
                     })
                  })

            } else {

               toast({
                  component: ToastificationContent,
                  props: {
                     title: `No pudimos autenticarte, inténtelo de nuevo`,
                     icon: 'info',
                     variant: 'danger',
                  },
               }, {
                  position: 'bottom-right',
                  timeout: 4000
               })

            }


         }).catch(e => console.log(e))
   })

   onMounted(() => csrf())

   const loading = computed(() => rootStore.loading)
   const auth = computed(() => rootStore.auth)

   const logo =  computed(() => {
      return skin.value == 'semi-dark' ? logotipobg.value : logotipo.value;
   })

</script>

<style>
</style>

<style lang="scss" scope>
@import '@core/scss/vue/pages/page-auth.scss';
.brand-logo img {
   height: 80px !important;
   max-width: 220 !important;
}
.mb-3{
   margin-bottom:1rem !important;
}
</style>
