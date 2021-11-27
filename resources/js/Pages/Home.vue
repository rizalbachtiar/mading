<template>
  <div class="w-full pt-28 pb-28 px-10 bg-cover bg-center space-y-10" style="background-image:url('/images/education.jpg')">
    <!-- <div class="flex flex-row justify-between items-center bg-white px-4 py-2 rounded-xl bg-opacity-10 backdrop-filter backdrop-blur">
      <div class="font-bold text-2xl">SD 2</div>
      <div class="flex flex-row space-x-4 items-center">
        <ul class="flex flex-row space-x-3 font-semibold text-xs md:text-base items-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Mading</a></li>
          <li><a href="#">Visi & misi</a></li>
        </ul>
        <button class="bg-blue-500 py-1 px-3 rounded-full text-xs md:text-base text-gray-200">Logout</button>
      </div>
    </div> -->
    <div class="w-1/1 md:w-1/3 bg-white rounded-3xl shadow-xl p-5 bg-opacity-10 backdrop-filter backdrop-blur space-y-5">
      <div class="text-3xl md:text-5xl text-center font-bold">
        Wellcome to Mading Digital Madrasah Ibtidaiyah
      </div>
      <div class="font-bold text-xs md:text-xl text-center text-gray-700">"Di mana pun saya menemukan tempat untuk duduk dan menulis, di situlah rumah saya". - Mary Tall Mountain</div>
    </div>
  </div>
  <div>
    <div>Mading</div>
  </div>
</template>

<script>
export default {
  props: ['user'],
}
</script>
