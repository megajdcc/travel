<template>
  <b-nav-item-dropdown class="dropdown-notification me-1" menu-class="dropdown-menu-media" right>

    <template #button-content>
        
      <feather-icon :badge="cantidad" badge-classes="bg-danger" class="text-body" icon="BellIcon" size="21" />
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header w-100" style="width:320px">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">
          Notificaciones
        </h4>
        <b-badge pill variant="light-primary" >
          {{ cantidad }} sin leer
        </b-badge>
      </div>
    </li>

    <!-- Notifications -->
    <vue-perfect-scrollbar :max="60" class="scrollable-container media-list scroll-area" >
      <!-- Account Notification -->
      <b-link v-for="notification in sinleer" :key="notification.subtitle" >
        <section class="d-flex">
          <article class="flex-shrink-1 me-1">
            <b-avatar size="32" :src="notification.avatar" :text="notification.avatar" :variant="notification.type" />
          </article>
          <main class="flex-grow-1">
              <p class="media-heading">
                <span class="fw-bolder">
                  {{ notification.title }}
                </span>
              </p>
              <small class="notification-text">{{ notification.subtitle }}</small>
          </main>
        </section>
       
      </b-link>

      <!-- System Notification Toggler -->
      <!-- <div class="media d-flex align-items-center">
        <h6 class="fw-bolder mr-auto mb-0">
          System Notifications
        </h6>
        <b-form-checkbox
          :checked="true"
          switch
        />
      </div> -->

      <!-- System Notifications -->
      <!-- <b-link
        v-for="notification in systemNotifications"
        :key="notification.subtitle"
      >
        <b-media>
          <template #aside>
            <b-avatar
              size="32"
              :variant="notification.type"
            >
              <feather-icon :icon="notification.icon" />
            </b-avatar>
          </template>
          <p class="media-heading">
            <span class="fw-bolder">
              {{ notification.title }}
            </span>
          </p>
          <small class="notification-text">{{ notification.subtitle }}</small>
        </b-media>
      </b-link> -->
    </vue-perfect-scrollbar>

    <!-- Cart Footer -->
    <li class="dropdown-menu-footer"><b-button
      variant="primary"
      block
    >Leer todas las notificaciones</b-button>
    </li>
  </b-nav-item-dropdown>
</template>

<script setup>

import { computed } from 'vue'
import { useRootStore } from 'stores/root'
import {  useNotificacionStore } from 'stores/notificacion'
import { useUsuarioStore} from 'stores/usuario'



const root = useRootStore();
const notificacion = useNotificacionStore();
const usuarioStore = useUsuarioStore();

const loading = computed(() => root.loading) 
const sinleer = notificacion.sinleer;
const cantidad = notificacion.cantidad;
const usuario = usuarioStore.usuario;

notificacion.cargarNotificaciones();


</script>
