<script>

import form from './form.vue';

import { h,onMounted } from 'vue'

import {useUsuarioStore} from 'stores/usuario'

import {useRouter} from 'vue-router'



export default {
   
   setup(){


      const usuarioStore  = useUsuarioStore();
      const router = useRouter();

   
      onMounted(() => usuarioStore.clearUsuario())

      return () => h(form, {
         
         on:{
            
            save:(data,formValidate) => {


               usuarioStore.guardar(data).then(({result,usuario}) => {

                  if(result){
                     toast.success('Se ha registrado al usuario con éxito...')
                     usuarioStore.pushUsuario(usuario)
                     router.push({name:'edit.usuario',params:{id:usuario.id}})
                  }else{
                     toast.error('No se pudo registrar al usuario, inténtelo de nuevo mas tarde')

                  }

               }).catch( e => {
                  console.log(e)
                  if(e.response.status === 422){
                     formValidate.setErrors(e.response.data.errors)
                  }
               })
           
            }

         }
      })

   }

}
</script>