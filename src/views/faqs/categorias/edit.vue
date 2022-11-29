
<script>

import form from './form.vue'

import { h, onMounted,toRefs,watch } from 'vue'
import {useFaqStore} from 'stores/faq'


export default {

   props:['id'],

   setup(props) {

      const faq = useFaqStore();

      const {id} = toRefs(props)

      const { categorias } = toRefs(faq)


      const cargarForm = () => {
         
         if(!categorias.value.length){
            faq.cargarCategoria(id.value).then((data) => {
               faq.capturarCategoria(Number(id.value))
            })
         }else{
            faq.capturarCategoria(Number(id.value))


         }
      }

      onMounted(() => {
         cargarForm()
      })

      watch([id, categorias],() => {
         cargarForm();
      })

      return () => h(form, {

         on: {
            save: (data, formValidate) => {
               faq.guardarCategoria( data).then(({ result }) => {

                  if (result) {
                     toast.success('Se ha actualizado con éxito la categoría.')

                  } else {
                     toast.error('No se pudo actualizar la categoría, inténtelo de nuevo mas tarde')
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
   },
}
</script>