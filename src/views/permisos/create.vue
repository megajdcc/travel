<script>

import form from './form.vue';
import { h, onMounted, onActivated } from 'vue'
import {usePermisoStore} from 'stores/permiso'

import {useRouter} from 'vue-router'


export default {

	setup() {
		const permiso = usePermisoStore()
		const router = useRouter();
		onActivated(() => permiso.clearPermiso())
		onMounted(() => permiso.clearPermiso())

		return () => h(form, {
			on: {
				save: (data, formValidate) => {

					permiso.guardarPermiso(data).then(({ result, message, permiso:permis }) => {

						if (result) {
							toast.success(message)
							router.push({ name: 'edit.permiso', params: { id: perpermismiso.id } })
						} else {
							toast.error(message)
						}

					}).catch(e => {
						console.log(e)
						if (e.response.status === 422) {
							formValidate.setErrors(e.response.data.errors)
						}
					})
				}
			}
		})
	}

}

</script>