<template>
	<b-card>

		
			<b-form>
				<b-container fluid>
					<b-row>
						<b-col cols="12" md="6">
							<b-form-group>
								<template #label>
									Nombre del permiso | <span class="text-danger">*</span>
								</template>
								<b-form-input v-model="formulario.nombre"  />
									
							</b-form-group>
						</b-col>
					</b-row>

					<b-row>
						<b-col cols="12">
							<b-button-group size="sm">

								<b-button variant="primary" type="submit" v-loading="loading">
									<feather-icon icon="save" />
									guardar
								</b-button>

								<b-button @click="regresar" variant="secondary">
									<feather-icon icon="arrow-left" />
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


	import { regresar } from '@core/utils/utils';

	import { ref,computed,toRefs} from 'vue'
	import {useRootStore} from 'stores/root'
import { usePermisoStore } from 'stores/permiso'



	export default{  

	

		setup(props,{emit}){

			const root = useRootStore()
			const permiso = usePermisoStore()

				const PickerOptions = ref({
					disabledDate(time) {
						return time.getTime() > Date.now()
					}
				})
				const formValidate = ref(null)

				const { permiso:formulario } = toRefs(permiso)


				const guardar = () => {

					emit('save',formulario.value,formValidate.value)

				}
				return{
					
					regresar,
					guardar,
					formulario,
					loading:computed(() => root.loading),
					PickerOptions
				}
			}

	} 

</script>