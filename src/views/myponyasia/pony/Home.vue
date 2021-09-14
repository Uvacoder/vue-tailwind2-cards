<template>
  <div class="bg-pony-primary text-white">
      <Header 
        :LoadingStateProps = "loadingState ? true : false"
        @loading-state = "loadingState = !loadingState"
      />

      <!-- Loading State -->
      <main v-if="loadingState == true" class="max-w-[85rem] mx-auto">
        Ini Loading State
      </main>
      <!-- End Loading State -->

      <!-- Data State -->
      <main v-else class="max-w-[85rem] mx-auto">

          <!-- Corousel -->
          <section>
            <vueper-slides  lazy 
                            lazy-load-on-drag 
                            autoplay
                            duration = 4000
                            :infinite="false"
                            :breakpoints="CorouselBreakpoints"
                            :pauseOnHover="false"
            >
            <vueper-slide v-for="(data, i) in corouselData" :key="i" :image="data.gambar">

              <!-- Content -->
              <template #content>
                  <div class="w-full justify-center items-center flex h-full bg-black bg-opacity-25">
                  <div class="w-[85%] text-center">
                    <h1 class="text-2xl line-clamp-3 font-bold">{{ data.content.title }} </h1>
                    <h3 class="mt-5 mb-10 text-lg line-clamp-5">{{ data.content.description }}</h3>
                    <a v-show="data.content.link" href="data.content.link" class="px-5 ring-2 ring-white hover:bg-white hover:text-black font-semibold duration-150 bg-opacity-75 p-1.5 rounded-lg">Ini Tombol</a>
                  </div>
                </div>
              </template>
              <!-- End Content -->

            </vueper-slide>

              <!-- Right Arrow Button -->
              <template #arrow-right>
                <button class="right-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </template>
              <!-- End Right Arrow Button -->

              <!-- Left Arrow Button -->
              <template #arrow-left>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </template>
              <!-- End Left Arrow Button -->

            </vueper-slides>
          </section>
          <!-- End Corousel -->

          <!-- Progress -->
          <section class="my-16 max-w-[90%] mx-auto">

            <!-- Top Section -->
            <div class="relative justify-center">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="flex justify-center">
                <router-link to="/myponyasia/anime2" class="absolute -mt-5 bg-pony-primary text-white hover:text-opacity-50 duration-150 px-5 text-3xl font-semibold rounded-lg">Subtittle Progress</router-link>
              </div>
            </div>
            <!-- End Top Section -->

            <!-- Content -->
            Progress bar
            <!-- End Content -->

          </section>
          <!-- End Progress -->

          <!-- Latest Video -->
          <section class="my-16 max-w-[90%] mx-auto">

            <!-- Top Section -->
            <div class="relative justify-center">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="flex justify-center">
                <router-link to="/myponyasia/anime2" class="absolute -mt-5 bg-pony-primary text-white hover:text-opacity-50 duration-150 px-5 text-3xl font-semibold rounded-lg">Latest Release</router-link>
              </div>
            </div>
            <!-- End Top Section -->

            <!-- Content -->
            <div class="grid grid-cols-2 gap-5 mt-10">
              <router-link to="/myponyasia/pony/stream" class="relative group">
                <img src="@\assets\images\myponyasia\landscape1.png" alt="Poster" class="rounded-xl object-cover max-h-[337px] group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 bg-black/90 p-1 px-3 rounded-tr-lg rounded-bl-lg truncate max-w-[580px]">Episode 20 - The Mysterious Voice & The 5 Habits of Highly Effective Ponies</span>
                <div class="absolute right-1 top-1 flex space-x-2">
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">ID</div>
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">En</div>
                </div>
              </router-link>  
              <router-link to="/myponyasia/pony/stream" class="relative group">
                <img src="@\assets\images\myponyasia\landscape1.png" alt="Poster" class="rounded-xl object-cover max-h-[337px] group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 bg-black/90 p-1 px-3 rounded-tr-lg rounded-bl-lg truncate max-w-[580px]">Episode 20 - The Mysterious Voice & The 5 Habits of Highly Effective Ponies</span>
                <div class="absolute right-1 top-1 flex space-x-2">
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">ID</div>
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">En</div>
                </div>
              </router-link>  
              <router-link to="/myponyasia/pony/stream" class="relative group">
                <img src="@\assets\images\myponyasia\landscape1.png" alt="Poster" class="rounded-xl object-cover max-h-[337px] group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 bg-black/90 p-1 px-3 rounded-tr-lg rounded-bl-lg truncate max-w-[580px]">Episode 20 - The Mysterious Voice & The 5 Habits of Highly Effective Ponies</span>
                <div class="absolute right-1 top-1 flex space-x-2">
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">ID</div>
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">En</div>
                </div>
              </router-link>  
              <router-link to="/myponyasia/pony/stream" class="relative group">
                <img src="@\assets\images\myponyasia\landscape1.png" alt="Poster" class="rounded-xl object-cover max-h-[337px] group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 bg-black/90 p-1 px-3 rounded-tr-lg rounded-bl-lg truncate max-w-[580px]">Episode 20 - The Mysterious Voice & The 5 Habits of Highly Effective Ponies</span>
                <div class="absolute right-1 top-1 flex space-x-2">
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">ID</div>
                  <div class="bg-black/90 px-5 p-1.5 rounded-lg uppercase font-semibold">En</div>
                </div>
              </router-link>  
            </div>
            <!-- End Content -->

          </section>
          <!-- End Latest Video -->

          <!-- Latest Comics -->
          <section class="my-16 max-w-[90%] mx-auto">

            <!-- Top Section -->
            <div class="relative justify-center">
              <div class="border border-b-2 border-trueGray-700"></div>
              <div class="flex justify-center">
                <router-link to="/myponyasia/anime2" class="absolute -mt-5 bg-pony-primary text-white hover:text-opacity-50 duration-150 px-5 text-3xl font-semibold rounded-lg">Latest Comics</router-link>
              </div>
            </div>
            <!-- End Top Section -->

            <!-- Content -->
            <div class="grid grid-cols-4 gap-5 mt-10 justify-items-center">

              <router-link to="/myponyasia/pony/comics" class="relative group">
                <img src="@\assets\images\myponyasia\poster-portrait.webp" alt="Comic Poster" class="max-w-[250px] max-h-[360px] w-[250px] h-[360px] rounded-lg object-cover group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 p-1.5 bg-black/90 w-full text-center rounded-b-lg truncate">Other Comics</span>
                <span class="absolute top-0 bg-black/90 p-1.5 px-3 rounded-tl-lg rounded-br-lg font-semibold max-w-[150px] truncate">Canterlot High: March Radness</span>
                <div class="absolute bottom-10 left-1 flex space-x-2">
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">EN</span>
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">ID</span>
                </div>
              </router-link>
              <router-link to="/myponyasia/pony/comics" class="relative group">
                <img src="@\assets\images\myponyasia\poster-portrait.webp" alt="Comic Poster" class="max-w-[250px] max-h-[360px] w-[250px] h-[360px] rounded-lg object-cover group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 p-1.5 bg-black/90 w-full text-center rounded-b-lg truncate">Other Comics</span>
                <span class="absolute top-0 bg-black/90 p-1.5 px-3 rounded-tl-lg rounded-br-lg font-semibold max-w-[150px] truncate">Canterlot High: March Radness</span>
                <div class="absolute bottom-10 left-1 flex space-x-2">
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">EN</span>
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">ID</span>
                </div>
              </router-link>
              <router-link to="/myponyasia/pony/comics" class="relative group">
                <img src="@\assets\images\myponyasia\poster-portrait.webp" alt="Comic Poster" class="max-w-[250px] max-h-[360px] w-[250px] h-[360px] rounded-lg object-cover group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 p-1.5 bg-black/90 w-full text-center rounded-b-lg truncate">Other Comics</span>
                <span class="absolute top-0 bg-black/90 p-1.5 px-3 rounded-tl-lg rounded-br-lg font-semibold max-w-[150px] truncate">Canterlot High: March Radness</span>
                <div class="absolute bottom-10 left-1 flex space-x-2">
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">EN</span>
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">ID</span>
                </div>
              </router-link>
              <router-link to="/myponyasia/pony/comics" class="relative group">
                <img src="@\assets\images\myponyasia\poster-portrait.webp" alt="Comic Poster" class="max-w-[250px] max-h-[360px] w-[250px] h-[360px] rounded-lg object-cover group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 p-1.5 bg-black/90 w-full text-center rounded-b-lg truncate">Other Comics</span>
                <span class="absolute top-0 bg-black/90 p-1.5 px-3 rounded-tl-lg rounded-br-lg font-semibold max-w-[150px] truncate">Canterlot High: March Radness</span>
                <div class="absolute bottom-10 left-1 flex space-x-2">
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">EN</span>
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">ID</span>
                </div>
              </router-link>

            </div>
            <!-- End Content -->

          </section>
          <!-- End Latest Comics -->

      </main>
      <!-- End Data State -->
        
      <Footer />
  </div>
</template>

<script>
import {ref} from 'vue'
import Header from '@/components/mpa/pony/Header.vue'
import Footer from '@/components/mpa/pony/Footer.vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  data() {
    return {
        corouselData: [
          {
            content: {
              title: 'Slide 1.',
              description: 'Ini Slide ke 1',
              link: 'https://pony.myponyasia.com/',
            },
            gambar: require('@/assets/images/myponyasia/landscape1.png')
          },
          {
            content: {
              title: 'Slide 2',
              description: 'Ini Slide ke 2',
              link: '',
            },
            gambar: require('@/assets/images/myponyasia/landscape2.png')
          },
          {
            content: {
              title: 'Slide 3',
              description: 'Ini Slide ke 3',
              link: '',
            },
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
  
    components: {
        Header,
        Footer,
        VueperSlides,
        VueperSlide,
    },

    setup() {
      const loadingState = ref(false)

      return {
        loadingState,
      }
    }


}
</script>