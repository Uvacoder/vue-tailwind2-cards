<template>
  <div class="bg-trueGray-800 text-white min-h-screen max-h-full pb-2">
    <!-- Navbar -->
    <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    />
    <!-- End Navbar -->

    <!-- Corousel -->

    <!-- Navigation, autoplay not working on production -->
      <!-- <vue-glide>
        <vue-glide-slide>
          <-- Corousel -->
        <!-- <img class="w-full h-full lg:h-full object-cover opacity-70 lg:opacity-30" src="../../assets/images/myponyasia/landscape1.png" alt="Corousel">
        <div class="lg:absolute w-full h-full lg:h-96 flex flex-col lg:justify-center items-center py-5 lg:py-0 font-semibold">
          <p class="text-base md:text-2xl lg:text-3xl cursor-default capitalize text-center px-10 line-clamp-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi, perspiciatis quos aliquid ipsam sunt fuga? Distinctio deleniti possimus amet veniam quae natus dicta aut repellat facere illo, maxime saepe.</p>
          <p class="cursor-default capitalize text-center font-normal truncate w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas expedita consectetur, perferendis eveniet est deleniti esse sit quae. Doloremque facilis, modi earum ipsum, illum odio alias ullam natus dolor maiores deserunt tempore placeat dolores ducimus quaerat nostrum cupiditate eum!</p>
          <a href="#" class="ring-2 ring-white p-2 rounded-lg mt-4 mb-3 hover:bg-white hover:bg-opacity-75 hover:ring-opacity-75 hover:text-black duration-150">Click Here</a>
        </div> -->
        <!-- End Corousel -->
        <!-- </vue-glide-slide> -->
        <!-- <vue-glide-slide> -->
          <!-- Corousel -->
        <!-- <img class="w-full h-full lg:h-full object-cover opacity-70 lg:opacity-30" src="../../assets/images/myponyasia/landscape2.png" alt="Corousel">
        <div class="lg:absolute w-full h-full lg:h-96 flex flex-col lg:justify-center items-center py-5 lg:py-0 font-semibold">
          <p class="text-base md:text-2xl lg:text-3xl cursor-default capitalize text-center px-10 line-clamp-3">Gotoubun no hanayome season 2 is out!</p>
          <p class="cursor-default capitalize text-center font-normal truncate w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas expedita consectetur, perferendis eveniet est deleniti esse sit quae. Doloremque facilis, modi earum ipsum, illum odio alias ullam natus dolor maiores deserunt tempore placeat dolores ducimus quaerat nostrum cupiditate eum!</p>
          <a href="#" class="ring-2 ring-white p-2 rounded-lg mt-4 mb-3 hover:bg-white hover:bg-opacity-75 hover:ring-opacity-75 hover:text-black duration-150">Click Here</a>
        </div> -->
        <!-- End Corousel -->
        <!-- </vue-glide-slide>
        <vue-glide-slide> -->
          <!-- Corousel -->
        <!-- <img class="w-full h-full lg:h-full object-cover opacity-70 lg:opacity-30" src="../../assets/images/myponyasia/poster-portrait.webp" alt="Corousel">
        <div class="lg:absolute w-full h-full lg:h-96 flex flex-col lg:justify-center items-center py-5 lg:py-0 font-semibold">
          <p class="text-base md:text-2xl lg:text-3xl cursor-default capitalize text-center px-10 line-clamp-3">Gotoubun no hanayome season 2 is out!</p>
          <p class="cursor-default capitalize text-center font-normal truncate w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas expedita consectetur, perferendis eveniet est deleniti esse sit quae. Doloremque facilis, modi earum ipsum, illum odio alias ullam natus dolor maiores deserunt tempore placeat dolores ducimus quaerat nostrum cupiditate eum!</p>
          <a href="#" class="ring-2 ring-white p-2 rounded-lg mt-4 mb-3 hover:bg-white hover:bg-opacity-75 hover:ring-opacity-75 hover:text-black duration-150">Click Here</a>
        </div> -->
        <!-- End Corousel -->
        <!-- </vue-glide-slide>
      </vue-glide> -->
      <!-- <vue-glide>
      <vue-glide-slide v-for="i in array" :key="i">
        Slide {{ i }}
      </vue-glide-slide>
    </vue-glide> -->
    <vueper-slides>
      <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
    </vueper-slides>


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
    <!-- End Corousel -->

    <!-- On Progress Section -->
    <section className="my-10 max-w-[85rem] mx-auto">
      <div className="border border-b-2 border-trueGray-700"></div>
      <div className="flex justify-center">
        <a href="/find/status/" className="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold rounded-lg">On Progress</a>
      </div>
      
      <!-- Anime Card -->
      <div v-show="loadingState == false" className="p-4 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
        <AnimeCard :cards="5" />
      </div>
      <div v-show="loadingState == true" className="p-4 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
        <AnimeCardSkeleton :cards="5" />
      </div>
      <!-- End Anime Card -->
    </section>
    <!-- End On Progress Section -->

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
  // data() {
  //   return {
  //     setting: {
  //         "dots": true,
  //         "dotsClass": "slick-dots custom-dot-class",
  //         "edgeFriction": 0.35,
  //         "infinite": false,
  //         "speed": 500,
  //         "slidesToShow": 1,
  //         "slidesToScroll": 1
  //     },
  //   }
  // },

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