<template>
   <section class="d-flex mb-1 mb-md-0 aling-items-center">
      <article class="flex-shrink-1 me-1">
         <b-card body-class="content-img" @click="refInputEl.$el.click()" style="cursor:pointer">
            <b-img ref="previewEl" rounded :src="usuario.avatar" class="img-perfil" thumbnail v-loading="loading" />
            <span class="img-perfil-hover">Clic para cambiar imagen</span>
         </b-card>
      </article>

      <main clas="flex-grow-1 my-auto">
         <!-- <b-card body-class="content-img d-flex d-md-none text-center justify-content-center d-flex"
            @click="refInputEl.$el.click()" style="cursor:pointer">
            <b-img ref="previewEl" rounded :src="usuario.avatar" class="img-perfil" thumbnail v-loading="loading" />
            <span class="img-perfil-hover">Clic para cambiar imagen</span>
         </b-card> -->
         
         <h1><strong> {{ ` ${usuario.nombre ? usuario.nombre +' ' +usuario.apellido : usuario.username}` }}</strong>
         </h1>
         <strong>{{ usuario.direccion ? usuario.direccion : 'Dirección sin definir' }}</strong>
         <hr>
         <h2><strong> Tp {{ currency(usuario.tps) }}</strong></h2>
         <b-button @click="() => router.push({name:'tienda'})" variant="primary" size="sm">
            <font-awesome icon="cart-shopping" />
            Ir a tienda
         </b-button>


      
         <input-file ref="refInputEl" accept="image/*" @input="cargarImagen"  hidden />

      </main>

   </section>

</template>
<script setup>



import { ref, computed } from 'vue'
import { useRootStore } from '../../stores/root';
import { useUsuarioStore } from '../../stores/usuario';
import InputFile from 'components/InputFile.vue'
import {currency} from '@core/utils/utils';
import {useRouter} from 'vue-router'

const router = useRouter();
const root = useRootStore();
const usuarioStore = useUsuarioStore()

const { usuario }  = defineProps(['usuario'])
const previewEl = ref(null)
const profileFile = ref('')
const refInputEl = ref(null)

const cargarImagen = (file) => {

   let form = new FormData();

   form.append('filepond', file);

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

const loading =  computed(() => root.loading)

</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables/variables';

.content-img {
   // background: white;
   border-radius: 10px;
   // border: 3px dotted rgba($color: #e4dada85, $alpha: 1.0);
   position: relative;

   .img-perfil {
      width: 220px;
      height: auto;
      vertical-align: middle;
   }

   .img-perfil-hover {
      background-color: rgba(255, 255, 255, 0.75);
      bottom: 20px;
      color: #363636;
      left: 15px;
      padding: 8px 0px;
      position: absolute;
      text-align: center;
      right: 15px;
      opacity: 0;
      transition: 0.15s linear;
   }

   &:hover>.img-perfil-hover {
      opacity: 1 !important;
   }

}
</style>
