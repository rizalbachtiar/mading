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
						<label class="text-md font-medium text-gray-700">
							Contents
						</label>
						<table class="w-full">
							<tbody>
								<tr class="text-gray-700 border border-gray-400">
									<td class="px-4 py-1 flex items-center justify-between">
										Cerpen
										<button class="" @click.prevent="deletePost(`${category.id}`)">
											<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
										</button>
									</td>
								</tr>
								<tr class="text-gray-700 border border-gray-400">
									<td class="px-4 py-1 text-center">
										<a @click="openModal()" class="text-green-700 hover:text-green-500 cursor-pointer">
											Create Content
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<button class="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-700">
						Update
					</button>
				</div>
			</form>
		</div>
	</div>
	<!-- MODAL TAMBAH & EDIT PRODUK AKAN DITEMPATKAN DISINI -->
    <div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400" v-if="isOpen">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <form>
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="">
                            <div class="mb-4">
                                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" id="name" v-model="formModal.name">
                            </div>
                            <div class="mb-4">
                                <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Address</label>
                                <ckeditor class="bg-blue-500" :editor="editor" v-model="formModal.content"></ckeditor>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5" v-show="!editMode" @click="save">
                                Save
                            </button>
                        </span>
                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5" v-show="editMode" @click="update">
                                Update
                            </button>
                        </span>
                        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                            <button @click="closeModal()" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Cancel
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
	import { useForm } from '@inertiajs/inertia-vue3'
	import LayoutApp from '../Layouts/App.vue'
	import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

	export default {
		layout: LayoutApp,
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
				editor: ClassicEditor,
				editMode: false,
                isOpen: false,
				url: null,
				formModal: {
                    name: null,
                    content: 'ckeditor 5 for laravel and vuejs',
                }
			}
		},
		methods: {
			previewImage (e) {
				const file = e.target.files[0];
		    	this.url = URL.createObjectURL(file);
			},
			openModal(page) {
				console.log(this.magazine.id),
				this.isOpen = true;
			},
			closeModal() {
				this.isOpen = false;
                this.reset();
                this.editMode = false;
			},
			reset() {
				this.formModal = {
					name: null,
                    content: null,
				}
			},
			save() {
				//
			},
			update() {
				//
			}
		}
	}
</script>