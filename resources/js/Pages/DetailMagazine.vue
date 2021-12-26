<template>
	<div class="flex flex-col max-w-6xl mx-auto space-y-2 pt-5">
		<div class="text-gray-600 text-3xl font-bold text-center">{{ magazine.name }}</div>
		<div class="flex space-x-2">
			<div class="w-2/12 rounded-md px-3 py-3 shadow space-y-2">
				<div class="text-center text-xl">Judul</div>
				<ul class="">
					<li><a href="#">Puisi</a></li>
					<li><a href="#">Cerpen</a></li>
				</ul>
			</div>
			<div class="w-6/12 flex justify-center bg-gray-100 py-2 rounded-md shadow">
				<img class="object-cover w-8/12 rounded" :src="'../storage/magazines/' + magazine.image_url">
			</div>
			<div class="w-4/12 rounded-md px-4 py-3 shadow space-y-2 overscroll-auto">
				<div class="text-center text-xl">Kontent</div>
				<div class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				</div>
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
  props: ['magazine'],
  components: {
    Link,
  }
  // setup() {
  //   const photos = [

  //   ]
  // }
}
</script>