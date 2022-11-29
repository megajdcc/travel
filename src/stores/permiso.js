import { clone } from 'lodash'
import {defineStore } from 'pinia'
import {useRootStore} from './root'

export const usePermisoStore = defineStore('permiso',{

   state() {
      return {
         permiso: {
            id: null,
            nombre: '',
         },
         permisos: [],
      }
   },

   getters:{

		draft : (state) => clone(state.permiso),

		getPermissionUser:(state) => {
			
			return (RolPermiso) => {


				return state.permisos.map(val => {

					let actions = null;

					if(RolPermiso.permissions){
						const rolPermissions = RolPermiso.permissions.find(va => va.id == val.id);

						actions = rolPermissions ? JSON.parse(rolPermissions.pivot.actions) : null;
					}

					return {
						module:val.nombre,
						read:actions ? actions.find(v => v == 'read') ? true : false : false,
						write: actions ? actions.find(v => v == 'write') ? true : false : false,
						update: actions ? actions.find(v => v == 'update') ? true : false : false,
						delete: actions ? actions.find(v => v == 'delete') ? true : false : false,
					}

				})
			}

		}

	},


   actions:{
      setPermiso(permiso) {
         this.permiso = permiso

      },

      setPermisos(permisos) {

         this.permisos = permisos

      },


      clearPermiso() {

         this.permiso = {
            id: null,
            nombre: '',
         }

      },

      capturarPermiso(id_permiso) {
         this.permiso = this.permisos.find((permiso) => permiso.id === id_permiso);
      },


      putPermiso(id_permiso) {
         this.permisos.splice(this.permisos.findIndex((permiso) => permiso.id == id_permiso), 1);
      },

      pushPermiso(permiso) {
         var permis = this.permisos.find((permis) => permis.id == permiso.id);

         if (permis) {
            this.permisos.forEach((permis, i) => {
               if (permis.id == permiso.id) {
                  this.permisos[i] = permiso
               }
            })
         } else {

            this.permisos.push(permiso);
         }

      },

      cargarPermisos(){

         const root = useRootStore();
         
         root.toogleLoading();


			axios.get('/api/cargar/permisos').then(({data}) => {

            this.setPermisos(data)


			}).catch(e => {

				console.log(e);
			}).then(() => {
            root.toogleLoading();
			})


		},

		guardarPermiso(data){

         const root = useRootStore();


			return new Promise((resolve, reject) => {
				
            root.toogleLoading();

				if (this.permiso.id) {
					axios.put('/api/permisos/' + this.permiso.id, data).then(({data}) => {

						if(data.result){
                     this.pushPermiso(data.permiso)
						}
						resolve(data)

					}).catch(e => reject(e))
					.then(() => {
                  root.toogleLoading();

					});

				} else {
					
					axios.post('/api/permisos', data).then(({data}) => {

						if(data.result){
                     this.pushPermiso(data.permiso)
						}

						resolve(data)

					}).catch(e => reject(e))

					.then(() => {
                  root.toogleLoading();
					})


				}
			})
		
		},

		async eliminarPermiso(id_permiso){

			return new Promise((resolve, reject) => {

				axios.delete('/api/permisos/' + id_permiso).then(({data}) => {
					if(data.result){
                  this.putPermiso(id_permiso)
					}

					resolve(data)
				}).catch(e => reject(e))
				.then(() => {
					
				})

			})
		},

		fetchData(data) {

			return new Promise((resolve, reject) => {

				axios.post(`/api/fetch/permisos`, data).then(({ data }) => {
               this.setPermisos(data.permisos)
					resolve(data)
				}).catch(e => reject(e))

			})

		},


		getPermiso(id_permiso) {

			return new Promise((resolve, reject) => {
				axios.get(`/api/permisos/${id_permiso}/get`).then(({ data }) => {
               this.pushPermiso(data)
					resolve(data)
				}).catch(e => reject(e))
			})

		}






   }



})