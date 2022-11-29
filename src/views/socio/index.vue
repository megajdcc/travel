<template>
   <b-container fluid class="my-1 py-3">
      <b-row>

         <b-col cols="12" md="3">
            <!-- Card header -->
            <b-card>
               <b-nav vertical card-header class="menu-socio">

                  <router-link  :to="{name:'miperfil'}" v-slot="{isActive,href,navigate }" custom >

                     <li class="nav-item" :class="{'active' :isActive }">
                        <a :href="href" @click="navigate " class="nav-link" :class="{'active' : isActive }" v-bind="$attrs">
                           <b-container fluid>
                              <b-row class="px-0 d-flex align-items-center">
                           
                                 <b-col cols="2" class="px-0">
                                    <b-avatar :src="usuario.avatar" />
                                 </b-col>
                           
                                 <b-col cols="10" >
                                    <p class="lh-sm fs-4 fw-bolder text-white text-justify m-0">
                                       {{ ` ${usuario.nombre ? usuario.nombre +' ' +usuario.apellido : usuario.username}` }}
                                    </p>
                                 </b-col>
                              </b-row>
                           </b-container>
                        </a>
                      
                     </li>
                       
                  </router-link>

                  <router-link :to="{ name: 'socio.negocio.list' }" v-slot="{isActive,href,navigate }" custom class="">
                     <li class="nav-item fw-bolder px-2 py-1" :class="{'active' :isActive }" style="">
                        <a :href="href" @click="navigate " class="nav-link" :class="{'active' : isActive }" v-bind="$attrs">
                           <font-awesome icon="briefcase" class="me-1" />
                           Negocio
                        </a>
                     </li>
                  </router-link>

                  <router-link :to="{ name: 'socio.reservaciones' }" v-slot="{isActive,href,navigate }" custom class="">
                     <li class="nav-item fw-bolder px-2 py-1" :class="{'active' :isActive }" style="">
                        <a :href="href" @click="navigate " class="nav-link" :class="{'active' : isActive }" v-bind="$attrs">
                           <font-awesome icon="credit-card" class="me-1" size="1x" />
                           Reservaciones
                        </a>
                     </li>
                  </router-link>


                  <router-link :to="{ name: 'socio.consumos' }" v-slot="{isActive,href,navigate }" custom class="">
                     <li class="nav-item fw-bolder px-2 py-1" :class="{'active' :isActive }" style="">
                        <a :href="href" @click="navigate " class="nav-link" :class="{'active' : isActive }" v-bind="$attrs">
                           <font-awesome icon="bell-concierge" class="me-1" size="1x" />
                           Consumos
                        </a>
                     </li>
                  </router-link>


                  <router-link :to="{ name: 'socio.certificados' }" v-slot="{isActive,href,navigate }" custom class="">
                     <li class="nav-item fw-bolder px-2 py-1" :class="{'active' :isActive }" style="">
                        <a :href="href" @click="navigate " class="nav-link" :class="{'active' : isActive }" v-bind="$attrs">
                           <font-awesome icon="certificate" class="me-1" size="1x" />
                           Certificados
                        </a>
                     </li>
                  </router-link>


                  <router-link :to="{ name: 'socio.compras' }" v-slot="{isActive,href,navigate }" custom class="">
                     <li class="nav-item fw-bolder px-2 py-1" :class="{'active' :isActive }" style="">
                        <a :href="href" @click="navigate " class="nav-link" :class="{'active' : isActive }" v-bind="$attrs">
                           <font-awesome icon="weight-hanging" class="me-1" size="1x" />
                           Compras
                        </a>
                     </li>
                  </router-link>

               </b-nav>
            </b-card>



            <!-- Cards Footer -->
            <b-card v-if="route.meta.name == 'negocio'">
               <b-nav vertical card-header class="menu-socio">

                  <nav-item  :to="{ name: 'socio.negocio.list' }" active-class="active" exact-active-class="active" class="fw-bolder" >
                     <font-awesome icon="concierge-bell" class="me-1" size="1x" />
                     Mis Negocios
                  </nav-item>


                  <nav-item :to="{ name: 'socio.negocio.afiliar' }" active-class="active" class="fw-bolder"  exact-active-class="active" >
                     <font-awesome icon="plus-circle" class="me-1" size="1x" />
                     Afiliar mi negocio
                  </nav-item>

                  <nav-item :to="{ name: 'socio.negocio.siguiendo' }" active-class="active" class="fw-bolder">
                     <font-awesome icon="bookmark" class="me-1" size="1x" />
                     Siguiendo
                  </nav-item>

                  <nav-item :to="{ name: 'socio.negocio.recomendados' }" active-class="active" class="fw-bolder">
                     <font-awesome icon="heart" class="me-1" size="1x" />
                     Recomendados
                  </nav-item>

                  <nav-item :to="{ name: 'socio.negocio.solicitudes' }" active-class="active" class="fw-bolder">
                     <font-awesome icon="file" class="me-1" size="1x" />
                     Solicitudes enviadas
                  </nav-item>

               
               </b-nav>
            </b-card>

            <b-card v-if="route.meta.name == 'perfil'">
               
               <b-nav vertical card-header class="menu-socio">

                 <nav-item :to="{name:'miperfil'}" exact-active-class="router-link"> 
                     <font-awesome icon="user" class="me-1" size="1x" />
                     Perfil de socio
                  </nav-item>


                  <nav-item :to="{ name:'misreferidos'}" exact-active-class="active">
                     <font-awesome icon="user-plus" class="me-1" />
                     Mis Referidos
                  </nav-item>
                  

                  <nav-item :to="{ name: 'perfil.editar' }" exact-active-class="active">
                     <font-awesome icon="user-edit" class="me-1" />
                     Editar Información
                  </nav-item>

                  <nav-item :to="{ name: 'perfil.password' }" exact-active-class="active">
                     <font-awesome icon="key" class="me-1" />
                     Cambiar Contraseña
                  </nav-item>
                
                  <nav-item :to="{ name: 'perfil.desactivar' }" exact-active-class="active">
                     <font-awesome icon="window-close" class="me-1" />
                     Desactivar Cuenta
                  </nav-item>
               </b-nav>

            </b-card>

         </b-col>

         <b-col cols="12" md="9">
            <router-view #default="{Component}">
               <component :is="Component"/>
            </router-view>
         </b-col>

      </b-row>
   </b-container>
</template>

<script setup> 
import { computed, toRefs,watch,onMounted } from 'vue'
import { useUsuarioStore } from 'stores/usuario';
import {useRoute} from 'vue-router'
import NavItem from 'components/NavItem.vue'

const route = useRoute();

const usuarioStore = useUsuarioStore();

const { usuario } = toRefs(usuarioStore)


</script>

<style lang="scss" scoped>
@import '../../../src/assets/scss/variables/variables';

   .menu-socio{
      .nav-item{
         a{
            color: #909399 ;
         }
         
         &.active{
               background: $primary !important;
               color: white;

         }

         
         &.router-link-exact-active,.active
         {
            background: $primary !important;
            color:white;
         }

      }
     
   }

.dark-layout{
   .menu-socio {
         .nav-item {
            a {
               color: white !important;
            }
   
   
            .router-link-exact-active,
            .active {
               background: $primary  !important;
               color: black !important;
            }
   
         }
   
      }
}
</style>