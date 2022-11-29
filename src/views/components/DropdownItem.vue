<template>
      <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle " data-bs-display="static" :class="toggleClass" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
            <slot name="button-content">

            </slot>
         </a>

         <ul class="dropdown-menu" :class="[menuClass,{
            'dropdown-menu-end': right
         }]">
            <li class="dropdown-menu-header">
               <slot name="header">
               
               </slot>
            </li>
          
            <slot name="default"/>
         </ul>



      </li>
</template>

<script setup>

const props = defineProps({

   disabled:{
      type:Boolean,
      default:false,
      required:false
   },

   lazy: {
      type: Boolean,
      default: false,
      required: false
   },
   right: {
      type: Boolean,
      default: false,
      required: false
   },

   toggleClass:{
      type: [Array, String, Object],
      required: false,
   },

   menuClass:{
      type:[Array,String,Object],
      required:false,
   }


})

</script>

<style lang="scss">
.dropdown-menu-media {
   right: -1.5rem !important ;
   width:25rem !important;
}

@media (min-width:445px){

.dropdown-menu-media {
      width: 30rem !important;
   }
}

@media (min-width:762px) {

   .dropdown-menu-media {
      width: 35rem !important;
   }
}

@media (min-width:992px) {

   .dropdown-menu-media {
      width: 45rem !important;
   }
}
</style>