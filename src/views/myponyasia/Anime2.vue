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
    <section>
      <!-- Blurr goes brrrr -->
      <div class="flex min-w-screen max-w-full h-72 z-0">
          <img class="min-w-full max-w-full h-full object-cover blur-sm" src="../../assets/images/myponyasia/poster-portrait.webp" alt="Background"/>
      </div>
      <!-- Blurr goes brrrr -->

      <!-- Content -->
      <div class="flex justify-between mx-40 mt-5">

        <!-- Left Content -->
        <div class="w-[25%] flex flex-col mb-5 z-10">
          <img src="../../assets/images/myponyasia/poster-portrait.webp" alt="Poster" class="-mt-56 mb-5 w-[90%] rounded-md">
          <a href="#" class="p-2 px-10 bg-trueGray-600 hover:bg-blue-500 duration-150 rounded-lg text-center font-semibold w-[90%]">Streaming</a>
        <div class="border-b-2 border-trueGray-700 my-5 w-[90%]"></div>
          <a href="#" class="p-2 px-10 bg-trueGray-600 hover:bg-blue-500 duration-150 rounded-lg text-center font-semibold w-[90%]">More</a>
        </div>
        
        <!-- End Left Content -->

        <!-- Right Content -->
        <div class="w-[75%] pb-5">

          <!-- Title -->
          <div class="flex space-x-2 items-center">
            <span class="text-xl font-bold cursor-default capitalize"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, aut aperiam amet voluptas vel sed ullam qui dignissimos impedit illum.</span>
          </div>
          <!-- End Title -->

          <!-- Second title -->
          <span class="cursor-default capitalize"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sint.</span>
          <!-- End Second title -->

          <!-- Status -->
          <div class="flex space-x-3 items-center mt-5 font-bold cursor-default">

            <!-- First -->
            <div class="flex items-center space-x-1 p-1.5 bg-trueGray-600 rounded-xl px-3 text-sm">
              <span>TV</span>
            </div>
            <!-- End First -->

            <!-- Second -->
            <div class="flex items-center space-x-2 p-1.5 bg-trueGray-600 rounded-xl px-3 text-sm">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 text-green-500 rounded-full">
                <circle cx="8" cy="8" r="8"/>
              </svg>
            </div>
            <span>OnGoing</span>
            </div>
            <!-- End Second -->

          </div>
          <!-- End Status -->

          <!-- Switch -->
          <div class="flex">
            <div class="bg-trueGray-600 mt-5 rounded-lg divide-x-4 divide-trueGray-600">
              <button @click="switcher = 'info'" :class="[switcher == 'info' ? 'bg-blue-500' : '']" class="p-1 px-5 hover:bg-blue-500 duration-200 active:bg-blue-500 rounded-l-lg font-semibold">Info</button>
              <button @click="switcher = 'episode'" :class="[switcher == 'episode' ? 'bg-blue-500' : '']" class="p-1 px-5 hover:bg-blue-500 duration-200 font-semibold">Episode</button>
              <button @click="switcher = 'trailer'" :class="[switcher == 'trailer' ? 'bg-blue-500' : '']" class="p-1 px-5 hover:bg-blue-500 duration-200 rounded-r-lg font-semibold">Trailer</button>
            </div>
          </div>
          <!-- End Switch -->

          <!-- Info -->
          <div v-if="switcher == 'info'" class="mt-5 space-y-4">
            <!-- Synopsis  -->
            <div class="space-y-3">
              <span class="text-xl font-bold cursor-default">Synopsis</span>
              <div v-html="sinopsis" class="space-y-3"></div>
            </div>
            <!-- End Synopsis  -->

            <!-- Genres -->
            <div class="space-y-3">
              <span class="text-xl font-bold cursor-default">Genres</span>
              <div class="flex space-x-5">
                <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-500 duration-200 rounded-lg font-semibold capitalize">Romance</a>
                <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-500 duration-200 rounded-lg font-semibold capitalize">Comedy</a>
                <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-500 duration-200 rounded-lg font-semibold capitalize">Gabut Life</a>
              </div>
            </div>
            <!-- End Genres -->
          </div>
          <!-- End Info -->

          <!-- Episodes -->
          <div v-if="switcher == 'episode'" class="mt-5 space-y-5">

            <!-- Episode -->
            <div class="my-2">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="flex justify-between w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-blue-500 duration-200 focus:outline-none outline-none"
                >
                  <span class="font-semibold">Episode 1 • yesterday</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </DisclosureButton>
                <DisclosurePanel class="px-4 py-2 text-white">
                  <div class="space-y-2">
                    <p class="font-semibold">MKV</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">360p</a>
                    </div>

                    <p class="font-semibold pt-2">MP4</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">360p</a>
                    </div>

                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="my-2">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="flex justify-between w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-blue-500 duration-200 focus:outline-none outline-none"
                >
                  <span class="font-semibold">Episode 1 • yesterday</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </DisclosureButton>
                <DisclosurePanel class="px-4 py-2 text-white">
                  <div class="space-y-2">
                    <p class="font-semibold">MKV</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">360p</a>
                    </div>

                    <p class="font-semibold pt-2">MP4</p>
                    <div class="grid grid-cols-4 gap-3 w-1/2 text-center">
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">1080p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">720p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">480p</a>
                      <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg font-semibold hover:bg-blue-500 duration-200">360p</a>
                    </div>

                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <!-- End Episode -->

            <!-- Loading State Episode -->
            <div class="my-2">
                <button
                  class="flex justify-between w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg animate-pulse"
                >
                  <div class="font-semibold"> 
                    <span class="bg-blue-500 px-3 text-blue-500 rounded-full">Episode 1</span> 
                    • 
                    <span class="bg-blue-500 px-3 text-blue-500 rounded-full">yesterday</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
            </div>
            <!-- End Loading State Episode -->
            <!-- Loading State Episode -->
            <div class="my-2">
                <button
                  class="flex justify-between w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg animate-pulse"
                >
                  <div class="font-semibold"> 
                    <span class="bg-trueGray-500 px-3 text-trueGray-500 rounded-full">Episode 1</span> 
                    • 
                    <span class="bg-trueGray-500 px-3 text-trueGray-500 rounded-full">yesterday</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
            </div>
            <!-- End Loading State Episode -->

          </div>
          <!-- End Episodes -->

          <!-- Trailer -->
          <div v-if="switcher == 'trailer'" class="mt-5 space-y-5">
            <!-- Trailers Grid -->
            <div class="grid grid-cols-3 gap-5">
              <!-- Trailer -->
              <div @click="trailerData = 'https://www.youtube.com/embed/9Lq9PfHsMkU'; trailerModal = true" class="relative flex group cursor-pointer">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute w-full h-full p-5 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="absolute bottom-0 bg-blue-500 font-semibold p-1.5 rounded-tr-lg text-sm">PV 1</span>
              </div>
              <!-- End Trailer -->
              <!-- Trailer -->
              <div @click="trailerData = 'https://www.youtube.com/embed/6bNbIVDPWCw'; trailerModal = true" class="relative flex group cursor-pointer">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute w-full h-full p-5 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="absolute bottom-0 bg-blue-500 font-semibold p-1.5 rounded-tr-lg text-sm">PV 3</span>
              </div>
              <!-- End Trailer -->
              <!-- Trailer -->
              <div @click="trailerData = 'https://www.youtube.com/embed/JXlAmWPxHO0'; trailerModal = true" class="relative flex group cursor-pointer">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute w-full h-full p-5 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="absolute bottom-0 bg-blue-500 font-semibold p-1.5 rounded-tr-lg text-sm shadow-xl">PV 4</span>
              </div>
              <!-- End Trailer -->
              <!-- Trailer -->
              <div @click="trailerData = 'https://www.youtube.com/embed/TgziSpBVmEk'; trailerModal = true" class="relative flex group cursor-pointer">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute w-full h-full p-5 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="absolute bottom-0 bg-blue-500 font-semibold p-1.5 rounded-tr-lg text-sm">PV 5</span>
              </div>
              <!-- End Trailer -->
            </div>
            <!-- End Trailers Grid -->

            <!-- Trailer Modal -->
            <div v-show="trailerModal == true">
              <div class="z-50 fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center overflow-y-visible pt-5 bg-trueGray-800">
                <!-- Ntah kenapa kaga bisa di close, kau aja yang buat pak :v  -->
                <button @click="trailerModal = trailerModal = false" class="absolute -mt-96">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 hover:opacity-60 duration-150" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <iframe width="630" height="385" :src="trailerData" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg bg-trueGray-800 p-3 shadow-xl"></iframe>
              </div>
            </div>
            <!-- End Trailer Modal -->

          </div>
          <!-- End Trailer -->

        </div>
        <!-- End Right Content -->

      </div>
      <!-- End Content -->
      
    </section>
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
import {ref} from 'vue'
export default {
  components: { 
    Disclosure, 
    DisclosureButton, 
    DisclosurePanel,
  },
  
  setup(){
    
    const switcher = ref('info');

    // Cukup p aja :v kaga usah pake class lagi
    const sinopsis = ref(`<p>Kimizuka Kimihiko is a crisis-magnet. From getting caught up in a crime scene to
              accidentally witnessing a drug deal, trouble seems to find him around every corner. So it is no surprise
              when his rather mundane flight suddenly enters a state of emergency with a dire need of a detective
              onboard. Unfortunately, his attempt at avoiding trouble is foiled by a beautiful girl with silver hair who
              goes by the codename Siesta. Declaring herself a detective, she unceremoniously drags Kimizuka into the
              case as her assistant.</p>
            <p>That incident spelled the beginning of an adventure around the globe that went beyond his
              wildest imagination. Putting their lives on the line, the two took down criminal organizations, prevented
              disasters, and saved thousands. But the curtain closed to their epic journey with Siesta's untimely death
              three years later.</p>
            <p>Resolving to live an ordinary high school life this time, Kimizuka spends a year maintaining
              a low profile. However, as fate would have it, a girl with an uncanny resemblance to Siesta comes crashing
              into his life, threatening to throw his peaceful days into disarray.</p>
            `);

    const trailerModal = false;
    const trailerData = ref('');

    const testing = function(){
      console.log("yay berhasil :v")
    }

    return {
      testing,
      switcher,

      sinopsis,

      trailerData,
      trailerModal,
    }
  }
}
</script>

<style>

</style>