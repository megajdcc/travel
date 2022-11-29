<template>

<div ref="modalRef" class="modal fade " :class="[`modal-${size}`,{show:visible,}]" tabindex="-1" :style="{display:visible ? 'block': 'none'}" id="MyModal">
   <div class="modal-dialog" :class="[`modal-${size}`,{ 'modal-dialog-centered': centered, }]">
      <div class="modal-content" :class="contentClass">
         
         <slot name="header">
            <div class="modal-header">
               <title-tag :title="title" :tag="titleTag" :title-class="titleClass"  :class="[`text-${headerTextVariant}`]" />
               <button type="button" class="btn-close" @click="cerrar" aria-label="Close"  :class="[`text-${headerTextVariant}`,`bg-${cancelVariant}`]"></button>
            </div>
         </slot>
        
         <div class="modal-body" :class="[bodyClass,`bg-${bodyBgVariant}`]">
           <slot />

         </div>

         <div class="modal-footer">

            <slot name="modal-footer">
               <button type="button" class="btn btn-secondary" @click="cerrar" :class="[`btn-${buttonSize}`,`bg-${cancelVariant}`]">Cerrar</button>
            </slot>
          
         </div>
      </div>
   </div>
</div>
</template>

<script setup>

import {computed,toRefs,ref,watch,onMounted,onUnmounted,h}  from 'vue'
import * as bootstrap from 'bootstrap'
import TitleTag from 'components/TitleTag.vue'
const props = defineProps({
 

   ariaLabel:{
      type:String,
      required:false,

   },

   bodyBgVariant:{
      type:String,
      required:false,

   },

   bodyClass:{
      type:[Array,Object,String],
      required:false,
   },

   bodyTextVariant:{
      type:String,
      required:false,
   },

   busy:{
      type:Boolean,
      required:false,

   },

   buttonSize:{
      type:String,
      default:'sm',
      required:false,
   },

   cancelDisabled:{
      type:Boolean,
      required:false,

   },

   cancelVariant:{
      type:String,
      default:'secondary',
      required:false,
   },
   
   centered:{
      type:Boolean,
      default:false,
      required:false,
   },

   contentClass:{
      type:[Array,Object,String],
      required:false,

   },

   footerBgVariant:{
      type:String,
      required:false,
   },

   footerBorderVariant:{
      type:String,
      required:false,

   },

   footerClass:{
      type:[Array,Object,String],
      required:false,
   },

   footerTextVariant:{
      type:[String],
      required:false,
   },

   headerBgVariant:{
      type:[String],
      required:false,
   },
   
   headerClass:{
      type:[Array,Object,String],
      required:false,
   },

   headerCloseContent:{
      type:String,
      default:'$times;',
      required:false,
   },

   headerCloseLabel:{
      type:String,
      default:'Cerrar',
      required:false,
   },

   headerCloseVariant:{
      type:String,
      required:false,
      
   },

   headerTextVariant:{
      type:String,
      default:'primary',
      required:false,
   },
   
   lazy:{
      type:Boolean,
      default:false,
   },

   modalClass:{
      type:[Array,Object,String],
      required:false,
   },

   size:{
      type:String,
      default:'lg',
      required:false,
   },

   title:{
      type:String,
      required:false,
   },

   titleClass:{
      type:[Array,Object,String],
      required:false,

   },

   titleTag:{
      type:String,
      default:'h5',
      required:false,
   },

   visible:{
      type:Boolean,
      default:false,
      required:false,
   }
});

const emits = defineEmits(['update:visible','hide'])


const modalRef = ref(null)

const myModal = ref(null)

onMounted(() => {
   myModal.value = new bootstrap.Modal(modalRef.value,{
      keyboard:false,
      backdrop:true
   })
   
   
   myModal.value._element.addEventListener('hide.bs.modal', () => {
      emits('update:visible',false)
   })

})

onUnmounted(() => {
   
   //  modalRef.value.removeEventListener('hide.bs.modal')
})

const {visible: show,toggleModal} = toRefs(props)

watch(show,(val) => {

   
   
   if(val) {
      
     

   } else{
      // modalRef.value.hide()
   }

})


const modalClassObject = computed(() => {

   if(Array.isArray(props.modalClass)){
      return props.modalClass;
   }else if(typeof props.modalClass === Object){
      return props.modalClass
   }else{
      return props.modalClass
   }


})

const cerrar  = () => {
   emits('hide')
   emits('update:visible',false)
}


</script>

<style lang="scss">
</style>