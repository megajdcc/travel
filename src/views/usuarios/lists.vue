<template>

  <div class="container-fluid w-100 px-0 mx-0">

    <!-- Filters -->
    <users-list-filters v-model:roleFilter="roleFilter" :role-options="getRols" />

    <!-- Table Container Card -->
    <b-card no-body class="mb-0 p-2">

      <mi-table>

      </mi-table>

    </b-card>
  </div>
</template>

<script setup>


import { computed } from 'vue'
import { avatarText } from '@core/utils/filter'
import UsersListFilters from './UsersListFilters.vue'
import useUsersList from './useUsersList'
import PaginateTable from 'components/PaginateTable.vue'
import PerPage from 'components/PerPage.vue'
import MiTable from 'components/MiTable.vue'

import { useRolStore } from 'stores/rol'
import { useUsuarioStore } from 'stores/usuario'
import { useRootStore} from 'stores/root'
import {useAppConfigStore} from 'stores/appConfig'

const rol = useRolStore();
const rootStore = useRootStore();
const usuarioStore = useUsuarioStore();
const appConfig = useAppConfigStore();

const loading = computed(() => rootStore.loading)
const eliminar = usuarioStore.eliminar();



const {
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
      refetchData,
     

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      // resolveUserStatusVariant,

      // Extra Filters
      roleFilter
    } = useUsersList()


const eliminarUsuario = (item) => {

        eliminar(item.id).then(respon => {
        
        if(respon.data.result){
          refetchData();
        }else{
        }

      }).catch(e => {
        console.log(e)
      })

}
const getRols = computed(() => rol.getRols)
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
