<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-white">

    <!-- Navbar -->
    <Header  
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    /> 
    <!-- Navbar -->

    <!-- Loading State -->
      <main v-if="loadingState == true" class="mx-auto max-w-[90rem] animate-pulse">
        <div class="mx-7 md:mx-14 lg:mx-24">

          <!-- Top Section -->
          <div class="mt-8 md:mt-10">
            <div class="border border-b-2 border-trueGray-700"></div>
            <div class="relative flex justify-center">
              <div class="absolute -mt-5 bg-trueGray-800 px-5 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-default">
                <div class="bg-trueGray-700 px-2 text-trueGray-700 rounded-xl">Slice Of Life :3</div>
              </div>
            </div>
          </div>
          <!-- End Top Section -->

          <!-- Cards Container Skeleton -->
          <div class="py-5 mt-2 md:mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-5 justify-items-center">

            <!-- Card Skeleton -->
            <AnimeCardSkeleton />
            <!-- Card -->

          </div>
          <!-- End Cards Container Skeleton -->

        </div>
      </main>
    <!-- End Loading State -->

    <!-- Data State -->
      <main v-else class="mx-auto max-w-[90rem]">
        <div class="mx-7 md:mx-14 lg:mx-24">

          <!-- Top Section -->
          <div class="mt-8 md:mt-10">
            <div class="border border-b-2 border-trueGray-700"></div>
            <div class="relative flex justify-center">
              <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-default uppercase"> {{ $route.params.findBy }} </h1>
              <router-link :to="'/myponyasia/'+$route.params.findBy" class="text-center mt-8 text-base">See other {{ $route.params.findBy }} </router-link>
            </div>
          </div>
          <!-- End Top Section -->

          <!-- Cards Container -->
          <div class="py-5 mt-2 md:mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-5 justify-items-center">
            
            <!-- Card -->
              <AnimeCard />
            <!-- End Card -->

          </div>
          <!-- End Cards Container -->

        </div>
      </main>
    <!-- End Data State -->

    <!-- Footer -->
    <Footer /> 
    <!-- End Footer -->
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import Header from '../../components/mpa/Header.vue'
import Footer from '../../components/mpa/Footer.vue'
import AnimeCard from '../../components/mpa/parts/AnimeCard.vue'
import AnimeCardSkeleton from '../../components/mpa/parts/AnimeCardSkeleton.vue'

export default {
  components: {
    Header,
    Footer,
    AnimeCard,
    AnimeCardSkeleton,
  },

  setup() {
    const loadingState = ref(false)
    const testRoute = ref(useRoute().params.findBy)

    return {
      loadingState,
      testRoute,
    }
  }
}
</script>