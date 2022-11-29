<script>

import form from './formulario.vue';
import {h,onMounted} from 'vue';

import { useSolicitudNegocioStore } from 'stores/solicitudNegocio';

import {useRouter} from 'vue-router'

export default {
   
   setup(){
      
      const solicitud = useSolicitudNegocioStore();

      const router = useRouter();

      onMounted(() => solicitud.clear())

      return () => h(form,{
            onSave(data,action){

               solicitud.guardar(data).then(({result,solicitud:solic}) => {

                  if(result){
                     toast.success('Se ha  guardado con éxito la solicitud')
                     router.push({ name: 'socio.negocio.solicitudes.edit', params: { id: solic.id}})
                  }else{
                     toast.info('NO se pudo guardar la solicitud')
                  }

               }).catch(e => {
                  
                  console.log(e)

                  if(e.response.status ===422){
                     action.setErrors(e.response.data.errors)
                  }

               })


            }

      });

   }
}
</script>