<template>
    <div class="bg-blue-500 h-screen w-screen bg-cover bg-center pt-10 overflow-auto" style="background-image:url('/images/indigo.jpg')">
        <div class="max-w-xl lg:max-w-4xl md:max-w-2xl mx-auto space-y-2">
            <Link class="bg-indigo-500 py-2 px-6 rounded-md text-gray-100 hover:shadow-md hover:bg-indigo-700 hover:text-gray-300 transition" :href="route('home.index')">Back</Link>
            <div class="flex flex-col space-y-2 py-5 px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-lg">
                <div class="text-center text-2xl font-bold text-gray-700">
                    <h1>{{ category.name }}</h1>
                </div>
                <div class="text-gray-800 font-semibold" v-html="category.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
    props: ['category'],
    components: {
        Link
    },
    setup () {
        return {}
    }
}
</script>
