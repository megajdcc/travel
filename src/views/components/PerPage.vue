<template>
   
   <div class="input-group " :class="[`input-group-${size}`]">
      <span class="input-group-text" id="basic-addon1">Entradas</span>

      <select name="perPage" v-model="perPage" class=" form-control form-select " aria-describedby="basic-addon1">
         <option v-for="(option,i) in perPageOptions" :value="option.value">{{ option.label }}</option>
      </select>
   </div>
  

</template>

<script setup>

import vSelect from 'vue-select'

const props = defineProps({
   size: {
      type: String,
      required: false,
      default: 'sm'
   },

   perPage: {
      type: [String, Number],
      required: true,
   },
   perPageOptions: {
      type: Array,
      required: false,
      default: [
         {
            label: '10',
            value: 10,
         },
         {
            label: '25',
            value: 25,
         },
         {
            label: '50',
            value: 50,
         },
         {
            label: '100',
            value: 100,
         },
         {
            label: 'Todas',
            value: 0,
         },
      ]
   }
})

const emits = defineEmits(['update:PerPage.vue'])

</script>