<template>
  <b-card-code title="Toaster target">
    <b-card-text class="mb-0">
      <span>BootstrapVue comes with the following "built-in" toaster names (and associated styles defined in SCSS): </span>
      <code>b-toaster-top-right, b-toaster-top-left, b-toaster-top-center, b-toaster-top-full, b-toaster-bottom-right,
        b-toaster-bottom-left, b-toaster-bottom-center, b-toaster-bottom-full
      </code>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
     
        variant="outline-primary"
        @click="toast('b-toaster-top-right')"
      >
        b-toaster-top-right
      </b-button>
      <b-button
       
        variant="outline-primary"
        @click="toast('b-toaster-top-left')"
      >
        b-toaster-top-left
      </b-button>
      <b-button
        
        variant="outline-primary"
        @click="toast('b-toaster-top-center')"
      >
        b-toaster-top-center
      </b-button>
      <b-button
        
        variant="outline-primary"
        @click="toast('b-toaster-top-full')"
      >
        b-toaster-top-full
      </b-button>
      <b-button
        
        variant="outline-primary"
        @click="toast('b-toaster-bottom-right', true)"
      >
        b-toaster-bottom-right
      </b-button>
      <b-button
        
        variant="outline-primary"
        @click="toast('b-toaster-bottom-left', true)"
      >
        b-toaster-bottom-left
      </b-button>
      <b-button
        
        variant="outline-primary"
        @click="toast('b-toaster-bottom-center', true)"
      >
        b-toaster-bottom-center
      </b-button>
      <b-button
        
        variant="outline-primary"
        @click="toast('b-toaster-bottom-full', true)"
      >
        b-toaster-bottom-full
      </b-button>
    </div>

    <template #code>
      {{ codeTarget }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { codeTarget } from './code'

export default {
  data() {
    return {
      counter: 0,
      codeTarget,
    }
  },
  methods: {
    toast(toaster, append = false) {
      this.counter += 1
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster,
        solid: false,
        appendToast: append,
      })
    },
  },
}
</script>
