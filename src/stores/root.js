import {defineStore} from 'pinia'

export const useRootStore = defineStore('root',{

   state:() => ({
      errors: {},
      loading: false,
      token: null,
      canales: [],
      auth: {
         message: null
      }
   }),

   actions: {

      async cerrarSesion() {
         return await axios.get('/api/auth/logout', null, {
            headers: {
               'WWW-Authenticate': 'Bearer', 'Authorization': (this.token) ? this.token : localStorage.getItem('accessToken')
            }
         });

      },


      cerrarApp() {
         this.usuario = null
      },

      toggleLoading(bol = null) {
         this.loading = (bol != null) ? bol : !this.loading
      },



      setError(data) {
         if (typeof data === 'string') {
            this.errors.message = data;
         } else {
            this.errors = data;
         }
      },

      clearErrors() {

         this.errors = {
            carta: {}
         }

      },
      setAuthMessage(data) {
         this.auth.message = data;

      },


      setToken(token) {
         this.token = token
      },

      pushCanal(canal) {
         this.canales.push(canal)
      }

   },

});
