
<script>

import form from './form.vue'

import {h,onMounted} from 'vue'


import {useFaqStore} from 'stores/faq'

import {useRouter} from 'vue-router'


export default {

   setup() {

      const faq = useFaqStore();
      const router = useRouter();

      onMounted(() => {
         faq.clearFaq();
      })

      return () => h(form,{

         on:{
           save:(data, formValidate) => {
               faq.guardarFaq( data).then(({ result, faq:fa }) => {

                     if (result) {
                        toast.success('Se ha creado con éxito la pregunta.')
                        router.push({ name: 'edit.faq', params: { id: formulario.id } })

                     } else {
                        toast.error('No se pudo registrar la pregunta, inténtelo de nuevo mas tarde')
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