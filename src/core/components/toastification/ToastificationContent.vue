<template>
  <div class="toastification">
    <div class="d-flex align-items-start">

      <font-awesome :icon="icon" size="2x" class="me-2 flex-shrink-0"  v-if="!avatar"/>


       <!-- <b-avatar
        :variant="variant"
        size="1.8rem"
        class="mr-75 flex-shrink-0"
        v-else
      > -->
        <b-avatar
          size="lg"
          :src="avatarSrc"
          class="me-2 flex-shrink-0"
          v-else
        />
      <!-- </b-avatar> -->



      <div class="d-flex flex-grow-1">
        <div>
          <h5
            v-if="title"
            class="mb-0 fw-bolder toastification-title"
            :class="`text-${variant}`"
            v-text="title"
          />
          <small
            v-if="text"
            class="d-inline-block text-body"
            v-text="text"
          />
        </div>
        <span
          class="cursor-pointer toastification-close-icon ml-auto "
          @click="$emit('close-toast')"
        >
          <font-awesome icon="xmark"   v-if="!hideClose" />
       
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    hideClose: {
      type: Boolean,
      default: false,
    },
    avatar:{
      type:Boolean,
      default:false,
    },

    avatarSrc:{
      type:String,
      required:false,
    }
  },
}
</script>

<style lang="scss" scoped>
.toastification-close-icon,
.toastification-title {
  line-height: 26px;
}

.toastification-title {
  color: inherit;
}
</style>
