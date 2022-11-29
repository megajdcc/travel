import {defineStore} from 'pinia'




export const useDashboardStore = defineStore('dashboard' ,{


   state(){
      return{
            staticReservaciones:{
               total:0,
               series: [
                        {
                           name: 'Traffic Rate',
                           data: [150, 200, 125, 225, 200, 250],
                        },

                        {
                           name: 'Traffic Rate',
                           data: [100, 40, 125, 150, 180, 230],
                        },

                     ],
               
            },

            staticBodasTotales:{
               total:0,
               series: [
                        {
                           name: 'Traffic Rate',
                           data: [150, 200, 125, 225, 200, 250],
                        },

                        {
                           name: 'Traffic Rate',
                           data: [100, 40, 125, 150, 180, 230],
                        },

                     ],
               
            },

            staticBodasActivas: {
               total: 0,
               series: [
                  {
                     name: 'Traffic Rate',
                     data: [150, 200, 125, 225, 200, 250],
                  },

                  {
                     name: 'Traffic Rate',
                     data: [100, 40, 125, 150, 180, 230],
                  },

               ],

            },

            tarjetasAgrupadas:{
               ultimaActualizacion:null,
               statisticsItems:[],
            },

            reservasTotalesPorBodaChart:{
               series: [],
               chartOptions: {

                  chart: {
                     zoom: {
                        enabled: false,
                     },
                     toolbar: {
                        show: false,
                     },
                  },

                  markers: {
                     strokeWidth: 7,
                     strokeOpacity: 1,
                     strokeColors: ['#66DA26','#FF1E1E'],
                     colors: ['#66DA26', '#FF1E1E'],
                  },

                  colors: ['#66DA26', '#FF1E1E'],
                  dataLabels: {
                     enabled: false,
                  },
                  stroke: {
                     curve: 'smooth',
                  },
                  grid: {
                     xaxis: {
                        lines: {
                           show: true,
                        },
                     },
                  },
                  tooltip: {
                     custom(data) {
                        return `${'<div class="px-1 py-50"><span>'}${data.series[data.seriesIndex][data.dataPointIndex]
                           } Reservas</span></div>`
                     },
                  },
                  xaxis: {
                     labels: {
                        rotate: -45
                     },
                     categories: [],
               
                  },
                  yaxis: {
                     // opposite: isRtl,
                  },
               },
            },

            habitaciones_contratadas:0,
            habitaciones_confirmadas:0,
            habitaciones_por_confirmar:0,
         habitaciones_solicitadas:0,

      }
   },

   actions:{
      setStaticReservaciones({ total, series }) {
         this.staticReservaciones.total = total;
         this.staticReservaciones.series = series
      },

      setStaticBodasTotales({ total, series }) {
         this.staticBodasTotales.total = total;
         this.staticBodasTotales.series = series
      },

      setStaticBodasActivas({ total }) {
         this.staticBodasActivas.total = total;
      },

      setTarjetasAgrupadas({ ultimaActualizacion, items }) {
         this.tarjetasAgrupadas.ultimaActualizacion = ultimaActualizacion
         this.tarjetasAgrupadas.statisticsItems = items
      },

      setDataReservasTotalesPorBoda({ data, categorias }) {

         this.reservasTotalesPorBodaChart.series = data
         this.reservasTotalesPorBodaChart.chartOptions.xaxis.labels = { rotate: -45 }
         this.reservasTotalesPorBodaChart.chartOptions.xaxis.categories = categorias

      },

      setTotalHabitacionesContratadas(total_habitaciones) {
         this.habitaciones_contratadas = total_habitaciones
      },
      setTotalHabitacionesConfirmadas(total_habitaciones) {
         this.habitaciones_confirmadas = total_habitaciones
      },
      setTotalHabitacionesPorConfirmar(total_habitaciones) {
         this.habitaciones_por_confirmar = total_habitaciones
      },

      setTotalHabitacionesSolicitadas(total_habitaciones) {
         this.habitaciones_solicitadas = total_habitaciones
      },

      cargarDataDashboard() {

         axios.get('/api/get/data/dashboard').then(({ data }) => {

            // let {staticReservaciones} = respon.data;

            this.setStaticReservaciones(data.staticReservaciones)
            this.setStaticBodasTotales(data.staticBodasTotales)
            this.setStaticBodasActivas(data.staticBodasActivas)
            this.setTarjetasAgrupadas(data.tarjetasAgrupadas)
            this.setTotalHabitacionesContratadas(data.habitaciones_contratadas)

            this.setTotalHabitacionesConfirmadas(data.setTotalHabitacionesConfirmadas)
            this.setTotalHabitacionesConfirmadas(data.habitaciones_confirmadas)
            this.setTotalHabitacionesPorConfirmar(data.habitaciones_por_confirmar | 0)

         }).catch(e => {
            console.log(e);

         })


      },
   

   }

})
