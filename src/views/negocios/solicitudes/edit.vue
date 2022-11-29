
<script>
import form from 'views/socio/negocio/solicitudes/form.vue'
import { h, onMounted, toRefs, watch } from 'vue'

import { useSolicitudNegocioStore } from 'stores/solicitudNegocio'

import {useRouter} from 'vue-router'

export default {

   props: ['id'],

   setup(props) {

      const solicitud = useSolicitudNegocioStore()
      const router = useRouter()


      const { id } = toRefs(props)

      const { solicitudes } = toRefs(solicitud);

      const cargarForm = () => {

         if (solicitudes.value.length) {
            solicitud.capturar( Number(id.value))
         } else {
            solicitud.getSolicitud(id.value).then(() => {
               solicitud.capturar(Number(id.value))

            })
         }

      }

      onMounted(() => {
         cargarForm()
      })

      watch([id, solicitudes], () => cargarForm())

      return () => h(form, {

         props: {
            titulo: 'Solicitud de afiliación de Negocio',
            subTitulo: "Puedes aceptar,rechazar o puedes regresarla para su modificación",
            admin:true
         },

         on: {

            save: (data, formValidate) => {

               solicitud.guardar(data).then(({ result }) => {

                  if (result) {
                     toast.success('Se ha enviado con éxito la solicitud, le hemos enviado un correo al solicitante.')
                     router.push({ name: 'listar.solicitudes.negocios' })
                  } else {
                     toast.error('No se pudo guardar tu solicitud, inténtelo de nuevo')
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