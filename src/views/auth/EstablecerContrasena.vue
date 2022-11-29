<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Reset Password v1 -->
      <b-card class="mb-0">

         <!-- Brand logo-->
         <b-link class="brand-logo">
         
          <img :src="logo" alt="Logo" />
         <!-- <h2 class="brand-text text-primary ms-1">
            Boda y Playa
         </h2> -->
         </b-link>
         <!-- /Brand logo-->
        <b-card-title class="mb-1">
         Establecer la contraseña🔒
        </b-card-title>
    

        <!-- form -->
          <b-form
            method="POST"
            class="auth-reset-password-form mt-2"
            @submit.prevent="validationForm"
          >

            <!-- password -->
            <b-form-group
              label="Nueva contraseña"
              label-for="reset-password-new"
            >

                <b-input-group
                  class="input-group-merge"
                
                >
                  <b-form-input
                    id="reset-password-new"
                    v-model="password"
                    :type="password1FieldType"
                   
                    class="form-control-merge"
                    name="reset-password-new"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="password1ToggleIcon"
                      @click="togglePassword1Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger"></small>
            </b-form-group>

            <!-- confirm password -->
            <b-form-group
              label-for="reset-password-confirm"
              label="Confirmar Contraseña"
            >
            
                <b-input-group
                  class="input-group-merge"
                 
                >
                  <b-form-input
                    id="reset-password-confirm"
                    v-model="cPassword"
                    :type="password2FieldType"
                    class="form-control-merge"
                    
                    name="reset-password-confirm"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="password2ToggleIcon"
                      @click="togglePassword2Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger"></small>
           
            </b-form-group>

            <!-- submit button -->
            <b-button
              block
              type="submit"
              variant="primary"
            >
              Establecer nueva contraseña
            </b-button>
          </b-form>
   

        <p class="text-center mt-2">
          <b-link :to="{name:'login'}">
            <feather-icon icon="chevron-left" /> Volver al login
          </b-link>
        </p>

      </b-card>

    </div>
  </div>

</template>

<script>

import VuexyLogo from '@core/layouts/components/Logo.vue'
import useLogotipos from '@core/utils/useLogotipos';



import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import {toRefs,computed} from 'vue'
import store from '@/store'

export default {
  components: {
    VuexyLogo,

  },

  props:['usuario'],
  data() {
    return {
 
      cPassword: '',
      password: '',
      // validation

      // Toggle Password
      password1FieldType: 'password',
      password2FieldType: 'password',
    }
  },

  computed: {
    password1ToggleIcon() {
      return this.password1FieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    password2ToggleIcon() {
      return this.password2FieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  
  methods: {
    togglePassword1Visibility() {
      this.password1FieldType = this.password1FieldType === 'password' ? 'text' : 'password'
    },
    togglePassword2Visibility() {
      this.password2FieldType = this.password2FieldType === 'password' ? 'text' : 'password'
    },

    validationForm() {


        if (success) {
         
           axios.put(`/api/usuario/${this.usuario}/establecer/contrasena`,{
              password:this.password,
              password_confirmation:this.cPassword
           }).then(respon => {


              if(respon.data.result){

                 this.$router.push('/login')
                 this.$notify.success(respon.data.status)
              }else{

               this.$notify.info(respon.data.status)

              }
            

           }).catch(e => {
              console.log(e)
           })

        }
    },
  },

  setup(){
    
    const {
      logotipo,
      logotipobg
    } = useLogotipos();

    const { skin } = toRefs(store.state.appConfig.layout)

    return {
      logo: computed(() => {
        return skin.value == 'semi-dark' ? logotipo.value : logotipobg.value;
      })
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
