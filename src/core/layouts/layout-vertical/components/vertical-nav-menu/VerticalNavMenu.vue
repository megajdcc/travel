<template>

  <div class="main-menu menu-fixed menu-accordion menu-shadow" 
  :class="[{ 'expanded': !isVerticalMenuCollapsed || (isVerticalMenuCollapsed && isMouseHovered) },
  skin === 'light'|| skin === 'bordered' ? 'menu-light' : 'menu-dark']"
    @mouseenter="updateMouseHovered(true)"
    @mouseleave="updateMouseHovered(false)">
    
    <!-- main menu header-->
    <div class="navbar-header expanded">
      <slot name="header" :toggleVerticalMenuActive="toggleVerticalMenuActive" :toggleCollapsed="toggleCollapsed" :collapseTogglerIcon="collapseTogglerIcon">

        <nav  class="nav navbar-nav flex-row d-flex justify-content-center align-items-center w-100"
          :class="{'justify-content-between' : !isVerticalMenuCollapsed}">
              <b-link class="navbar-brand mr-0" to="/">
                <span class="brand-logo">
              
                  <b-img :src="logo" alt="logo" v-if="!isVerticalMenuCollapsed" style="max-height:auto !important" />
              
                  <b-img :src="favicon" alt="logo" v-else
                    style="max-width:50px !important; left:1.2rem; max-height:auto !important"  />
                </span>
              </b-link>

              <b-link class="nav-link modern-nav-toggle" :class="{'ms-1':isVerticalMenuCollapsed }"  >
                <font-awesome :icon="collapseTogglerIcon" size="lg" class="d-none d-xl-block collapse-toggle-icon"
                  @click="toggleCollapsed" :class="{'ms-1':isVerticalMenuCollapsed }" />
              </b-link>

        </nav>
        <!-- <ul> -->
          <!-- Logo & Text -->
          <!-- <li class="nav-item">
          
          </li> -->
        
          <!-- Toggler Button -->
          <!-- <li class="nav-item nav-toggle" :class="{'ms-1' : isVerticalMenuCollapsed}">
           
          </li>
        </ul> -->

      </slot>
    </div>
    <!-- / main menu header-->

    <!-- Shadow -->
    <div :class="{'d-block': shallShadowBottom}" class="shadow-bottom" />

    <!-- main menu content-->
    
    <vue-perfect-scrollbar class="main-menu-content scroll-area" :max="50" >
      <vertical-nav-menu-items :items="navMenuItems" class="navigation navigation-main" />
    </vue-perfect-scrollbar>
    <!-- /main menu content-->
  </div>
</template>

<script setup>


import { provide, computed, ref } from 'vue'

import useAppConfig from '@core/app-config/useAppConfig'
import { $themeConfig } from '@themeConfig'
import VerticalNavMenuItems from './components/vertical-nav-menu-items/VerticalNavMenuItems.vue'

import useVerticalNavMenu from './useVerticalNavMenu'
import useLogotipos from '@core/utils/useLogotipos'

const props = defineProps({
  isVerticalMenuActive: {
    type: Boolean,
    required: true,
  },
  toggleVerticalMenuActive: {
    type: Function,
    required: true,
  },
  navMenuItems: {
    type: Array,
    required: true,
  }
})

const {
  isMouseHovered,
  isVerticalMenuCollapsed,
  collapseTogglerIcon,
  toggleCollapsed,
  updateMouseHovered,
} = useVerticalNavMenu(props)

 const {
      logotipo,
      logotipobg,
      favicon
    } = useLogotipos();

const { skin } = useAppConfig()

// Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
const shallShadowBottom = ref(false)

provide('isMouseHovered', isMouseHovered)


// const collapseTogglerIconFeather = computed(() => (collapseTogglerIcon.value === 'unpinned' ? 'circle' : 'dot-circle'))

// App Name
const { appName } = $themeConfig.app

const logo = computed(() => {
  return skin.value == 'semi-dark' ? logotipo.value : logotipobg.value;
})

</script>

<style lang="scss">
@import "@core/scss/base/core/menu/menu-types/vertical-menu.scss";

.vertical-overlay-menu.menu-open .main-menu {
  top:0;
  
  a{
    text-decoration: none;
  }


}

 .main-menu {

   img {
     top: 2rem ;
   }

   &.expanded img {
     top: 0rem;
     left:0px !important;
     right:auto;
   }

 }


.brand-logo img {
  max-width: 180px !important;
  height: auto !important;
}

.modern-nav-toggle{
  position:absolute;
  right: 0px;
  margin-top: .2rem !important;
  top:.5rem;
}

.navbar-header{
  display: flex;

}
</style>
