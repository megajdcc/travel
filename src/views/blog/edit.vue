<script>

import { onMounted, h,watch,toRefs } from 'vue'
import { useContenidoStore } from 'stores/contenido'

import form from './form.vue'

export default {

   props:['id'],

   setup(props) {

      const {id} = toRefs(props)
      const contenido = useContenidoStore();


      const cargarForm = () => {
         
         if(!contenido.contenidos.value.length){
            contenido.fetch(Number(id.value)).then((data) => {

            })

         }else{
            contenido.capturar(Number(id.value))
         }

      }

      onMounted(() => cargarForm())

      watch([id], () => {
         cargarForm()
      })

      return () => h(form, {


         on: {
            save: (data, formValidate) => {

               contenido.guardar(data).then(({ result, contenido:content }) => {

                  if (result) {
                     toast.info('Se actualizado con éxito el contenido del blog')
                     contenido.update(content)
                  } else {
                     toast.error('No se pudo registrar el contenido, inténtelo de nuevo')
                  }

               }).catch(e => {
                  if (e.response.status === 422) {
                     formValidate.setErrors(e.response.data.errors)
                  } else {
                     toast.error('No se pudo registrar el contenido, inténtelo de nuevo mas tarde...')
                  }
               })

            }

         }

      })

   }

}
</script>