<template>
	<div class="h-screen w-screen bg-cover overflow-auto" style="background-image:url('/images/bg-magazine.jpg')">
        <div class="flex flex-col lg:max-w-5xl md:max-w-2xl mx-auto space-y-2 pt-5">
            <div>
                <Link class="bg-indigo-500 py-2 px-6 rounded-md text-gray-100 hover:shadow-md hover:bg-indigo-700 hover:text-gray-300 transition" :href="route('home.index')">Back</Link>
            </div>
            <!-- <div class="text-gray-700 text-3xl font-bold text-center">{{ magazine.name }}</div> -->
            <div class="flex space-x-2">
                <div class="w-2/12 rounded-md px-3 py-3 shadow bg-white bg-opacity-30 backdrop-filter backdrop-blur space-y-2">
                    <div class="text-center text-xl font-bold">Judul</div>
                    <ul>
                        <li v-for="page in pages"><a class="hover:text-blue-600 transition" href="#" v-on:click="detailContent(page)">{{ page.title }}</a></li>
                    </ul>
                </div>
                <div class="w-6/12 flex items-center bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur pt-2 pb-5 rounded-md shadow flex-col space-y-2">
                    <div class="text-xl font-bold">{{ magazine.name }}</div>
                    <img class="object-cover w-8/12 rounded" :src="'../storage/magazines/' + magazine.image_url">
                </div>
                <div class="w-4/12 rounded-md px-4 py-3 shadow space-y-2 bg-white bg-opacity-30 backdrop-filter backdrop-blur">
                    <div class="text-center text-xl font-bold">{{ title }}</div>
                    <div class="text-justify" v-html="content"></div>
                </div>
            </div>
            <div class="bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-md shadow">
                <div class="flex overflow-x-scroll py-5 hide-scroll-bar">
            <div class="flex flex-nowrap mx-5 text-xl">
                <div v-for="n in 10" class="inline-block px-3">
                    <div class="w-72 h-56 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div class="h-72">
                        <img class="object-cover h-full w-full" :src="'../storage/magazines/' + magazine.image_url">
                    </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        <div class="py-2 text-center text-xs text-gray-700 mt-5">
            Copyright © Shohib Ace
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
