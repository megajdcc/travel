<template>
	<b-container fluid class="px-0">
		<b-row>
			<b-col cols="12">
				<router-view #default="{Component}">
					<transition :name="routerTransition" mode="out-in">
						<component :is="Component"/>
					</transition>
				</router-view>
				
			</b-col>
		</b-row>
	</b-container>

</template>
<script>

import useAppConfig from '@core/app-config/useAppConfig'

export default {

	setup(){

		const {
			routerTransition
		} = useAppConfig();

		return {
			routerTransition
		}
	}
}
</script>