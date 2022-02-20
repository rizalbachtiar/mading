<template>
	<div class="lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl">
		<div class="bg-white shadow px-10 py-5 rounded-md space-y-8 bg-opacity-50 backdrop-filter backdrop-blur">
			<div class="text-gray-600 text-2xl font-semibold text-center">Edit Magazine</div>
			<form @submit.prevent="form.post(route('magazines.update-attachment', { magazine }))">
				<div class="space-y-4">
					<div class="space-y-1">
						<label for="name" class="text-md font-medium text-gray-700">
							Title
						</label>
						<input class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="text" name="name" v-model="form.name">
					</div>
					<div class="space-y-1">
						<label for="image_url" class="text-md font-medium text-gray-700">
							Image
						</label>
						<input class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="file" name="image_url" @change="previewImage" @input="form.image_url = $event.target.files[0]">
						<img v-if="url" :src="url" class="w-6/12 rounded">
					</div>
					<div class="space-y-1">
						<div class="flex space-x-2 text-xs">
							<a @click="changeTab(1)" class="cursor-pointer bg-blue-500 py-1 px-3 text-white rounded-full hover:bg-blue-600 transition hover:text-gray-100">
								Contents
							</a>
							<a @click="changeTab(2)" class="cursor-pointer bg-indigo-500 py-1 px-3 text-white rounded-full hover:bg-indigo-700 transition hover:text-gray-100">
								Galery
							</a>
						</div>

						<!-- tabs -->
						<div v-if="tabs == 1">
							<table class="w-full">
								<tbody>
									<tr v-for="page in pages" class="text-gray-700 border border-gray-400">
										<td class="px-4 py-1 flex items-center justify-between">
											<Link class="text-green-700 hover:text-green-500 cursor-pointer" :href="route('content.edit', { magazine, page })">
												{{ page.title }}
											</Link>
											<button class="" @click.prevent="deletePage(`${page.id}`)">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</button>
										</td>
									</tr>
									<tr class="text-gray-700 border border-gray-400">
										<td class="px-4 py-1 text-center">
											<Link class="text-green-700 hover:text-green-500 cursor-pointer" :href="route('content.create', { magazine })">
												Create Content A
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div v-if="tabs == 2">
							<table class="w-full">
								<tbody>
									<tr class="text-gray-700 border border-gray-400">
										<td class="px-4 py-1 flex items-center justify-between">
											<a class="cursor-pointer hover:text-blue-600 transition">No Image</a>
											<button class="">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</button>
										</td>
									</tr>
									<tr class="text-gray-700 border border-gray-400">
										<td class="px-4 py-1 text-center">
											<a href="#" class="text-green-700 hover:text-green-500 cursor-pointer">
												Create Galery
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

					</div>
					<button class="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-700">
						Update
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import { useForm, Link } from '@inertiajs/inertia-vue3'
	import { Inertia } from '@inertiajs/inertia'
	import LayoutApp from '../Layouts/App.vue'

	export default {
		layout: LayoutApp,
		props: ['magazine', 'pages'],
		components: {
			Link,
		},
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
				tabs: 1,
			}
		},
		methods: {
			previewImage (e)
			{
				const file = e.target.files[0];
		    	this.url = URL.createObjectURL(file);
			},
			changeTab(id)
			{
				this.tabs = id
			},
		}
	}
</script>
