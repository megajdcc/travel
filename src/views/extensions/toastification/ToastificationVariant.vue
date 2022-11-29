<template>
  <b-card-code title="Variant">
    <b-card-text class="mb-0">
      <span>You can use </span>
      <code>variant</code>
      <span> prop for color variant.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <!-- primary trigger button -->
      <b-button
        
        variant="outline-primary"
        @click="showToast('primary')"
      >
        Primary
      </b-button>

      <!-- secondary trigger button -->
      <b-button
       
        variant="outline-secondary"
        @click="showToast('secondary')"
      >
        Secondary
      </b-button>

      <!-- success trigger button -->
      <b-button
        
        variant="outline-success"
        @click="showToast('success')"
      >
        Success
      </b-button>

      <!-- danger trigger button -->
      <b-button
        
        variant="outline-danger"
        @click="showToast('danger')"
      >
        Danger
      </b-button>

      <!-- warning trigger button -->
      <b-button
        
        variant="outline-warning"
        @click="showToast('warning')"
      >
        Warning
      </b-button>

      <!-- info trigger button -->
      <b-button
        
        variant="outline-info"
        @click="showToast('info')"
      >
        Info
      </b-button>

      <!-- dark trigger button -->
      <b-button
        
        variant="outline-dark"
        @click="showToast('dark')"
      >
        Dark
      </b-button>
    </div>

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { codeVariant } from './code'

export default {
  components: {

    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeVariant,
    }
  },
  methods: {
    showToast(variant) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: '👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.',
          variant,
        },
      })
    },
  },
}
</script>
