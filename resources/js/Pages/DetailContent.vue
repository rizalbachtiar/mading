<template>
	<div class="bg-blue-500 h-screen w-screen bg-cover bg-center pt-10 overflow-auto" style="background-image:url('/images/indigo.jpg')">
		<div class="max-w-xl lg:max-w-4xl md:max-w-2xl mx-auto space-y-2">
			<div class="flex flex-col space-y-2 py-5 px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-lg">
                <div class="text-center text-2xl font-bold text-gray-700">
                    {{ page.title}}
                </div>
                <div v-if="page.type != 'video'" class="">
                	<article class="prose">
                		<div class="text-justify" v-html="page.content"></div>
                	</article>
                </div>
                <div v-else>
                	<iframe :src="video" frameborder="0" allowfullscreen class="w-full h-96"></iframe>
                </div>
            </div>
		</div>
	</div>
</template>
<script>
	import { Link } from '@inertiajs/inertia-vue3'

	export default {
	  props: ['magazine', 'page'],
	  components: {
	    Link,
	  },
	  data() {
	  	let url_video = '';
	  	if(this.page.type == 'video'){
	  		url_video = this.page.content.replace("<p>", "").replace("</p>", "").replace("watch?v=", "embed/")
	  	}
		return {
		  video: url_video,
		}
	  }

	}
</script>