<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ms-1">
            Vuexy
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Welcome to Vuexy! 👋
        </b-card-title>
        <b-card-text class="mb-2">
          Please sign-in to your account and start the adventure
        </b-card-text>

        <!-- form -->

          <b-form
            class="auth-login-form mt-2"
           
          >

            <!-- email -->
            <b-form-group
              label-for="email"
              label="Email"
            >
            
                <b-form-input
                  id="email"
                  v-model="userEmail"
                  name="login-email"
                  
                  placeholder="john@example.com"
                  autofocus
                />
               
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Password</label>
                <b-link :to="{name:'auth-forgot-password-v1'}">
                  <small>Forgot Password?</small>
                </b-link>
              </div>
           
                <b-input-group
                  class="input-group-merge"
                 
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    
                    name="login-password"
                    placeholder="Password"
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
               
            
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="remember-me"
                v-model="status"
                name="checkbox-1"
              >
                Remember Me
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              type="submit"
              block
              :disabled="invalid"
            >
              Sign in
            </b-button>
          </b-form>
    

        <b-card-text class="text-center mt-2">
          <span>New on our platform? </span>
          <b-link :to="{name:'auth-register-v1'}">
            <span>Create an account</span>
          </b-link>
        </b-card-text>

        <div class="divider my-2">
          <div class="divider-text">
            or
          </div>
        </div>

        <!-- social button -->
        <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
            href="javascript:void(0)"
            variant="facebook"
          >
            <feather-icon icon="facebook" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="twitter"
          >
            <feather-icon icon="twitter" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="google"
          >
            <feather-icon icon="mail" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="github"
          >
            <feather-icon icon="github" />
          </b-button>
        </div>
      </b-card>
      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script>


import VuexyLogo from '@core/layouts/components/Logo.vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  components: {
    // BSV
    VuexyLogo,
 
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      userEmail: '',
      password: '',
      status: '',
     
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
