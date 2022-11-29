<template>
   <b-row class="mx-0" v-if="publicacionesRecientes.length">
      <b-col cols="12" class="py-2 px-0">
         <b-container :fluid="windowWidth <= 762 ? true : false">
            <h2 class="text-center fw-bolder">Publicaciones del Blog Recientes</h2>
            <small class="text-justify">Ultimos 3 meses</small>
            <b-row>
               <b-col cols="12">
                  <swiper class="swiper-centered-slides p-1" :options="swiperOptions">
                     <!-- slides -->
                     <swiper-slide v-for="(publicacion,index) in publicacionesRecientes" :key="index"
                        class="rounded swiper-shadow">
                     
                        
                        <div class="d-flex align-items-center">
                           
                           <article class="flex-shrink-0">
                              <b-link :to="{ name: 'blog.public.show', params: { slug: publicacion.slug } }">
                                 <b-img :src="`${$uri}/storage/blog-banner/${publicacion.banner}`" :alt="publicacion.titulo"
                                    width="100" rounded height="70" />
                              </b-link>
                           </article>

                           <main class="flex-grow-1 ms-1">
                              <h6 class="blog-recent-post-title">
                                 <b-link :to="{ name: 'blog.public.show', params: { slug: publicacion.slug } }" class="text-body-heading">
                                    {{ publicacion.titulo }}
                                 </b-link>
                              </h6>
                              <small class="text-muted mb-0">
                                 {{ publicacion.created_at }}
                              </small>
                           </main>
                           
                        </div>
                       
                     </swiper-slide>
   
                  </swiper>
               </b-col>
   
            </b-row>
         </b-container>
      </b-col>
   </b-row>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import useContenidoList from 'views/paginas/useContenidoList.js'

import {computed,ref} from 'vue'


import { useAppStore } from 'stores/app'

const appStore = useAppStore();


const {
   publicacionesRecientes,
} = useContenidoList();


const swiperOptions = ref({
   speed: 600,
   // parallax: true,
   slidesPerView: '2',
   // centeredSlides: true,
   spaceBetween: 30,
   // effect: 'coverflow',
   // grabCursor: true,
   // coverflowEffect: {
   //    rotate: 50,
   //    stretch: 0,
   //    depth: 100,
   //    modifier: 1,
   //    slideShadows: true,
   // },

   autoplay: {
      delay: 6000,
      disableOnInteraction: false
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   breakpoints: {
      1024: {
         slidesPerView: 3,
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
   }
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // }
})


const windowWidth = computed(() => appStore.windowWidth)

</script>

