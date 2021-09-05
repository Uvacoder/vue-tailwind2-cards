<template>
  <div v-for="(card, index) in cards" :key="index">
    <router-link :to=" episodeId ? '/myponyasia/'+episodeId : '/myponyasia/anime2' " class="relative p-2 flex flex-col w-[147px] md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
      <img class="rounded-xl" src="../../../assets/images/myponyasia/poster-portrait.webp" alt="Poster"/>
      <p v-show="topLeft" class="absolute p-2 bg-blue-700 top-0 left-0 rounded-tl-xl font-bold text-xs md:text-sm"> {{ topLeft }} </p>
      <p v-show="topRight" class="absolute p-2 bg-blue-700 top-0 right-0 rounded-tr-xl font-bold text-xs md:text-sm"> {{ topRight }} </p>
      <p v-show="episode" class="-mt-4 md:-mt-6 text-center bg-trueGray-600 font-semibold rounded-b-xl text-xs md:text-sm lg:text-base">Episode {{ episode }} </p>
      <p class="text-center mt-2 line-clamp-3 text-xs md:text-base">Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    cards: {
      default: 5,
      type: Number
    },
    topLeft: {
      default: null,
      type: String
    },
    topRight: {
      default: null,
      type: String
      },  
    episode: {
      default: null,
      type: Number
    },
    episodeId: {
      type: Number
    },
  }
}
</script>