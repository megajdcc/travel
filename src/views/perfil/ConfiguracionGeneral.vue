<template>
  <b-card>

    <!-- media -->
    <section class="d-flex">
      <article class="flex-shrink-1">
        <b-link>
          <b-img ref="previewEl" rounded :src="usuario.avatar" height="80" />
        </b-link>
      </article>

      <main class="flex-grow-1 ms-1">
        <!-- upload button -->
        <b-button variant="primary" size="sm" class="mb-75 me-1" @click="$refs.refInputEl.$el.click()">
          Cargar
        </b-button>
        <b-form-file ref="refInputEl" v-model="profileFile" accept="image/*" :hidden="true" plain @input="cargarImagen" />
        <!--/ upload button -->
        <!--/ reset -->
        <b-card-text>Solo se permiten imagen del tipo JPG, GIF o PNG. Max tamaño de 800kB</b-card-text>
      </main>
      
    </section>
   
    <!--/ media -->

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="6">
          <b-form-group
            label="Nombre"
            label-for="cuenta-nombre"
          >
            <b-form-input
              v-model="formulario.nombre"
              placeholder="Nombre"
              name="nombre"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="Apellido"
            label-for="cuenta-apellido"
          >
            <b-form-input
              v-model="formulario.apellido"
              name="apellido"
              placeholder="Apellido"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="E-mail" label-for="account-e-mail" >
            <b-form-input
              v-model="usuario.email"
              name="formulario.email"
              placeholder="Email"
            />

          </b-form-group>
        </b-col>
       

        <!-- alert -->
        <b-col
          cols="12"
          class="mt-75"
        >
          <!-- <b-alert
            show
            variant="warning"
            class="mb-50"
          >
            <h4 class="alert-heading">
              Your email is not confirmed. Please check your inbox.
            </h4>
            <div class="alert-body">
              <b-link class="alert-link">
                Resend confirmation
              </b-link>
            </div>
          </b-alert> -->
        </b-col>
        <!--/ alert -->

        <b-col cols="12">


          <div class="btn-group btn-group-sm">
              <b-button variant="primary" class="mt-2 me-1" @click="guardar" v-loading="loading">
                Guardar cambios
              </b-button>
              <b-button type="button" variant="info" @click.prevent="resetForm">Limpiar</b-button>
          </div>
        
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script setup>


import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref,computed,toRefs,onMounted } from 'vue'
import { useRootStore } from 'stores/root'
import { useUsuarioStore } from 'stores/usuario'


const refInputEl = ref(null)
const previewEl = ref(null)
const rootStore = useRootStore();
const usuarioStore = useUsuarioStore();


const profileFile = ref(null)

const formulario = ref({
  id: null,
  nombre: '',
  apellido: '',
  telefono: '',
  fecha_nacimiento: '',
  imagen: '',
  direccion: '',
  email: '',
  password: '',
  rol: null,
  avatar: '',
  is_dueno: false

})


const { usuario } = toRefs(usuarioStore)

const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl)

onMounted(() => {
  formulario.value = clone(usuario.value)

})

const cargarImagen = (file) => {

  let form = new FormData();

  form.append('filepond', profileFile.value);
  axios.post('api/upload/avatar', form, {
    headers: {
      'Content-Type': 'multipart/form-data; boundary=something'
    }
  }).then(respon => {
    usuarioStore.updateAvatar(respon.data)

  }).catch(e => {
    console.log(e)
  })



}

const guardar = () => {


  usuarioStore.guardarUsuario(formulario.valur).then(({ data }) => {

    if (data.result) {
      usuarioStore.updatePerfil(data.usuario)
    } else {

    }

  }).catch(e => {
    console.log(e)
  })
}

const resetForm = () => {
  formulario.value = clone(usuario.value)
}

const loading = computed(() => rootStore.loading)

</script>
