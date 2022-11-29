<template>
  <dropdown-item class="dropdown-notification order-2 order-md-1 " menu-class="dropdown-menu-media " lazy right @show="refreshNotificacion()" v-if="usuario.id">
      
      <template #button-content>
        <feather-icon :badge="cantidad" badge-classes="bg-danger" class="text-body" icon="bell" size="24" />
      </template>

        <!-- Header -->
      <template #header>
        
        <div class="dropdown-header d-flex py-1">
          <h4 class="notification-title mb-0 me-auto">
            Notificaciones
          </h4>
          <b-badge pill variant="light-primary">
            {{ cantidad }} sin leer
          </b-badge>
        </div>

        <div class="dropdown-header pb-1 pt-0" v-if="sinleer.length > 0">

          <div class="btn-group btn-group-sm">
            <b-button variant="outline-dark" @click="todoleido()" size="sm">
              Marcar todos como leido
            </b-button>
            
            <b-button variant="outline-dark" v-if="formulario.notificaciones.filter(val => val.seleccionado).length > 0"
              @click="marcarLeido()">
              <font-awesome icon="eye" />
            </b-button>
            
            <b-button variant="outline-dark" v-if="formulario.notificaciones.filter(val => val.seleccionado).length > 0"
              @click="eliminarSeleccionadas()">
              <font-awesome icon="trash" />
            </b-button>
          </div>

        </div>

      </template> 

      <!-- Contenido -->

      <b-tabs content-class="mt-1 " fill pills end nav-class="nav-tabs m-0" >

        <b-tab>
          
          <template #title>
            <strong class="text-dark me-1">Sin leer </strong>
            <b-badge pill variant="primary">
              {{sinleer.length}}
            </b-badge>
          </template>

          <section class="content-notificacion px-1" >

            <b-form-checkbox  inline v-for="(notification,i) in formulario.notificaciones" :key="i"
              v-model="notification.seleccionado" class=" d-flex">
              <b-link>

                <section class="d-flex notificacion-list"  @click="verNotificacion(notification)">
                  <article class="flex-shrink-1 me-1"  v-if="notification.data">
                      <b-avatar v-if="notification.data.usuario" size="32" :src="notification.data.avatar" :text="notification.data.usuario"
                        :variant="notification.data.type" />
                      
                      <b-avatar v-else size="32" :variant="notification.data.type">
                        <font-awesome icon="check"/>
                      </b-avatar>
                  </article>

                  <main class="flex-grow-1">
                      <p class="media-heading mb-0">
                        <span class="fw-bolder" v-if="notification.data">
                          {{ notification.data.titulo }}
                        </span>
                      </p>
                      <small class="notification-text" v-if="notification.data">
                        {{ notification.data.mensaje[0].substring(0,30) }}...(seguir leyendo)
                      </small>

                  </main>
                </section>
               

              </b-link>
            </b-form-checkbox>

          </section>
        </b-tab>

        <b-tab  title-item-class="text-dark">

          <template #title>
            <strong class="me-1 text-dark">Leidos </strong>
            <b-badge pill variant="primary">
              {{leidas.length}}
            </b-badge>
          </template>

          <section style="height:300px; overflow-y:auto">

            <b-link v-for="(notification) in leidas" :key="notification.created_at">

              <section class="d-flex p-1 notificacion-list" @click="verNotificacion(notification)">

                <article class="flex-shrink-1 me-1">
                  <b-avatar v-if="notification.data.usuario" size="32" :src="notification.data.avatar" :text="notification.data.usuario"
                    :variant="notification.data.type" />
                  
                  <b-avatar v-else size="32" :variant="notification.data.type">
                    <font-awesome icon="check" />
                  </b-avatar>
                </article>

                <main class="flex-grow-1 row">

                  <div class="col-12 col-md-8">
                    <p class="mb-0">
                      <span class="fw-bolder">
                        {{ notification.data.titulo }}
                      </span>
                    </p>
                    <small class="notification-text">
                      {{ notification.data.mensaje[0].substring(0,30) }}...(seguir leyendo)
                    </small>
                  </div>
                  
                  <div class="col-12 col-md-4">
                    <b-button-group size="sm" class="btns">
                      <b-button variant="danger" 
                        @click.stop="eliminarNotification(notification.id)">
                        <font-awesome icon="trash" />
                        <!-- <feather-icon icon="Trash2Icon" size="12" /> -->
                      </b-button>
                  
                      <b-button variant="dark" 
                        @click.stop="noshowNotificacion(notification.id)">
                        <font-awesome icon="eye-slash" />

                      </b-button>
                    </b-button-group>
                  </div>

                </main>

              </section>
             
            </b-link>
          </section>

        </b-tab>
      </b-tabs>


  </dropdown-item>

    <modal v-model:visible="showModal" centered header-text-variant="primary" content-class="shadow"  :title="notification.data.titulo" @hide="cerrarNotification">
          <p v-for="(mensaje,i ) in notification.data.mensaje" :key="i">{{ mensaje }}</p>
          
          <template #modal-footer>

            <div class="btn-group d-flex justify-content-start">
          
              <b-button @click="irNotification(notification.data.url)" v-if="notification.data.btn" variant="primary" size="sm">
                {{ notification.data.btnTitle }}
              </b-button>

          
            </div>
          </template>

    </modal>

</template>

<script setup>


import {ref,onMounted, watch,toRefs,computed, onUnmounted} from 'vue';

