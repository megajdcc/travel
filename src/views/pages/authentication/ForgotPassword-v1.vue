<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Forgot Password v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <!-- logo -->
          <vuexy-logo />

          <h2 class="brand-text text-primary ms-1">
            Vuexy
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Forgot Password? 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          Enter your email and we'll send you instructions to reset your password
        </b-card-text>

        <!-- form -->
       
          <b-form
            class="auth-forgot-password-form mt-2"
          
          >
            <!-- email -->
            <b-form-group
              label="Email"
              label-for="forgot-password-email"
            >
           
                <b-form-input
                  id="forgot-password-email"
                  v-model="userEmail"
                
                  name="forgot-password-email"
                  placeholder="john@example.com"
                />
             
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              block
              type="submit"
            >
              Send reset link
            </b-button>
          </b-form>
      

        <b-card-text class="text-center mt-2">
          <b-link :to="{name:'auth-login-v1'}">
            <feather-icon icon="chevron-left" /> Back to login
          </b-link>
        </b-card-text>

      </b-card>
    <!-- /Forgot Password v1 -->
    </div>
  </div>
</template>

<script>

import VuexyLogo from '@core/layouts/components/Logo.vue'



export default {
  components: {
    VuexyLogo,
   

  },
  data() {
    return {
      userEmail: '',
     
      email,
    }
  },
  methods: {
    validationForm() {
      this.$router.push({ name: 'auth-reset-password-v1' })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
