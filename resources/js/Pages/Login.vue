<template>
  <div class="min-w-screen min-h-screen bg-pink-200 flex items-center justify-center p-5">
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
      <div class="md:flex w-full">
        <div class="hidden md:block w-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 p-10">
          <img :src="'/images/cute-kid.png'">
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10 space-y-10">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-900">LOGIN</h1>
          </div>
          <div>
            <form action="#">
              <div class="flex flex-col w-full px-3 mb-5">
                <label for="" class="font-semibold px-1">Username</label>
                <input class="px-2 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-indigo-500" type="text" name="username" placeholder="Username">
              </div>
              <div class="flex flex-col w-full px-3 mb-5">
                <label for="" class="font-semibold px-1">Password</label>
                <input class="px-2 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-indigo-500 " type="password" name="password" placeholder="*******">
              </div>
              <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                      <button class="block w-full max-w-xs mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:from-purple-500 hover:via-pink-600 hover:to-red-500 text-white rounded-xl px-3 py-3 font-semibold">LOGIN</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
