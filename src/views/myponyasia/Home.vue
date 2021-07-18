<template>
  <div class="bg-trueGray-800 text-white min-h-screen max-h-full pb-2">
    <!-- Navbar -->
    <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    />
    <!-- End Navbar -->

    <!-- Corousel Section -->
    <div class="flex w-full bg-black h-96">
        <img class="w-full h-full object-cover opacity-30" src="../../assets/images/myponyasia/landscape1.png" alt="Corousel"/>
        <div class="absolute w-full h-96 flex flex-col justify-center items-center font-semibold">
            <p class="text-xl md:text-3xl cursor-default capitalize text-center">Gotoubun no hanayome season 2 is out!</p>
            <router-link to="/myponyasia/anime" class="ring-2 ring-white p-2 rounded-lg mt-3 hover:bg-white hover:text-black duration-150">Click Here</router-link>
        </div>
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