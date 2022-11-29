<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />
          <h2 class="brand-text text-primary ms-1">
            Vuexy
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Adventure starts here 🚀
        </b-card-title>
        <b-card-text class="mb-2">
          Make your app management easy and fun!
        </b-card-text>

        <!-- form -->
       
          <b-form
            class="auth-register-form mt-2"
           
          >
            <!-- username -->
            <b-form-group
              label="Username"
              label-for="username"
            >
             
                <b-form-input
                  id="username"
                  v-model="username"
                  
                  name="register-username"
                  placeholder="johndoe"
                />
               
            </b-form-group>

            <!-- email -->
            <b-form-group
              label="Email"
              label-for="email"
            >
            
                <b-form-input
                  id="email"
                  v-model="regEmail"
                 
                  name="register-email"
                  placeholder="john@example.com"
                />
               
            </b-form-group>

            <!-- password -->
            <b-form-group
              label="Password"
              label-for="password"
            >
             
                <b-input-group
                  class="input-group-merge"
                 
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                  
                    class="form-control-merge"
                    name="register-password"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIcon"
                      class="cursor-pointer"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
               
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="register-privacy-policy"
                v-model="status"
                name="checkbox-1"
              >
                I agree to
                <b-link>privacy policy & terms</b-link>
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              block
              type="submit"
            >
              Sign up
            </b-button>
          </b-form>
     

        <b-card-text class="text-center mt-2">
          <span>Already have an account? </span>
          <b-link :to="{name:'auth-login-v1'}">
            <span>Sign in instead</span>
          </b-link>
        </b-card-text>

        <div class="divider my-2">
          <div class="divider-text">
            or
          </div>
        </div>

        <!-- social buttons -->
        <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
            variant="facebook"
            href="javascript:void(0)"
          >
            <feather-icon icon="facebook" />
          </b-button>
          <b-button
            variant="twitter"
            href="javascript:void(0)"
          >
            <feather-icon icon="twitter" />
          </b-button>
          <b-button
            variant="google"
            href="javascript:void(0)"
          >
            <feather-icon icon="mail" />
          </b-button>
          <b-button
            variant="github"
            href="javascript:void(0)"
          >
            <feather-icon icon="github" />
          </b-button>
        </div>
      </b-card>
    <!-- /Register v1 -->
    </div>
  </div>

</template>

<script>


import VuexyLogo from '@core/layouts/components/Logo.vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    VuexyLogo,
   

  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      regEmail: '',
      username: '',
      password: '',
      status: '',

      
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    validationForm() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
