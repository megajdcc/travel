import { ref, watch, computed,onMounted } from 'vue'
import { title } from '@core/utils/filter'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

import useFilterTable from '@core/utils/useFilterTable';

import {useUsuarioStore} from 'stores/usuario'

export default function useUsersList() {

   const usuario = useUsuarioStore();

   const refUserListTable = ref(null)

   // Table Handlers
   const tableColumns = [
      { key: 'usuario', sortable: true,label:'Usuario' },
      { key: 'email', sortable: true,label:"Email" },
      { key: 'rol', sortable: true,label:'rol' },
      { key: 'telefono', sortable: true,label:'Telefono' },
      { key: 'actions',sortable:false },
   ]
   const totalUsers = ref(0)
   
   const {
      perPageOptions,
      currentPage,
      perPage,
      searchQuery,
      sortBy,
      isSortDirDesc
   } = useFilterTable();


   const roleFilter = ref(null)


   const dataMeta = computed(() => {
      const localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0

      return {
         from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
         to: perPage.value * (currentPage.value - 1) + localItemsCount,
         of: totalUsers.value,
      }

   })

   const refetchData = () => {
      refUserListTable.value.refresh()
   }

   watch([currentPage, perPage, searchQuery, roleFilter], () => {
      refetchData()
   })
   
 


   const fetchUsers = (ctx, callback) => {

      usuario.fetchUsers({
            q: searchQuery.value,
            perPage: perPage.value,
            page: currentPage.value,
            sortBy: sortBy.value,
            sortDesc: isSortDirDesc.value,
            role: roleFilter.value,
         })
         .then(response => {
            const { users, total } = response.data
            callback(users)
            totalUsers.value = total

         })
         .catch(() => {
            toast({
               component: ToastificationContent,
               props: {
                  title: 'Error trayendo usuarios',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger',
               },
            })
         })
   }

   // *===============================================---*
   // *--------- UI ---------------------------------------*
   // *===============================================---*

   const resolveUserRoleVariant = role => {
      if (role === 'Administrador') return 'primary'
      if (role === 'Super administrador') return 'warning'
      if (role === 'Desarrollador') return 'warning'
      if (role === 'Invitado') return 'success'
      if (role === 'Coordinador') return 'danger'
      return 'primary'
   }

   const resolveUserRoleIcon = role => {
      if (role === 'Administrador') return 'user-tie'
      if (role === 'Super administrador') return 'user-secret'
      if (role === 'Desarrollador') return 'user-tie-hair'
      if (role === 'Invitado') return 'user'
      return 'user'
   }

   return {
      fetchUsers,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      resolveUserRoleIcon,
      resolveUserRoleVariant,
      refetchData,

      // Extra Filters
      roleFilter,
   }
}
