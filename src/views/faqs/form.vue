<template>
   <b-card>
     
         <b-form>
            <b-container fluid>
               <b-row>
                  <b-col cols="12" md="6">
                     <b-form-group>
                        <template #label>
                           Pregunta: <span class="text-danger">*</span>
                        </template>

                      
                           <b-form-input v-model="formulario.pregunta" />
                           
                     </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                     <b-form-group>
                        <template #label>
                           Categoría: <span class="text-danger">*</span>
                        </template>

                       
                           <el-select v-model="formulario.categoria_id" placeholder="seleccione" clearable filterable
                              class="w-100">
                              <el-option v-for="(categoria, i) in categorias" :key="i" :label="categoria.nombre"
                                 :value="categoria.id"></el-option>
                           </el-select>

                         
                     </b-form-group>
                  </b-col>

               </b-row>

               <b-row>
                  <b-col cols="12">
                     <b-form-group>

                        <template #label>
                           Contenido:
                        </template>
                           <editor output-format="html" :value="formulario.respuesta"
                              @input="formulario.respuesta = $event"
                              api-key="t1i940nuarrf1zefgxbf6ow5cxmgjmcad7q7l3fm5prgebyc" :init="optionsEditor" />
                     </b-form-group>
                  </b-col>
               </b-row>

               <b-row>
                  <b-col cols="12">
                     <b-button-group size="sm">
                        <b-button variant="primary" type="submit" v-loading="loading">
                           <feather-icon icon="SaveIcon" />
                           Guardar
                        </b-button>

                        <b-button variant="info" @click="regresar">
                           <feather-icon icon="ArrowLeftIcon" />
                           Regresar
                        </b-button>

                     </b-button-group>
                  </b-col>
               </b-row>
            </b-container>
         </b-form>
      
   </b-card>

</template>

<script>

import Editor from '@tinymce/tinymce-vue'


import {ref,onMounted,computed,toRefs} from 'vue'

import {useFaqStore} from 'stores/faq'


import { regresar } from '@core/utils/utils'
export default {

   components:{
     
  
      Editor,
   },

   setup(_,{emit}) {

      const faq = useFaqStore()
      
      const formValidate = ref(null)

      const {categorias} =  toRefs(faq)

      const {faq:formulario} = toRefs(faq)

      onMounted(() => {

         if(!categorias.value.length){
            faq.cargarCategorias().then((data) => {
               categorias.value = data
            })

         }

      })

      const guardar = () => {
         emit('save',formulario.value,formValidate.value)
      }

       const optionsEditor = {
            selector: 'textarea#premiumskinsandicons-snow',
            skin: 'snow',
            icons: 'thin',

         plugins: 'quickbars image lists code table codesample advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code wordcount ',
            
            toolbar: 'formatselect | forecolor backcolor | bold italic underline strikethrough | link image blockquote codesample | align bullist numlist | code | table',
            height: 400,
            content_style: 'body { margin: 2rem 10%; }',
            branding:false,
            language:'es'
         }


      return {
         formValidate,
         formulario,
         guardar,
         loading:computed(() => root.loading),
         categorias,
         optionsEditor,
         regresar
         
      }

   },
}
</script>