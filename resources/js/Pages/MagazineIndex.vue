<template>
	<div class="mt-4 lg:pt-8 py-8 lg:py-16 px-6 md:px-10 lg:px-16 prose lg:prose-lg mx-auto max-w-4xl lg:max-w-6xl">
		<div class="text-gray-600 text-2xl font-semibold text-center">Data Magazines</div>
		<Link class="bg-green-500 py-2 px-5 rounded-md text-white hover:bg-green-700 transition duration-500 ease-in-out" :href="route('magazines.create')">
			Create
		</Link>
		<div class="grid grid-cols-4 gap-4 mt-10 justify-items-center">
			<div v-for="magazine in magazines" class="inline-block">
				<div class="w-56 h-80 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
					<div class="h-72">
						<img class="object-cover h-full w-full rounded-t-2xl" :src="'../storage/magazines/' + magazine.image_url" :alt="magazine.name">
					</div>
					<div class="w-full h-full rounded-b-2xl text-gray-700 font-semibold text-center">
						<span class="inline-block align-middle">{{ magazine.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { Link } from '@inertiajs/inertia-vue3'
	export default {
		components: {
			Link,
		},
		props: ['magazines']
	}
</script>