<template>
   <div ref="contenedor" class="contenedor" :style="{
      height:height,
      width:width
   }" :class="class">
      <slot />
   </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
import('perfect-scrollbar/css/perfect-scrollbar.css');
import {onMounted,ref,watch,toRefs} from 'vue'


export default {

   props:{
      width: {
         type: Number,
         required: false
      },
      height: {
         type: Number ,
         default: 450,
         required: false
      },
      speed: {
         type: Number,
         default: 1,
         required: false,
      },

      wheelPropagation: {
         type: Boolean,
         default: true,
      },

      min: {
         type:Number,
         default:null,
         required:false,
      },
      max: {
         type: Number,
         default: null,
         required: false,
      },

      class: {
         type: String,
         required: false
      },
   },


   setup(props){

      const { width, height, speed, wheelPropagation,min,max } = toRefs(props)

      const ps = ref(null)
      const contenedor = ref(null)


      onMounted(() => {
         ps.value =  new PerfectScrollbar(contenedor.value,{
            wheelSpeed:speed.value,
            wheelPropagation: wheelPropagation.value,
            minScrollbarLength:min.value,
            maxScrollbarLength:max.value

         })

      })

      return {
         contenedor
      }



   }

}

</script>

<style lang="scss">


.contenedor{
   position: relative;
   width: 600px;
   height: 450px;
}  

</style>

