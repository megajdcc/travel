<template>
  <b-card
    no-body
    class="card-statistics"
  >
    <b-card-header>
      <b-card-title>Resultado de Bodas Activas</b-card-title>
      
      <b-card-text class="me-1 mb-0">
        Actualizado {{ getFecha(tarjetasAgrupadas.ultimaActualizacion) }}
      </b-card-text>
    
    </b-card-header>
    <b-card-body class="statistics-body">
      <b-row>
        <b-col
          v-for="item in tarjetasAgrupadas.statisticsItems"
          :key="item.id"
          md="3"
          sm="6"
          class="mb-2 mb-md-0"
          :class="item.customClass"
        >
          <b-media no-body>
            <b-media-aside

              class="me-1"
            >
              <b-avatar
                size="48"
                :variant="item.color"
              >
                <feather-icon
                  size="24"
                  :icon="item.icon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h5 class="fw-bolder mb-0">
                {{ item.title }}
              </h5>
              <b-card-text class="font-small-3 mb-0">
                {{ item.subtitle }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script setup>

import {ref,computed} from 'vue'

import { getFecha } from '@core/utils/utils';
import { useDashboardStore } from 'stores/dashboard'

const  dashboard = useDashboardStore();

const statisticsItems = ref([
  {
    icon: 'chart-line',
    color: 'light-primary',
    title: '230k',
    subtitle: 'Sales',
    customClass: 'mb-2 mb-xl-0',
  },
  {
    icon: 'users',
    color: 'light-info',
    title: '8.549k',
    subtitle: 'Customers',
    customClass: 'mb-2 mb-xl-0',
  },
  {
    icon: 'box',
    color: 'light-danger',
    title: '1.423k',
    subtitle: 'Products',
    customClass: 'mb-2 mb-sm-0',
  },
  {
    icon: 'dollar-sign',
    color: 'light-success',
    title: '$9745',
    subtitle: 'Revenue',
    customClass: '',
  },
])

const tarjetasAgrupadas = computed(() => dashboard.tarjetasAgrupadas)


</script>
