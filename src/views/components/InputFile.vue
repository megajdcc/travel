<template>
         <input type="file" class="form-control" 
         :class="[`form-control-${size}`]" 
         :value="valor"
         @change="eventChange" 
         @input="eventInput"
         :multiple="multiple" 
         :accept="accept" 
         :placeholder="placeholder" 
         :disabled="disabled"
         :readonly="readonly"
         v-show="!hidden"
          />

  
</template>

<script setup>

   import {onMounted} from 'vue'

   const props = defineProps({

      multiple:{
         default:false,
         type:Boolean,
      },

      valor:[Array,String,Object],


      accept:{
         type:String,
         required:false,
         default:'image'
      },

    

    
      size:{
         type:String,
         default:'md',
         required:false
      },

      placeholder:{
         type:String,
         default:"Archivo",
         required:false
      },
      disabled:{
         type:Boolean,
         default:false,
         required:false
      }, 
      
      readonly: {
         type: Boolean,
         default: false,
         required: false
      },

      hidden:{
         type:Boolean,
         default:false,
         required:false
      }

      
     


   })

   const emit = defineEmits(['update:valor','input','change'])

   const eventChange = (val) => {
      if(props.multiple){
         
         emit('change', val.target.files)
         emit('update:valor', val.target.files)
      }else{
         emit('change', val.target.files[0])
         emit('update:valor', val.target.files[0])

      }
   
   } 


   const eventInput =(val) => {

      if (props.multiple) {
         
         emit('input', val.target.files)
         emit('update:valor', val.target.files)

      } else {
       
         emit('input', val.target.files[0])
         emit('update:valor', val.target.value)

      }

   }


   

</script>