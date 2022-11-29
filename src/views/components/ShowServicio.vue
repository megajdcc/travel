<template>
   <b-card v-if="servicio.id">
      <section class="header-banner mb-1" :style="{
         'background-image':`url(${imgBanner})`
      }">
         <section class="content-banner">
            <h2>{{ servicio.titulo }}</h2>
            <strong>{{ servicio.subtitulo }}</strong>
            <cite>{{ servicio.breve }}</cite>
         </section>

      </section>

      <section class="d-flex">
         <article class="flex-shrink-1 me-1">
            <b-avatar href="javascript:void(0)" size="36" v-if="servicio.usuario" :src="servicio.usuario.avatar"  />
         </article>
         
         <main class="flex-grow-1">
            <small class="text-muted me-1">Por</small>
            <small>
               <b-link class="text-body">{{ `${servicio.usuario.nombre} ${servicio.usuario.apellido}`}}</b-link>
            </small>
            <span class="text-muted mx-1">|</span>
            <small class="text-muted">{{ getFecha(servicio.created_at) }}</small>
         </main>
      </section>
    
      <div class="my-1 py-25">
         <b-link>
            <b-badge pill class="me-1" :style="{
               'background-color':colorRand()
            }">
               {{ servicio.categoria.nombre }}
            </b-badge>
         </b-link>
      </div>
      <div class="blog-content" v-html="servicio.contenido" />

   </b-card>
</template>

<script>


import { computed, toRefs } from 'vue'
import { colorRand,getFecha } from '@core/utils/utils'
import {useRootStore} from 'stores/root'

export default {


   props: ['servicio', 'imgBanner'],

   model: {
      prop: 'servicio',
      event: 'update:servicio'
   },

   setup(props) {
      const root = useRootStore();

      return {
         loading: computed(() => root.loading),
         colorRand,
         getFecha
      }
   }
}

</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-blog.scss';

.card-img-top {
   flex-shrink: 0;
   width: 100%;
   max-height: 350px;
   object-fit: cover;
}

.header-banner {
   height: 300px;
   width: 100%;
   background-position: center center;
   background-size: cover;
   background-repeat: no-repeat;
   position: relative;
   background-attachment: fixed;
   border-radius: 10px;

   &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #00000078;
      z-index: 1;
   }

   .content-banner {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      h2,
      strong {
         z-index: 10;
         text-transform: uppercase;
         font-weight: bolder;
         color: white;
      }

      cite {
         z-index: 10;
         color: white;
      }
   }

}
</style>