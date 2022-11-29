import { defineStore } from "pinia";

export const useChatStore = defineStore('chat',{

   state() {
      return {
         companeros: [],
         chat: {},
         usuario: {},
         chats: [],

         redaccion: {
            mensaje: '',
            usuario_id: null,
            chat_id: null,
         }


      }
   },


   getters: {

      conectados: (state) => {

         return (usuario) => {

            return state.companeros.filter((companero) => (companero.conectado && companero.id != usuario.id)).length;

         }

      },


      companeros: (state) => {
         return (usuario) => {
            return state.companeros.filter((companero) => companero.id != usuario.id);
         }

      },


   },


   actions:{

      setCompaneros(data) {
         this.companeros = data
      },

      unirme( usuario_id) {
         
         this.redaccion.usuario_id = usuario_id;
         this.redaccion.chat_id = this.chat.id;

      },

      limpiarRedaccion() {
         this.redaccion.mensaje = '';
      },


      companeroDesconectado(usuario) {

         this.companeros.forEach((companero, i) => {

            if (companero.id === usuario.id) {
               this.companeros[i].conectado = false;
            }

         });
      },

      companeroConectado(id) {

         this.companeros.forEach((companero, i) => {

            if(companero.id === id){
               this.companeros[i].conectado = true;
            }

         });

      },

      setChats(data) {
         this.chats = data;
      },

      pushChat(chat) {
         this.chats.push(chat);
      },


      setChat(chat){
         this.chat = chat
      },

      cerrarChat() {
         this.chat = {}
      },

      pushMensaje(mensaje) {
         this.chat.mensajes.push(mensaje);
      },

      AgregarMensaje({ chat_id, mensaje }) {

         this.chats.forEach((chat, i) => {
            if (chat.id == chat_id) {
               this.chats[i].mensajes.push(mensaje);
            }
         })

      },

      cargarCompaneros(){


			axios.get(`/chat/get/companeros`).then(respon => {
            this.setCompaneros(respon.data)
			}).catch(e => {
				console.log(e);
			})
		},


		capturarChat({user_actual, user_related}){

			if(this.chats.length > 0 ){

				var chat = 	this.chats.find((chat) => {

						var user_1  = chat.usuarios.find((user) => user.id == user_actual);
						var user_2  = chat.usuarios.find((user) => user.id == user_related);
						return (user_1 && user_2)

					})

				if(chat){
               this.setChat(chat)
				}else{
               this.crearChat({ user_actual: user_actual, user_related: user_related })
				}


			}else{
            this.crearChat({ user_actual: user_actual, user_related: user_related })
			}

		},

		crearChat({user_actual, user_related} ){
				axios.post(`/chat/create/${user_actual}`,{user_related:user_related}).then(respon => {
					
					if(respon.data.success){
						// commit('pushChat',respon.data.chat);
						// commit('setChat',respon.data.chat);

					}else{
						return false;
					}

				}).catch(e => {

					console.log(e);

				});
		},

		enviarMensaje(mensaje){


				axios.put(`/chat/${state.chat.id}/send/mensaje`,mensaje).then(respon => {

					if(respon.data.success){
                  this.pushMensaje(respon.data.mensaje)
                  this.limpiarRedaccion();
					}

				}).catch(e => {
					console.log(e);
				});
		}




   }

})