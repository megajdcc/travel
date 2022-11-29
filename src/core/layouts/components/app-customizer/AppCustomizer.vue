<template>
  <div class="customizer d-none d-md-block" :class="{'open': isCustomizerOpen}" >
    <!-- Toggler -->
    <b-link class="customizer-toggle d-flex align-items-center justify-content-center" @click="isCustomizerOpen = !isCustomizerOpen" >

      <font-awesome icon="gear" class="spinner" />

    </b-link>
    <!-- /Toggler -->

    <!-- Header -->
    <div class="customizer-section d-flex justify-content-between align-items-center">
      <div>
        <h4 class="text-uppercase mb-0">
          Personalizar tema
        </h4>
        <small>Personalice y vea los cambios en tiempo real</small>
      </div>

    <font-awesome icon="xmark" class="cursor-pointer" @click="isCustomizerOpen = !isCustomizerOpen"  />
    
  </div>
  
  <!-- Header -->

     <vue-perfect-scrollbar
      :max="60"
      class="ps-customizer-area scroll-area"> 
      <!-- Skin, RTL, Router Animation -->
      <div class="customizer-section">

        <!-- Skin -->
        <form-group label="Skin" label-for="skin" label-col-sm="4" content-col-sm="8" >
          <b-form-radio-group id="skin-radio-group" v-model="skin" :options="skinOptions" />
        </form-group>
      

        <!-- Skin -->
        <!-- <b-form-group label="Content Width">
          <b-form-radio-group
            id="content-width-radio-group"
            v-model="contentWidth"
            name="content-width"
            :options="contentWidthOptions"
          />
        </b-form-group> -->

        <!-- Router Transition -->
        <form-group label="Transición entre vistas" label-col-md="4" >
          <vue-select v-model="routerTransition" :clearable="false" label="title" :options="routerTransitionOptions"
            :reduce="option => option.value" />
        </form-group>

      </div>
      <!-- /Skin, RTL, Router Animation -->

      <!-- SECTION: Menu -->
      <div class="customizer-section">

        <!-- Layout Type -->
        <form-group label="Menu Layout">
            <b-form-radio-group v-model="layoutType" name="layout-type" :options="layoutTypeOptions" />
        </form-group>
      

        <!-- Collapsible -->
        <div v-if="layoutType === 'vertical'" class="d-flex justify-content-between align-items-center mt-2" >
          <span class="fw-bold">Menú colapsado</span>
          <b-form-checkbox
            v-model="isVerticalMenuCollapsed"
            name="is-vertical-menu-collapsed"
            class="me-0"
            switch
            inline
          />
        </div>

        <!-- Menu Visiblity -->
        <div class="d-flex justify-content-between align-items-center mt-2">
          <span class="fw-bold">Menú oculto</span>
          <b-form-checkbox
            v-model="isNavMenuHidden"
            name="is-menu-visible"
            class="me-0"
            switch
            inline
          />
        </div>

      </div>

      <!-- SECTION: Navbar -->
      <div class="customizer-section">

        <!-- Navbar Color -->
        <form-group label=" Color de la barra de navegación superior"  v-show="layoutType === 'vertical'">
            <div v-for="(color, index) in navbarColors" :key="color" class="p-3 d-inline-block rounded-circle me-2 cursor-pointer"
              :class="[`bg-${color}`, {'border border-light': !index}, {'mark-active': navbarBackgroundColor === color}]"
              @click="navbarBackgroundColor = color" />
        </form-group>
      
        <!-- Navbar Type -->
        <form-group :label="layoutType === 'vertical' ? 'Tipo de barra de navegación' : 'Menu Type'">
            <b-form-radio-group v-model="navbarType" name="navbar-type" :options="navbarTypes" />
        </form-group>
       
      </div>

      <!-- SECTION: Footer -->
      <div class="customizer-section">

        <!-- Footer Type -->
        <form-group  label="Tipo de pie de página" >
          <b-form-radio-group v-model="footerType" name="footer-type" :options="footerTypes" />
        </form-group>
        
      </div>

    </vue-perfect-scrollbar>
  </div>
</template>

<script setup>

import vueSelect from 'vue-select'
import useAppCustomizer from './useAppCustomizer'
import FormGroup from 'components/FormGroup.vue'
const {
  // Vertical Menu
  isVerticalMenuCollapsed,

  // Customizer
  isCustomizerOpen,

  // Skin
  skin,
  skinOptions,

  // Content Width
  contentWidth,
  contentWidthOptions,



  // routerTransition
  routerTransition,
  routerTransitionOptions,

  // Layout Type
  layoutType,
  layoutTypeOptions,

  // NavMenu Hidden
  isNavMenuHidden,

  // Navbar
  navbarColors,
  navbarTypes,
  navbarBackgroundColor,
  navbarType,

  // Footer
  footerTypes,
  footerType,
} = useAppCustomizer()

 if (layoutType.value === 'horizontal') {
      // Remove semi-dark skin option in horizontal layout
      const skinSemiDarkIndex = skinOptions.findIndex(s => s.value === 'semi-dark')

      skinOptions.splice(skinSemiDarkIndex,1)
      // delete skinOptions[skinSemiDarkIndex]

      // Remove menu hidden radio in horizontal layout => As we already have switch for it

      const menuHiddneIndex = navbarTypes.findIndex(t => t.value === 'hidden')
   navbarTypes.splice(menuHiddneIndex, 1)

      // delete navbarTypes[menuHiddneIndex]
  }



</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>

<style lang="scss" scoped>
@import '@core/scss/base/bootstrap-extended/include';
@import '@core/scss/base/components/variables-dark';

.customizer-section {
  padding: 1.5rem;
  border-bottom: 1px solid #ebe9f1;

  .dark-layout & {
    border-color: $theme-dark-border-color;
  }

  #skin-radio-group ::v-deep {
    .custom-control-inline {
      margin-right: 0.7rem;
    }
  }

  .form-group {
    margin-bottom: 1.5rem;
    &:last-of-type {
      margin-bottom: 0;
    }
    ::v-deep legend {
      font-weight: 500;
    }
  }
}

.mark-active {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.ps-customizer-area {
  height: calc(100% - 83px);
}
</style>
