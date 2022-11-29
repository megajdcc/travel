import {defineStore} from 'pinia'

export const useHomeStore = defineStore('home',{

   state() {
      return {
         socios: 0,
         clientes: 0,
         contenidos_publicados: 0,
         usuarios: 0,
         servicios: 0,
         sucursales: 0,
         clientes: 0,
         contenido_mensuales: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
               // {
               //    label: 'Solicitadas',
               //    backgroundColor: '#a03bb3',
               //    data: [40, 39, 10, 40, 39, 80, 40, 100, 80, 65, 36, 50]
               // },
               // {
               //    label: 'Entregadas',
               //    backgroundColor: '#4ab30d',
               //    data: [31, 2, 7, 40, 13, 20, 40, 30, 80, 65, 36, 78]
               // },
               // {
               //    label: 'Sin entregar',
               //    backgroundColor: '#dd8108',
               //    data: [40, 39, 10, 30, 23, 55, 89, 95, 80, 65, 36, 47]
               // }
            ]
         }

      }
   },


   actions:{
      setData(data) {
         const { socios, clientes, contenidos_publicados, usuarios, servicios, sucursales, contenido_mensuales } = data
         this.socios = socios
         this.clientes = clientes
         this.contenidos_publicados = contenidos_publicados
         this.usuarios = usuarios,
         this.servicios = servicios
         this.sucursales = sucursales
         this.contenido_mensuales.datasets = contenido_mensuales
      },

      getData() {

         return new Promise((resolve, reject) => {

            axios.get(`/api/home/get/data`).then(({ data }) => {
               this.setData(data)
               resolve(data);
            }).catch(e => reject(e))


         })
      }

   }

})