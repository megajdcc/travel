<template>
  <b-card no-body>
    <b-card-header class="pb-1">
      <h5>
        Filtro
      </h5>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col cols="12" md="4" class="mb-md-0 mb-2" >
          <label>Rol de usuario</label>
          <v-select
            :dir="appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="roleFilter"
            :options="roleOptions"
            class="w-100"
            :reduce="val => val.id"
            @input="(val) => $emit('update:roleFilter', val)" />
        </b-col>

      </b-row>
    </b-card-body>
  </b-card>
</template>

<script setup>

import vSelect from 'vue-select'

import {useAppConfigStore} from 'stores/appConfig';

const appConfig = useAppConfigStore();

const props = defineProps({
  roleFilter: {
    type: Number,
    required:false
  },
  roleOptions: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits(['update:roleFilter'])

</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
