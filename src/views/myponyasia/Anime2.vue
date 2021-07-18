<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-white">
    <!-- Navbar -->
      <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    />
    <!-- End Navbar -->

    <!-- Main -->
    <main>
      <!-- Blurr goes brrrr -->
      <section class="flex min-w-screen max-w-full h-48 md:h-64 lg:h-72 z-0">
          <img class="min-w-full max-w-full h-full object-cover blur-sm" src="../../assets/images/myponyasia/poster-portrait.webp" alt="Background"/>
      </section>
      <!-- Blurr goes brrrr -->

      <!-- Content -->
      <section class="flex flex-col mt-5
                mx-5 justify-center
                md:mx-20 
                lg:flex-row lg:justify-between lg:mx-40">

        <!-- Desktop Left Content & Ipad & Mobile Top Content -->
        <div class="w-full md:w-[90%] lg:w-[25%] flex flex-col items-center mb-5 z-10 mx-auto">
          <img src="../../assets/images/myponyasia/poster-portrait.webp" alt="Poster" 
              class="rounded-md mb-3 -mt-40 
                    md:mb-2 md:w-[50%] md:-mt-52
                    lg:w-[90%] lg:-mt-56 lg:mb-5">
          <!-- Only Ipad & Android view -->
          <div class="lg:hidden mb-5 space-y-3">
            <!-- Title -->
            <div v-show="loadingState == false" class="flex items-center">
              <span class="text-xl font-bold cursor-default capitalize md:mb-1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, aut aperiam amet voluptas vel sed ullam qui dignissimos impedit illum.</span>
            </div>
            <!-- End Title -->

            <!-- Title Skeleton -->
            <div v-show="loadingState == true" class="w-[300px] md:w-[550px] lg:w-[700px] h-6 bg-trueGray-600 rounded-full animate-pulse"></div>
            <!-- End Title Skeleton -->

            <!-- Second title -->
            <span v-show="loadingState == false" class="cursor-default capitalize"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sint.</span>
            <!-- End Second title -->

            <!-- Second Title Skeleton -->
            <div v-show="loadingState == true" class="w-[260px] md:w-[400px] lg:w-[600px] h-5 bg-trueGray-600 rounded-full animate-pulse mt-3"></div>
            <!-- End Second Title Skeleton -->
            
            <!-- Status -->
            <div v-show="loadingState == false" class="flex space-x-3 items-center font-bold cursor-default">

              <!-- First -->
              <div class="flex items-center space-x-1 p-1.5 bg-trueGray-600 rounded-lg px-3 text-sm">
                <span>TV</span>
              </div>
              <!-- End First -->

              <!-- Second -->
              <div class="flex items-center space-x-2 p-1.5 bg-trueGray-600 rounded-lg px-3 text-sm">
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

            <!-- Skeleton Status -->
              <div v-show="loadingState == true" class="flex space-x-3 items-center mt-5 font-bold cursor-default animate-pulse">
                <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">TV :3</span></div>
                <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default flex space-x-2"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 text-green-500 rounded-full">
                  <circle cx="8" cy="8" r="8"/>
                  </svg>
                  <span class="text-trueGray-500 bg-trueGray-500 rounded-full">OnGoing</span>
                </div>
              </div>
            <!-- End Skeleton Status -->
          </div>
          <!-- End Only Ipad & Android view -->
          <a href="#" class="p-2 px-10 bg-trueGray-600 hover:bg-blue-700 duration-150 rounded-lg text-center font-semibold w-[100%] lg:w-[90%]">Streaming</a>
        <div class="border-b-2 border-trueGray-700 my-5 w-[100%] lg:w-[90%]"></div>
          <a href="#" class="p-2 px-10 bg-trueGray-600 hover:bg-blue-700 duration-150 rounded-lg text-center font-semibold w-[100%] lg:w-[90%]">More</a>
        </div>
        <!-- End Left Content & Ipad & Mobile Top Content -->

        <!-- Desktop Right Content & Ipad & Mobile Bottom Content -->
        <div class="w-full lg:w-[75%] pb-5">
          <!-- Only Desktop view -->
          <div class="hidden lg:block">
            <!-- Title -->
            <div v-show="loadingState == false" class="flex space-x-2 items-center">
              <span class="text-xl font-bold cursor-default capitalize"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, aut aperiam amet voluptas vel sed ullam qui dignissimos impedit illum.</span>
            </div>
            <!-- End Title -->

            <!-- Title Skeleton -->
            <div v-show="loadingState == true" class="w-[700px] h-6 bg-trueGray-600 rounded-full animate-pulse"></div>
            <!-- End Title Skeleton -->

            <!-- Second title -->
            <span v-show="loadingState == false" class="cursor-default capitalize"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sint.</span>
            <!-- End Second title -->

            <!-- Second Title Skeleton -->
            <div v-show="loadingState == true" class="w-[600px] h-5 bg-trueGray-600 rounded-full animate-pulse mt-3"></div>
            <!-- End Second Title Skeleton -->
            
            <!-- Status -->
            <div v-show="loadingState == false" class="flex space-x-3 items-center mt-5 font-bold cursor-default">

              <!-- First -->
              <div class="flex items-center space-x-1 p-1.5 bg-trueGray-600 rounded-lg px-3 text-sm">
                <span>TV</span>
              </div>
              <!-- End First -->

              <!-- Second -->
              <div class="flex items-center space-x-2 p-1.5 bg-trueGray-600 rounded-lg px-3 text-sm">
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

            <!-- Skeleton Status -->
              <div v-show="loadingState == true" class="flex space-x-3 items-center mt-5 font-bold cursor-default animate-pulse">
                <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">TV :3</span></div>
                <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default flex space-x-2"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 text-green-500 rounded-full">
                  <circle cx="8" cy="8" r="8"/>
                  </svg>
                  <span class="text-trueGray-500 bg-trueGray-500 rounded-full">OnGoing</span>
                </div>
              </div>
            <!-- End Skeleton Status -->
          </div>
          <!-- End Only Desktop view -->

            <!-- Switch -->
            <div class="flex justify-center lg:justify-start">
              <div class="grid grid-cols-3 md:flex bg-trueGray-600 mt-3 lg:mt-5 rounded-lg divide-x-4 divide-trueGray-600">
                <button @click="switcher = 'info'" :class="[switcher == 'info' ? 'bg-blue-700' : '']" class="p-1 px-7 md:px-14 lg:px-5 hover:bg-blue-700 duration-200 active:bg-blue-700 rounded-l-lg font-semibold">Info</button>
                <button @click="switcher = 'episode'" :class="[switcher == 'episode' ? 'bg-blue-700' : '']" class="p-1 px-7 md:px-14 lg:px-5 hover:bg-blue-700 duration-200 font-semibold">Episode</button>
                <button @click="switcher = 'trailer'" :class="[switcher == 'trailer' ? 'bg-blue-700' : '']" class="p-1 px-7 md:px-14 lg:px-5 hover:bg-blue-700 duration-200 rounded-r-lg font-semibold">Trailer</button>
              </div>
            </div>
            <!-- End Switch -->

            <!-- Info -->
            <div v-if="switcher == 'info'" class="mt-5 space-y-4 md:w-[90%] lg:w-full mx-auto">

              <!-- Synopsis  -->
              <div v-show="loadingState == false" class="flex flex-col">
                <span class="text-xl font-bold cursor-default">Synopsis</span>
                <div :class="[ loadMore ? ['line-clamp-3', '-mb-10'] : ['line-clamp-0', 'mb-0'] ]" class="mt-3"> 
                  <p v-html="sinopsis" class="space-y-3" /> 
                </div>
                <!-- Read More Button -->
                <div v-show="loadMore" class="flex justify-center bg-gradient-to-t from-trueGray-800 via-trueGray-800 to-transparent">
                  <div class="pt-10"> 
                    <button @click="loadMore = false" class="px-10 p-1.5 font-semibold hover:opacity-70 duration-150">Read More</button>
                  </div>
                </div>
                <!-- Read More Button -->
              </div>
              <!-- End Synopsis  -->

              <!-- Synopsis Skeleton -->
              <div v-show="loadingState == true" class="flex flex-col">
                <div class="space-y-2 animate-pulse">
                  <div class="w-[300px] md:w-[550px] lg:w-[700px] h-4 bg-trueGray-600 rounded-lg"></div>
                  <div class="w-[250px] md:w-[520px] lg:w-[600px] h-4 bg-trueGray-600 rounded-lg"></div>
                  <div class="w-[270px] md:w-[540px] lg:w-[650px] h-4 bg-trueGray-600 rounded-lg"></div>
                  <div class="w-[220px] md:w-[510px] lg:w-[500px] h-4 bg-trueGray-600 rounded-lg"></div>
                  <div class="w-[250px] md:w-[550px] lg:w-[675px] h-4 bg-trueGray-600 rounded-lg"></div>
                </div>
              </div>
              <!-- End Synopsis Skeleton -->

              <!-- Genres -->
              <div class="space-y-3">
                <span class="text-xl font-bold cursor-default">Genres</span>
                <!-- Genre -->
                <div v-show="loadingState == false" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 text-center">
                  <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg md:text-base font-semibold capitalize">Romance</a>
                  <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg md:text-base font-semibold capitalize">Slice Of Life</a>
                  <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg md:text-base font-semibold capitalize">Comedy</a>
                  <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg md:text-base font-semibold capitalize">Comedy</a>
                  <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg md:text-base font-semibold capitalize">Comedy</a>
                  <a href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg md:text-base font-semibold capitalize">Comedy</a>
                </div>
                <!-- Genre -->

                <!-- Sekeleton Genre -->
                <div v-show="loadingState == true" class="flex space-x-5 animate-pulse">
                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">Romance</span></div>
                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">Comedy 0w0</span></div>
                </div>
                <!-- End Sekeleton Genre -->

              </div>
              <!-- End Genres -->

              <!-- Sources -->
              <div class="space-y-3">
                <span class="text-xl font-bold cursor-default">Source</span>
                <div v-show="loadingState == false" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <!-- Source -->
                  <a href="#" class="flex bg-trueGray-600 rounded-lg items-center p-1 hover:bg-blue-700 duration-200">
                    <img src="https://cdn.myanimelist.net/images/favicon.ico" alt="Logo" class="w-7 rounded-lg">
                    <span class="px-3 rounded-lg font-semibold capitalize">MyAnimeList</span>
                  </a>
                  <!-- End Source -->
                  <!-- Source -->
                  <a href="#" class="flex bg-trueGray-600 rounded-lg items-center p-1 hover:bg-blue-700 duration-200">
                    <img src="https://cdn.myanimelist.net/images/favicon.ico" alt="Logo" class="w-7 rounded-lg">
                    <span class="px-3 rounded-lg font-semibold capitalize">MyAnimeList</span>
                  </a>
                  <!-- End Source -->
                  <!-- Source -->
                  <a href="#" class="flex bg-trueGray-600 rounded-lg items-center p-1 hover:bg-blue-700 duration-200">
                    <img src="https://cdn.myanimelist.net/images/favicon.ico" alt="Logo" class="w-7 rounded-lg">
                    <span class="px-3 rounded-lg font-semibold capitalize">MyAnimeList</span>
                  </a>
                  <!-- End Source -->
                  <!-- Source -->
                  <a href="#" class="flex bg-trueGray-600 rounded-lg items-center p-1 hover:bg-blue-700 duration-200">
                    <img src="https://cdn.myanimelist.net/images/favicon.ico" alt="Logo" class="w-7 rounded-lg">
                    <span class="px-3 rounded-lg font-semibold capitalize">MyAnimeList</span>
                  </a>
                  <!-- End Source -->
                  <!-- Source -->
                  <a href="#" class="flex bg-trueGray-600 rounded-lg items-center p-1 hover:bg-blue-700 duration-200">
                    <img src="https://cdn.myanimelist.net/images/favicon.ico" alt="Logo" class="w-7 rounded-lg">
                    <span class="px-3 rounded-lg font-semibold capitalize">MyAnimeList</span>
                  </a>
                  <!-- End Source -->
                  <!-- Source -->
                  <a href="#" class="flex bg-trueGray-600 rounded-lg items-center p-1 hover:bg-blue-700 duration-200">
                    <img src="https://cdn.myanimelist.net/images/favicon.ico" alt="Logo" class="w-7 rounded-lg">
                    <span class="px-3 rounded-lg font-semibold capitalize">MyAnimeList</span>
                  </a>
                  <!-- End Source -->
                </div>

                <!-- Skeleton Source -->
                <div v-show="loadingState == true" class="flex space-x-5 animate-pulse">
                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">MyPonyAsia</span></div>
                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">MyPonyAsia</span></div>
                </div>
                <!-- End Skeleton Source -->

              </div>
              <!-- End Sources -->
              
              <!-- Other Season -->
              <div class="space-y-3">
                <!-- Anime Cards -->
                <span class="text-xl font-bold cursor-default">Other Seasons</span>
                <div v-show="loadingState == false" class="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                </div>
                <!-- End Anime Cards -->

                <!-- Anime Cards Skeleton -->
                <div v-show="loadingState == true" class="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <AnimeCardSkeleton />
                  <AnimeCardSkeleton />
                  <AnimeCardSkeleton />
                  <AnimeCardSkeleton />
                </div>
                <!-- End Anime Cards Skeleton -->
              </div>
              <!-- End Other Season -->
            </div>
            <!-- End Info -->

            <!-- Episodes -->
            <div v-if="switcher == 'episode'" class="mt-5 md:w-[90%] lg:w-full mx-auto">
              <div v-show="loadingState == false" class="space-y-5">
                <!-- Episode -->
                <div class="my-2">
                  <Disclosure v-slot="{ open }">
                    <DisclosureButton
                      class="flex justify-between w-full lg:w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-blue-700 duration-200 focus:outline-none outline-none"
                    >
                      <span class="font-semibold">Episode 1 • yesterday</span>
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 py-2 text-white">
                      <div class="space-y-2">
                        <p class="font-semibold">MKV</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:w-[75%] text-center md:text-sm lg:text-base">
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 360p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 360p</a>
                        </div>

                        <p class="font-semibold pt-2">MP4</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:w-[75%] text-center">
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 360p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 360p</a>
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
                      class="flex justify-between w-full lg:w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-blue-700 duration-200 focus:outline-none outline-none"
                    >
                      <span class="font-semibold">Episode 1 • yesterday</span>
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 py-2 text-white">
                      <div class="space-y-2">
                        <p class="font-semibold">MKV</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:w-[75%] text-center md:text-sm lg:text-base">
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 360p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">Indonesia 360p</a>
                        </div>

                        <p class="font-semibold pt-2">MP4</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:w-[75%] text-center">
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 360p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 1080p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 720p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 480p</a>
                          <a href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">ID 360p</a>
                        </div>

                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
                <!-- End Episode -->
              </div>

              <div v-show="loadingState == true" class="space-y-5">
                <!-- Loading State Episode -->
                <div class="my-2">
                    <button
                      class="flex justify-between w-full lg:w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg animate-pulse"
                    >
                      <div class="font-semibold"> 
                        <span class="bg-blue-700 px-3 text-blue-700 rounded-full">Episode 1</span> 
                        • 
                        <span class="bg-blue-700 px-3 text-blue-700 rounded-full">yesterday</span>
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
                      class="flex justify-between w-full lg:w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg animate-pulse"
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

            </div>
            <!-- End Episodes -->

            <!-- Trailer -->
            <div v-if="switcher == 'trailer'" class="mt-5 space-y-5 md:w-[90%] lg:w-full mx-auto">
              <!-- Trailers Grid -->
              <div v-show="loadingState == false" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <!-- Trailer -->
                <div @click="trailerId = '9Lq9PfHsMkU'; trailerModal = true" class="relative flex group cursor-pointer">
                  <img src="https://img.youtube.com/vi/9Lq9PfHsMkU/sddefault.jpg" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-full h-full p-10 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="absolute bottom-0 bg-blue-700 font-semibold p-1.5 px-3 rounded-bl-lg rounded-tr-lg text-sm">PV 1</span>
                </div>
                <!-- End Trailer -->
                <!-- Trailer -->
                <div @click="trailerId = '6bNbIVDPWCw'; trailerModal = true" class="relative flex group cursor-pointer">
                  <img src="https://img.youtube.com/vi/6bNbIVDPWCw/sddefault.jpg" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-full h-full p-10 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="absolute bottom-0 bg-blue-700 font-semibold p-1.5 px-3 rounded-bl-lg rounded-tr-lg text-sm">PV 2</span>
                </div>
                <!-- End Trailer -->
                <!-- Trailer -->
                <div @click="trailerId = 'JXlAmWPxHO0'; trailerModal = true" class="relative flex group cursor-pointer">
                  <img src="https://img.youtube.com/vi/JXlAmWPxHO0/sddefault.jpg" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-full h-full p-10 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="absolute bottom-0 bg-blue-700 font-semibold p-1.5 px-3 rounded-bl-lg rounded-tr-lg text-sm">PV 3</span>
                </div>
                <!-- End Trailer -->
              </div>
              <!-- End Trailers Grid -->

              <!-- Loading State Trailer -->
              <div v-show="loadingState == true" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div class="relative flex w-full h-full animate-pulse rounded-lg">
                  <div class="bg-trueGray-600 w-full h-40 rounded-lg"></div>
                </div>
                <div class="relative flex w-full h-full animate-pulse rounded-lg">
                  <div class="bg-trueGray-600 w-full h-40 rounded-lg"></div>
                </div>
                <div class="relative flex w-full h-full animate-pulse rounded-lg hidden lg:contents">
                  <div class="bg-trueGray-600 w-full h-40 rounded-lg"></div>
                </div>
              </div>
              <!-- End Loading State Trailer -->

              <!-- Trailer Modal -->
              <div v-show="trailerModal == true">
                <div class="z-50 fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center pt-5 bg-trueGray-800">
                  <button @click="trailerModal = trailerModal = false" class="absolute -mt-80 md:-mt-96">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 hover:opacity-60 duration-150" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <iframe width="" :src="'https://www.youtube.com/embed/'+trailerId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg bg-trueGray-800 p-3 shadow-xl mx-20 w-[530px] h-[285px] md:w-[630px] md:h-[385px]"></iframe>
                </div>
              </div>
              <!-- End Trailer Modal -->

            </div>
            <!-- End Trailer -->
        </div>
        <!-- End Desktop Right Content & Ipad & Mobile Bottom Content -->

      </section>
      <!-- End Content -->
      
    </main>
    <!-- Main -->

    <!-- Footer -->
    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
