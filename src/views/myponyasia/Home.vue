<template>
  <div class="bg-trueGray-800 text-white min-h-screen max-h-full pb-2">
    <!-- Navbar -->
    <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    />
    <!-- End Navbar -->

    <!-- Loading State -->
      <div v-if="loadingState == true">

      <!-- Corousel -->
      <div class="max-w-[85rem] mx-auto">
        <div class="w-full h-[240px] md:h-[255px] lg:h-[450px] bg-trueGray-600 animate-pulse" />
      </div>
      <!-- End Corousel  -->

      <!-- On Progress Section -->
      <section class="my-10 max-w-[85rem] mx-auto">
        <div class="border border-b-2 border-trueGray-700"></div>
        <div class="flex justify-center">
          <router-link to="/myponyasia/anime2" class="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold rounded-lg">On Progress</router-link>
        </div>
        
        <!-- Card -->
        <div class="p-4 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          <AnimeCardSkeleton :topLeft="true" :topRight="true" />
        </div>
        <!-- End Card -->

      </section>
      <!-- End On Progress Section -->

      </div>
    <!-- End loading State -->

    <!-- Data State -->
      <div v-else>

      <!-- Corousel -->
      <div class="max-w-[85rem] mx-auto">
        <vueper-slides  lazy 
                        lazy-load-on-drag 
                        autoplay
                        duration = 4000
                        :infinite="false"
                        :breakpoints="CorouselBreakpoints"
                        :touchable="false"
                        :pauseOnHover="false"
        >
        <vueper-slide v-for="(data, i) in corouselData" :key="i" 
                      :image="data.gambar">
          <template #content>
            <div class="w-full justify-center items-center h-full w-full flex">
              <div class="bg-blue-500 cursor-pointer">
              {{ data.content }}
              </div>
            </div>
          </template>
          </vueper-slide>

          <template #arrow-right>
            <button class="right-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </template>
          <template #arrow-left>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </template>
        </vueper-slides>
      </div>
      <!-- End Corousel  -->

      <!-- On Progress Section -->
      <section class="my-10 max-w-[85rem] mx-auto">
        <div class="border border-b-2 border-trueGray-700"></div>
        <div class="flex justify-center">
          <router-link to="/myponyasia/anime2" class="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold rounded-lg">On Progress</router-link>
        </div>
        
        <!-- Card -->
        <div class="p-4 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          <AnimeCard :topLeft="'KKA'" :topRight="'17 sept'" />
        </div>
        <!-- Card -->

      </section>
      <!-- End On Progress Section -->

      </div>
    <!-- EndData State -->

    <!-- Footer -->
    <Footer />
    <!-- End Footer -->
</div>
</template>

<script>
import {ref} from 'vue'
import Header from '../../components/mpa/Header.vue'
import Footer from '../../components/mpa/Footer.vue'
import AnimeCard from '../../components/mpa/parts/AnimeCard.vue'
import AnimeCardSkeleton from '../../components/mpa/parts/AnimeCardSkeleton.vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  data() {
    return {
      corouselData: [
        {
          title: 'Slide #1',
          content: 'Slide 78888888.',
          link: 'https://antoniandre.github.io/vueper-slides/',
          gambar: require('@/assets/images/myponyasia/landscape1.png')
        },
        {
          title: 'Slide #2',
          content: 'Slide 5555555.',
          link: 'https://antoniandre.github.io/vueper-slides/',
          gambar: require('@/assets/images/myponyasia/landscape2.png')
        },
        {
          title: 'Slide #3',
          content: 'Slide 1111111.',
          link: 'https://antoniandre.github.io/vueper-slides/',
          gambar: require('@/assets/images/myponyasia/otaku-anime.jpg')
        }
      ],
      CorouselBreakpoints: {
        1024: {
          slideRatio: 1 / 5
        },
        769: {
          slideRatio: 1 / 3
        },
        640: {
          slideRatio: 1 / 2,
          arrows: false,
          bulletsOutside: true
        },
      },
    }
  },

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
    VueperSlides, 
    VueperSlide,
  },

  setup(){
    const loadingState = ref(false)

    return{
      loadingState,
    }
  }
}
</script>