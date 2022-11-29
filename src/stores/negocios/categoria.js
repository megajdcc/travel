import {defineStore} from 'pinia'

export const useCategoriaNegocioStore = defineStore('categoriaNegocio',{

   state:() => ({
      categoria: {
         id: null,
         categoria: '',
         descripcion: '',
         imagen: null
      },
      categorias: [],
   }),   

   getters: {

      draft(state) {
         return clone(state.categoria)
      }

   },

   actions:{

      setCategorias(data) {
         this.categorias = data
      },


      clear() {
         this.categoria = {
            id: null,
            categoria: '',
            descripcion: '',
            imagen: null
         }
      },


      push(data) {
         this.categorias.push(data)
      },

      put( data_id) {
         this.categorias.splice(
            this.categorias.findIndex(val => val.id === data_id),
            1
         )
      },

      capturar(data_id) {
         let categoria = this.categorias.find(val => val.id === data_id)

         if (categoria) {
            this.categoria = categoria
         }
      },

      update(data) {
         let i = this.categorias.findIndex(val => val.id === data.id)

         if (i != -1) {
            this.categorias[i] = data

            if (this.categoria.id === data.id) {
               this.categoria = data
            }

         }

      },

      fetchData( data) {

         return new Promise((resolve, reject) => {
            
            axios.post(`/api/negocio/categorias/fetch/data`, data).then(({ data: datos }) => {

               this.setCategorias(datos.categorias)
               resolve(datos)

            }).catch(e => reject(e))
         })
      },

      guardar( data) {


         return new Promise((resolve, reject) => {
            
            let formData = new FormData();

            Object.keys(data).forEach(val => {
               formData.append(val, data[val]);
            })

            if (data.id) {
               formData.append("_method", 'put')

               axios.post(`/api/negocio/categorias/${data.id}`, formData, {
                  headers: {
                     ContentType: "multipart/form-data; boundary=something",
                  }
               }).then(({ data: datos }) => {

                  if (datos.result) {
                     this.update(datos.categoria)
                  }

                  resolve(datos)

               }).catch(e => reject(e))

            } else {
               axios.post(`/api/negocio/categorias`, formData, {
                  headers: {
                     ContentType: "multipart/form-data; boundary=something",
                  }
               }).then(({ data: datos }) => {

                  if (datos.result) {
                     this.push(datos.categoria)
                  }

                  resolve(datos)

               }).catch(e => reject(e))

            }
         })
      },


      eliminar( data_id) {

         return new Promise((resolve, reject) => {
            

            axios.delete(`/api/negocio/categorias/${data_id}`).then(({ data }) => {

               if (data.result) {
                  this.put(data_id)
               }

               resolve(data)

            }).catch(e => reject(e))

         })

      },


      async getCategoria( data_id) {
         return await new Promise((resolve, reject) => {
            axios.get(`/api/negocio/categorias/${data_id}/get`).then(({ data }) => {

               this.push(data)
               resolve(data)

            }).catch(e => reject(e))
              
         })
      },

      async getCategorias() {

         return await new Promise((resolve, reject) => {
            axios.get(`/api/negocio/categorias/get/all`).then(({ data }) => {
               this.setCategorias(data)
               resolve(data)
            }).catch(e => {
               console.log(e)
            })


         })
      }

   }

});
