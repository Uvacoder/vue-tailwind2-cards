<template>
  <div class="bg-trueGray-800 text-white min-h-screen max-h-full pb-2">
    <!-- Navbar -->
    <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    />
    <!-- End Navbar -->

    <!-- Corousel Section -->
      <!-- Navigation, autoplay not working on production -->
      <swiper
      :options="swiperOptions"
      :slides-per-view="auto"
      navigation
      lazy
      loop
      autoPlay
      :pagination="{ clickable: true, type: 'bullets'}"
      class="h-72 md:h-[350px] lg:h-96"
      >
        <swiper-slide class="relative flex flex-col lg:justify-center lg:flex-row w-full bg-black h-72 md:h-[350px] lg:h-96">
          <!-- Corousel -->
        <img class="w-full h-full lg:h-full object-cover opacity-70 lg:opacity-30" src="../../assets/images/myponyasia/landscape1.png" alt="Corousel">
        <div class="lg:absolute w-full h-full lg:h-96 flex flex-col lg:justify-center items-center py-5 lg:py-0 font-semibold">
          <p class="text-base md:text-2xl lg:text-3xl cursor-default capitalize text-center px-10 line-clamp-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi, perspiciatis quos aliquid ipsam sunt fuga? Distinctio deleniti possimus amet veniam quae natus dicta aut repellat facere illo, maxime saepe.</p>
          <p class="cursor-default capitalize text-center font-normal truncate w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas expedita consectetur, perferendis eveniet est deleniti esse sit quae. Doloremque facilis, modi earum ipsum, illum odio alias ullam natus dolor maiores deserunt tempore placeat dolores ducimus quaerat nostrum cupiditate eum!</p>
          <a href="#" class="ring-2 ring-white p-2 rounded-lg mt-4 mb-3 hover:bg-white hover:bg-opacity-75 hover:ring-opacity-75 hover:text-black duration-150">Click Here</a>
        </div>
        <!-- End Corousel -->
        </swiper-slide>
        <swiper-slide class="relative flex flex-col lg:justify-center lg:flex-row w-full bg-black h-72 md:h-[350px] lg:h-96">
          <!-- Corousel -->
        <img class="w-full h-full lg:h-full object-cover opacity-70 lg:opacity-30" src="../../assets/images/myponyasia/landscape2.png" alt="Corousel">
        <div class="lg:absolute w-full h-full lg:h-96 flex flex-col lg:justify-center items-center py-5 lg:py-0 font-semibold">
          <p class="text-base md:text-2xl lg:text-3xl cursor-default capitalize text-center px-10 line-clamp-3">Gotoubun no hanayome season 2 is out!</p>
          <p class="cursor-default capitalize text-center font-normal truncate w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas expedita consectetur, perferendis eveniet est deleniti esse sit quae. Doloremque facilis, modi earum ipsum, illum odio alias ullam natus dolor maiores deserunt tempore placeat dolores ducimus quaerat nostrum cupiditate eum!</p>
          <a href="#" class="ring-2 ring-white p-2 rounded-lg mt-4 mb-3 hover:bg-white hover:bg-opacity-75 hover:ring-opacity-75 hover:text-black duration-150">Click Here</a>
        </div>
        <!-- End Corousel -->
        </swiper-slide>
        <swiper-slide class="relative flex flex-col lg:justify-center lg:flex-row w-full bg-black h-72 md:h-[350px] lg:h-96">
          <!-- Corousel -->
        <img class="w-full h-full lg:h-full object-cover opacity-70 lg:opacity-30" src="../../assets/images/myponyasia/poster-portrait.webp" alt="Corousel">
        <div class="lg:absolute w-full h-full lg:h-96 flex flex-col lg:justify-center items-center py-5 lg:py-0 font-semibold">
          <p class="text-base md:text-2xl lg:text-3xl cursor-default capitalize text-center px-10 line-clamp-3">Gotoubun no hanayome season 2 is out!</p>
          <p class="cursor-default capitalize text-center font-normal truncate w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas expedita consectetur, perferendis eveniet est deleniti esse sit quae. Doloremque facilis, modi earum ipsum, illum odio alias ullam natus dolor maiores deserunt tempore placeat dolores ducimus quaerat nostrum cupiditate eum!</p>
          <a href="#" class="ring-2 ring-white p-2 rounded-lg mt-4 mb-3 hover:bg-white hover:bg-opacity-75 hover:ring-opacity-75 hover:text-black duration-150">Click Here</a>
        </div>
        <!-- End Corousel -->
        </swiper-slide>
      </swiper>

        <!-- Button -->
        <!-- <button class="absolute top-[40%] right-5 lg:right-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="absolute top-[40%] left-5 lg:left-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button> -->
        <!-- End Button -->

        <!-- Progress bar Corousel -->
        <!-- <div class="pbar static lg:absolute bottom-1 items-center justify-center flex space-x-2">
          <div class="w-6 md:w-9 lg:w-12 bg-blue-700 bg-opacity-80 h-1" />
        </div>  -->
        <!-- End Progress bar Corousel -->
    <!-- End Corousel Section -->

    <!-- On Progress Section -->
    <div class="my-10">
        <div class="border border-b-2 border-trueGray-700"></div>
        <div class="flex justify-center">
            <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">On Progress</h1>
        </div>
        
        <!-- Anime Card -->
        <div v-show="loadingState == false" class="p-4 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
        </div>
        <!-- End Anime Card -->

        <!-- Anime Card Skeleton -->
        <div v-show="loadingState == true" class="p-4 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
        </div>
        <!-- End Anime Card Skeleton -->
    </div>
    <!-- End On Progress Section -->

    <!-- Finished Anime -->
    <div class="mt-10 mb-5">
        <div class="border border-b-2 border-trueGray-700"></div>
        <div class="flex justify-center">
            <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">Finished Anime</h1>
        </div>

        <div class="p-4 mt-5">
            <div v-show="loadingState == false" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>

            <div v-show="loadingState == true" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
              <AnimeCardSkeleton />
              <AnimeCardSkeleton />
              <AnimeCardSkeleton />
              <AnimeCardSkeleton />
            </div>
        </div>
        <div v-show="loadingState == false" class="flex justify-center">
            <router-link to="/myponyasia/anime2" class="p-2 px-7 bg-trueGray-600 font-semibold rounded-lg hover:bg-blue-700 duration-200">See More</router-link>
        </div>
        
    </div>
    <!-- End Finished Anime -->

    <!-- Footer -->
    <Footer />
    <!-- End Footer -->
</div>
</template>

<script>
import {ref} from 'vue'
import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import Header from '../../components/mpa/Header.vue'
import Footer from '../../components/mpa/Footer.vue'
import AnimeCard from '../../components/mpa/AnimeCard.vue'
import AnimeCardSkeleton from '../../components/mpa/parts/AnimeCardSkeleton.vue'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/lazy/lazy.scss';

SwiperCore.use([Navigation, Pagination]);

export default {
  props: {
    loadingStateProps: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      swiperOptions:{
        Autoplay: true,
        pagination: true,
      }
    }
  },

  components:{
    Header,
    Footer,
    AnimeCard,
    AnimeCardSkeleton,
    Swiper,
    SwiperSlide,
  },

  setup(){
    const loadingState = ref(false)

    return{
      loadingState,
    }
  }
}
</script>