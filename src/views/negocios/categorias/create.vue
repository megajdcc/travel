
<script>
import form from './form.vue'
import {h,onMounted} from 'vue'


import { useCategoriaNegocioStore } from 'stores/negocios/categoria'

import {useRouter} from 'vue-router'


export default {
   
   setup() {

      const router = useRouter();
      const categoria = useCategoriaNegocioStore()

      onMounted(() => {
         categoria.clearNegocio()
      })   

      return () => h(form,{
         on:{
            
            save(data,formValidate){


               categoria.guardar(data).then(({result,categoria:categorie}) => {

                  if(result){
                     toast.success('Se Ha registrado con éxito la categoría')
                     router.push({ name: 'negocio.categorias.edit', params: { id: categorie.id}})
                  }else{
                     toast.error('No se pudo registrar la categoría, inténtelo de nuevo mas tarde')
                  }

               }).catch(e => {
                  console.log(e)
                  if(e.response.status === 422){
                     formValidate.setErrors(e.response.data.errors)
                  }
               })

            }

         }
      })
   },
}
</script>