<template>
  <!-- Navbar -->
  <div class="">
      <div class="flex justify-between bg-trueGray-900 p-4 rounded-b shadow-xl max-w-[90rem] mx-auto">
        <router-link to="/myponyasia/home">
          <img class="w-40" src="../../assets/images/myponyasia/logo-myponyasia.png" alt="" />
        </router-link>

        <!-- Loading State button -->
        <div class="mr-0 md:mr-10 flex space-x-3">
          <button @click="$emit('loading-state')" v-text="LoadingStateProps ? 'Normal State' : 'Loading State'" class="bg-trueGray-600 p-1 rounded-lg font-semibold px-3 hover:bg-blue-700 duration-200"></button>
        </div>
        <!-- End Loading State button -->
        <div>
          <button @click="showSearchModal = true" class="bg-trueGray-600 p-1.5 rounded-full font-semibold px-5 hover:bg-blue-700 duration-200">Search</button>
        </div>
      </div>

      <!-- Search Modal -->
      <Dialog :open="showSearchModal">
        <div class="fixed inset-0 z-10 overflow-y-auto max-w-[90rem] mx-auto">
          <div class="min-h-screen px-4 text-center">
              <DialogOverlay @click="showSearchModal = false" class="fixed inset-0 bg-black/80" />
              <div class="inline-block w-full md:w-4/5 lg:w-3/4 h-full  transform shadow-xl rounded-2xl">

                <!-- Search Section -->
                <div class="px-20 pt-7 pb-5 bg-trueGray-800 rounded-b-2xl">
                  <div class="flex">
                    <input type="text" title="Search" placeholder="Search Title" class="peer w-full border-b-2 border-trueGray-600 bg-trueGray-800 focus:outline-none placeholder-transparent text-white/75" autofocus />
                    <svg width="24" height="24" fill="none" class="absolute left-12 text-white/50 stroke-2">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span class="absolute peer-focus:top-2 peer-placeholder-shown:top-7 top-2 left-20 text-trueGray-200/50 duration-150 text-sm cursor-default">Search Title</span>
                  </div>
                  <button class="bg-trueGray-600 py-1.5 px-10 mt-3 rounded-full text-white/75 font-semibold hover:bg-blue-700 hover:text-white duration-150 ">Search</button>

                  <button @click="showSearchModal = false" class="absolute right-5 top-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-opacity-50 duration-150" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <!-- End Search Section -->

                <!-- Search Result -->
                <div class="text-white mt-3 bg-trueGray-800 rounded-2xl h-[550px] md:h-[850px] lg:h-[500px] 2xl:h-[850px] overflow-y-scroll overflow-x-hidden py-5 px-5 md:px-10 lg:px-20">
                  <div class="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
                  <AnimeCard :cards="40" :episodeId="1" :topLeft="'Special'" />
                  </div>
                </div>
                <!-- End Search Result -->

              </div>
          </div>
        </div>
      </Dialog>
      <!-- End Search Modal -->

  </div>
    <!-- End Navbar -->
</template>

<script>
import {ref} from 'vue'
import {
  // TransitionRoot,
  // TransitionChild,
  Dialog,
  DialogOverlay,
} from '@headlessui/vue'

import AnimeCard from '@/components/mpa/parts/AnimeCard.vue'
// import AnimeCardSkeleton from '@/components/mpa/parts/AnimeCardSkeleton.vue'

export default {
  components: {
    AnimeCard,
    // AnimeCardSkeleton,
    Dialog,
    DialogOverlay,
  },

  props:{
    LoadingStateProps: Boolean
  },

  emits: ['loading-state'],

  setup(){
    
    const showSearchModal = ref(false)

    return{
      showSearchModal,
    }
  }
}
</script>