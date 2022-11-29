<template>
   <b-card title="Desactivar Cuenta">
      <span>
         Al desactivar tu cuenta, se desactivará tu perfil y se borrará tu nombre y tu foto de la mayor parte de
         TravelPoints.
      </span>


         <b-form @submit.prevent="desactivar">
            <b-form-group>

               <template #label>
                  Nos intersa saber por qué nos dejas <span class="text-danger">*</span>
               </template>
                  <b-form-textarea v-model="mensaje" :state="!errors.mensaje" :rows="3"
                     placeholder="Un breve mensaje.." />

                  <b-form-invalid-feedback>
                     {{ errors.mensaje }}
                  </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group>

               <template #label>
                  Contraseña actual: <span class="text-danger">*</span>
               </template>

               <b-input-group :state="!errors.contrasena">
                  <b-form-input id="password" v-model="contrasena" :type="passwordFieldType" name="login-password" placeholder="Password"
                     :state="!errors.contrasena" />

                     <b-input-group-append is-text @click.stop="togglePasswordVisibility" class="cursor-pointer">
                              <font-awesome :icon="passwordToggleIcon" class="cursor-pointer" @click.stop="togglePasswordVisibility"/>
                     </b-input-group-append>

                  <b-form-invalid-feedback :state="errors.contrasena">
                     {{ errors.contrasena }}
                  </b-form-invalid-feedback>


               </b-input-group>
                

               

            </b-form-group>

            <span>Los campos marcados con <strong class="text-danger">*</strong> son obligatorios.</span>

            <hr>

            <b-button variant="primary"  type="submit" v-loading="loading" title="Desactivar cuenta" :disabled="!meta.valid">
               Desactivar cuenta
            </b-button>

         </b-form>



   </b-card>

</template>

<script setup>


import { useForm } from 'vee-validate'
import {useRootStore} from 'stores/root'
import {useUsuarioStore} from 'stores/usuario';
import { useTogglePasswordVisibility } from '@core/mixins/ui/forms'

import * as yup from 'yup';


import {ref,computed} from 'vue'
import useAuth from '@core/utils/useAuth'


const root = useRootStore();
const usuario = useUsuarioStore();


const { passwordFieldType,
   togglePasswordVisibility, passwordToggleIcon } = useTogglePasswordVisibility()

const {
   logout
} = useAuth()

const esquema = yup.object({
   mensaje: yup.string().required().min(10),
   contrasena:yup.string().required(),
});

const { handleSubmit,errors, useFieldModel,meta } = useForm({
   initialValues:usuario.usuario,
   validationSchema:esquema
}) 

const [mensaje,contrasena] = useFieldModel(['mensaje','contrasena']);

const desactivar = handleSubmit((valores,action) => {

   usuario.desactivarCuenta(valores).then(({ result }) => {

      if (result) {
         toast.info('Su cuenta ha sido desactivada, si vuelves a entrar al sistema, tu cuenta se activará automáticamente...')
         logout()
      } else {
         toast.info('No pudimos desactivar tú cuenta, inténtelo de nuevo mas tarde')
      }

   }).catch(e => {
      console.log(e)
      if (e.response.status === 422) {
         action.setErrors(e.response.data.errors);
      }

   })

})

 const loading = computed(() => root.loading)


</script>