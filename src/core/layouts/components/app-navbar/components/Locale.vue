<template>
  <b-nav-item-dropdown
    id="dropdown-grouped"
    variant="link"
    class="dropdown-language"
    right >
    
    <template #button-content>
      <b-img
        :src="currentLocale.img"
        height="14px"
        width="22px"
        :alt="currentLocale.locale"
      />
      <!-- <span class="ml-50 text-body">{{ currentLocale.name }}</span> -->
    </template>

    <b-dropdown-item v-for="localeObj in locales" :key="localeObj.locale" class="justify-content-center d-flex" >

      <b-img
        :src="localeObj.img"
        height="14px"
        width="22px"
        :alt="localeObj.locale" />

      <span class="ms-1">{{ localeObj.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script setup>

import {computed,ref} from 'vue'
import es from '@/assets/images/flags/es.png'

  const locales = ref([
    {
      locale: 'es',
      img:es,
      name: 'Español',
    },

        // {
        //   locale: 'en',
        //   img: require('@/assets/images/flags/en.png'),
        //   name: 'English',
        // },
  ])

const currentLocale = computed(() => locales.value[0])


</script>
