<template>
<div class="mx-2 mb-2">
   <b-row>

      <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
      <span class="text-muted">{{ $t('generales.mostrando') }} {{ dataMeta.from }} a {{ dataMeta.to }}  {{ $t('generales.de') }} {{ dataMeta.of }} {{ $t('generales.entradas') }} </span>
      </b-col>
      <!-- Pagination -->
      <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">


      <!-- <nav  class="mb-0 mt-1 mt-sm-0">
         <ul class="pagination">

            <button type="button" class="btn btn-transparent btn-sm border-0" :disabled="currentPage == 1">
               <slot name="prev-text">
                  <font-awesome icon="angles-left" size="lg" style="cursor:pointer" />
               </slot>
            </button>
           
         

            <button type="button" class="btn btn-transparent btn-sm">
               <slot name="next-text">
                  <font-awesome :icon="['fas','angles-right']" size="lg" style="cursor:pointer" />
               </slot>
            </button>
         </ul>
      </nav> -->

      <!-- <el-pagination :total="total" layout="prev,pager,next"  v-model:pager-size="perPage" :default-current-page="1" v-model:current-page="currentPage"  >

      </el-pagination> -->

      <b-pagination 
         v-model="currentPage"
         :total-rows="total"
         :per-page="perPage"
         first-number
         last-number
         prev-class="prev-item"
         next-class="next-item">
         
         <template #prev-text>
         
         </template>

         <template #next-text>
         
         </template>
         
      </b-pagination>

      </b-col>

   </b-row>
   </div>

</template>

<script setup>

const props = defineProps({
   
   dataMeta: {
      type: Object,
      required: true
   },

   currentPage: {
      type: [String,Number],
      required: true,
   },
   total: {
      type: Number,
      required: true,
   },
   perPage: {
      type: [Number,String],
      required: true,
   }
})

const emits = defineEmits(['update:currentPage'])
</script>