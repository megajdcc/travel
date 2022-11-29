import {useRouter} from 'vue-router'

import {ref,computed, toRefs,onMounted,watch } from 'vue'
import { initialAbility } from '@/libs/acl/config'
import ability from '@/libs/acl/ability'

import { useRootStore } from 'stores/root'
import { useUsuarioStore } from 'stores/usuario'

import * as yup from 'yup'

import { useForm } from 'vee-validate'

export default function useAuth(){

   const rootStore = useRootStore();
   const usuarioStore = useUsuarioStore()
   const router = useRouter();
   
   const { usuario } = toRefs(usuarioStore)

   const formValidate = ref(null)

   const esquema = yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
      remember: yup.boolean().nullable()
   })

   const logout = () => {

      rootStore.cerrarSesion().then(({data}) => {

         localStorage.removeItem('token')
         localStorage.removeItem('habilidades');
         localStorage.removeItem('userData');
         usuarioStore.limpiarUsuario();
         ability.update(initialAbility)
         router.push({ name: 'inicio' })

      }).catch(e => {
         if (e.response.status === 419) {
            router.push({ name: 'inicio' })
         }
         console.log(e)
      })

   }

   const login = (valores,{setErrors}) => {

      return new Promise((resolv,reject) => {

            axios.post('/api/auth/login', valores).then(({ data }) => {

                  axios.defaults.headers.common = { 'Authorization': `bearer ${data.accessToken}` }

                  rootStore.setAuthMessage();
                  usuarioStore.cargarUser(data.usuario)
                  rootStore.setToken(data.accessToken)

                  localStorage.setItem('token', data.accessToken);
                  localStorage.setItem('habilidades', JSON.stringify(data.usuario.habilidades));
                  localStorage.setItem('userData', JSON.stringify(data.usuario));
                  ability.update(JSON.parse(localStorage.getItem('habilidades')));
        
                
                  resolv(data.result)
                  

            }).catch((error) => {
               
 
               if (error.response && error.response.status === 422) {

                  setErrors(error.response.data.errors)
               }


               reject(error)

            })

        
      
      })
   }  

   const csrf = () => {
      
      axios.get('/sanctum/csrf-cookie').then(res => {
         
      })
      

   }

   return {
      logout,
      login,
      formValidate,
      csrf, 
      esquema,
      is_loggin: computed(() => usuarioStore.usuario.id ? true : false)

   };

}
