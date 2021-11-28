<template>
  <div class="w-full pt-28 pb-28 px-10 bg-cover bg-center space-y-10" style="background-image:url('/images/education.jpg')">
    
    <div class="w-1/1 md:w-1/3 bg-white rounded-3xl shadow-xl p-5 bg-opacity-10 backdrop-filter backdrop-blur space-y-5">
      <div class="text-3xl md:text-5xl text-center font-bold">
        Wellcome to Mading Digital Madrasah Ibtidaiyah
      </div>
      <div class="font-bold text-xs md:text-xl text-center text-gray-700">"Di mana pun saya menemukan tempat untuk duduk dan menulis, di situlah rumah saya". - Mary Tall Mountain</div>
    </div>
  </div>

  <div class="flex flex-col items-center mb-10">
    <div class="bg-white flex md:flex-row flex-col justify-center px-10 py-3 w-2/4 rounded-lg -my-16 md:-my-8 shadow-xl md:space-x-24 space-y-5 md:space-y-0">
      <div class="flex flex-row items-center space-x-2">
        <img class="w-10 h-10" src="/images/panduan.png">
        <h1>Panduan</h1>
      </div>
      <div class="flex flex-row items-center space-x-2">
        <img class="w-10 h-10" src="/images/materi.png">
        <h1>Materi</h1>
      </div>
    </div>
  </div>

  <div class="flex flex-col bg-white pt-10">
      <h1 class="flex px-16 py-5 font-bold text-3xl md:font-bold md:text-4xl text-gray-800">
          Topics
      </h1>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap mx-10 text-2xl">
              <div class="inline-block px-3">
                  <div class="w-60 h-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-cover" style="background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    <div class="text-gray-200 font-semibold my-5 mx-4 font-mono">Lingkungan</div>
                  </div>
              </div>
              <div class="inline-block px-3">
                  <div class="w-60 h-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-cover" style="background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    <div class="text-gray-200 font-semibold my-5 mx-4 font-mono">Hari Kemerdekaan</div>
                  </div>
              </div>
              <div class="inline-block px-3">
                  <div class="w-60 h-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-cover" style="background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    <div class="text-gray-200 font-semibold my-5 mx-4 font-mono">Hari Kartini</div>
                  </div>
              </div>
              <div class="inline-block px-3">
                  <div class="w-60 h-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-cover" style="background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    <div class="text-gray-200 font-semibold my-5 mx-4 font-mono">Hari Guru</div>
                  </div>
              </div>
              <div class="inline-block px-3">
                  <div class="w-60 h-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-cover" style="background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    <div class="text-gray-200 font-semibold my-5 mx-4 font-mono">Hari Ibu</div>
                  </div>
              </div>
              <div class="inline-block px-3">
                  <div class="w-60 h-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-cover" style="background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    <div class="text-gray-200 font-semibold my-5 mx-4 font-mono">Hari Pahlawan</div>
                  </div>
              </div>
              <div class="inline-block px-3">
                  <div class="w-60 h-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-cover" style="background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    <div class="text-gray-200 font-semibold my-5 mx-4 font-mono">Hari Santri</div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <!-- footer -->
  <div class="py-2 text-center text-xs text-gray-400">
      Copyright © Shohib Ace
  </div>
</template>

<script>
export default {
  props: ['user'],
}
</script>
