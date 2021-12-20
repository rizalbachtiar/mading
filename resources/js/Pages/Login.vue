<template>
  <div class="min-w-screen min-h-screen flex items-center justify-center p-5 bg-cover" style="background-image:url('/images/class.jpg')">
    <div class="bg-white rounded-3xl shadow-xl w-1/2 bg-opacity-50 backdrop-filter backdrop-blur overflow-hidden">
      <div class="md:flex w-full">

        <div class="w-full py-10 px-5 md:px-10 space-y-10">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-900">LOGIN</h1>
          </div>
          <div>
            <form @submit.prevent="form.post(route('login'))">
              <div class="flex flex-col w-full px-3 mb-5">
                <label for="" class="font-semibold px-1">Username</label>
                <input v-model="form.email" class="px-2 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-indigo-500" type="text" name="username" placeholder="Username">
              </div>
              <div class="flex flex-col w-full px-3 mb-5">
                <label for="" class="font-semibold px-1">Password</label>
                <input v-model="form.password" class="px-2 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-indigo-500 " type="password" name="password" placeholder="*******">
              </div>
              <div class="flex -mx-3 pt-5">
                  <div class="w-full px-3 mb-5">
                      <button class="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-3 font-semibold text-gray-200 hover:text-gray-300 shadow-xl">LOGIN</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useForm } from '@inertiajs/inertia-vue3'

  export default {

    setup() {
      const form = useForm({
        email: '',
        password:''
      })
      return {
        form
      }
    }

  }
</script>