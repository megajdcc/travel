<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Forgot Password v1 -->
      <b-card class="mb-0">
        
         <!-- Brand logo-->
         <b-link class="brand-logo" :to="{name:'inicio'}">
            <img :src="logo" alt="Logo" style="max-width:220px !important; height:auto !important" />
         </b-link>
         <!-- /Brand logo-->

        <b-card-title class=" text-center">
          Has olvidado tu contraseña? 🔒
        </b-card-title>

        <b-card-text class="text-justify" >
          Ingrese su correo electrónico y le enviaremos instrucciones para restablecer su contraseña
        </b-card-text>

        <!-- form -->
          <b-form class="auth-forgot-password-form mt-2" @submit.prevent="solicitar" >
            <!-- email -->
            <b-form-group label="Email" label-for="email" :invalid-feedback="errors.email">
                <b-form-input id="email" v-model="email"  :state="errors.email ? false:  true" placeholder="jhon@example.com"/>
                <small class="text-danger">{{ errors[0] }}</small>
            </b-form-group>

            <!-- submit button -->

            <b-button v-ripple="50" type="submit" v-loading="loading" variant="primary" class="w-100" :disabled="!meta.valid" >
              <font-awesome icon="save" size="lg"  />
              Enviar enlace
            </b-button>
            
          </b-form>

        <b-card-text class="text-center mt-2">
          <b-link :to="{name:'login'}">
            <font-awesome icon="angle-left" size="lg" />
             Regresar a login
          </b-link>
        </b-card-text>

      </b-card>
    <!-- /Forgot Password v1 -->
    </div>
  </div>
</template>

<script setup>

import * as yup from 'yup'

import { useForm } from 'vee-validate'
import {ref,toRefs,computed} from 'vue';
import {useRootStore} from 'stores/root'
import {useAppConfigStore} from 'stores/appConfig'

import useLogotipos from '@core/utils/useLogotipos';

const root = useRootStore();
const appConfig = useAppConfigStore()

const { skin } = toRefs(appConfig.layout)

const {
  logotipo,
  logotipobg

} = useLogotipos();

const loading = computed(() => root.loading)


const esquema = yup.object({
  email:yup.string().email().required()
})


const { handleSubmit,errors,meta,useFieldModel } = useForm({
    validationSchema:esquema
})

const [ email ] = useFieldModel(['email'])

const  solicitar = handleSubmit((valores,actions) => {

    root.toggleLoading();
    axios.post('/api/auth/recuperar/contrasena', valores).then(respon => {

      if(respon.data.result){
        toast.success('¡Hemos enviado su enlace de restablecimiento de contraseña por correo electrónico!')
      }
      actions.resetForm();
    }).catch(e => {

      if (e.response && e.response.status === 422) {
        actions.setErrors(e.response.data.errors)
      } else {
        console.log(e)
      }

    }).then(() => root.toggleLoading())

   
})



const logo =  computed(() => {
  return skin.value == 'semi-dark' ? logotipo.value : logotipobg.value;
})

</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
