<template>
   <div class="container-fluid px-0 mx-0">

      <div class="row w-100 px-0 mx-0">
         <div class="col-12 px-0 mx-0">
            <router-view #default="{ Component }">
               <!-- <transition :name="routerTransition" mode="out-in"> -->
                  <component :is="Component" />
               <!-- </transition> -->
            
            
            </router-view>

         </div>
      </div>
   </div>

</template>



<script>

export default {


   mounted(){
  
   },

   methods:{

   }
}
</script>