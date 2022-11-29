<template>
  <p class="clearfix mb-0 d-flex justify-content-between align-items-center">

    <span class="float-md-left d-block d-md-inline-block">
      COPYRIGHT © {{ new Date().getFullYear() }}
      <b-link  :to="{name:'inicio'}"> TravelPoints </b-link>
      <span class="d-none d-sm-inline-block">,Todos los derechos reservados</span>
    </span>

    <span class=" d-none d-md-block flex-grow-1 text-end">Hecho a mano &amp; con amor
      <font-awesome icon="heart" class="text-danger stroke-current" size="lg" />
    </span>
  </p>
</template>
