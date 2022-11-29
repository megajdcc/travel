import axios from 'axios'

import useAuth from '@core/utils/useAuth.js';
import {useRouter} from 'vue-router';

// import ToastificationContent from '@core/components/toastification/ToastificationContent';

const router = useRouter();

const axiosIns = axios.create({
   baseURL: 'https://api.travelpoints.es',
   withCredentials: true,
   timeout: 0,
   headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: "application/json" }
})



if (localStorage.getItem('token')) {
   let token = localStorage.getItem('token');
   axiosIns.defaults.headers.common = { 'Authorization': `bearer ${token}` }
}



axiosIns.interceptors.request.use((config) => {
   // root.toggleLoading();
   //   store.commit('toggleLoading')

   return config;

}, (error) => {
   // root.toggleLoading();

   return Promise.reject(error);
})

// Intercetamos las respuesta para cambiar el estado de carga (Loading ) de la app en false

axiosIns.interceptors.response.use((response) => {
   // root.toggleLoading();

   return Promise.resolve(response)
}, (error) => {
   // root.toggleLoading();

   return Promise.reject(error);
})






axiosIns.interceptors.response.use(undefined, (error) => {

   const response = error.response;

   if (response.status === 503) {
      router.push({ name: 'show.mantenimiento' })
   }

   if (response.status === 401) {

      if (response.data.message == "Unauthenticated.") {

         localStorage.removeItem('token');
         localStorage.removeItem('userData');
         localStorage.removeItem('habilidades');

         if (window.location.pathname != '/login') {
            useAuth().logout();
            router.push({ name: 'login' })
         }

      } else if (response.data.message == 'Unauthorized') {

         localStorage.removeItem('token');
         localStorage.removeItem('userData');
         localStorage.removeItem('habilidades');

         if (window.location.pathname != '/login') {
            useAuth().logout();
            router.push({ name: 'login' })
         }

      }


      if (response.data.message) {

         // toast({
         //    component: ToastificationContent,
         //    props: {
         //       title: response.data.message,
         //       icon: 'AlertCircleIcon'
         //    }
         // }, {
         //    position: 'bottom-left'
         // })

      }


      // store.commit('toggleLoading',false)

   }

   if (response.status === 404) {
      // location.reload()
      // router.push({ name: 'error-404' })
   }

   if (response.status === 419) {


      useAuth().logout();
      // router.push({name:'login'})
      // location.reload()
   }





   return Promise.reject(error);

});

window.axios = axiosIns;

export default axiosIns
