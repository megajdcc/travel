
<script>

import form from './form.vue'

import { h, onMounted,toRefs,watch} from 'vue'
import { useFaqStore } from 'stores/faq'


export default {

   props:['id'],

   setup(props) {
      const faq = useFaqStore();

      const {id} = toRefs(props)

      const {faqs} = toRefs(faq)

      const cargarForm = () => {
         
         if(!faqs.value.length){

            faq.getFaq(id.value).then(() => {
               faq.capturarFaq(Number(id.value))
            })

         }else{
            faq.capturarFaq(Number(id.value))
         }


      }

      onMounted(() => cargarForm())
      
      watch([id], () => cargarForm())

      return () => h(form, {

         on: {
            save: (data, formValidate) => {

               faq.guardarFaq(data).then(({ result }) => {

                  if (result) {
                     toast.success('Se ha actualizado con éxito la pregunta.')

                  } else {
                     toast.error('No se pudo actualizar la pregunta, inténtelo de nuevo mas tarde')
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