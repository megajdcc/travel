<script>

import form from './form.vue';
import { h, onMounted, onActivated, toRefs, watch } from 'vue'
import { usePermisoStore } from 'stores/permiso'

export default {

   props: ['id'],

   setup(props) {
      const permiso = usePermisoStore();

      const { id } = toRefs(props)
      const { permisos } = toRefs(permiso)

      const cargarForm = () => {
         if (!permisos.value.length) {
            permiso.getPermiso(id.value).then((data) => {
               permiso.capturarPermiso(Number(id.value))
            })
         } else {
            permiso.capturarPermiso(Number(id.value))

         }

      }

      onActivated(() => cargarForm())
      onMounted(() => cargarForm())

      watch([id, permisos], () => {
         cargarForm()
      })


      return () => h(form, {
         on: {
            save: (data, formValidate) => {
               permiso.guardarPermiso( data).then(({ result, message }) => {

                  if (result) {
                     toast.success(message)
                  } else {
                     toast.error(message)
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
   }

}

</script>