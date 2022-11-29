<template>
<div class="mb-1 " :class="[{'form-floating' : floating} ,classForm] ">
   <div class="container-fluid mb-0 p-0">
      <div class="row">

         <div :class="[colLabel,colLabelSm, colLabelMd, colLabelLg, colLabelXl]" v-if="!floating">
               <slot name="label">
                  <label :for="labelFor" class="from-label" :class="classLabel" v-if="label">{{ label }}</label>
               </slot>
         </div>
         
         <div :class="[colContent, colSmContent, colMdContent, colLgContent, colXlContent]">
            <slot />
         </div>

         <slot name="label" v-if="floating && label">
            <label>{{ label }}</label>
         </slot>
        


         <div class="col-12">
            <slot name="description">
               <div class="form-text" v-if="description">{{ description }}</div>
            </slot>
         </div>
       
      </div>
   </div>



</div> 
</template>

<script setup>

import {computed,onMounted} from 'vue'

const props = defineProps({
   classForm:{
      type:String,
      required:false
   },

   labelFor:{
      type:String,
      required:false,
      default:'default-label'
   },

   label: {
      type: String,
      required: false,

   },


   description: {
      type: String,
      required: false,
   },


   classLabel: {
      type: String,
      required: false,
   },

   labelCol: {
      type: [Boolean, String, Number],
      default:12,
      required: false
   },

   labelColSm:{
      type:[Boolean,String,Number],
      default:12,
   },

   labelColMd: {
      type: [Boolean, String, Number],
      default:12,
   },


   labelColLg: {
      type: [Boolean, String, Number],
      default:12,
      required: false
   },

   labelColXl: {
      type: [Boolean, String, Number],
      default:12,
      required: false
   },


  

   contentCol: {
      type: [Boolean, String, Number],
      default:12,
      required: false
   },

   contentColSm: {
      type: [Boolean, String, Number],
      default:12,
      required: false
   },



   contentColMd: {
      type: [Boolean, String, Number],
      default: 12,
      required: false
   },


   contentColLg: {
      type: [Boolean, String, Number],
      default: 12,
      required: false
   },

   contentColXl: {
      type: [Boolean, String, Number],
      default: 12,
      required: false
   },

   floating:{
      type:Boolean,
      default:false,
      required:false
   }



})

const colLabel = computed(() => {

   if (typeof props.labelCol === "boolean") {
      return `col-12`;
   } else if (typeof props.labelCol === "number") {
      return `col-${props.labelCol}`;

   } else if (typeof props.labelCol === "string") {
      return `col-${Number(props.labelCol)}`;

   }

})

const colLabelSm = computed(() => {
   if(typeof props.labelColSm === "boolean"){
      return `col-sm-12`;
   }else if(typeof props.labelColSm === "number"){
      return `col-sm-${props.labelColSm}`;

   }else if(typeof props.labelColSm === "string"){
      return `col-sm-${Number(props.labelColSm)}`;

   }

})

const colLabelMd = computed(() => {
   if (typeof props.labelColMd === "boolean") {
      return `col-md-12`;
   } else if (typeof props.labelColMd === "number") {
      return `col-md-${props.labelColMd}`;

   } else if (typeof props.labelColMd === "string") {
      return `col-md-${Number(props.labelColMd)}`;

   }

})

const colLabelLg = computed(() => {
   if (typeof props.labelColLg === "boolean") {
      return `col-lg-12`;
   } else if (typeof props.labelColLg === "number") {
      return `col-lg-${props.labelColLg}`;

   } else if (typeof props.labelColLg === "string") {
      return `col-lg-${Number(props.labelColLg)}`;

   }

})

const colLabelXl = computed(() => {
   if (typeof props.labelColXl === "boolean") {
      return `col-xl-12`;
   } else if (typeof props.labelColXl === "number") {
      return `col-xl-${props.labelColXl}`;

   } else if (typeof props.labelColXl === "string") {
      return `col-xl-${Number(props.labelColXl)}`;

   }

})

const colContent = computed(() => {
   if (typeof props.contentCol === "boolean") {
      return `col-12`;
   } else if (typeof props.contentCol === "number") {
      return `col-${props.contentCol}`;

   } else if (typeof props.contentCol === "string") {
      return `col-${Number(props.contentCol)}`;

   }

})

const colSmContent = computed(() => {
   if (typeof props.contentColSm === "boolean") {
      return `col-sm-12`;
   } else if (typeof props.contentColSm === "number") {
      return `col-sm-${props.contentColSm}`;

   } else if (typeof props.contentColSm === "string") {
      return `col-sm-${Number(props.contentColSm)}`;

   }

})

const colMdContent = computed(() => {
   if (typeof props.contentColMd === "boolean") {
      return `col-md-12`;
   } else if (typeof props.contentColMd === "number") {
      return `col-md-${props.contentColMd}`;

   } else if (typeof props.contentColMd === "string") {
      return `col-md-${Number(props.contentColMd)}`;

   }

})

const colLgContent = computed(() => {
   if (typeof props.contentColLg === "boolean") {
      return `col-lg-12`;
   } else if (typeof props.contentColLg === "number") {
      return `col-lg-${props.contentColLg}`;

   } else if (typeof props.contentColLg === "string") {
      return `col-lg-${Number(props.contentColLg)}`;

   }

})

const colXlContent = computed(() => {
   if (typeof props.contentColXl === "boolean") {
      return `col-xl-12`;
   } else if (typeof props.contentColXl === "number") {
      return `col-xl-${props.contentColXl}`;

   } else if (typeof props.contentColXl === "string") {
      return `col-xl-${Number(props.contentColXl)}`;

   }

})

</script>