<template>
	<div class="lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl">
		<div class="bg-white shadow-xl px-10 pt-5 pb-10 rounded-md space-y-5">
			<div class="text-gray-600 text-2xl font-semibold text-center">List Category</div>
			<div class="flex justify-end">
				<Link class="bg-green-500 py-2 px-4 rounded-md text-white hover:bg-green-700 transition duration-500 ease-in-out" :href="route('categories.create')">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
					</svg>
				</Link>
			</div>
			<table class="w-full">
				<tbody>
					<tr v-for="category in categories" class="text-gray-700 border border-gray-400">
						<td class="px-4 py-2 flex items-center justify-between">
							{{ category.name }}
							<div class="flex space-x-2">
								<Link class="" :href="route('categories.edit', { category })">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
									</svg>
								</Link>
								<button class="" @click.prevent="deletePost(`${category.id}`)">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg>
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue3'
	import { Inertia } from '@inertiajs/inertia'
	import LayoutApp from '../Layouts/App.vue'
	
	export default {
		layout: LayoutApp,
		components: {
			Link,
		},
		props: ['categories'],
		setup() {
			function deletePost(id) {
				Inertia.delete(`/categories/${id}`)
			}

			return {
				deletePost,
			}
		}
	}
</script>