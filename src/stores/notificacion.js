import {defineStore} from 'pinia'

export const useNotificacionStore = defineStore('notificacion',{

   state() {
      return {
         notificacion: {},
         todas: [],
         leidas: [],
         sinleer: [],
      }

   },

   getters: {

      cantidad:(state) => state.sinleer.length 
   },

   actions:{

      setNotificacion(data) {

         this.notificacion = data;
      },


      setNotificaciones({ leidas, sinleer, todas }) {

         this.todas = todas;
         this.sinleer = sinleer;
         this.leidas = leidas;

      },

      pushLeida(notificacion) {
         var index = this.sinleer.findIndex(noti => noti.id == notificacion.id);
         this.sinleer.splice(index, 1);

         this.leidas.push(notificacion);
      },

      pushSinleer(notificacion) {

         var index = this.leidas.findIndex(noti => noti.id == notificacion.id);

         this.leidas.splice(index, 1);

         this.sinleer.push(notificacion);
      },

      pushNotificacion(notificacion) {
         this.todas.push(notificacion);
      },

      cargarNotificaciones(usuario) {

         axios.get(`/api/notificaciones/${usuario}`).then(respon => {
            this.setNotificaciones({ leidas: respon.data.leidas, sinleer: respon.data.sinleer, todas: respon.data.notificaciones })
         }).catch(e => {
            console.log(e);
         })

      },


      async marcarLeida({ usuario, notificacion }) {
         return await axios.get(`/api/notificaciones/markread/${notificacion}/usuario/${usuario}`);
      },

      async eliminar({ notificacion, usuario }) {
         return await axios.delete(`/api/notificaciones/${notificacion}/usuario/${usuario}`);
      },

      async marcarNoLeida({ usuario, notificacion }) {
         return await axios.get(`/api/notificaciones/marknoread/${notificacion}/usuario/${usuario}`);
      },

      async todoleido( usuario) {
         return await axios.get(`/api/notificaciones/todoleido/usuario/${usuario}`);
      },


      async marcarSeleccionadosLeidos( { usuario, seleccionados }) {
         return await axios.post(`/api/notificaciones/seleccionados/leidos/usuario/${usuario}`, { seleccionados: seleccionados });
      },


      async eliminarSeleccionados({ usuario, seleccionados }) {
         return await axios.post(`/api/notificaciones/seleccionados/eliminar/usuario/${usuario}`, { seleccionados: seleccionados });
      }




   }


})