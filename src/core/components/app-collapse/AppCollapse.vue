<template>
  <div role="tablist" class="collapse-icon" :class="collapseClasses">
    <slot  />
  </div>
</template>

<script setup >
import {ref,computed,onMounted,provide} from 'vue'

import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
  accordion: {
    type: Boolean,
    default: false,
  },
  hover: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'default',
  },
})

const collapseID = ref('')
// Collapse Type
const collapseVariants = {
  default: 'collapse-default',
  border: 'collapse-border',
  shadow: 'collapse-shadow',
  margin: 'collapse-margin',
}

const collapseClasses = computed(() => {
  const classes = []
  classes.push(collapseVariants[props.type])
  return classes
})

  onMounted(() => {
    collapseID.value = uuidv4()
  })

provide('parent',{...props,collapseID})

</script>
