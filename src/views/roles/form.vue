<template>
	<b-card>

		<validation-observer ref="formValidate" #default="{handleSubmit}">
			<b-form @submit.prevent="handleSubmit(guardar)">
				<b-container fluid>
					<b-row>
						<b-col cols="12">
							<b-form-group>
								<template #label>
									Nombre Rol | <span class="text-danger">*</span>
								</template>
								<validation-provider name="nombre" rules="required" #default="{errors}">
									<b-form-input v-model="formulario.nombre" :state="errors.length ? false : null" />

									<b-form-invalid-feedback :state="errors.length ? false : null">
										{{ errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>

							</b-form-group>

						</b-col>
					</b-row>

					<b-row>
						<b-col cols="12">
							<b-card no-body class="border mt-1">
								<b-card-header class="p-1">
									<b-card-title class="font-medium-2">
										<feather-icon icon="LockIcon" size="18" />
										<span class="align-middle ms-1">Permisos</span>
									</b-card-title>
								</b-card-header>
								<b-table striped responsive class="mb-0" :items="formulario.permisos">
									<template #cell(module)="data">
										{{ data.value }}
									</template>

									<template #cell(read)="{ item }">
										<!-- <span v-for="val in field">{{ val }}</span> -->
										<b-form-checkbox v-model="item.read" />
									</template>

									<template #cell(write)="{ item }">
										<!-- <span v-for="val in field">{{ val }}</span> -->
										<b-form-checkbox v-model="item.write" />
									</template>


									<template #cell(update)="{ item }">
										<!-- <span v-for="val in field">{{ val }}</span> -->
										<b-form-checkbox v-model="item.update" />
									</template>


									<template #cell(delete)="{ item }">
										<!-- <span v-for="val in field">{{ val }}</span> -->
										<b-form-checkbox v-model="item.delete" />
									</template>

								</b-table>
							</b-card>
						</b-col>
					</b-row>

					<b-row>
						<b-col cols="12">
							<b-button-group size="sm">
								<b-button variant="primary" type="submit" v-loading="loading">
									<feather-icon icon="save" />
									Guardar
								</b-button>

								<b-button variant="secondary" @click="regresar">
									<feather-icon icon="arrow-left" />
									Regresar
								</b-button>
							</b-button-group>
						</b-col>
					</b-row>
				</b-container>
			</b-form>
		</validation-observer>

	</b-card>

</template> 


<script>
	import { useRolStore } from 'stores/rol'
	import {usePermisoStore} from 'stores/permiso'
	import {ref,onMounted,watch,computed,toRefs} from 'vue'

	import { regresar } from '@core/utils/utils';
	export default{  
		
			
		setup(_,{emit}){

			const formValidate = ref(null)
			const rol = useRolStore()
			const permiso = usePermisoStore()

			const PickerOptions = ref({
				disabledDate(time){
					return time.getTime() > Date.now()
				}		
			})

			const {rol:formulario} = toRefs(rol) 

			const getPermissionUser = computed(() => permiso.getPermissionUser(formulario.value))

			onMounted(() => {

				formulario.value.permisos = clone(getPermissionUser.value)
			})

			watch(formulario,() => {
				formulario.value.permisos = clone(getPermissionUser.value)
			})

			const guardar = () => {
				emit('save',formulario.value,formValidate.value)
			}

			return {
				guardar,
				formValidate,
				
				formulario,
				loading:computed(() => root.loading),
				permisos:computed(() => permiso.permisos),
				PickerOptions,
				regresar

			}
		}

	} 

</script>