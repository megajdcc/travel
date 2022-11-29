<template>
      <input type="text" ref="inputRef"/>
</template>

<script setup>

import { useCurrencyInput } from 'vue-currency-input'
const props = defineProps({
   modelValue: Number,
   options: Object
})

const { inputRef } = useCurrencyInput(props.options)

</script>