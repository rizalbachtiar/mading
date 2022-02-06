<template>
	<div class="h-screen w-screen bg-cover overflow-auto" style="background-image:url('/images/bg-magazine.jpg')">
        <div class="flex flex-col lg:max-w-5xl md:max-w-2xl mx-auto pt-5 px-4 space-y-5">
            <div class="text-center text-2xl font-bold text-gray-700">{{ magazine.name }}</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link v-for="page in pages" :href="route('home.detail-content')" class="bg-white bg-opacity-30 hover:bg-opacity-60 backdrop-filter backdrop-blur py-5 px-2 rounded-lg">
                  <p class="text-gray-700 text-xl font-bold text-center">{{ page.title }}</p>
              </Link>
            </div>
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
  		title: "Kontent",
  		content: ""
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
