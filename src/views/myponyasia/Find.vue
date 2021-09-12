<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-white">

    <!-- Navbar -->
    <Header  
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    /> 
    <!-- Navbar -->

    <!-- Loading State -->
    <div v-if="loadingState == true">
      
      <!-- Find Season Skeleton -->
      <main v-if="$route.params.findBy == 'season'">
        <div class="mx-auto max-w-[90rem] animate-pulse">
          <div class="mx-7 md:mx-14 lg:mx-24">
            
            <!-- Top Section -->
            <div class="mt-8 md:mt-10 mb-7">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="relative flex justify-center">
                <div class="absolute -mt-5 bg-trueGray-800 px-5 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-default">
                  <div class="bg-trueGray-700 px-2 text-trueGray-700 rounded-xl">Seasonal UwU</div>
                </div>
              </div>
            </div>
            <!-- End Top Section -->

            <!-- Seasons -->
            <div class="my-5 md:my-8 space-y-2">

              <!-- Season -->
              <div v-for="loop in 5" :key="loop">
                <div class="flex m-2">
                  <p class="bg-trueGray-700 px-10 py-1 text-transparent rounded-xl cursor-default">2021</p>
                </div>
                <div class="grid grid-cols-2 md:flex md:flex-wrap md:space-x-5">
                  <div class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-700 text-transparent rounded-lg cursor-default">Spring</div>
                  <div class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-700 text-transparent rounded-lg cursor-default">Summer</div>
                  <div class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-700 text-transparent rounded-lg cursor-default">Fall</div>
                  <div class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-700 text-transparent rounded-lg cursor-default">Winter</div>
                </div>
              </div>
              <!-- Season -->

            </div>
            <!-- End Seasons -->

          </div>  
        </div>
      </main>
      <!-- End Find Season Skeleton -->

      <!-- Find Genre Skeleton -->
      <main v-else-if="$route.params.findBy == 'genre'">
        <div class="mx-auto max-w-[90rem] animate-pulse">
          <div class="mx-7 md:mx-14 lg:mx-24">

            <!-- Top Section -->
            <div class="mt-8 md:mt-10">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="relative flex justify-center">
                <div class="absolute -mt-5 bg-trueGray-800 px-5 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-default">
                  <div class="bg-trueGray-700 px-2 text-trueGray-700 rounded-xl">Wakaranai</div>
                </div>
              </div>
            </div>
            <!-- Top Section -->

            <!-- genres -->
            <div class="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center my-8 md:my-12">
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Action</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Adventure</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Comedy</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Drama</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Ecchi</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Fantasy</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Game</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Harem</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Magic</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Martial Arts</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Military</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Mystery</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Parody</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Psychological</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Romance</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">School</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Sci-Fi</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Seinen</div>
              <div class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 text-transparent cursor-default rounded-lg">Shounen</div>
            </div>
            <!-- genres -->

          </div>  
        </div>
      </main>
      <!-- End Find Genre Skeleton -->

      <!-- Find Other Skeleton -->
      <main v-else>
        <div class="mx-auto max-w-[90rem] animate-pulse">
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

            <!-- Cards Container -->
            <div class="p-4 mt-5 grid grid-cols-2 lg:grid-cols-4 gap-14 justify-items-center">

              <!-- Card -->
              <AnimeCardSkeleton :topLeft="false" :topRight="false"/>
              <!-- End Card -->

            </div>
            <!-- End Cards Container -->

          </div>
        </div>
      </main>
      <!-- End Find Other Skeleton -->

    </div>
    <!-- End Loading State -->

    <!-- Data State -->
    <div v-else>

      <!-- Find Season -->
      <main v-if="$route.params.findBy == 'season'">
        <div class="mx-auto max-w-[90rem]">
          <div class="mx-7 md:mx-14 lg:mx-24">

            <!-- Top Section -->
            <div class="mt-8 md:mt-10 mb-7">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="relative flex justify-center">
              <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-default uppercase"> Season </h1>
              </div>
            </div>
            <!-- End Top Section -->

            <!-- Seasons Container -->
            <div v-for="loop in 5" :key="loop" class="my-4 md:my-8">

              <!-- Season -->
              <h1 class="text-2xl font-semibold m-1 ml-3">2021</h1>
              <div class="grid grid-cols-2 md:flex md:flex-wrap md:space-x-5">
                <router-link to="/find/seasonal/[id]" class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-600 rounded-lg hover:bg-blue-700 duration-200">Spring</router-link>
                <router-link to="/find/seasonal/[id]" class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-600 rounded-lg hover:bg-blue-700 duration-200">Summer</router-link>
                <router-link to="/find/seasonal/[id]" class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-600 rounded-lg hover:bg-blue-700 duration-200">Fall</router-link>
                <router-link to="/find/seasonal/[id]" class="px-2 md:px-10 p-1.5 m-2 text-center bg-trueGray-600 rounded-lg hover:bg-blue-700 duration-200">Winter</router-link>
              </div>
              <!-- Season -->

            </div>
            <!-- End Seasons Container -->

          </div>  
        </div>
      </main>
      <!-- End Find Season -->

      <!-- Find Genre -->
      <main v-else-if="$route.params.findBy == 'genre'">
        <div class="mx-auto max-w-[90rem]">
          <div class="mx-7 md:mx-14 lg:mx-24">

            <!-- Top Section -->
            <div class="mt-8 md:mt-10">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="relative flex justify-center">
              <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-default uppercase"> Genre </h1>
              </div>
            </div>
            <!-- End Top Section -->

            <!-- Genres Conteiner -->
            <div class="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center my-8 md:my-12">
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Adventure</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Comedy</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Drama</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Ecchi</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Fantasy</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Game</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Harem</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Magic</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Martial Arts</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Military</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Mystery</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Parody</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Psychological</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Romance</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">School</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Sci-Fi</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Seinen</router-link>
              <router-link to="/myponyasia/genre/1" class="px-2 md:px-10 p-1.5 text-center bg-trueGray-700 m-2 rounded-lg hover:bg-blue-700 duration-200">Shounen</router-link>
            </div>
            <!-- Genres Conteiner -->

          </div>  
        </div>
      </main>
      <!-- End Find Genre -->
      
      <!-- Find Other -->
      <main v-else>
        <div class="mx-auto max-w-[90rem]">
          
          <!-- Top-->
          <div class="mx-7 md:mx-14 lg:mx-24">

            <!-- Top Section -->
            <div class="mt-8 md:mt-10">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="relative flex justify-center">
              <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-default uppercase">{{ $route.params.findBy }}</h1>
              </div>
            </div>
            <!-- End Top Section -->

            <!-- Cards Container -->
            <div class="p-4 mt-5 grid grid-cols-2 lg:grid-cols-5 gap-14 justify-items-center">

              <!-- Card -->
              <AnimeCard :topLeft="'LALAL'" :topRight="'TESting'" />
              <!-- End Card -->

            </div>
            <!-- EndCards Container -->

          </div>
          <!-- Top-->

          <!-- Bottom -->
          <div class="mx-7 md:mx-14 lg:mx-24 mt-10">
            <div class="flex relative justify-center border border-b-2 border-trueGray-700 mb-12"></div>
          </div>
          <!-- End Bottom -->

        </div>
      </main>
      <!-- End Find Other -->

    </div>
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