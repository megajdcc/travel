import { defineStore } from 'pinia'

export const useFaqStore = defineStore('faq',{

   state(){
      return {
         faq: {
            id: null,
            pregunta: '',
            respuesta: '',
            categoria_id: null,
            usuario_id: null,
            categoria: null,
            usuario: null
         },

         faqs: [],

         categoria: {
            id: null,
            nombre: '',
            icono: '',
         },

         categorias: []
      }

   },

   getters:{

      draft(state) {
         return clone(state.faq)
      }
   },

   actions:{

      setFaqs(data) {
         this.faqs = data
      },

      clearFaq() {
         this.faq = {
            id: null,
            pregunta: '',
            respuesta: '',
            categoria_id: null,
            usuario_id: null,
            categoria: null,
            usuario: null
         }
      },

      capturarFaq(faq_id) {

         let faq = this.faqs.find(val => val.id === faq_id)

         if (faq) {
            this.faq = faq
         }

      },

      updateFaq(faq) {

         let i = this.faqs.findIndex(val => val.id === faq.id)

         if (i != -1) {
            this.faqs[i] = faq

            if (this.faq.id === faq.id) {
               this.faq = faq
            }
         }

      },


      pushFaq(data) {
         this.faqs.push(data)
      },

      putFaq(faq_id) {
         this.faqs.splice(
            this.faqs.findIndex(val => val.id === faq_id),
            1
         )
      },


      // Categorias

      setCategorias(data) {
         this.categorias = data
      },

      clearCategoria() {
         this.categoria = {
            id: null,
            nombre: '',
            icono: '',
         }
      },

      capturarCategoria(categoria_id) {

         let categoria = this.categorias.find(val => val.id === categoria_id)

         if (categoria) {
            this.categoria = categoria
         }

      },

      updateCategoria(categoria) {

         let i = this.categorias.findIndex(val => val.id === categoria.id)

         if (i != -1) {
            this.categorias[i] = categoria

            if (this.categoria.id === categoria.id) {
               this.categoria = categoria
            }
         }

      },


      pushCategoria(data) {
         this.categorias.push(data)
      },

      putCategoria(categoria_id) {
         this.categorias.splice(
            this.categorias.findIndex(val => val.id === categoria_id),
            1
         )
      }, 

      fetchFaqs(data){
         return new Promise((resolve, reject) => {


            axios.post('/api/faqs/fetch',data).then(({data:datos}) => {
               
               this.setFaqs(datos.faqs)
               resolve(datos)
            }).catch(e => reject(e))

         })
      },

      fetchCategorias( data) {
         return new Promise((resolve, reject) => {

            axios.post('/api/faqs/categorias/fetch', data).then(({ data: datos }) => {
               resolve(datos)
               this.setCategorias(datos.categorias)
            }).catch(e => reject(e))


         })
      },

      guardarFaq(data){
         
         return new Promise((resolve, reject) => {
            if(data.id){

               axios.put(`/api/faqs/${data.id}`,data).then(({data:datos}) => {
                  this.updateFaq(datos.faq)
                  resolve(datos)
               }).catch(e => reject(e))
             

            }else{
               axios.post(`/api/faqs`, data).then(({ data: datos }) => {
                  this.pushFaq(datos.faq)
                  resolve(datos)
               }).catch(e => reject(e))
                  
            }

         })

      },


      guardarCategoria( data) {
         return new Promise((resolve, reject) => {
            if (data.id) {

               axios.put(`/api/faqs/categorias/${data.id}`, data).then(({ data: datos }) => {
                  this.updateCategoria(datos.categoria)
                  resolve(datos)
               }).catch(e => reject(e))
                 

            } else {
               axios.post(`/api/faqs/categorias`, data).then(({ data: datos }) => {
                  this.pushCategoria(datos.categoria)
                  resolve(datos)
               }).catch(e => reject(e))
                  
            }

         })
      },

      eliminarFaq(data_id){

         return new Promise((resolve, reject) => {
            axios.delete(`/api/faqs/${data_id}`).then(({data:datos}) => {
               if(datos.result){
                  this.putFaq(data_id)
                  resolve(datos)
               }
            }).catch(e => {
               reject(e)
            })
          

         })
      },

      eliminarCategoria( data_id) {

         return new Promise((resolve, reject) => {
            axios.delete(`/api/faqs/categorias/${data_id}`).then(({ data: datos }) => {
               if (datos.result) {
                  this.putCategoria(data_id)
                  resolve(datos)
               }
            }).catch(e => {
               reject(e)
            })
              

         })
      },

      async cargarCategorias(){

         return await new Promise((resolve, reject) => {

            
            axios.get('/api/faqs/categorias/get/all').then(({data}) => {
               this.setCategorias(data)
               resolve(data)
            }).catch(e => reject(e))
          

         })
      },

      async cargarCategoria(categoria_id) {

         return await new Promise((resolve, reject) => {


            axios.get(`/api/faqs/categorias/${categoria_id}/get`).then(({ data }) => {
               this.pushCategoria(data)
               resolve(data)
            }).catch(e => reject(e))
             

         })
      },

      async getFaq(faq_id){

         return await new Promise((resolve, reject) => {
            axios.get(`/api/faqs/${faq_id}/get`).then(({data}) => {
               resolve(data)
               this.pushFaq(data)
            }).catch(e => reject(e))

         })
      },

      async getCategorias(search){

         return await new Promise((resolve, reject) => {
            axios.post('/api/cargar/categorias',{q:search}).then(({data}) => {
               resolve(data)
            }).catch(e => reject(e))
         })
      }

   }

})