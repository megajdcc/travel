<template>
   <div class="auth-wrapper auth-v1 px-2">
      <div class="auth-inner py-2">

         <!-- Register v1 -->
         <b-card class="mb-0">
            <logo url="/"></logo>

            <b-card-title class="mb-1">
               Unete al club 🚀
            </b-card-title>
            <b-card-text class="mb-2">
               No mas de 2 minutos te tomará registrarte.
            </b-card-text>

            <!-- form -->
          
               <b-form class="auth-register-form mt-2" >
                  <!-- username -->
                  <b-form-group label="Username" label-for="username">
                    
                        <b-form-input id="username" v-model="formulario.username"
                           name="register-username"
                           placeholder="mariosacramento" />
                        <small class="text-danger"></small>
                  </b-form-group>

                  <!-- email -->
                  <b-form-group label="Email" label-for="email">
                    
                        <b-form-input id="email" v-model="formulario.email"
                           name="register-email" placeholder="mario@example.com" />
                        <small class="text-danger"></small>
                  </b-form-group>

                  <!-- password -->
                  <b-form-group label="Password" label-for="password">
                     
                        <b-input-group class="input-group-merge">
                           <b-form-input id="password" v-model="formulario.password" :type="passwordFieldType"
                               class="form-control-merge"
                              name="register-password" placeholder="············" />
                           <b-input-group-append is-text>
                              <feather-icon :icon="passwordToggleIcon" class="cursor-pointer"
                                 @click="togglePasswordVisibility" />
                           </b-input-group-append>
                        </b-input-group>
                        
                    
                  </b-form-group>

                  <!-- retype password -->
                  <b-form-group label="Password" label-for="password">
                    
                        <b-input-group class="input-group-merge">
                           <b-form-input id="password" v-model="formulario.retypePassword" :type="passwordFieldType"
                              class="form-control-merge"
                              name="register-password" placeholder="············" />
                           <b-input-group-append is-text>
                              <feather-icon :icon="passwordToggleIcon" class="cursor-pointer"
                                 @click="togglePasswordVisibility" />
                           </b-input-group-append>
                        </b-input-group>
                      
                  
                  </b-form-group>


                  <!-- checkbox -->
                  <b-form-group>
                     <b-form-checkbox id="register-privacy-policy" v-model="formulario.condiciones" name="checkbox-1">
                        Acepto los
                        <b-link :to="{name:'terminos-condiciones'}">Terminos y condiciones</b-link>
                     </b-form-checkbox>
                  </b-form-group>

                  <!-- submit button -->
                  <b-button variant="primary" block type="submit" :disabled="!formulario.condiciones">
                     !Hazme Socio!
                  </b-button>
               </b-form>
           

            <b-card-text class="text-center mt-2">
               <span>Ya tienes cuenta en TravelPoints? </span>
               <b-link :to="{ name: 'login' }">
                  <span>ir a Login</span>
               </b-link>
            </b-card-text>

            <div class="divider my-2">
               <div class="divider-text">
                  o
               </div>
            </div>

            <!-- social buttons -->
            <div class="auth-footer-btn d-flex justify-content-center">
               <b-button variant="google" href="javascript:void(0)">
                  <feather-icon icon="MailIcon" />
                  Google
               </b-button>
            </div>
         </b-card>
         <!-- /Register v1 -->
      </div>
   </div>

</template>

<script>

import { useTogglePasswordVisibility } from '@core/mixins/ui/forms';

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

import { ref, computed, toRefs, onMounted, watch } from 'vue'

import {useRouter} from 'vue-router'

import {useRootStore} from 'stores/root'
import { useUsuarioStore } from 'stores/usuario'




export default {

   components: {
      

      Logo:() => import('components/Logo.vue')
   },

   props:{
      codigo:{
         type:String,
         required:false
      }
   },

   setup(props,{emit}){

      const root = useRootStore()
      const usuario = useUsuarioStore();

      const router = useRouter();

      const {codigo } = toRefs(props)

      const formulario = ref({
         username      : null,
         email         : null,
         password      : null,
         retypePassword: null,
         condiciones   : false,
         referidor     : codigo.value
      })

      const formValidate = ref(null)

      const {
         passwordFieldType,
         togglePasswordVisibility
      } = useTogglePassword();

      const guardar = () => { 

         usuario.nuevoUsuario(formulario.value).then(({result}) => {
            
            if(result){
               toast.success('Tú cuenta ha sido creada con éxito')
               router.push({name:'login'})
            }else{
               toast.info('La cuenta no pudo ser creada, inténtelo de nuevo mas tarde')
            }


         }).catch(e => {
            
            console.log(e)
            if(e.response.status === 422){
              
            }

         })

      } 

      const cargarForm =() => {
         if (codigo.value) {
            usuario.verificarCodigoReferido(codigo.value).then(({ result }) => {

               if (result) {
                  toast.success('Código de referidor cargado')
               } else {
                  toast.info('El código no se ha podido cargar')
                  router.push('/register')
               }

            })
         }

      }

      onMounted(() => cargarForm())

      watch(codigo,() => cargarForm())

      
      return {
         formulario,
         formValidate,
         loading:computed(() => root.loading),
         email,
         password,
         passwordFieldType,
         togglePasswordVisibility,
         passwordToggleIcon:computed(() => {
            return passwordFieldType.value === 'password' ? 'EyeIcon' : 'EyeOffIcon'
         }),
       
        
         guardar

      }
   }

}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