import { useUsuarioStore } from 'stores/usuario'

import { useNotificacionStore } from 'stores/notificacion'
import { useRootStore } from 'stores/root'
import { useRouter } from 'vue-router'

import modal from 'components/modal.vue'
import DropdownItem from 'components/DropdownItem.vue';

const router = useRouter();
const usuarioStore = useUsuarioStore()

const {usuario} = toRefs(usuarioStore);

const storeNotification = useNotificacionStore();
const root = useRootStore();


let { sinleer, leidas } = toRefs(storeNotification);
let seleccionados = ref([]);

const formulario = ref({
  notificaciones: []
})

const  cargarForm = () => {
  formulario.value.notificaciones = sinleer.value.map(val => {
    return {
      id: val.id,
      seleccionado: false,
      created_at: val.created_at,
      type: val.type,
      data: val.data,
    }
  })
}

let modalNotificacion = ref(null);
const showModal = ref(false)
    
const cargarNotificaciones = (usuario_id) => {
  
  if(usuario_id){
    storeNotification.cargarNotificaciones(usuario_id)
  }
  
}
    
onMounted(() => {
    cargarNotificaciones(usuarioStore.usuario.id)
})

onUnmounted(() => {
  cargarForm()
})
   
const notification = ref({
  id:null,
  created_at:'',
  read_at:null,
  data:{
    titulo:''
  }
});

const verNotificacion = (notificat) => {
  notification.value = notificat
  showModal.value = true
}

const cerrarNotification = () => {

  if(!notification.value.read_at){
    
    storeNotification.marcarLeida({ usuario: usuarioStore.usuario.id, notificacion: notification.value.id }).then(respon => {
      toast.info('Notificación marcada como leida',{position:'bottom-right'});
      cargarNotificaciones(usuarioStore.usuario.id)
    }).catch(e => console.log(e))
  }

}

const irNotification = (url) => {
  
  modalNotificacion.value.hide();

  router.push(url);
}

const refreshNotificacion = () => {

  if(usuarioStore.usuario.id) {
    cargarNotificaciones(usuarioStore.usuario.id)
  } 

}

const showNotificacion = (notification_id) => {

  storeNotification.marcarLeida({ usuario: usuarioStore.usuario.id, notificacion: notification_id }).then(respon => {
    toast.info('Notificación marcada como leida');
    cargarNotificaciones(usuarioStore.usuario.id)
  }).catch(e  => console.log(e))

}

const noshowNotificacion = (notificacion_id) => {

  storeNotification.marcarNoLeida({ usuario: usuario.value.id, notificacion: notificacion_id }).then(respon => {
    if (respon.data.result) {
      toast.info('Se ha pasado a la bandeja de no leidas')
      cargarNotificaciones(usuario.value.id)
    } else {
      toast.info('No se pudo marcar como no leida, inténtelo de nuevo')
    }

  }).catch(e => console.log(e))

} 

const eliminarNotification = (notification_id) => {

  storeNotification.eliminar({ notificacion: notification_id, usuario: usuario.value.id }).then(respon => {
    if (respon.data.result) {

      toast.info('Se ha eliminado con éxito la notificación.')
      cargarNotificaciones(usuario.value.id);
    } else {
      toast.info('No se pudo eliminar la notificación, inténtelo de nuevo mas tarde.')
    }

  }).catch(e => console.log(e))

}

const todoleido = () => {

  storeNotification.todoleido(usuario.value.id).then(respon => {
      if(respon.data.result){
      toast.info('Se ha marcado todo como leido')
      cargarNotificaciones(usuario.value.id)
    }else{
      toast.info('Error en servidor inténtelo de nuevo mas tarde');
    }
  }).catch(e => console.log(e))

}

const marcarLeido = () => {

  storeNotification.marcarSeleccionadosLeidos({
      usuario:usuario.value.id,
    seleccionados:formulario.value.notificaciones.filter(val => val.seleccionado)
  }).then(respon => {
      if(respon.data.result){
      // Notification.info('Los seleccionados se han marcados c')
        cargarNotificaciones(usuario.value.id);
      }else{
        toast.info('La operación no tuvo éxito, inténtelo de nuevo mas tarde.')
      }
  }).catch(e => console.log(e))

}

const eliminarSeleccionadas = () => {
  
  storeNotification.eliminarSeleccionados({
    usuario: usuario.value.id,
    seleccionados: formulario.value.notificaciones.filter(val => val.seleccionado)
  }).then(respon => {

      if(respon.data.result){
        // Notification.info('Los seleccionados se han marcados c')
        cargarNotificaciones(usuario.value.id);
      }else{
        toast.info('La operación no tuvo éxito, inténtelo de nuevo mas tarde.')
      }

  }).catch(e => console.log(e))



}


watch(usuario,(val) => {
  cargarNotificaciones(val.id);
})

watch(sinleer,(val) => {
  cargarForm();
})


const loading = computed(() => root.loading)
const cantidad = computed(() => storeNotification.cantidad)

</script>


<style lang="scss">



.notificacion-list:hover{
  .btns{
    display: flex !important;
  }
  
}

.btns{
  display: none;
}
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}

.content-notificacion{
  height:300px; 
  overflow-y:auto; 
  display:flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap:wrap;

  >div{
    flex:1 1 auto;

    label{
      width:100%;
    }

  }


  a{
    text-decoration:none !important;
  }



}
</style>


