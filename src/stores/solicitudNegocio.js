
import {defineStore} from 'pinia';

export const useSolicitudNegocioStore = defineStore('solicitudNegocio',{

   state(){
      return {
         solicitud: {
            id: null,
            nombre: '',
            descripcion: '',
            breve: '',
            solicitud_id: '',
            comision: 6,
            tipo_comision: 1,// 1 => Porcentaje, 2 => Monto fijo por persona 
            url: null,
            email: null,
            telefono: null,
            sitio_web: '',
            direccion: '',
            codigo_postal: '',
            ciudad_id: null,
            estado_id: null,
            lat: 10,
            lng: 10,
            logo: null,
            foto: null,
            situacion: 1,// 1 => solicitud enviada, 2 => solicitud regresada para mejorar 3 => solicitd aceptada 4 => solicitud rechazada
            comentario: '',
            usuario_id: null,

            solicitud: null,
            ciudad: null,
            estado: null,
            usuario: null

         },

         solicitudes: [],

      } 
   },

   getters: {

      draft(state) {
         return clone(state.solicitud)
      }

   },

   actions:{

      setSolicitud(solicitud) {

         this.solicitud = solicitud
      },


      setSolicitudes(data) {
         this.solicitudes = data
      },


      clear() {
         this.solicitud = {
            id: null,
            nombre: '',
            descripcion: '',
            breve: '',
            solicitud_id: '',
            comision: 0,
            tipo_comision: 1,// 1 => Porcentaje, 2 => Monto fijo por persona 
            url: null,
            email: null,
            telefono: null,
            sitio_web: '',
            direccion: '',
            codigo_postal: '',
            ciudad_id: null,
            estado_id: null,
            lat: 10,
            lng: 10,
            logo: null,
            foto: null,
            situacion: 1,// 1 => solicitud enviada, 2 => solicitud regresada para mejorar 3 => solicitd aceptada 4 => solicitud rechazada
            comentario: '',
            usuario_id: null,

            solicitud: null,
            ciudad: null,
            estado: null,
            usuario: null
         }
      },


      push(data) {
         this.solicitudes.push(data)
      },

      put(data_id) {
         this.solicitudes.splice(
            this.solicitudes.findIndex(val => val.id === data_id),
            1
         )
      },

      capturar(data_id) {
         let solicitud = this.solicitudes.find(val => val.id === data_id)

         if (solicitud) {
            this.solicitud = solicitud
         }
      },

      update(data) {
         let i = this.solicitudes.findIndex(val => val.id === data.id)

         if (i != -1) {
            this.solicitudes[i] = data

            if (this.solicitud.id === data.id) {
               this.solicitud = data
            }

         }

      },

      fetchData(data) {

         return new Promise((resolve, reject) => {
           
            axios.post(`/api/negocio/solicituds/fetch/data`, data).then(({ data: datos }) => {
               this.setSolicitudes(datos.solicitudes)
               resolve(datos)
            }).catch(e => reject(e))
         })
      },

      guardar(data) {

         return new Promise((resolve, reject) => {
            let formData = new FormData();

            Object.keys(data).forEach(val => {
               formData.append(val, data[val]);
            })

            if (data.id) {

               formData.append("_method", 'put')

               axios.post(`/api/negocio/solicituds/${data.id}`, formData, {
                  headers: {
                     ContentType: "multipart/form-data; boundary=something",
                  }
               }).then(({ data: datos }) => {

                  if (datos.result) {
                     this.update(datos.solicitud)
                  }

                  resolve(datos)

               }).catch(e => reject(e))
                  

            } else {

               axios.post(`/api/negocio/solicituds`, formData, {
                  headers: {
                     ContentType: "multipart/form-data; boundary=something",
                  }
               }).then(({ data: datos }) => {

                  if (datos.result) {
                     this.push(datos.solicitud)
                  }

                  resolve(datos)

               }).catch(e => reject(e))
                 

            }

         })
      },


      eliminar(data_id) {

         return new Promise((resolve, reject) => {

            axios.delete(`/api/negocio/solicituds/${data_id}`).then(({ data }) => {

               if (data.result) {
                  this.put(data_id)
               }

               resolve(data)

            }).catch(e => reject(e))

         })

      },


      async getsolicitud(data_id) {
         return await new Promise((resolve, reject) => {

            axios.get(`/api/negocio/solicituds/${data_id}/get`).then(({ data }) => {

               this.push(data)
               resolve(data)

            }).catch(e => reject(e))
             
         })
      }

   }

})
