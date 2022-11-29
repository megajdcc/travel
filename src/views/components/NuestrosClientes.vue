<template>
   <b-row class="mx-0" style="background: linear-gradient(0deg,#1b191a,#053844 100%) " v-if="nuestrosClientes.length">
      <b-col cols="12" class="py-2 px-0">
         <b-container :fluid="windowWidth <= 762 ? true : false">
            <h2 class="text-center fw-bolder text-italic">Nuestros Clientes</h2>

            <swiper class="swiper-coverflow  mt-2 swiper-autoplay" :options="swiperOptions">
               <!-- slides -->
               <swiper-slide v-for="({nombre,logotipo,url},index) in nuestrosClientes" :key="index">


                  <b-link :href="url" target="_blank" :title="nombre" v-b-tooltip:hover.v-primary>
                     <b-img :src="logotipo" :alt="nombre" fluid />
                  </b-link>

               </swiper-slide>

               <div slot="pagination" class="swiper-pagination" />

            </swiper>
         </b-container>
      </b-col>
   </b-row>
</template>

<script setup>


import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import useContenidoList from 'views/paginas/useContenidoList.js'

import { computed, ref } from 'vue'

import { useAppStore } from 'stores/app'

const appStore = useAppStore();

const {
   nuestrosClientes,
} = useContenidoList();


const swiperOptions = ref({
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },

   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },

   pagination: {
      el: '.swiper-pagination',
   },

   breakpoints: {
      1024: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      640: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      320: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
   },

})
const windowWidth = computed(() => appStore.windowWidth)

</script>

