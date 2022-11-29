<template>
  <b-card>

      <!-- form -->
      <b-form @submit.prevent="guardar" id='form-cambiar-pass'>
        <b-container fluid>
          <b-row>

            <b-col cols="12">
              <h2>Cambiar Contraseña</h2>
            </b-col>

          </b-row>
          <b-row class="my-2">
            <!-- old password -->
            <b-col md="6">

              <b-form-group>
                <template #label>
                  Contraseña Anterior <span class="required">*</span>
                </template>


                  <b-input-group :state="!errors.contrasenaAnterior">
                    <b-form-input id="contrasenaAnterior" v-model="contrasenaAnterior" :type="passwordFieldType" name="login-password"
                      placeholder="Password" :state="!errors.contrasenaAnterior" />
                  
                    <b-input-group-append is-text @click.stop="togglePasswordVisibility" class="cursor-pointer">
                      <font-awesome :icon="passwordToggleIcon" class="cursor-pointer" @click.stop="togglePasswordVisibility" />
                    </b-input-group-append>
                  
                    <b-form-invalid-feedback :state="errors.contrasenaAnterior">
                      {{ errors.contrasenaAnterior }}
                    </b-form-invalid-feedback>
                  
                  
                  </b-input-group>


              </b-form-group>

            </b-col>
            <!--/ old password -->
          </b-row>

          <b-row>
            <!-- new password -->
            <b-col md="6">

              <b-form-group>
                <template #label>
                  Contraseña Nueva <span class="required">*</span>
                </template>

                <b-input-group :state="!errors.contrasenaNueva">
                  <b-form-input id="contrasenaNueva" v-model="contrasenaNueva" :type="passwordFieldType" name="login-password"
                    placeholder="Password" :state="!errors.contrasenaNueva" />
                
                  <b-input-group-append is-text @click.stop="togglePasswordVisibility" class="cursor-pointer">
                    <font-awesome :icon="passwordToggleIcon" class="cursor-pointer" @click.stop="togglePasswordVisibility" />
                  </b-input-group-append>
                
                  <b-form-invalid-feedback :state="errors.contrasenaNueva">
                    {{ errors.contrasenaNueva }}
                  </b-form-invalid-feedback>
                
                
                </b-input-group>

              </b-form-group>

            </b-col>
            <!--/ new password -->

            <!-- retype password -->
            <b-col md="6">

              <b-form-group>
                <template #label>
                  Repita la nueva contraseña <span class="required">*</span>
                </template>

                  <b-input-group :state="!errors.retypePassword">
                    <b-form-input id="retypePassword" v-model="retypePassword" :type="passwordFieldType" name="login-password"
                      placeholder="Password" :state="!errors.retypePassword" />
                  
                    <b-input-group-append is-text @click.stop="togglePasswordVisibility" class="cursor-pointer">
                      <font-awesome :icon="passwordToggleIcon" class="cursor-pointer" @click.stop="togglePasswordVisibility" />
                    </b-input-group-append>
                  
                    <b-form-invalid-feedback :state="errors.retypePassword">
                      {{ errors.retypePassword }}
                    </b-form-invalid-feedback>
                  
                  
                  </b-input-group>


              </b-form-group>
            </b-col>
            <!--/ retype password -->
          </b-row>

          <b-row>
            <b-col cols="12">

              <div class="btn-group btn-group-sm">
                <b-button v-ripple="50" type="submit" variant="primary" v-loading="loading" title="Guardar" :disabled="!meta.valid">
                  <font-awesome icon="floppy-disk" />
                  Guardar cambios
                </b-button>
                
                <b-button v-ripple="50" @click="resetForm" variant="secondary">
                  Limpiar
                </b-button>
              </div>
         
            </b-col>
          </b-row>
        </b-container>


      </b-form>

  </b-card>
</template>

<script setup>


import { useForm } from 'vee-validate';
import * as yup from 'yup'
import { useTogglePasswordVisibility } from '@core/mixins/ui/forms'

import {ref,computed} from 'vue'
import { useUsuarioStore } from 'stores/usuario';
import {useRootStore} from 'stores/root';


const root = useRootStore();
const usuario = useUsuarioStore();
const formulario = ref({
  contrasenaAnterior: '',
  contrasenaNueva: '',
  retypePassword: '',
})

const { errors, meta, useFieldModel, handleSubmit, resetForm } = useForm({
  initialValues:formulario.value,
  
  validationSchema:yup.object({
    contrasenaAnterior:yup.string().required(),
    contrasenaNueva:yup.string().required(),
    retypePassword:yup.string().required()
  })


})

const [contrasenaAnterior,contrasenaNueva,retypePassword] = useFieldModel(['contrasenaAnterior','contrasenaNueva','retypePassword']);


const { passwordFieldType,
  togglePasswordVisibility, passwordToggleIcon } = useTogglePasswordVisibility()



const guardar = handleSubmit((valores,action) => {

    usuario.cambiarContrasena(valores).then(({ result }) => {

    if (result) {
      toast.success('Contraseña actualizada de forma correcta')
      action.resetForm();
    } else {
      toast.error('La contraseña no se pudo cambiar')
    }

  }).catch(e => {

    if (e.response.status === 422) {
      action.setErrors(e.response.data.errors)
    }

  })



});


const loading = computed(() => root.loading)
</script>
