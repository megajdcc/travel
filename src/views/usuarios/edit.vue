<script>

import form from './form.vue';

import { h, onMounted,watch,computed,toRefs } from 'vue'

import {useUsuarioStore} from 'stores/usuario'

export default {

   props:['id'],

   setup(props) {

      const usuarioStore = useUsuarioStore()

      const {id} = toRefs(props)

      const usuarios = computed(() => usuarioStore.usuarios)


      const cargarForm = () => {
         
         if(!usuarios.value.length){

            usuarioStore.getUsuario(id.value).then((data) => {
               usuarioStore.capturarUsuari(Number(id.value))
            })

         }else{
            usuarioStore.capturarUsuario(Number(id.value))
         
         }


      }

      onMounted(() => {
         cargarForm()
      })

      watch([id],() => {
         cargarForm()
      })

      return () => h(form, {

         on: {

            save: (data, formValidate) => {

               usuarioStore.guardar(data).then(({ result, usuario }) => {

                  if (result) {
                     toast.success('Se ha actualizado con éxito al usuario...')
                  } else {
                     toast.error('No se pudo actualizar al usuario, inténtelo de nuevo mas tarde')

                  }

               }).catch(e => {
                  console.log(e)
                  if (e.response.status === 422) {
                     formValidate.setErrors(e.response.data.errors)
                  }
               })

            }

         }
      })

   }

}
</script>