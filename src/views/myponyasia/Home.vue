<template>
  <div class="bg-trueGray-800 text-white min-h-screen max-h-full pb-2">
    <!-- Navbar -->
    <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    />
    <!-- End Navbar -->

    <!-- Corousel Section -->
    <div class="relative flex flex-col lg:justify-center lg:flex-row w-full bg-black h-72 md:h-[350px] lg:h-96">
        
        <!-- Corousel -->
        <img class="w-full h-full lg:h-full object-cover opacity-70 lg:opacity-30" src="../../assets/images/myponyasia/landscape1.png" alt="Corousel">
        <div class="lg:absolute w-full h-full lg:h-96 flex flex-col lg:justify-center items-center py-5 lg:py-0 font-semibold">
          <p class="text-base md:text-2xl lg:text-3xl cursor-default capitalize text-center">Gotoubun no hanayome season 2 is out!</p>
          <p class="cursor-default capitalize text-center font-normal truncate w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas expedita consectetur, perferendis eveniet est deleniti esse sit quae. Doloremque facilis, modi earum ipsum, illum odio alias ullam natus dolor maiores deserunt tempore placeat dolores ducimus quaerat nostrum cupiditate eum!</p>
          <a href="#" class="ring-2 ring-white p-2 rounded-lg mt-5 hover:bg-white hover:bg-opacity-75 hover:ring-opacity-75 hover:text-black duration-150">Click Here</a>
        </div>
        <!-- End Corousel -->

        <!-- Button -->
        <button class="absolute top-[40%] right-5 lg:right-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="absolute top-[40%] left-5 lg:left-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <!-- End Button -->

        <!-- Progress bar Corousel -->
        <div class="static lg:absolute bottom-1 items-center justify-center flex space-x-2">
          <div class="w-6 md:w-9 lg:w-12 bg-blue-700 bg-opacity-80 h-1" />
          <div class="w-6 md:w-9 lg:w-12 bg-blue-700 bg-opacity-80 h-1" />
          <div class="w-6 md:w-9 lg:w-12 bg-blue-700 bg-opacity-80 h-1" />
          <div class="w-6 md:w-9 lg:w-12 bg-blue-700 bg-opacity-80 h-1" />
          <div class="w-6 md:w-9 lg:w-12 bg-blue-700 bg-opacity-80 h-1" />
          <div class="w-6 md:w-9 lg:w-12 bg-blue-700 bg-opacity-80 h-1" />
        </div>
        <!-- End Progress bar Corousel -->
    </div>
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
        <div v-show="loadingState == false" class="flex justify-end">
            <router-link to="/myponyasia/anime" class=" mr-5 p-2 bg-blue-700 font-semibold rounded-lg hover:bg-blue-800 duration-200">See More</router-link>
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
import Header from '../../components/mpa/Header.vue'
import Footer from '../../components/mpa/Footer.vue'
import AnimeCard from '../../components/mpa/AnimeCard.vue'
import AnimeCardSkeleton from '../../components/mpa/parts/AnimeCardSkeleton.vue'

export default {
  props: {
    loadingStateProps: {
      type: Boolean,
      default: false,
    }
  },

  components:{
    Header,
    Footer,
    AnimeCard,
    AnimeCardSkeleton,
  },

  setup(){
    const loadingState = ref(false)

    return{
      loadingState,
    }
  }
}
</script>