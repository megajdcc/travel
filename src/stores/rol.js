import { clone } from 'lodash'
import {defineStore} from 'pinia'

export const useRolStore = defineStore('rol',{

   state() {
      return {
         rol: {
            nombre: null,
            id: null,
            permisos: [],
         },
         roles: [],

      }
   },

   getters: {

      draft:(state) => clone(state.rol),

      getRols(state){
         return state.roles.map(val => {
            return {
               label: val.nombre,
               value: val.id,
               id: val.id
            }
         })
      }

   },



   actions:{
      setRol(data) {
         this.rol = {
            nombre: data.nombre,
            id: data.id,
            permisos: data.permisos.map(val => {

               const actions = JSON.parse(val.pivot.actions);

               return {
                  module: val.nombre,
                  read: actions.find(va => va == 'read') ? true : false,
                  write: actions.find(va => va == 'write') ? true : false,
                  update: actions.find(va => va == 'update') ? true : false,
                  delete: actions.find(va => va == 'delete') ? true : false,

               };

            }),
            permissions: data.permisos
         }
      },

      clearRol() {
         this.rol = {
            nombre: null,
            id: null,
            permisos: [],
         }

      },

      capturarRol(id_rol) {
         this.rol = this.roles.find((rol) => rol.id == id_rol);
      },

      setRoles(data) {

         this.roles = [];
         data.forEach((rol, i) => {
            this.roles.push({
               nombre: rol.nombre,
               id: rol.id,
               permisos: rol.permisos.map(val => {
                  const actions = JSON.parse(val.pivot.actions);

                  return {
                     module: val.nombre,
                     read: actions.find(va => va == 'read') ? true : false,
                     write: actions.find(va => va == 'write') ? true : false,
                     update: actions.find(va => va == 'update') ? true : false,
                     delete: actions.find(va => va == 'delete') ? true : false,

                  };
               }),
               permissions: rol.permisos
            })
         })


      },

      pushRol(role) {

         if (this.roles.find((rol) => rol.id == role.id)) {

            this.roles.forEach((rol, i) => {
               if (rol.id == role.id) {
                  this.roles[i] = {
                     nombre: role.name,
                     id: role.id,
                     permisos: role.permisos.map(val => {
                        const actions = JSON.parse(val.pivot.actions);

                        return {
                           module: val.nombre,
                           read: actions.find(va => va == 'read') ? true : false,
                           write: actions.find(va => va == 'write') ? true : false,
                           update: actions.find(va => va == 'update') ? true : false,
                           delete: actions.find(va => va == 'delete') ? true : false,

                        };
                     }),
                     permissions: role.permisos
                  }
               }

            })

         } else {

            this.roles.push({
               nombre: role.nombre,
               id: role.id,
               permisos: role.permisos.map(val => {
                  const actions = JSON.parse(val.pivot.actions);

                  return {
                     module: val.nombre,
                     read: actions.find(va => va == 'read') ? true : false,
                     write: actions.find(va => va == 'write') ? true : false,
                     update: actions.find(va => va == 'update') ? true : false,
                     delete: actions.find(va => va == 'delete') ? true : false,

                  };
               }),
               permissions: role.permisos
            });
         }

      },

      putRol(id_rol) {

         var index = this.roles.findIndex((rol) => rol.id == id_rol);

         if (index) {
            this.roles.splice(index, 1);
         }

      },

      updateRol(data) {

         let i = this.roles.findIndex(val => val.id == data.id)

         if (i != -1) {
            this.roles[i] = data

            if (this.rol.id == data.id) {
               this.rol = data
            }
         }

      },


      cargarRoles() {


         axios.get('/api/listar/roles').then(respon => {

            this.setRoles(respon.data)

         }).catch(e => {
            console.log(e)
         }).then(() => {
           
         });


      },

      fetchData(data) {

         return new Promise((resolve, reject) => {

            axios.post(`/api/fetch/roles`, data).then(({ data }) => {
               this.setRoles(data.roles)
               resolve(data)
            }).catch(e => reject(e))
               
         })

      },

      guardarRol(data) {

         return new Promise((resolve, reject) => {
            if (this.rol.id) {

               axios.put(`/api/roles/${this.rol.id}`, data).then(({ data: datos }) => {

                  if (datos.result) {
                     this.pushRol(datos.rol)
                  }
                  resolve(datos)

               }).catch(e => reject(e))

            } else {
               
               axios.post('/api/roles', data).then(({ data: datos }) => {

                  if (datos.result) {
                     this.pushRol(datos.rol)
                  }
                  resolve(datos)

               }).catch(e => reject(e))

            }
         })

      },


      eliminarRol(id_rol) {
         return new Promise((resolve, reject) => {

            axios.delete(`/api/roles/delete/${id_rol}`).then(({ data }) => {
               resolve(data)
               this.putRol(id_rol)

            }).catch(e => reject(e))

         })
      },


      getRol(id_rol) {

         return new Promise((resolve, reject) => {
            axios.get(`/api/roles/${id_rol}/get`).then(({ data }) => {
               this.pushRol(data)
               resolve(data)
            }).catch(e => reject(e))
         })

      }


   }

})