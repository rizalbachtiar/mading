<template>
	<div class="max-w-xs mx-auto bg-blue-200 p-2">
		<form @submit.prevent="form.put(route('madings.update', { mading }))">
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
				<textarea v-model="form.tips_trik" placeholder="Tips & Trik"></textarea>
				<textarea v-model="form.pojok_mading" placeholder="Pojok Mading"></textarea>
				<button class="bg-blue-500">Update</button>
			</div>
		</form>
	</div>
</template>
<script>
	import { useForm } from '@inertiajs/inertia-vue3'
	export default {
		props: ['mading'],
		setup(props) {
			const form = useForm({
				name: props.mading.name,
				salam_redaksi: props.mading.salam_redaksi,
				susunan_redaksi: props.mading.susunan_redaksi,
				berita_utama: props.mading.berita_utama,
				opini: props.mading.opini,
				puisi: props.mading.puisi,
				pantun: props.mading.pantun,
				cerpen: props.mading.cerpen,
				artikel: props.mading.artikel,
				humor: props.mading.humor,
				tips_trik: props.mading.tips_trik,
				pojok_mading: props.mading.pojok_mading,
			})

			return {
				form,
			}
		}
	}
</script>