<template>
   <div class="container-fluid">
      <!-- faq search section -->
      <section id="faq-search-filter">
         <b-card no-body class="faq-search"
            :style="{ backgroundImage: `url(${imgBanner})` }">
            <b-card-body class="text-center">
               <h2 class="text-primary">
                  Respondamos algunas preguntas
               </h2>
               <b-card-text class="mb-2">
                  o elige una categoría para encontrar rápidamente la ayuda que necesitas
               </b-card-text>

               <!-- form -->
               <b-form class="faq-search-input">
                  <b-input-group class="input-group-merge">
                     <b-input-group-prepend is-text>
                        <font-awesome icon="search"/>
                     </b-input-group-prepend>
                     <b-form-input id="searchbar" v-model="faqSearchQuery" placeholder="Busca la pregunta" />
                  </b-input-group>
               </b-form>
               <!-- form -->
            </b-card-body>
         </b-card>
      </section>
      <!--/ faq search section -->

      <!-- frequently asked questions tabs pills -->
      <section id="faq-tabs">
         <b-tabs vertical content-class="col-12 col-md-8 col-lg-9" pills
            nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12" nav-class="nav-left">

            <!-- payment tab -->
            <b-tab v-for="(categoria,i) in datos" :key="i" :active="!i">

               <!-- title -->
               <template #title>
                  <!-- <font-awesome :icon="categoria.icono" size="lg" class="me-1" /> -->
                  <span class="fw-bolder">{{ categoria.nombre }}</span>
               </template>
               
               <faq-question-answer :options="categoria" />
            </b-tab>
            <!--/ payment tab -->

            <!-- sitting lady image -->
            <template #tabs-end>
               <b-img fluid :src="img2" class="d-none d-md-block mt-auto" />
            </template>
            <!--/ sitting lady image -->
         </b-tabs>
      </section>
      <!--/ frequently asked questions tabs pills -->

      <!-- contact us -->
      <section class="faq-contact">
         <b-row class="mt-5 pt-75 text-center">
            <b-col cols="12">
               <h2>¿Aún tienes una pregunta?</h2>
               <b-card-text class="mb-3">
                  Si no puede encontrar una pregunta en nuestras preguntas frecuentes, siempre puede contactarnos. ¡Te
                  responderemos en breve!
               </b-card-text>
            </b-col>
            <b-col sm="6">
               <b-card class="shadow-none py-1 faq-contact-card">
                  <b-link href="tel:018004004636" target="_blank" >
                     <font-awesome icon="phone" size="2x" class="mb-1" />
                  </b-link>
                  <h4>01 800 400 INFO (4636), (322) 225 9635.</h4>
                  <span class="text-body">¡Siempre estamos felices de ayudar!</span>
               </b-card>
            </b-col>
            <b-col sm="6">
               <b-card class="shadow-none py-1 faq-contact-card">
                
                     <b-link href="mailto:soporte@infochannel.si" target="_blank">
                        <font-awesome icon="envelope" size="2x" class="mb-1"/>
                     </b-link>
                  <h4>soporte@infochannel.si</h4>
                  <span class="text-body">¡La mejor manera de obtener una respuesta más rápida!</span>
               </b-card>
            </b-col>
         </b-row>
      </section>
      <!--/ contact us -->
   </div>
</template>

<script setup>


import FaqQuestionAnswer from './FaqQuestionAnswer.vue'
import {ref,onMounted,watch,computed} from 'vue'
import {useRootStore} from 'stores/root'
import imgBanner from '@/assets/images/banner/banner.png';
import img2 from '@/assets/images/illustration/faq-illustrations.svg'
import {useFaqStore} from 'stores/faq'

const root = useRootStore();
const faq = useFaqStore();
const datos = ref([])


const faqSearchQuery = ref('')

const cargarForm = () => {

   faq.getCategorias(faqSearchQuery.value).then((data) => {
      datos.value = data
   })


}

onMounted(() => cargarForm())

watch([faqSearchQuery], () => {
   cargarForm();
})

const loading = computed(() => root.loading)

</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>
