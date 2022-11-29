<script>

import form from './formulario.vue';
import { h, onMounted, toRefs,watch } from 'vue';

import { useSolicitudNegocioStore } from 'stores/solicitudNegocio';

export default {

   props:['id'],

   setup(props ) {

      const {id} = toRefs(props)

      const solicitud = useSolicitudNegocioStore();

      const { solicitudes } = toRefs(solicitud)

      const cargarForm = () => {

         if(!solicitudes.value.length){
            solicitud.getsolicitud(id.value).then((data) => {
               solicitud.setSolicitud(data)
            } )
         }else{
            solicitud.capturar(id.value)
         }

      }

      watch([id,solicitudes],() => cargarForm())

   

      onMounted(() => cargarForm())


      return () => h(form, {
         onSave(data, action) {

            solicitud.guardar(data).then(({ result, solicitud }) => {

               if (result) {
                  toast.success('Se ha  guardado con éxito la solicitud')

               } else {
                  toast.info('NO se pudo guardar la solicitud')
               }

            }).catch(e => {

               if (e.response.status === 422) {
                  action.setErrors(e.response.data.errors)
               }

            })


         }

      });

   }
}
</script>