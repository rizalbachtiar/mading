<template>
	<div class="lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl">
		<div class="bg-white shadow px-10 py-5 rounded-md space-y-8 bg-opacity-50 backdrop-filter backdrop-blur">
			<div class="text-gray-600 text-2xl font-semibold text-center">Edit Content</div>
			<form @submit.prevent="form.post(route('content.update', { page }))">
				<div class="space-y-4">
					<input type="hidden" name="magazine_id" v-model="form.magazine_id">
					<div class="space-y-1">
						<label for="name" class="text-md font-medium text-gray-700">
							Title
						</label>
						<input class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="text" name="name" v-model="form.title">
					</div>
					<div class="space-y-1">
						<label for="type" class="text-md font-medium text-gray-700">
							Type
						</label>
						<select class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" name="type" v-model="form.type">
							<option value="content">Content</option>
							<option value="video">Video</option>
						</select>
					</div>
					<div class="space-y-1">
						<ckeditor class="bg-blue-500" :editor="editor" v-model="form.content"></ckeditor>
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
	import { useForm } from '@inertiajs/inertia-vue3'
	import LayoutApp from '../Layouts/App.vue'
	import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

	export default {
		layout: LayoutApp,
		props: ['page'],
		setup(props) {
			const form = useForm({
				title: props.page.title,
				type: props.page.type,
				magazine_id: props.page.magazine_id,
				content: props.page.content,
			})

			return {
				form,
			}
		},
		data() {
			return {
				editor: ClassicEditor,
			}
		}
	}
</script>