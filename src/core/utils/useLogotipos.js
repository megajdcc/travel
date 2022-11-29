import {computed } from 'vue'

const useLogotipos = () => {


   const logotipo = computed(() => localStorage.getItem('logotipo') || `${axios.getUri()}/storage/logotipoblanco.png`)
   const logotipobg = computed(() => localStorage.getItem('logoblack') || `${axios.getUri()}/storage/logotipo.png`)
   const favicon = computed(() => localStorage.getItem('favicon') || `images/favicons/favicon-57x57.png`)
 
   return {
      logotipo,
      logotipobg,
      favicon
   }

}  

export default useLogotipos;