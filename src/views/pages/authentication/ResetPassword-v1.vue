<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Reset Password v1 -->
      <b-card class="mb-0">

        <!-- logo -->
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ms-1">
            Vuexy
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Reset Password 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          Your new password must be different from previously used passwords
        </b-card-text>

        <!-- form -->
       
          <b-form
            method="POST"
            class="auth-reset-password-form mt-2"
          >

            <!-- password -->
            <b-form-group
              label="New Password"
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
             
            </b-form-group>

            <!-- confirm password -->
            <b-form-group
              label-for="reset-password-confirm"
              label="Confirm Password"
            >
            
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
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
             
            </b-form-group>

            <!-- submit button -->
            <b-button
              block
              type="submit"
              variant="primary"
            >
              Set New Password
            </b-button>
          </b-form>
     

        <p class="text-center mt-2">
          <b-link :to="{name:'auth-login-v1'}">
            <feather-icon icon="chevron-left" /> Back to login
          </b-link>
        </p>

      </b-card>
    <!-- /Reset Password v1 -->
    </div>
  </div>

</template>

<script>

import VuexyLogo from '@core/layouts/components/Logo.vue'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    VuexyLogo,
   

  },
  data() {
    return {
      userEmail: '',
      cPassword: '',
      password: '',
    

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
      this.$refs.simpleRules.validate().then(success => {
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
