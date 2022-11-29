<template>
<div class="container-fluid">

		<div class="row w-100">
			<div class="col-12">
				<router-view #default="{Component}">
					<component :is="Component"/>
				</router-view>
			</div>
		</div>

</div>
	
</template>
