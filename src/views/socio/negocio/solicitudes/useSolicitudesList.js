
import useFilterTable from '@core/utils/useFilterTable'
import {useSolicitudNegocioStore} from 'stores/solicitudNegocio';

export default function useSolicitudesList(){

   const solicitud = useSolicitudNegocioStore();

   const tableColumns = [
      {key : 'id',label         : 'Nro Solicitud', sortable        : true},
      { key: 'situacion', label : 'Estatus', sortable              : true },
      { key: 'nombre', label    : 'Negocio', sortable              : true },
      { key: 'created_at', label: 'Fecha de la solicitud', sortable: true },
      { key: 'updated_at', label : 'Ultimo cambio', sortable        : true },
      { key: 'actions', label   : 'Actions', sortable              : false, sortBy: 'id' },
   ]

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

   const fetchData = (ctnx,next) => {

      solicitud.fetchData({
         sortBy: sortBy.value,
         currentPage: currentPage.value,
         perPage: perPage.value,
         q: searchQuery.value,
         sortDirDesc: isSortDirDesc,
      }).then(({total:t,solicitudes}) => {

         total.value = t
         next(solicitudes)

      }).catch(() => {

         toast.error("Problemas al cargar la data");

      })


      
   }


   return {
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
      tableColumns,
      fetchData
   }

}
