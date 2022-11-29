export const codeVariant = `
<template>
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
</template>

<script>
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
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
`

export const codePosition = `
<template>
  <div>
    <h5 class="mb-0">Top Positions</h5>
    <div class="demo-inline-spacing">

      <!-- Top right -->
      <b-button
        
        variant="outline-primary"
        @click="showToast('primary','top-right')"
      >
        Top Right
      </b-button>

      <!-- Top left -->
      <b-button
        
        variant="outline-primary"
        @click="showToast('secondary','top-left')"
      >
        Top Left
      </b-button>

      <!-- top center -->
      <b-button
        
        variant="outline-primary"
        @click="showToast('success','top-center')"
      >
        Top Center
      </b-button>
    </div>

    <h5 class="mt-2 mb-0">
      Bottom Positions
    </h5>
    <div class="demo-inline-spacing">
      <!-- bottom right -->
      <b-button
        
        variant="outline-primary"
        @click="showToast('danger','bottom-right')"
      >
        Bottom Right
      </b-button>

      <!-- bottom left -->
      <b-button
        
        variant="outline-primary"
        @click="showToast('warning','bottom-left')"
      >
        Bottom Left
      </b-button>

      <!-- bottom center -->
      <b-button
        
        variant="outline-primary"
        @click="showToast('info','bottom-center')"
      >
        Bottom Center
      </b-button>
    </div>
  </div>
</template>

<script>
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'


export default {
  components: {
   
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  methods: {
    showToast(variant, position) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'InfoIcon',
          text: 'I do not think that word means what you think it means.',
          variant,
        },
      },
      {
        position,
      })
    },
  },
}
</script>
`

export const codeTime = `
<template>
  <div class="demo-inline-spacing">

    <!-- default time trigger button -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('primary')"
    >
      Time Default
    </b-button>

    <!-- 4s delay trigger button -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('primary',4000)"
    >
      Time 4s(4000)
    </b-button>

    <!-- 8s delay trigger button -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('primary',8000)"
    >
      Time 8s(8000)
    </b-button>
  </div>
</template>

<script>

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'


export default {
  components: {
   
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  methods: {
    showToast(variant, timeout) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: 'I do not think that word means what you think it means.',
          variant,
        },
      },
      {
        timeout,
      })
    },
  },
}
</script>
`

export const codeIcon = `
<template>
  <div class="demo-inline-spacing">
    <!-- mail icon -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('primary','MailIcon')"
    >
      Icon Mail
    </b-button>

    <!-- Inbox icon -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('secondary','InboxIcon')"
    >
      Icon Inbox
    </b-button>

    <!-- Check icon -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('success','CheckIcon')"
    >
      Icon Check
    </b-button>

    <!-- heart icon -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('danger','HeartIcon')"
    >
      Icon Heart
    </b-button>

    <!-- favorite icon -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('warning','StarIcon')"
    >
      Icon Favorite
    </b-button>

    <!-- slack icon -->
    <b-button
      
      variant="outline-primary"
      @click="showToast('info','SlackIcon')"
    >
      Icon Slack
    </b-button>
  </div>
</template>

<script>
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
   
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  methods: {
    showToast(variant, icon) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon,
          text: 'I do not think that word means what you think it means.',
          variant,
        },
      })
    },
  },
}
</script>
`