import {ref} from 'vue'
import {Disclosure,DisclosureButton,DisclosurePanel} from '@headlessui/vue'
import Footer from '../../components/mpa/Footer.vue'
import Header from '../../components/mpa/Header.vue'
import AnimeCard from '../../components/mpa/AnimeCard.vue'
import AnimeCardSkeleton from '../../components/mpa/parts/AnimeCardSkeleton.vue'

export default {
  components: { 
    Disclosure, 
    DisclosureButton, 
    DisclosurePanel,
    Header,
    Footer,
    AnimeCard,
    AnimeCardSkeleton,
  },
  
  setup(){
    
    const switcher = ref('info');
    const loadMore = ref(false);
    const loadingState = ref(false)

    // Cukup p aja :v kaga usah pake class lagi
    // const sinopsis = ref(`Kimizuka Kimihiko is a crisis-magnet. From getting caught up in a crime scene to`)

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
    const synopsisLength = sinopsis.value.length > 300 ? loadMore.value = true : '' ;

    const trailerModal = ref(false);
    const trailerId = ref('');

    const testing = function(){
      console.log("Testing :v");
    }

    return {
      testing,
      loadingState,
      switcher,

      loadMore,
      sinopsis,
      synopsisLength,

      trailerId,
      trailerModal,
    }
  }
}
</script>

<style>

</style>