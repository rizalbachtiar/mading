<template>
	 <div>
	 	<ul>
	 		<li v-for="mading in madings">
	 			{{ mading.name }} - <Link :title="mading.name" class="text-blue-700" :href="route('madings.edit', { mading })">[edit]</Link>
	 		</li>
	 	</ul>
	 </div>
</template>
<script>
	import { Link } from '@inertiajs/inertia-vue3'

	export default {
		components: {
			Link,
		},
		props: ['madings']
	}
</script>