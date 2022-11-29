<template>
   
   <router-link v-bind="$props"  v-slot="{ isActive, href, navigate, isExactActive }" custom >
      <li class="nav-item" :class="{'active' : isActive,'exact-active':isExactActive}">
         <a :href="href" v-bind="$attrs" @click="navigate" class="d-flex align-items-center nav-link" :class="isActive ? activeClass : inactiveClass">
            <slot />
         </a>
      </li>
   </router-link> 

</template>

<script>
import { RouterLink } from 'vue-router'

export default {
   name: 'NavItem',
   inheritAttrs: false,

   props: {
      // add @ts-ignore if using TypeScript
      ...RouterLink.props,
      inactiveClass: String,
   },

   computed: {
      isExternalLink() {
         return typeof this.to === 'string' && this.to.startsWith('http')
      },
   },
}
</script>


<style lang="scss" scoped>
@import '../../../src/assets/scss/variables/variables';

.menu-socio {
   .nav-item {
      a {
         color: #909399;
      }

      &.exact-active {
         background: $primary !important;
         color: white;


      }
      &.exact-active {
         background: $primary !important;
         color: white;
      }

   }

}

.dark-layout {
   .menu-socio {
      .nav-item {
         a {
            color: white !important;
         }


         &.exact-active {
            background: $primary !important;
            color: black !important;
         }

      }

   }
}
</style>