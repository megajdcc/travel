<template>
  <b-card>
    <!-- form -->
    <b-form @submit.prevent="guardarCambios" id='form-cambiar-pass'>
      <b-row class="my-2">
        <!-- old password -->
        <b-col md="6">

          <div class="form group">
            <label for="">Contraseña Anterior <span class="required">*</span></label>

            <div class="input-group">
              <el-input type="password" v-model="formulario.passwordValueOld" class="w-100" placeholder="Contraseña anterior" show-password size="small"></el-input>
               <small v-if="errors.passwordValueOld" v-text="errors.passwordValueOld[0]" role='alert' class="text-danger font-wight-bold"></small>
            </div>
          </div>
        </b-col>
        <!--/ old password -->
      </b-row>
      <b-row>
        <!-- new password -->
        <b-col md="6">
            <div class="form group">
            <label for="">Contraseña Nueva <span class="required">*</span></label>

            <div class="input-group">
              <el-input type="password" v-model="formulario.newPasswordValue" class="w-100" placeholder="Contraseña anterior" show-password size="small"></el-input>
               <small v-if="errors.newPasswordValue" v-text="errors.newPasswordValue[0]" role='alert' class="text-danger font-wight-bold"></small>
            </div>
          </div>
        </b-col>
        <!--/ new password -->

        <!-- retype password -->
        <b-col md="6">
          <div class="form group">
            <label for="">Repita la nueva contraseña <span class="required">*</span></label>

            <div class="input-group">
              <el-input type="password" v-model="formulario.RetypePassword" class="w-100" :class="{'is-invalid' : errors.RetypePassword} " placeholder="Contraseña anterior" show-password size="small"></el-input>
               <small v-if="errors.RetypePassword" v-text="errors.RetypePassword[0]" class="text-danger font-wight-bold"></small>
            </div>
          </div>
        </b-col>
        <!--/ retype password -->

        <!-- buttons -->
        <b-col cols="12">
          <b-button
            
            variant="primary"
            class="mt-1 me-1"
            type="submit"
          >
            Guardar Cambios
          </b-button>

          <b-button
           
            type="reset"
            variant="outline-secondary"
            class="mt-1"
          >
            Limpiar
          </b-button>
        </b-col>
        <!--/ buttons -->
      </b-row>
    </b-form>
  </b-card>
</template>

<script setup>


import { ref,computed } from 'vue'
import { useUsuarioStore } from 'stores/usuario'
const usuarioStore = useUsuarioStore()

const formulario = ref({
  passwordValueOld: '',
  newPasswordValue: '',
  RetypePassword: '',
})

const passwordToggleIconOld = computed(() => {
  return passwordFieldTypeOld === 'password' ? 'EyeIcon' : 'EyeOffIcon'
})


const passwordToggleIconNew = computed(() => {
  return passwordFieldTypeNew === 'password' ? 'EyeIcon' : 'EyeOffIcon'
})

const passwordToggleIconRetype = computed(() => {
  return passwordFieldTypeRetype === 'password' ? 'EyeIcon' : 'EyeOffIcon'
})


const cambiarContrasena = usuarioStore.cambiarContrasena();

const togglePasswordOld  = () => {
  passwordFieldTypeOld = passwordFieldTypeOld === 'password' ? 'text' : 'password'
}

const togglePasswordNew = () => {
  passwordFieldTypeNew = passwordFieldTypeNew === 'password' ? 'text' : 'password'
}

const togglePasswordRetype = () => {
    passwordFieldTypeRetype = passwordFieldTypeRetype === 'password' ? 'text' : 'password'
}

const guardarCambios = () => {

  cambiarContrasena(formulario.value).then(response => {

    if (response.data.result) {
      document.querySelector('#form-cambiar-pass').reset()
    } else {
    }

  }).catch(e => {
    


  })


}
</script>
