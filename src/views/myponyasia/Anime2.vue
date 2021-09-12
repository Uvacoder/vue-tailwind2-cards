<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-white">
    <!-- Navbar -->
      <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
    />
    <!-- End Navbar -->

    <!-- Main -->
    <main class="max-w-[90rem] mx-auto">
      
      <!-- loading State -->
      <div v-if="loadingState == true" class="animate-pulse">

        <!-- Blurr goes brrrr -->
        <div class="h-48 md:h-64 lg:h-72 z-0">
          <div class="bg-trueGray-700 min-w-full max-w-full h-full object-cover blur-sm"/>
        </div>
        <!-- Blurr goes brrrr -->

        <!-- Content -->
        <section class="flex flex-col mt-5 mx-5 md:mx-20 lg:flex-row lg:justify-between lg:mx-32">
        
          <!-- Desktop Left Content & Ipad & Mobile Top Content -->
          <div class="w-full md:w-[90%] lg:w-[25%] flex flex-col items-center mb-5 z-10 mx-auto">

            <!-- Cover -->
            <div class="rounded-md bg-trueGray-600 
                            max-w-[90%] 
                            h-[295px] md:h-96 lg:h-80 
                            w-52 md:w-[272px] lg:w-full 
                            -mt-40 md:-mt-52 lg:-mt-56 
                            mb-3 md:mb-2 lg:mb-5" />
            <!-- End Cover -->

            <!-- Mobile view -->
            <div class="lg:hidden mb-5 text-center justify-center">

              <!-- Titles -->
                <div class="w-[300px] md:w-[550px] h-6 bg-trueGray-600 rounded-full my-1.5"></div>
                <div class="w-[260px] md:w-[400px] h-4 bg-trueGray-600 rounded-full my-1.5"></div>
                <div class="w-[300px] md:w-[500px] h-4 bg-trueGray-600 rounded-full my-1.5"></div>
              <!-- End Titles -->
              
              <!-- Status -->
              <div class="flex flex-wrap justify-center space-x-3 items-center mt-5 font-bold cursor-default ">
                <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default mt-2"> 
                  <span class="text-trueGray-500 bg-trueGray-500 rounded-full">Specials</span>
                </div>
                <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default flex space-x-2 mt-2"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 text-white-500 rounded-full">
                  <circle cx="8" cy="8" r="8"/>
                  </svg>
                  <span class="text-trueGray-500 bg-trueGray-500 rounded-full">OnGoing</span>
                </div>

                <div class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 mt-2" title="Season">
                  <span class="font-semibold pl-1 text-trueGray-500 bg-trueGray-500 rounded-full">Fall 2021</span>
                </div>

                <div class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 cursor-default mt-2 space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="font-semibold pl-1 px-4 text-trueGray-500 bg-trueGray-500 rounded-full">24</span>
                </div>

                <div class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 mt-2" title="Rating">
                  <span class="font-semibold pl-1 text-trueGray-500 bg-trueGray-500 rounded-full">R-17+</span>
                </div>

              </div>
              <!-- End Status -->

            </div>
            <!-- End Only Ipad & Android view -->

            <div className="p-2 px-10 bg-trueGray-600 duration-200 rounded-lg text-center font-semibold w-[90%] cursor-default">Streaming</div>
            <div class="border-b-2 border-trueGray-700 mt-5 w-full lg:w-[90%]"></div>
          </div>
          <!-- End Left Content & Ipad & Mobile Top Content -->

          <!-- Desktop Right Content & Ipad & Mobile Bottom Content -->
          <div class="w-full lg:w-[75%] pb-5">

            <!-- Only Desktop view -->
            <div class="hidden lg:block">

              <!-- Titles -->
                <div class="w-[700px] h-6 my-1.5 bg-trueGray-600 rounded-full" />
                <div class="w-[300px] h-4 my-1.5 bg-trueGray-600 rounded-full" />
                <div class="w-[300px] h-4 my-1.5 bg-trueGray-600 rounded-full" />
              <!-- End Titles -->
              
              <!-- Skeleton Status -->
                <div class="flex space-x-3 items-center mt-5 font-bold cursor-default">
                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold cursor-default"> 
                    <span class="text-trueGray-500 bg-trueGray-500 rounded-full">Specials</span>
                  </div>

                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold cursor-default flex space-x-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 text-white-500 rounded-full">
                    <circle cx="8" cy="8" r="8"/>
                    </svg>
                    <span class="text-trueGray-500 bg-trueGray-500 rounded-full">OnGoing</span>
                  </div>

                  <div class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2" title="Season">
                    <span class="font-semibold pl-1 text-trueGray-500 bg-trueGray-500 rounded-full">Fall 2021</span>
                  </div>

                  <div class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 cursor-default space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="font-semibold px-4 text-trueGray-500 bg-trueGray-500 rounded-full">24</span>
                  </div>

                  <div class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2" title="Rating">
                    <span class="font-semibold pl-1 text-trueGray-500 bg-trueGray-500 rounded-full">R-17+</span>
                  </div>
                </div>
              <!-- End Skeleton Status -->

            </div>
            <!-- End Only Desktop view -->

            <!-- Switch -->
            <div class="flex justify-center lg:justify-start cursor-default text-center">
              <div class="grid grid-cols-3 lg:flex bg-trueGray-600 mt-3 lg:mt-5 rounded-lg divide-x-4 divide-trueGray-600">
                <div class="p-1 px-5 rounded-l-lg font-semibold">Info</div>
                <div class="p-1 px-5 font-semibold">Episode</div>
                <div class="p-1 px-5 rounded-r-lg font-semibold">PV</div>
              </div>
            </div>
            <!-- End Switch -->

            <!-- Info -->
            <div v-if="tab == 'info'" class="mt-5 space-y-4 md:w-[90%] lg:w-full mx-auto">

              <!-- Synopsis Skeleton -->
              <div class="flex flex-col space-y-3">
                <p class="text-xl font-bold cursor-default">Synopsis</p>
                <div class="space-y-2">
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
                <div class="flex flex-wrap text-center">
                  <div v-for="loop in 3" :key="loop" class="p-1.5 px-3 mr-2 mb-2 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> 
                    <span class="text-trueGray-500 bg-trueGray-500 rounded-full">Romance</span> 
                  </div>
                </div>
              </div>
              <!-- End Genres -->

              <!-- Sources -->
              <div class="space-y-3">
                <span class="text-xl font-bold cursor-default">Source</span>

                <!-- Skeleton Source -->
                <div class="flex space-x-5 ">
                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">MyPonyAsia</span></div>
                  <div class="p-1.5 px-3 bg-trueGray-600 rounded-lg font-semibold capitalize cursor-default"> <span class="text-trueGray-500 bg-trueGray-500 rounded-full">MyPonyAsia</span></div>
                </div>
                <!-- End Skeleton Source -->

              </div>
              <!-- End Sources -->
              
              <!-- Other Season -->
              <div class="space-y-3">
                <span class="text-xl font-bold cursor-default">Other Seasons</span> 
                <!-- Anime Cards Skeleton -->
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <AnimeCardSkeleton :cards="3" />
                </div>
                <!-- End Anime Cards Skeleton -->

              </div>
              <!-- End Other Season -->

            </div>
            <!-- End Info -->

            <!-- Episodes -->
            <div v-if="tab == 'episode'" class="mt-5 md:w-[90%] lg:w-full mx-auto">
              <div class="space-y-5">

                <!-- Loading State Episode -->
                <div v-for="loop in 3" :key="loop" class="my-2">
                    <div class="flex justify-between w-full lg:w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg ">
                      <div class="font-semibold cursor-default"> 
                        <span class="bg-trueGray-500 px-3 text-trueGray-500 rounded-full">Episode 1</span> 
                        • 
                        <span class="bg-trueGray-500 px-3 text-trueGray-500 rounded-full">yesterday</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-5" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </div>
                </div>
                <!-- End Loading State Episode -->

              </div>
            </div>
            <!-- End Episodes -->

            <!-- Trailer -->
            <div v-if="tab == 'trailer'" class="mt-5 space-y-5 md:w-[90%] lg:w-full mx-auto">

              <!-- Loading State Trailer -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="loop in 3" :key="loop" class="relative flex w-full h-full  rounded-lg">
                  <div class="bg-trueGray-600 w-full h-40 rounded-lg"></div>
                </div>
              </div>
              <!-- End Loading State Trailer -->

            </div>
            <!-- End Trailer -->

          </div>
          <!-- End Desktop Right Content & Ipad & Mobile Bottom Content -->

        </section>
        <!-- End Content -->

      </div>
      <!-- End loading State -->

      <!-- Data State -->
      <div v-else>

        <!-- Blurr goes brrrr -->
        <section class="h-48 md:h-64 lg:h-72 z-0">
            <img class="min-w-full max-w-full h-full object-cover blur-sm" src="../../assets/images/myponyasia/poster-portrait.webp" alt="Cover Background"/>
        </section>
        <!-- Blurr goes brrrr -->

        <!-- Content -->
        <section class="flex flex-col mt-5 mx-5 md:mx-20 lg:flex-row lg:justify-between lg:mx-32">

          <!-- Desktop Left Content & Ipad & Mobile Top Content -->
          <div class="w-full md:w-[90%] lg:w-[25%] flex flex-col items-center mb-5 z-10 mx-auto">

            <!-- Cover -->
            <img src="../../assets/images/myponyasia/poster-portrait.webp" alt="Poster" class="rounded-md lg:max-w-[90%] w-52 md:w-[50%] lg:w-full -mt-40 md:-mt-52 lg:-mt-56 mb-3 md:mb-2 lg:mb-5">
            <!-- End Cover -->

            <!-- Mobile view -->
            <div class="lg:hidden mb-5 text-center justify-center">

              <!-- Titles -->
              <div class="">
                <p class="text-xl font-bold cursor-default capitalize my-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, aut aperiam amet voluptas vel sed ullam qui dignissimos impedit illum.</p>
                <p class="cursor-default capitalize my-2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sint.</p>
                <p class="cursor-default capitalize my-2">進撃の巨人</p>
              </div>
              <!-- Titles -->
              
              <!-- Status -->
              <div class="flex flex-wrap space-x-3 items-center cursor-default font-bold justify-center">

                <!-- Type -->
                <router-link to="/myponyasia">
                  <div class="flex items-center space-x-2 p-1.5 bg-trueGray-600 rounded-lg px-3 text-sm mt-2">
                    <span>Specials</span>
                  </div>
                </router-link>
                <!-- End Type -->

                <!-- Release -->
                <router-link to="#" class="flex items-center space-x-2 p-1.5 bg-trueGray-600 rounded-lg px-3 text-sm mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 rounded-full bg-blue-500 text-green-500">
                    <circle cx="8" cy="8" r="8"/>
                  </svg>
                  <span>OnGoing</span>
                </router-link>
                <!-- End Release -->

                <!-- Season -->
                <router-link to="/myponyasia">
                  <div class="flex items-center p-1.5 bg-trueGray-600 rounded-lg px-2 text-sm mt-2" title="Season">
                    <span class="font-semibold pl-1">Summer 2021</span>
                  </div>
                </router-link>
                <!-- End Season -->

                <!-- Duration -->
                <div to="#" class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 text-sm mt-2" title="Duration">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="font-semibold pl-1">50</span>
                </div>
                <!-- End Duration -->

                <!-- Season -->
                <div to="/myponyasia">
                  <div class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 text-sm mt-2" title="Rating">
                    <span class="font-semibold pl-1">22+</span>
                  </div>
                </div>
                <!-- End Season -->
                
              </div>
              <!-- End Status -->

            </div>
            <!-- End Only Ipad & Android view -->

            <a href="#" class="p-2 px-10 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg text-center font-semibold w-[90%] uppercase">Streaming</a>
            <div class="border-b-2 border-trueGray-700 my-5 w-[90%]"></div>
          </div>
          <!-- End Left Content & Ipad & Mobile Top Content -->

          <!-- Desktop Right Content & Ipad & Mobile Bottom Content -->
          <div class="w-full lg:w-[75%] pb-5">

            <!-- Only Desktop view -->
            <div class="hidden lg:block">
              <!-- Titles -->
                <p class="text-xl font-bold cursor-default capitalize"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, aut aperiam amet voluptas vel sed ullam qui dignissimos impedit illum.</p>
                <p class="cursor-default capitalize"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sint.</p>
                <p class="cursor-default capitalize">アズールレーン びそくぜんしんっ!</p>
              <!-- End Titles -->
              
              <!-- Status -->
              <div class="flex space-x-3 items-center mt-4 font-bold cursor-default">

                <!-- Type -->
                <router-link to="#" class="flex items-center space-x-1 p-1.5 bg-trueGray-600 hover:opacity-50 duration-200 rounded-xl px-3 text-sm">
                  <span>TV</span>
                </router-link>
                <!-- End Type -->

                <!-- Release Status -->
                <router-link to="#" class="flex items-center space-x-2 p-1.5 bg-trueGray-600 hover:opacity-50 duration-200 rounded-xl px-3 text-sm" title="Status">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="p-0.5 w-4 rounded-full text-green-500">
                    <circle cx="8" cy="8" r="8"/>
                  </svg>
                  <span>OnGoing</span>
                </router-link>
                <!-- End Release Status -->

                <!-- Season -->
                <router-link to="#" class="flex items-center p-1.5 bg-trueGray-600 hover:bg-opacity-50 duration-200 rounded-xl px-3 text-sm" title="Season">
                  <span class="font-semibold px-2">Summer 2021</span>
                </router-link>
                <!-- End Season -->

                <!-- Duration  -->
                <div to="#" class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 text-sm" title="Duration">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="font-semibold pl-1">24</span>
                </div>
                <!-- End Duration  -->

                <!-- Rating -->
                <div to="#" class="flex items-center p-1.5 bg-trueGray-600 rounded-xl px-2 text-sm" title="Rating">
                  <span class="font-semibold px-1">13+</span>
                </div>
                <!-- End Rating -->

              </div>
              <!-- End Status -->

            </div>
            <!-- End Only Desktop view -->

            <!-- Switch -->
            <div class="flex justify-center lg:justify-start">
              <div class="grid grid-cols-3 md:flex bg-trueGray-600 mt-3 lg:mt-5 rounded-lg divide-x-4 divide-trueGray-600">
                <button @click="tab = 'info'" :class="[tab == 'info' ? 'bg-blue-700' : '']" class="p-1 px-7 md:px-14 lg:px-5 hover:bg-blue-700 duration-200 active:bg-blue-700 rounded-l-lg font-semibold">Info</button>
                <button @click="tab = 'episode'" :class="[tab == 'episode' ? 'bg-blue-700' : '']" class="p-1 px-7 md:px-14 lg:px-5 hover:bg-blue-700 duration-200 font-semibold">Episode</button>
                <button @click="tab = 'trailer'" :class="[tab == 'trailer' ? 'bg-blue-700' : '']" class="p-1 px-7 md:px-14 lg:px-5 hover:bg-blue-700 duration-200 rounded-r-lg font-semibold">Trailer</button>
              </div>
            </div>
            <!-- End Switch -->

            <!-- Info -->
            <div v-if="tab == 'info'" class="mt-5 space-y-4 md:w-[90%] lg:w-full mx-auto">

              <!-- Synopsis  -->
              <div class="flex flex-col">
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

              <!-- Genres -->
              <div class="space-y-3">
                <span class="text-xl font-bold cursor-default">Genres</span>

                <!-- Genre -->
                <div  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 text-center">
                  <a v-for="loop in 10" :key="loop" href="#" class="p-1.5 px-3 bg-trueGray-600 hover:bg-blue-700 duration-200 rounded-lg md:text-base font-semibold capitalize">Romance</a>
                </div>
                <!-- Genre -->

              </div>
              <!-- End Genres -->

              <!-- Sources -->
              <div class="space-y-3">
                <span class="text-xl font-bold cursor-default">Source</span>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                  <!-- Source -->
                  <a v-for="loop in 5" :key="loop" href="#" class="flex bg-trueGray-600 rounded-lg items-center p-1 hover:bg-blue-700 duration-200">
                    <img src="https://cdn.myanimelist.net/images/favicon.ico" alt="Logo" class="w-7 rounded-lg">
                    <span class="px-3 rounded-lg font-semibold capitalize">MyAnimeList</span>
                  </a>
                  <!-- End Source -->
                  
                </div>
              </div>
              <!-- End Sources -->
              
              <!-- Other Season -->
              <div class="space-y-3">

                <!-- Anime Cards -->
                <span class="text-xl font-bold cursor-default">Other Seasons</span>
                  <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    <AnimeCard :cards="3" :topLeft="'BD'" :topRight="'Specials'" :episode="'10'" />
                  </div>
                <!-- End Anime Cards -->

              </div>
              <!-- End Other Season -->

            </div>
            <!-- End Info -->

            <!-- Episodes -->
            <div v-if="tab == 'episode'" class="mt-5 md:w-[90%] lg:w-full mx-auto space-y-5">

              <!-- Episode -->
              <div v-for="loop in 5" :key="loop" class="my-2">
                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="flex justify-between w-full lg:w-[75%] px-4 py-2 bg-trueGray-600 rounded-lg hover:bg-blue-700 duration-200 focus:outline-none outline-none">
                    <span class="font-semibold">Episode 1 • yesterday</span>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" :class="open ? 'rotate-180' : '' " class="w-5 ease-out duration-200" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 py-2 text-white">
                    <div class="space-y-2">

                      <!-- Episode List -->
                      <p class="font-semibold">MKV</p>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:w-[75%] text-center md:text-sm lg:text-base">
                        <a v-for="loop in 6" :key="loop" href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">English 1080p</a>
                      </div>

                      <p class="font-semibold pt-2">MP4</p>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:w-[75%] text-center">
                        <a v-for="loop in 6" :key="loop" href="#" class="p-1.5 bg-trueGray-600 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 duration-200">EN 1080p</a>
                      </div>
                      <!-- End Episode List -->

                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <!-- End Episode -->

            </div>
            <!-- End Episodes -->

            <!-- Trailer -->
            <div v-if="tab == 'trailer'" class="mt-5 space-y-5 md:w-[90%] lg:w-full mx-auto">

              <!-- Trailers Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                <!-- Trailer -->
                <div v-for="loop in 3" :key="loop" @click="trailerId = '9Lq9PfHsMkU'; trailerModal = true" class="relative flex group cursor-pointer">
                  <img src="https://img.youtube.com/vi/9Lq9PfHsMkU/sddefault.jpg" alt="Trailer Thumbnail" class="rounded-lg group-hover:opacity-40 duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-full h-full p-10 opacity-0 group-hover:opacity-80 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="absolute bottom-0 bg-blue-700 font-semibold p-1.5 px-3 rounded-bl-lg rounded-tr-lg text-sm">PV 1</span>
                </div>
                <!-- End Trailer -->

              </div>
              <!-- End Trailers Grid -->

              <!-- Trailer Modal -->
              <div v-show="trailerModal == true">
                <div @click="trailerModal = trailerModal = false" class="z-50 fixed inset-0 w-full h-full bg-opacity-70 flex justify-center items-center pt-5 bg-trueGray-800">
                  <button @click="trailerModal = trailerModal = false" class="absolute -mt-80 md:-mt-96">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 hover:opacity-60 duration-150" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <iframe :src="'https://www.youtube.com/embed/'+trailerId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg bg-trueGray-800 p-3 shadow-xl mx-20 w-[530px] h-[285px] md:w-[630px] md:h-[385px]"></iframe>
                </div>
              </div>
              <!-- End Trailer Modal -->

            </div>
            <!-- End Trailer -->

          </div>
          <!-- End Desktop Right Content & Ipad & Mobile Bottom Content -->

        </section>
        <!-- End Content -->

      </div>
      <!-- Data State -->

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
import AnimeCard from '../../components/mpa/parts/AnimeCard.vue'
import AnimeCardSkeleton from '../../components/mpa/parts/AnimeCardSkeleton.vue'
import {useRoute} from 'vue-router'

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
    
    const loadMore = ref(false);
    const loadingState = ref(false)
    const tab = ref(useRoute().query.tab || 'info')

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

    return {
      loadingState,
      tab,

      loadMore,
      sinopsis,
      synopsisLength,

      trailerId,
      trailerModal,
    }
  }
}
</script>