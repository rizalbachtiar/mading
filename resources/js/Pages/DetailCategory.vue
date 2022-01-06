<template>
    <div class="bg-blue-500 h-screen w-screen bg-cover pt-10 overflow-auto" style="background-image:url('/images/indigo.jpg')">
        <div class="flex flex-col max-w-4xl mx-auto space-y-2 py-5 px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-lg">
            <div class="text-center text-2xl font-bold text-gray-700">
                <h1>{{ category.name }}</h1>
            </div>
            <div class="text-gray-800 font-semibold" v-html="category.content"></div>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
    props: ['category'],
    setup () {


        return {}
    }
}
</script>
