<script>

import form from './form.vue';
import { h, onMounted, onActivated,toRefs,watch } from 'vue'
import { useRolStore } from 'stores/rol';


export default {

   props:['id'],

   setup(props) {

      const rol = useRolStore();

      const {id} = toRefs(props)
      const {roles} = toRefs(rol)

      const cargarForm = () => {
            if(!roles.value.length){
               rol.getRol(id.value).then((data) => {
                  rol.capturarRol(Number(id.value))
               })

            }else{
               rol.capturarRol(Number(id.value))


            }

      }
      
      onActivated(() => cargarForm())
      onMounted(() => cargarForm())

      watch([id, roles], () => {
         cargarForm()
      })


      return () => h(form, {
         on: {
            save: (data, formValidate) => {
               rol.guardarRol(data).then(({ result, message, rol }) => {

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