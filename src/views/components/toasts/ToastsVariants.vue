<template>
  <b-card-code title="Variants">
    <b-card-text class="mb-0">
      BootstrapVue toasts provide custom CSS to define color variants. Variants follow the standard Bootstrap v4 variant
      names. If you have custom SCSS defined Bootstrap color theme variants, the toast custom SCSS will automatically
      create toast variants for you (refer to the Theming reference section).
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- default -->
      <b-button
        variant="gradient-primary"
        @click="makeToast()"
      >
        Default
      </b-button>

      <!-- primary -->
      <b-button
     
        variant="outline-primary"
        @click="makeToast('primary')"
      >
        Primary
      </b-button>

      <!-- secondary -->
      <b-button
       
        variant="outline-secondary"
        @click="makeToast('secondary')"
      >
        Secondary
      </b-button>

      <!-- warning -->
      <b-button
     
        variant="outline-warning"
        @click="makeToast('warning')"
      >
        Warning
      </b-button>

      <!-- danger -->
      <b-button
  
        variant="outline-danger"
        @click="makeToast('danger')"
      >
        Danger
      </b-button>

      <!-- success -->
      <b-button
  
        variant="outline-success"
        @click="makeToast('success')"
      >
        Success
      </b-button>

      <!-- info -->
      <b-button
      
        variant="outline-info"
        @click="makeToast('info')"
      >
        Info
      </b-button>
    </div>

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { codeVariant } from './code'

export default {

  data() {
    return {
      codeVariant,
    }
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('Toast body content', {
        title: `Variant ${variant || 'default'}`,
        variant,
        solid: false,
      })
    },
  },
}
</script>
