<template>
   <Form>
      
      <div v-for="{as,name,label,children,...attrs} in esquema.fields" :key="campo.name">
         <b-form-group :label-for="name">
            <template #label>
               {{ label }}:  
            </template>

           

            <b-input-group>

               <Field :as="as" :id="name" :name="name" v-bind="attrs">
                  <template v-if="children && children.length">
                     <component v-for="({tag,text,...childAttrs}, idx) in children" :key="idx" :is="tag" v-bind="childAttrs">
                        {{ text }}
                     </component>
                  </template>
               </Field>

              <ErrorMessage :name="name" />

            </b-input-group>

         </b-form-group>
        
      </div>

      <b-button variant="primary"> 
         <font-awesome icon="save" />
         Guardar
      </b-button>
   </Form>
</template>

<script setup>

   import {Form,Field,ErrorMessage} from 'vee-validate'

   const props = defineProps({
      esquema: {
         type: Object,
         required: true
      }
   })

   const guardar = () => {

   }


</script>