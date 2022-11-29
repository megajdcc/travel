<script>

import form from './form.vue';
import {h,onMounted,onActivated} from 'vue'


import router from '@/router'

import {useRolStore} from 'stores/rol';

export default {
		
	setup(){

		const rol  = useRolStore();

		onActivated(() => rol.clearRol())
		onMounted(() => rol.clearRol())

		return () => h(form,{
			on:{
				save: (data,formValidate) => {
					rol.guardarRol(data).then(({result,message,rol}) => {

						if(result){
							toast.success(message)
							router.push({name:'edit.role',params:{id:rol.id}})
						}else{
							toast.error(message)
						}

					}).catch(e => {
						console.log(e)
						if(e.response.status === 422){
							formValidate.setErrors(e.response.data.errors)
						}
					})
				}
			}
		})
	}

}

</script>