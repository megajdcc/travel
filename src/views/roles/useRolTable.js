
import {ref,watch} from 'vue'

import useFilterTable from '@core/utils/useFilterTable'

import {useRolStore} from 'stores/rol'

export default function useRolTable(){

   const rol = useRolStore()

   const tableColumns = [
      { key: 'id', sortable: true, label: '#' },
      { key: 'nombre', sortable: true,label:"Rol"},
      { key: 'actions',sortKey:"id", sortable: true },
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
      rol.fetchData({
         perPage: perPage.value,
         sortBy:sortBy.value,
         isSortDirDesc:isSortDirDesc.value,
         q:searchQuery.value,
         page: currentPage.value,
         
      }).then((data) => {
         
         total.value = Number(data.total)
         next(data.roles)

      }).catch(e => {
         toast.error('Error trayendo data ')
      })

   }

   const eliminarRol = (id) => {

      rol.eliminarRol( id).then(({ result }) => {

         if (result) {
            toast.success('Rol Eliminado con éxito.')
            refetchData();
         } else {
            toast.error('Rol no se pudo eliminar, inténtelo de nuevo mas tarde')
         }

      }).catch(e => {
         console.log(e)
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
      fetchData,
      tableColumns,
      eliminarRol
   }


}