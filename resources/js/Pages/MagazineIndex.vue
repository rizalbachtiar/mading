<template>
	<div class="lg:pt-8 py-8 lg:py-16 px-6 md:px-10 lg:px-16 prose lg:prose-lg mx-auto max-w-4xl lg:max-w-6xl space-y-2">
		<div class="text-gray-600 text-2xl font-semibold text-center">Data Magazines</div>
		<div>
			<Link class="bg-green-600 py-2 px-5 ml-2 rounded-md text-white hover:bg-green-700 transition duration-500 ease-in-out" :href="route('magazines.create')">
				Add
			</Link>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
			<Link v-for="magazine in magazines" class="mt-5" :href="route('magazines.edit', { magazine })">
				<div class="w-56 h-80 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-opacity-50 backdrop-filter backdrop-blur">
					<div class="h-72">
						<img class="object-cover h-full w-full rounded-t-2xl" :src="'../storage/magazines/' + magazine.image_url" :alt="magazine.name">
					</div>
					<div class="w-full h-full rounded-b-2xl text-gray-700 font-semibold text-center">
						<span class="align-middle">{{ magazine.name }}</span>
					</div>
				</div>
			</Link>
		</div>
	</div>
</template>
<script>
	import { Link } from '@inertiajs/inertia-vue3'
	import LayoutApp from '../Layouts/App.vue'

	export default {
		layout: LayoutApp,
		components: {
			Link,
		},
		props: ['magazines']
	}
</script>