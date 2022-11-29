
<script>
import form from './form.vue'
import { h, onMounted,toRefs,watch } from 'vue'
import { useCategoriaNegocioStore } from 'stores/negocios/categoria'


export default {

   props:['id'],

   setup(props) {
      const {id} = toRefs(props)
      const categoria = useCategoriaNegocioStore()

      const {categorias} = toRefs(categoria)

      const cargarForm = () => {
         
         if(!categorias.value.length){
            categoria.getCategoria(id.value).then((data) => {
               categoria.capturar(Number(id.value))
            })

         }else{
            categoria.capturar(Number(id.value))
         }

      }

      onMounted(() => cargarForm())

      watch([id,categorias],() => cargarForm())


      return () => h(form, {
         on: {

            save(data, formValidate) {

               categoria.guardar(data).then(({ result }) => {

                  if (result) {
                     toast.success('Se ha actualizado con éxito la categoría')
                  } else {
                     toast.error('No se pudo actualizar la categoría, inténtelo de nuevo mas tarde')
                  }

               }).catch(e => {
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