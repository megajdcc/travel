<template>
   <div class="container-fluid px-0">

      <div class="row w-100 mx-0 px-0">
         <div class="col-12 px-0 mx-0">
            <router-view #default="{Component}">
                  <transition :name="routerTransition" mode="out-in">
                     <component :is="Component"/>
                  </transition>
            </router-view>
           
         </div>
      </div>

   </div>
</template>

<script setup>

import useAppConfig from '@core/app-config/useAppConfig'
const  { routerTransition } = useAppConfig();

</script>
