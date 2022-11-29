<template>
  <b-card no-body :class="{'open': visible}" @mouseenter="collapseOpen" @mouseleave="collapseClose" >
    <b-card-header :class="{'collapsed': !visible}" :aria-expanded="visible ? 'true' : 'false'" :aria-controls="collapseItemID" role="tab" data-toggle="collapse" @click="updateVisible(!visible)">
      <slot name="header">
        <span class="lead collapse-title">{{ title }}</span>
      </slot>
    </b-card-header>

    <b-collapse :id="collapseItemID" v-model="visible" :accordion="accordion" role="tabpanel">
      <b-card-body>
        <slot />
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script setup>

import { v4 as uuidv4 } from 'uuid'
import {toRef,ref,onMounted,computed, inject} from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },

 

})
const parent = inject('parent')

const emit = defineEmits(['visible'])

const visible = ref(false)
const collapseItemID = ref('')

const openOnHover = parent.hover

const accordion = computed(() => {
  parent.accor ? `accordion-${parent.collapseID}` : null
})

onMounted(() => {
  collapseItemID.value = uuidv4()
    visible.value = props.isVisible
})

const updateVisible = (val = true) => {
  visible.value = val
  emit('visible', val)
}

const collapseOpen = ()  => {
  if (openOnHover.value) updateVisible(true)
}

const collapseClose = () => {
  if (openOnHover.value) updateVisible(false)
}

</script>
