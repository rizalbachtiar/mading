<template>
	<div class="flex flex-col max-w-6xl mx-auto space-y-2 pt-5">
		<div class="text-gray-600 text-3xl font-bold text-center">{{ magazine.name }}</div>
		<div class="flex space-x-2">
			<div class="w-2/12 rounded-md px-3 py-3 shadow space-y-2">
				<div class="text-center text-xl">Judul</div>
				<ul>
					<li v-for="page in pages"><a class="hover:text-blue-600 transition" href="#" v-on:click="detailContent(page)">{{ page.title }}</a></li>
				</ul>
			</div>
			<div class="w-6/12 flex justify-center bg-gray-100 py-2 rounded-md shadow">
				<img class="object-cover w-8/12 rounded" :src="'../storage/magazines/' + magazine.image_url">
			</div>
			<div class="w-4/12 rounded-md px-4 py-3 shadow space-y-2 overscroll-auto">
				<div class="text-center text-xl">{{ title }}</div>
				<div class="text-justify" v-html="content"></div>
			</div>
		</div>
		<div class="bg-red-300">
			Image
		</div>
	</div>
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  props: ['magazine', 'pages'],
  components: {
    Link,
  },
  data() {
  	return {
  		title: "Judul",
  		content: "Konten"
  	}
  },
  methods:{
  	detailContent(page) {
  		this.title = page.title
  		this.content = page.content
  	}
  }
  
}
</script>