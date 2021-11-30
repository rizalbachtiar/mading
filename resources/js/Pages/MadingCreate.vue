<template>
	<div class="max-w-xs mx-auto bg-blue-200 p-2">
		<form @submit.prevent="form.post(route('madings.store'))">
			<div class="flex flex-col space-y-5">
				<input v-model="form.name" type="text" name="name" placeholder="name">
				<textarea v-model="form.salam_redaksi" placeholder="Salam Redaksi"></textarea>
				<textarea v-model="form.susunan_redaksi" placeholder="Susunan Redaksi"></textarea>
				<textarea v-model="form.berita_utama" placeholder="Berita Utama"></textarea>
				<textarea v-model="form.opini" placeholder="Opini"></textarea>
				<textarea v-model="form.puisi" placeholder="Puisi"></textarea>
				<textarea v-model="form.pantun" placeholder="Pantun"></textarea>
				<textarea v-model="form.cerpen" placeholder="Cerpen"></textarea>
				<textarea v-model="form.artikel" placeholder="Artikel"></textarea>
				<textarea v-model="form.humor" placeholder="Humor"></textarea>
				<textarea v-model="form.tips_trick" placeholder="Tips & Trik"></textarea>
				<textarea v-model="form.pojok_mading" placeholder="Pojok Mading"></textarea>
				<button class="bg-blue-500">Create</button>
			</div>
		</form>
	</div>
</template>
<script>
	import { useForm } from '@inertiajs/inertia-vue3'
	export default {
		setup() {
			const form = useForm({
				name: '',
				salam_redaksi: '',
				susunan_redaksi:'',
				berita_utama:'',
				opini:'',
				puisi:'',
				pantun:'',
				cerpen:'',
				artikel:'',
				humor:'',
				tips_trik:'',
				pojok_mading:'',
			})

			return {
				form,
			}
		}
	}
</script>