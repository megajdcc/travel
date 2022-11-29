<template>
   <div class="container-fluid">
      <validation-observer ref="validateForm">
         <b-form @submit.prevent="enviar">
         
            <div class="row">
               <div class="col-12 col-md-6">
                  <el-divider content-position="left">Paypal</el-divider>

                   <b-form-group label="Deseas Usar PayPal ? ">
                     
                     <b-form-radio-group v-model="formulario.paypal" >
                        <b-form-radio :value="true">Sí</b-form-radio>
                        <b-form-radio :value="false">Nó</b-form-radio>
                     </b-form-radio-group>

                  </b-form-group>

                  
                   <template v-if="formulario.paypal">

                     <b-form-group label="Paypal Id">
                        <b-form-input v-model="formulario.paypal_id" size="sm" placeholder="PayPal ID"/>
                     </b-form-group>
                     
                     <b-form-group label="Paypal Secret">
                        <b-form-input v-model="formulario.paypal_secret" size="sm" placeholder="PayPal Secret"/>
                     </b-form-group>

                     <b-form-group label="Production o Prueba? ">
                        
                        <b-form-radio-group v-model="formulario.production_paypal" >
                           <b-form-radio :value="true">Production</b-form-radio>
                           <b-form-radio :value="false">Prueba</b-form-radio>
                        </b-form-radio-group>

                     </b-form-group>
                   </template>



               </div>
               <div class="col-12 col-md-6">
                  <el-divider content-position="left">Conekta</el-divider>

                  <b-form-group label="Deseas Usar conekta ? ">
                     
                     <b-form-radio-group v-model="formulario.conekta" >
                        <b-form-radio :value="true">Sí</b-form-radio>
                        <b-form-radio :value="false">Nó</b-form-radio>
                     </b-form-radio-group>

                  </b-form-group>

                  <template v-if="formulario.conekta">
                     <b-form-group label="Llave Privada" description="Llave para procesar las transacciones en el servidor, no debes revelarla">
                        <validation-provider rules="required" name="Llave privada" #default="{errors}">
                              <b-form-input :state="errors.length > 0 ? false : null" v-model="formulario.api_key_private_conekta" size="sm" placeholder="Llave privada"/>
                              
                              <span class="text-danger">{{ errors[0] }}</span>
                                 
                        </validation-provider>
                  
                     </b-form-group>
                     
                     <b-form-group label="Llave Publica" description="Llave para tokenizar tarjetas en el buscador del cliente.">

                        <validation-provider rules="required" name="Llave publica" #default="{errors}">
                           <b-form-input :state="errors.length > 0 ? false : null"  v-model="formulario.api_key_public_conekta" size="sm" placeholder="Llave publica"/>

                        <span class="text-danger">{{ errors[0] }}</span>
                                 
                        </validation-provider>
                     </b-form-group>

                     <b-form-group label="Production o Prueba? ">
                        <validation-provider rules="required" name="Production o prueba" #default="{errors}">
                           <b-form-radio-group v-model="formulario.production_conekta"  :state="errors.length > 0 ? false:null">
                              <b-form-radio :value="true">Production</b-form-radio>
                              <b-form-radio :value="false">Prueba</b-form-radio>
                           </b-form-radio-group>
                           
                           <span class="text-danger">{{ errors[0] }}</span>

                        </validation-provider>

                     </b-form-group>
                  </template>


               </div>
            </div>

            <div class="row">
               <div class="col-12">
                  <b-button type="submit" variant="primary" v-loading="loading" title="Guardar Cambios" v-b-tooltip.hover>
                     <feather-icon icon="save" />
                     Guardar
                  </b-button>
               </div>
            </div>
         
         </b-form>
       </validation-observer>
   </div>

</template>

<script setup>

import { ref,onMounted, watch } from 'vue'


import {useRootStore} from 'stores/root'

const vBTooltip = VBTooltip;

const rootStore = useRootStore();

const loading = rootStore.loading;


</script>
