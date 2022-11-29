<template>

      <div v-if="options" v-loading="loading">
         <div class="d-flex align-items-center">
            <b-avatar rounded size="42" variant="light-primary" class="me-1">
               <!-- <font-awesome :icon="options.icono" :size="lg" /> -->
            </b-avatar>
            <div>
               <h4 class="mb-0 fw-bolder">
                  {{ options.nombre }}
               </h4>
            </div>
         </div>

         <!-- collapse -->
         <app-collapse id="faq-payment-qna" accordion type="margin" class="mt-2">

         <app-collapse-item v-for="( data, index) in options.faqs" :key="index" :title="data.pregunta" >
            <template #header>
               <h4 class="fw-bolder">{{ data.pregunta }}</h4>
            </template>
            <div v-html="data.respuesta"></div>
         </app-collapse-item>
           

         </app-collapse>

         <!--/ collapse -->
      </div>
  
</template>

<script setup>

import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {computed} from 'vue'

import { useRootStore} from 'stores/root'

const root = useRootStore()

const props = defineProps({
   options: {
      type: Object,
      default: () => { },
   },
})
 const loading =  computed(() => root.loading)
</script>
