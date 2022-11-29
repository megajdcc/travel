<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-button @click="toggleVerticalMenuActive()" class="bg-transparent p-0" variant="transparent">
          <font-awesome icon="bars" @click.stop="toggleVerticalMenuActive" size="2x" :color="colorBars" />
        </b-button>
      </li>
    </ul>


    <b-navbar-nav class="nav align-items-center ms-auto d-none d-sm-flex d-lg-none" style="">
      <!-- <search-bar /> -->
    </b-navbar-nav>

    <!-- Left Col -->
    <b-navbar-nav class="nav align-items-center d-none d-lg-flex flex-grow-1 justify-content-end" style="">
      <!-- <search-bar /> -->
    </b-navbar-nav>

    <div class="bookmark-wrapper align-items-center flex-lg-grow-0 flex-grow-1 d-none d-lg-flex justify-content-end">
      <!-- <bookmarks /> -->
    </div>

    <!-- Right Col -->
    <b-navbar-nav class="nav align-items-center ms-auto">
      <locale />
      <dark-Toggler class="d-none d-lg-block" />
      <!-- <search-bar /> -->
      <!-- <cart-dropdown /> -->
      <Notificacion />
      <!-- <observation-dropdown class="d-none d-sm-flex"/> -->
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script setup>

// import Bookmarks from './components/Bookmarks.vue'
import Locale from './components/Locale.vue'
import DarkToggler from './components/DarkToggler.vue'
// import SearchBar from './components/SearchBar.vue'
// import CartDropdown from './components/CartDropdown.vue'
import Notificacion from '@/components/notifications.vue'
// import ObservationDropdown from './components/ObservationDropdown.vue'
import UserDropdown from './components/UserDropdown.vue'

import useAppConfig from '@core/app-config/useAppConfig.js'

import {computed} from 'vue'


const colorBars = computed(() => skin.value == 'dark' ? 'white' : '#6e6b7b')
const {skin} = useAppConfig();

const props = defineProps({
  toggleVerticalMenuActive: {
    type: Function,
    default: () => { },
  },
})


</script>
