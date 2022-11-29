


import { useSolicitudNegocioStore } from 'stores/solicitudNegocio'

import useFilterTable from '@core/utils/useFilterTable'

export default function useNegocioSolicitudesList(){
   const solicitud = useSolicitudNegocioStore();

   const tableColumns = [
      {  key:'id',sortable:true,label:"#", stickyColumn:true,  variant:"primary"},
      { key: 'situacion', sortable: true, label: "Estatus"},
      { key: 'created_at', sortable: true, label: "Fecha de solicitud"},
      { key: 'updated_at', sortable: true, label: "Ultima actualización" },

      { key: 'nombre', sortable: true, label: "Negocio" },
      { key: 'usuario_id', sortable: true, label: "Solicitante" },
      { key: 'actions', sortable: true, label: "Actions" },
   ];

   const {
      perPageOptions,
      currentPage,
      perPage,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refTable,
      total,
      dataMeta,
      refetchData,
   } = useFilterTable();


   const fetchData = (ctx,next) => {

      solicitud.fetchData({
         currentPage:currentPage.value,
         sortBy:sortBy.value,
         q:searchQuery.value,
         perPage:perPage.value,
         sortDirDesc:isSortDirDesc.value
      }).then(({total:all,solicitudes}) => {

         total.value = all;
         next(solicitudes)

      }).catch(e => {
         toast.error("Error cargando data")
      })

   }
   
   const eliminar = (id) => {

      solicitud.eliminar(id).then(({result}) => {

         if(result){
            refetchData();
            toast.info('Solicitud eliminada con éxito')
         }else{
            toast.error('La solicitud no se pudo eliminar')
         }
         
      }).catch(e => {
         toast.error('La solicitud no se pudo eliminar')

      })

   }

   return {
      tableColumns,
      perPageOptions,
      currentPage,
      perPage,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refTable,
      total,
      dataMeta,
      refetchData,
      fetchData,
      eliminar
   }

}
