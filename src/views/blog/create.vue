<script>

import {onMounted,h} from 'vue'

import { useRouter } from 'vue-router'

import { useContenidoStore } from 'stores/contenido'
import form from './form.vue'


export default {
   
   setup() {
      const contenido = useContenidoStore();
      const router = useRouter();

      onMounted(() => {
         contenido.clear();
      })

      return () => h(form,{


         on:{
            save:(data,formValidate) => {
               contenido.guardar(data).then(({result,contenido:content}) => {

                  if(result){
                     toast.info('Se registrado con éxito el contenido del blog, sin embargo está pendiente de publicación')
                     contenido.push(content)

                     router.push({name:'edit.blog',params:{id:contenido.id}})
                  }else{
                     toast.error('No se pudo registrar el contenido, inténtelo de nuevo')
                  }

               }).catch(e => {
                  
                  if(e.response.status === 422){
                     formValidate.setErrors(e.response.data.errors)
                  }else{
                     toast.error('No se pudo registrar el contenido, inténtelo de nuevo mas tarde...')
                  }

                 
               })

            }

         }

      })

   }

}
</script>