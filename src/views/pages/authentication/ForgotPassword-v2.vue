<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />

        <h2 class="brand-text text-primary ms-1">
          Vuexy
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Forgot password V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Forgot password-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="fw-bold mb-1"
          >
            Forgot Password? 🔒
          </b-card-title>
          <b-card-text class="mb-2">
            Enter your email and we'll send you instructions to reset your password
          </b-card-text>

          <!-- form -->

            <b-form
              class="auth-forgot-password-form mt-2"
            
            >
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

              <b-button
                type="submit"
                variant="primary"
                block
              >
                Send reset link
              </b-button>
            </b-form>
         

          <p class="text-center mt-2">
            <b-link :to="{name:'auth-login-v2'}">
              <feather-icon icon="chevron-left" /> Back to login
            </b-link>
          </p>
        </b-col>
      </b-col>
      <!-- /Forgot password-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */

import VuexyLogo from '@core/layouts/components/Logo.vue'

import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    VuexyLogo,
  
  },
  data() {
    return {
      userEmail: '',
      sideImg: require('@/assets/images/pages/forgot-password-v2.svg'),
      email,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/forgot-password-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    validationForm() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
