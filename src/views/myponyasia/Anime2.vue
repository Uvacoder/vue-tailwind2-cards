<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-white">
    <!-- Navbar -->
      <div class="flex justify-start bg-trueGray-900 p-4 rounded-b shadow-xl">
        <div>
          <a href="/myAnimeAsia/homepage">
            <img class="w-40" src="../../assets/images/myponyasia/logo-myponyasia.png" alt="" />
          </a>
        </div>
      </div>
    <!-- End Navbar -->

    <!-- Main -->
    <div>
      <!-- Parralax -->
      <!-- <div class="w-screen bg-blue-500">
        <img class="bg-auto h-52 w-full" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster">
      </div> -->
      <div class="flex w-full bg-black h-72">
          <img class="min-w-full max-w-full h-full object-cover" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Corousel"/>
      </div>
      <!-- End Parralax -->

      <!-- Content -->
      <div class="flex justify-between container mx-auto mt-5">

        <!-- Left Content -->
        <div class="w-[25%] flex flex-col mb-5">
          <img src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster" class="-mt-56 mb-5 w-[90%]">
          <a href="#" class="p-2 px-10 bg-blue-500 hover:bg-blue-700 duration-150 rounded-lg text-center font-semibold w-[90%]">Streaming</a>
        <div class="border-b-2 border-trueGray-700 my-5 w-[90%]"></div>
          <a href="#" class="p-2 px-10 bg-blue-500 hover:bg-blue-700 duration-150 rounded-lg text-center font-semibold w-[90%]">...More</a>
        </div>
        <!-- End Left Content -->

        <!-- Right Content -->
        <div class="w-[75%] pb-5">

          <!-- Title -->
          <div class="flex space-x-2 items-center">
            <span class="text-xl font-bold cursor-default capitalize"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sint.</span>
          </div>
          <!-- End Title -->

          <!-- Second title -->
          <span class="cursor-default capitalize"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sint.</span>
          <!-- End Second title -->

          <!-- Status -->
          <div class="flex space-x-2 items-center mt-5">

            <!-- First -->
            <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 text-green-500 p-0.5 bg-trueGray-100 rounded-full">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            </div>
            <span class="font-semibold cursor-default">TV</span>
            <!-- End First -->

            <!-- Second -->
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 text-purple-500 p-0.5 bg-trueGray-100 rounded-full ml-5">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            </div>
            <span class="font-semibold cursor-default">OnGoing</span>
            <!-- End Second -->

          </div>
          <!-- End Status -->

          <!-- Switch -->
          <div class="flex">
            <div class="bg-trueGray-700 mt-5 rounded-lg">
              <button @click="switcher('info')" :class="[isOpen == 'info' ? 'bg-blue-500' : '']" class="p-1 px-5 hover:bg-blue-500 duration-200 active:bg-blue-500 rounded-l-lg font-semibold">Info</button>
              <button @click="switcher('episode')" :class="[isOpen == 'episode' ? 'bg-blue-500' : '']" class="p-1 px-5 hover:bg-blue-500 duration-200 rounded-r-lg font-semibold">Episode</button>
            </div>
          </div>
          <!-- End Switch -->

          <!-- Info -->
          <div v-if="isOpen == 'info'">
            <div class="mt-5 ">
              <span class="text-xl font-bold cursor-default">Synopsis</span>
              <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eligendi cum, iusto ratione nesciunt, illo veniam corrupti inventore accusantium pariatur laboriosam quisquam architecto saepe ut mollitia autem sit omnis debitis, eos nam cumque asperiores nulla dolorum ad. Sunt totam maiores vitae, consequatur nostrum quas? Optio assumenda commodi officia voluptatibus mollitia?</p>
            </div>
            <div class="mt-5">
              <span class="text-xl font-bold cursor-default">Genres</span>
              <div class="flex mt-2 space-x-5">
                <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-500 duration-200 rounded-lg font-semibold capitalize">Romance</a>
                <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-500 duration-200 rounded-lg font-semibold capitalize">Comedy</a>
                <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-500 duration-200 rounded-lg font-semibold capitalize">Gabut Life</a>
              </div>
            </div>
          </div>
          <!-- End Info -->

          <!-- Episodes -->
          <div v-if="isOpen == 'episode'" class="mt-4">

            <!-- Episode -->
            <div class="my-2">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="flex justify-between w-1/2 px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-trueGray-600 focus:outline-none"
                >
                  <span class="font-semibold">Episode 1</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </DisclosureButton>
                <transition
                  enter-active-class="duration-150 ease-in"
                  enter-from-class="-translate-y-4 opacity-0"
                  enter-to-class="translate-y-4 opacity-50"
                  leave-active-class="duration-150 ease-out"
                  leave-from-class="translate-y-4 opacity-100"
                  leave-to-class="-translate-y-4 opacity-0"
                >
                <DisclosurePanel class="px-4 py-4 text-white">
                  <div class="space-y-4">
                    <p class="font-semibold">MKV</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                    <p class="font-semibold">MP4</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                  </div>
                </DisclosurePanel>
                </transition>
              </Disclosure>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="my-2">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="flex justify-between w-1/2 px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-trueGray-600 focus:outline-none"
                >
                  <span class="font-semibold">Episode 1</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </DisclosureButton>
                <transition
                  enter-active-class="duration-150 ease-in"
                  enter-from-class="-translate-y-4 opacity-0"
                  enter-to-class="translate-y-4 opacity-50"
                  leave-active-class="duration-150 ease-out"
                  leave-from-class="translate-y-4 opacity-100"
                  leave-to-class="-translate-y-4 opacity-0"
                >
                <DisclosurePanel class="px-4 py-4 text-white">
                  <div class="space-y-4">
                    <p class="font-semibold">MKV</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                    <p class="font-semibold">MP4</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                  </div>
                </DisclosurePanel>
                </transition>
              </Disclosure>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="my-2">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="flex justify-between w-1/2 px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-trueGray-600 focus:outline-none"
                >
                  <span class="font-semibold">Episode 1</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </DisclosureButton>
                <transition
                  enter-active-class="duration-150 ease-in"
                  enter-from-class="-translate-y-4 opacity-0"
                  enter-to-class="translate-y-4 opacity-50"
                  leave-active-class="duration-150 ease-out"
                  leave-from-class="translate-y-4 opacity-100"
                  leave-to-class="-translate-y-4 opacity-0"
                >
                <DisclosurePanel class="px-4 py-4 text-white">
                  <div class="space-y-4">
                    <p class="font-semibold">MKV</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                    <p class="font-semibold">MP4</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                  </div>
                </DisclosurePanel>
                </transition>
              </Disclosure>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="my-2">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="flex justify-between w-1/2 px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-trueGray-600 focus:outline-none"
                >
                  <span class="font-semibold">Episode 1</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </DisclosureButton>
                <transition
                  enter-active-class="duration-150 ease-in"
                  enter-from-class="-translate-y-4 opacity-0"
                  enter-to-class="translate-y-4 opacity-50"
                  leave-active-class="duration-150 ease-out"
                  leave-from-class="translate-y-4 opacity-100"
                  leave-to-class="-translate-y-4 opacity-0"
                >
                <DisclosurePanel class="px-4 py-4 text-white">
                  <div class="space-y-4">
                    <p class="font-semibold">MKV</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                    <p class="font-semibold">MP4</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 duration-200">360p</a>
                    </div>

                  </div>
                </DisclosurePanel>
                </transition>
              </Disclosure>
            </div>
            <!-- End Episode -->

          </div>
          <!-- End Episodes -->
          
        </div>
        <!-- End Right Content -->

      </div>
      <!-- End Content -->
      
    </div>
    <!-- Main -->

    <!-- Footer -->
      <div class="flex justify-center px-10 pt-2 bg-black shadow-2xl">
        <div class="flex flex-col items-center justify-center ">
          <span class="font-bold text-lg mb-3 cursor-default">Partners</span>
          <div class="flex space-x-4">
            <a href="/myAnimeAsia/detail"><img class="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></a>
            <a href="/myAnimeAsia/detail"><img class="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></a>
            <a href="/myAnimeAsia/detail"><img class="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></a>
          </div>
          <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-row  mt-3 text-center">
            <a href="/myAnimeAsia/detail" class="mx-5 hover:opacity-60 duration-150">Privacy Policy</a>
            <span class="hidden sm:contents">&bull;</span>
            <a href="/myAnimeAsia/detail" class="mx-5 hover:opacity-60 duration-150">FeedBack</a>
            <span class="hidden sm:contents">&bull;</span>
            <a href="/myAnimeAsia/detail" class="mx-5 hover:opacity-60 duration-150">Support Us</a>
            <span class="hidden sm:contents">&bull;</span>
            <a href="/myAnimeAsia/detail" class="mx-5 hover:opacity-60 duration-150">Contact Us</a>
          </div>
          <div class="border border-b-2 border-trueGray-700 border-opacity-75 w-full mt-2"></div>
          <div class="text-center bg-black pb-5 mt-2 text-sm">My Pony Asia is in no way associated with Hasbro or any author of the series My Little Pony Friendship is Magic and its derivatives.</div>
        </div>
      </div>
    <!-- End Footer -->
  </div>
</template>

<script>
import {Disclosure,DisclosureButton,DisclosurePanel} from '@headlessui/vue'
export default {
  components: { 
    Disclosure, 
    DisclosureButton, 
    DisclosurePanel,
  },

  data() {
    return {
      isOpen: 'info',
    }
  },

  methods: {
    switcher(data){
      this.isOpen = data
    }
  },
  


  // setup(){
    
  //   const isOpen = 'Info';

  //   function switcher(data) {
  //     console.log(data);
  //     // return this.isOpen = dataSwitcher
  //   }

  //   return {
  //     isOpen,
  //     switcher
  //   }
  // }
}
</script>

<style>

</style>