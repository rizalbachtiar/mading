<template>
	<div class="absolute w-full h-screen bg-gradient-to-r from-blue-400 to-green-500 overflow-y-scroll">
		<div class="lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl">
			<div class="bg-white shadow px-10 py-5 rounded-md space-y-8 bg-opacity-50 backdrop-filter backdrop-blur">
				<div class="text-gray-600 text-2xl font-semibold text-center">Edit Magazine</div>
				<form @submit.prevent="form.post(route('magazines.update-attachment', { magazine }))">
					<div class="space-y-4">
						<div class="space-y-1">
							<label for="name" class="text-md font-medium text-gray-700">
								Title
							</label>
							<input class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="text" name="name" v-model="form.name">
						</div>
						<div class="space-y-1">
							<label for="image_url" class="text-md font-medium text-gray-700">
								Image
							</label>
							<input class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="file" name="image_url" @change="previewImage" @input="form.image_url = $event.target.files[0]">
							<img v-if="url" :src="url" class="w-6/12 rounded">
						</div>
						<button class="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-700">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	import { useForm } from '@inertiajs/inertia-vue3'
	export default {
		props: ['magazine'],
		setup(props) {
			const form = useForm({
				name: props.magazine.name,
				image_url: null
			})

			return {
				form,
			}
		},
		data() {
			return {
				url: null
			}
		},
		methods: {
			previewImage (e) {
				const file = e.target.files[0];
		    	this.url = URL.createObjectURL(file);
			}
		}
	}
</script>