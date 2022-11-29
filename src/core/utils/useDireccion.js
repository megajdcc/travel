
import { ref, onMounted, watch } from 'vue'

export default function useDireccion() {

   const paises = ref([])
   const ciudades = ref([])
   const estados = ref([])

   const pais_id = ref(null)
   const estado_id = ref(null)


   const cargarPaises = () => {

      axios.get(`/api/get/paises`).then(({ data }) => {

         paises.value = data
      }).catch(e => {
         console.log(e)
      })
      

   }

   const cargarEstados = (pais_id) => {
      axios.get(`/api/get/estados/${pais_id}`).then(({ data }) => {
         estados.value = data
      }).catch(e => {
         console.log(e)
      })
       
   }

   const cargarCiudades = (estado = null) => {
      axios.get(`/api/get/ciudades/${estado}`).then(({ data }) => {
         ciudades.value = data
      }).catch(e => {
         console.log(e)
      })
     
   }

   onMounted(() => {
      cargarPaises()
   })

   watch(pais_id, (val) => {
      cargarEstados(val)
   })

   watch(estado_id, (val) => {
   
      cargarCiudades(val)
   })


   return {
      paises,
      ciudades,
      estados,
      cargarPaises,
      cargarEstados,
      cargarCiudades,
      pais_id,
      estado_id
   }

}