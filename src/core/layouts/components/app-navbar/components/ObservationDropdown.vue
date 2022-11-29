<template>
  <b-nav-item-dropdown
    class="dropdown-notification "
    menu-class="dropdown-menu-media"
    right
  >
    <template #button-content>
      <feather-icon
        badge-classes="bg-danger"
        class="text-body"
        icon="clipboard"
        size="21"
      />
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">
          Observación
        </h4>

      </div>
    </li>


         <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <Label>Puedes agregar tantas observaciones como desees.</Label>
                <small><strong>Nota</strong></small>
                <br>
                <small class="text-justify">Las Observaciones se registran considerando el módulo en donde te encuentras. <br>Encargate de que tu observación este pensado en que mejoremos el mismo. </small><br>
                <small class="text-justify">
                  SI tu observación no tiene nada que ver con este módulo, lo desacheremos. <br>
                  Atenderemos las observaciones a la brevedad.
                </small>

                <div class="form-group">
                  <label for="comentario">Observación</label>

                  <div class="input-group input-group-sm">

                    
                    <el-input type="textarea" v-model="observacion.comentario" id="comentario" :row="3" class="w-100" placeholder="Ingrese su Observación"></el-input>
                  
                    <div class="invalid-feedback" role="alert" v-if="errors.comentario">
                      <strong v-text="errors.comentario[0]"></strong>
                    </div>

                  </div>
                
                </div>


                <div class="form-group">
                  <label for="adjunto">Adjunte un archivo o un capture (recomendado) | opcional</label>

                  <div class="input-group input-group-sm">
                    <b-form-file v-model="observacion.adjunto" size="sm" ref="imagen"  :state="Boolean(observacion.adjunto)" placeholder="Archivo..."/>
                  
                    <div class="invalid-feedback" role="alert" v-if="errors.adjunto">
                      <strong v-text="errors.adjunto[0]"></strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

    <!-- Cart Footer -->
    <li class="dropdown-menu-footer"><b-button
      variant="primary"
      block
      :disabled="observacion.comentario.length < 15 "
      @click="enviarObservacion"
     
    >Enviar Observación</b-button>
    </li>
  </b-nav-item-dropdown>
</template>

<script setup>


import {ref} from 'vue'
import {useRootStore} from 'stores/root'

import { useUsuarioStore } from 'stores/usuario'


const rootStore = useRootStore();
const usuarioStore = useUsuarioStore();

const loading = rootStore.loading;
const usuario = usuarioStore.usuario;

const observacion = ref({
  id: null,
  modulo: '',
  comentario: '',
  adjunto: null,
  usuario_id: null,
  usuario: null,
  atendido: false
})


</script>

<style lang="scss" scope>
	.text-popover{
		overflow-wrap:normal;
		text-align:center;
		line-height: 15pt;
		font-size:12pt;
	}

	small,label{
		word-break: normal;
	}

</style>
