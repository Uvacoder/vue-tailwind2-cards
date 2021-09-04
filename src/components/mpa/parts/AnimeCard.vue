<template>
  <div v-for="(card, index) in cards" :key="index">
    <router-link to="/myponyasia/anime2" class="relative p-2 flex flex-col w-[147px] md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
      <img class="rounded-xl" src="../../../assets/images/myponyasia/poster-portrait.webp" alt="Poster"/>
      <p class="absolute p-2 bg-blue-700 top-0 left-0 rounded-tl-xl font-bold text-sm">Special</p>
      <p class="absolute p-2 bg-blue-700 top-0 right-0 rounded-tr-xl font-bold text-sm">16 Jan</p>
      <p class="-mt-6 text-center bg-trueGray-600 font-semibold rounded-b-xl">Episode 8</p>
      <p class="text-center mt-2">Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    cards: Number,
  }
}
</script>