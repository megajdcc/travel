import {defineStore} from 'pinia'
import * as yup from 'yup'

export const useUsuarioStore = defineStore('usuario',{

   state: () => ({

      usuario: {
         username: null,
         id: null,
         nombre: null,
         apellido: null,
         telefono: '',
         bio: '',
         website: '',
         fecha_nacimiento: '',
         genero: 1, // 1 Masculino, 2 => femenino
         codigo_postal: null,
         activo: true, // true or false
         imagen: '',
         direccion: '',
         email: '',
         password: '',
         lenguaje: 1,
         rol: {},
         rol_id: null,
         avatar: '',
         lenguaje: 'es',
         is_whatsapp: false,
         twitter: '',
         facebook: '',
         instagram: '',
         avatar: null,
         ultimo_login: null,
         ciudad_id: null,
         ciudad: null,
         codigo_referidor: null,
         referidos: [],
         referidor: [],
         tps: null,
         roles:[]


      },

      user: {
         username: null,
         id: null,
         nombre: null,
         apellido: null,
         telefono: '',
         bio: '',
         website: '',
         fecha_nacimiento: '',
         genero: 1,
         codigo_postal: null,
         activo: true,
         imagen: '',
         direccion: '',
         email: '',
         password: '',
         lenguaje: 1,
         rol: {},
         rol_id: null,
         avatar: '',
         lenguaje: 'es',
         is_whatsapp: false,
         twitter: '',
         facebook: '',
         instagram: '',
         avatar: null,
         ultimo_login: null,
         ciudad_id: null,
         ciudad: null,
         codigo_referidor: null,
         referidos: [],
         referidor: [],
         tps: null,
         roles:[]

      },


      usuarios: [],

    




   }),

   getters: {

      draft:(state) => clone(state.user),
      draftUsuario:(state) => clone(state.usuario),

      conPermiso: (state) => {
         return (permiso) => {

            if (state.usuario) {
               return (state.usuario.roles[0].permissions.find((permission) => permission.name == permiso))
            }

            return false;

         }
      },


      getUsuarios: (state) => {
         return (rol) => {
            return state.usuarios.filter(user => {
               let i = user.roles.findIndex((val) => val.name == rol)
               if (i > 0) {
                  return true;
               } else {
                  return false;
               }

            });
         }
      },


      getUsuario: (state) => {
         return (id) => {
            return state.usuarios.find(user => user.id == id);
         }
      },

      getListado: (state) => (users_id) => state.usuarios.filter((val) => (users_id.map(va => va.user_id).includes(val.id))),

      isRol(state) {
         return (rol) => {

            let role = state.usuario.roles.find((val) => val.name == rol);
            return (role != undefined);

         }
      },


      getFullName: (state) => `${state.usuario.nombre} ${state.usuario.apellido}`,

      avatar: (state) => state.usuario.avatar,

      getCoordinadoresHotel: (state) => {

         return (rol) => {

            return state.usuarios.filter(val => val.rol.nombre == rol)

         }

      },

      getFilterUsers: (state) => {
         return (roles_name) => {


            let result = state.usuarios.filter(val => {
               return (roles_name.find(value => value == val.rol.nombre) != undefined) ? true : false
            });

            return result.map(val => {
               return { label: val.nombre, value: val.id, id: val.id, email: val.email };
            })
         }
      }



   },


   actions:{

      cargarUser(data){
         this.usuario = data
      },

      setTelefono( numero) {

         this.usuario.telefono = numero
      },


      setUsuarios( usuarios) {
         this.usuarios = usuarios;
      },

      pushUsuario( usuario) {
         this.usuarios.push(usuario);
      },

      capturarUsuario( id_usuario) {
         this.user = this.usuarios.find((user) => user.id == id_usuario)
      },

      clearUsuario() {
         this.user = {
            username: null,
            id: null,
            nombre: null,
            apellido: null,
            telefono: '',
            bio: '',
            website: '',
            fecha_nacimiento: '',
            genero: 1,
            codigo_postal: null,
            activo: true,
            imagen: '',
            direccion: '',
            email: '',
            password: '',
            lenguaje: 1,
            rol: {},
            rol_id: null,
            avatar: '',
            lenguaje: 'es',
            is_whatsapp: false,
            twitter: '',
            facebook: '',
            instagram: '',
            avatar: null,
            ultimo_login: null,
            ciudad_id: null,
            ciudad: null,
            codigo_referidor: null,
            referidos: [],
            referidor: [],
            tps: null,
            roles:[],
         }
      },


      updateUsuario( data) {

         var i = this.usuarios.findIndex((user) => user.id == data.id);

         if (i != -1) {
            this.usuarios[i] = data;
            this.user = data;
         }

      },



      update(data) {

         var i = this.usuarios.findIndex((user) => user.id == data.id);

         if (i != -1) {
            this.usuarios[i] = data;
         }
      },

      updateAvatar(avatar) {
         this.usuario.avatar = avatar;
         this.updatePerfil(this.usuario)
      },

      actualizarAvatarDeUsuario( avatar) {
         let user = this.usuarios.find(val => val.id == this.user.id)

         if (user != undefined) {
            user.avatar = avatar
         }

      },


      updatePerfil(data) {
         this.usuario = data
         localStorage.setItem('userData', JSON.stringify(data));
      },

      limpiarUsuario() {

         this.usuario = {
            id: null,
            username: null,
            nombre: null,
            apellido: null,
            telefono: '',
            bio: '',
            website: '',
            fecha_nacimiento: '',
            genero: 1, 
            codigo_postal: null,
            activo: true,
            imagen: '',
            direccion: '',
            email: '',
            password: '',
            lenguaje: 1,
            rol: {},
            rol_id: null,
            avatar: '',
            lenguaje: 'es',
            is_whatsapp: false,
            twitter: '',
            facebook: '',
            instagram: '',
            avatar: null,
            ultimo_login: null,
            ciudad_id: null,
            ciudad: null,
            codigo_referidor: null,
            referidos: [],
            referidor: [],
            tps: null,
         }

      },



      cargarUsuarios() {
         var result = false;

         axios.get('/api/usuarios/all').then(respon => {
            
            result = true;
            this.setUsuarios(respon.data)

         }).catch(e => {
            console.log(e)
         })

         return result;
      },

      async cargarUsuario() {

         let options = {
            'headers': {
               'WWW-Authenticate': 'Bearer', 'Authorization': localStorage.getItem('token')
            }
         }
         return await axios.get('/api/auth/user', null, options);

      },

      async guardar(data) {

         return new Promise((resolve, reject) => {

            if (this.user.id) {

               axios.put(`/api/usuarios/` + this.user.id, data).then(({ data: datos }) => {

                  if (datos.result) {
                     this.update(datos.usuario)
                  }
                  resolve(datos)

               }).catch(e => reject(e))



            } else {

               axios.post('/api/usuarios', data).then(({ data: datos }) => {

                  if (datos.result) {
                     this.pushUsuario(datos.usuario)

                  }
                  resolve(datos)

               }).catch(e => reject(e))

            }

         })


      },

       guardarUsuario(draft) {

         return new Promise((resolve, reject) => {
            
            axios.put(`/api/perfil/update/usuario/` + this.usuario.id, draft).then(({data}) => {
               this.updatePerfil(data.usuario)
               resolve(data)
            }).catch(e => reject(e))

         })
        
      },

      cambiarContrasena(data) {
         return new Promise((resolve, reject) => {
            axios.put(`/api/cambiar/contrasena/usuario/${this.usuario.id}`, data).then(({data}) => {
               resolve(data)
            }).catch(e => reject(e))


         })
        
      },

      async eliminar(data) {
         return await axios.delete(`/api/usuarios/${data}`);
      },

      async updateAvatarUser(data) {
         return await axios.post(`/api/usuario/${this.user.id}/update/avatar`, data, {
            headers: {
               'Content-Type': 'multipart/form-data; boundary=something'
            }
         })
      },

      fetchUsers(searchQuery) {

         return new Promise((resolve, reject) => {

            axios.post('/api/fetch/usuarios', searchQuery)
               .then(response => resolve(response))
               .catch(error => reject(error))

         });

      },

      fetchMovimientos(searchQuery) {

         return new Promise((resolve, reject) => {

            axios.post('/api/billetera/listar/movimientos', searchQuery)
               .then(response => resolve(response))
               .catch(error => reject(error))

         });
      },

      fetchUsuario(id_usuario) {
         return new Promise((resolve, reject) => {

            axios.get(`/api/usuarios/${id_usuario}/get`).then(({ data }) => {
               resolve(data)
            }).catch(e => reject(e))

         })
      },

   
      cargarEmpleadosCompanias(entrega_id) {
         return new Promise((resolve, reject) => {


            axios.get(`/api/usuarios/get/empleados/entrega/${entrega_id}`).then(({ data }) => {

               this.setUsuarios(data)
               resolve(data)

            }).catch(e => reject(e))

         })
      },


      async desactivarCuenta(data) {
         return await new Promise((resolve, reject) => {

            axios.post(`/api/desactivar/usuario`, data).then(({ data: datos }) => {

               if(datos.result){
                  this.usuario.activo = false;
                  this.updatePerfil(this.usuario);
               }
              

               resolve(datos)

            }).catch(e => reject(e))
         })
      },

      async crearLinkReferido(data) {
         return await new Promise((resolve, reject) => {
            axios.put(`/api/usuarios/${data.id}/crear/link/referidor`, data).then(({ data: datos }) => {
               this.updatePerfil(datos.usuario)
               resolve(datos)
            }).catch(e => reject(e))


         })
      },

      async verificarCodigoReferido(codigo) {
         return await new Promise((resolve, reject) => {
            axios.get(`/api/usuarios/verificar/codigo/${codigo}`).then(({ data }) => {
               resolve(data)
            }).catch(e => reject(e))
         })
      },

      async nuevoUsuario(data) {

         return await new Promise((resolve, reject) => {

            axios.post('/api/auth/nuevo/usuario', data).then(({ data: datos }) => {
               resolve(datos)
            }).catch(e => {
               reject(e)
            })

         })

      },
      
      misReferidos( data) {
         return new Promise((resolve, reject) => {
            axios.post('/api/usuario/perfil/referidos', data).then(({ data: datos }) => {
               resolve(datos)
            }).catch(e => reject(e))
         })
         
      }	
   }

})