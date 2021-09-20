<template>

  <header class="flex justify-between items-center bg-black text-white px-10 max-w-[1400px] mx-auto">
    
    <!-- Left Section -->
    <div class="flex items-center space-x-5 py-4">
      
      <!-- Logo desu -->
      <span class="font-extrabold text-red-500 text-2xl tracking-tight cursor-default">Netfliksu</span>
      <!-- Logo desu -->

      <!-- Menus -->
      <div class="space-x-5 text-sm">
        <a href="#" class="font-bold text-white/75 hover:text-white/100 duration-150">Home</a>
        <a href="#" class="font-bold text-white/75 hover:text-white/100 duration-150">TV Shows</a>
        <a href="#" class="font-bold text-white/75 hover:text-white/100 duration-150">Movies</a>
        <a href="#" class="font-bold text-white/75 hover:text-white/100 duration-150">Latest</a>
        <a href="#" class="font-bold text-white/75 hover:text-white/100 duration-150">Watch Again</a>
      </div>
      <!-- End Menus -->

    </div>
    <!-- End Left Section -->

    <!-- Right Section -->
    <div class="flex items-center space-x-5">

      <!-- Search Icon -->
      <a href="#" class="text-white/75 hover:text-white/100 duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </a>
      <!-- End Search Icon -->

      <!-- Bell icon -->
      <a href="#" class="text-white/75 hover:text-white/100 duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </a>
      <!-- End Bell icon -->

      <!-- Profile -->
      <button class="flex items-center space-x-2">
        <img src="../../assets/images/myponyasia/poster-portrait2.jpg" alt="Profile" class="h-6 w-6 rounded-sm object-cover">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <!-- End Profile -->

    </div>
    <!-- End Right Section -->

  </header>

  <main class="w-full max-w-[1400px] mx-auto bg-black">

    <!-- Hero Section -->
    <section class="relative h-[570px] w-full bg-black overflow-hidden">
      
      <!-- Hero Video -->
      <div class="absolute bg-gradient-to-t from-black via-black/50 to-black/25 h-full w-full"></div>
      <video autoplay muted disablePictureInPicture loop :poster="require('@/assets/images/myponyasia/landscape1.png')"  class="w-full -mt-5">
        <source :src='require("@/assets/videos/herovideo.mp4")' type='video/mp4'>
      </video>
      <!-- End Hero Video -->

      <!-- Hero Content Left -->
      <div class="absolute top-1/4 left-10 text-white">

        <!-- Tittle -->
        <h2 class="text-lg font-bold">Azure Lane:</h2>
        <h1 class="text-5xl font-bold tracking-tight">Bisoku Zenshin!</h1>
        <!-- Tittle -->

        <!-- Button -->
        <div class="flex space-x-5 mt-6">
          <button @click="isOpen = true" class="flex items-center bg-white text-black p-2 px-5 rounded-md space-x-2 hover:opacity-50 duration-150 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
            <span>Play</span>
          </button>
          <button class="flex items-center bg-white/20 text-white p-2 px-5 rounded-md space-x-2 hover:opacity-50 duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            <span>More info</span>
          </button>
        </div>
        <!-- End Button -->

      </div>
      <!-- Hero Content Left -->

      <!-- Hero Content Right -->
      <div class="absolute top-[45%] right-10 text-white">
        <div class="bg-white/20 pl-2 pr-10 border-l-2 border-white backdrop-blur-2xl">13+</div>
      </div>
      <!-- End Hero Content Right -->

    </section>
    <!-- End Hero Section -->

    <!-- Latest Section -->
    <section class="relative py-20 pb-40 text-white px-10 bg-black">
      <div class="absolute -mt-36 z-10 w-[1250px] px-10">
        <a href="#" class="text-lg font-semibold hover:opacity-60 duration-150">Latest Release {{ isOpen }} </a>
        
        <div class="w-full">
          <vueper-slides
            :visible-slides="5"
            :slide-ratio="1/7"
            :gap=1
            :bullets= false
            :touchable= false

            @slide= "getCurrentSlide($event)"

            fixedHeight="250px"
          >
            <vueper-slide v-for="(data, index) in corouselData" :key="index">
              <template #content>
                  <div href="#" class="group">
                    <div :class="[currentSlideData.index == index ? '-translate-y-5 z-20' : '']" class="pt-5 absolute text-black rounded-lg group-hover:-translate-y-5 group-hover:z-20 transition-all">
                      <img  :src="data.poster" alt="Movie Poster" :class="[currentSlideData.index == index ? 'rounded-b-none ' : '']" class="rounded-lg group-hover:rounded-b-none transition-all" />
                      <div :class="[currentSlideData.index == index ? 'contents' : 'hidden']" class="group-hover:contents transition-all">
                        <!-- Top Buttons -->
                        <div class="text-white flex justify-between items-center">
                          <div class="flex items-center space-x-1">
                            <button @click="isOpen = true" class="hover:opacity-50 duration-150 mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                              </svg>
                            </button>
                            
                            <button @click="isOpen = true" class="hover:opacity-50 duration-150 mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                              </svg>
                            </button>

                            <button @click="isOpen = true" class="hover:opacity-50 duration-150 mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                              </svg>
                            </button>

                            <button @click="isOpen = true" class="hover:opacity-50 duration-150 mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
                              </svg>
                            </button>
                          </div>

                          <div class="flex">
                            <button @click="isOpen = true" class="hover:opacity-50 duration-150 mt-1.5">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                              </svg>
                            </button>
                          </div>

                        </div>
                        <!-- End Top Buttons -->

                        <div class="flex text-white mt-5 space-x-2 items-center font-semibold">
                          <span class="text-green-500">New</span>
                          <span class="px-1.5 border border-white/50 text-sm"> {{ data.rating }} </span>
                          <span class="text-sm"> {{ data.duration }} </span>
                          <span class="px-1.5 border border-white/40 text-xs text-white/75"> {{ data.resolution }} </span>
                        </div>
                        <ul class="text-white/75 flex space-x-1 divide-sky-400">
                          <li v-for="(genre, index) in data.genres" :key="index" class="text-sm font-semibold"> <span v-show="index != 0">&bull;</span> {{ genre }} </li>
                        </ul>
                        
                      </div>
                    </div>
                    
                  </div>
              </template>
            </vueper-slide>

            <template #arrow-left>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="text-white -mt-10">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </template>

            <template #arrow-right>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="text-white -mt-10">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </template>
          </vueper-slides>
        </div>

      </div>
    </section>
    <!-- End Latest Section -->

  </main>

  <!-- Modal -->
  <Dialog :open="isOpen">
    <div class="fixed inset-0 z-10 overflow-y-auto max-w-[1400px] mx-auto">
      
      <!-- Overlay -->
      <DialogOverlay @click="isOpen = false" class="fixed bg-black/50 inset-0"/>
      <!-- End Overlay -->
      
      <div class="bg-black w-3/4 h-full left-[12%] absolute">
        <div class="bg-black overflow-y-auto pb-10">
          <!-- Video -->
          <div class="bg-gradient-to-b from-transparent via-black/50 to-black absolute bottom-28 to-black w-full h-full"></div>
          <video autoplay muted disablePictureInPicture loop :poster="require('@/assets/images/myponyasia/landscape1.png')"  class="w-full -mt-14">
            <source :src='require("@/assets/videos/herovideo.mp4")' type='video/mp4'>
          </video>
          <!-- End Video -->

          <!-- Buttons -->
          <div class="flex items-center space-x-5 mt-6 px-14 text-white">
            <button class="flex items-center bg-white text-black p-1 px-5 rounded-md space-x-2 hover:opacity-50 duration-150 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
              <span class="font-bold">Play</span>
            </button>
            
            <button class="opacity-50 hover:opacity-100 duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </button>

            <button class="opacity-50 hover:opacity-100 duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
              </svg>
            </button>

            <button class="opacity-50 hover:opacity-100 duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
              </svg>
            </button>
          </div>
          <!-- End Buttons -->

          <!-- Contents -->
          <section class="mt-10 px-14 flex justify-between text-white">

            <!-- Left Content -->
            <div class="w-[65%] mt-5">

              <!-- Movie Detail -->
              <div class="flex space-x-2 items-center font-semibold">
                <span class="text-green-500">New</span>
                <span class="px-1.5 border border-white/50 text-sm"> 13+ </span>
                <span class="text-sm"> 90 min </span>
                <span class="px-1.5 border border-white/40 text-xs text-white/75"> HD+ </span>
              </div>
              <!-- End Movie Detail -->
              
              <!-- Synopsis -->
              <p class="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptatum totam commodi vel, perspiciatis repellendus placeat maxime eligendi similique odit nobis veniam at non laboriosam libero temporibus accusantium deleniti fugiat velit adipisci modi rerum, nam quis repellat! Ipsam, fugit. Dignissimos!</p>
              <!-- End Synopsis -->

            </div>
            <!-- End Left Content -->

            <!-- Right Content -->
            <div class="w-[25%] mt-5">
              <div class="space-x-3 font-semibold">
                <span class="text-white/50">cast:</span>
                <span>Javelin, Ayanami, Z23, Laffey</span>
              </div>
              <div class="space-x-3 font-semibold">
                <span class="text-white/50">Genres:</span>
                <span>Waifuable, Comedy, Slice of Life</span>
              </div>
              <div class="space-x-3 font-semibold">
                <span class="text-white/50">This movie is:</span>
                <span>Just for fun and enjoy your waifus</span>
              </div>
            </div>
            <!-- End Right Content -->

          </section>
          <!-- End Contents -->

          <!-- More -->
          <section class="text-white px-14 mt-14">
            <h1 class="text-2xl font-bold">More Like This</h1>

            <!-- Movie Card Conteiner -->
            <div class="grid grid-cols-3 gap-3 mt-5">
              
              <!-- Movie Card -->
              <div v-for="loop in videoCount" :key="loop" class="bg-trueGray-700/80 py-3 px-3">

                <!-- Poster -->
                <div class="relative -mx-3 -mt-3">
                  <img src="@/assets/images/myponyasia/landscape3.png" alt="Movie Poster" class="opacity-75 w-[290px]">
                  <span class="absolute top-1 right-4 font-semibold">90 min</span>
                </div>
                <!-- End Poster -->

                <!-- Movie Detail -->
                <div class="flex justify-between mt-3 items-center ">

                  <!-- left Card Content -->
                  <div>
                    <h2 class="text-green-500 font-bold">60% Match</h2>
                    <div class="flex space-x-2">
                      <span class="font-semibold border border-white/50 px-2">16+</span>
                      <h3 class="font-semibold">2014</h3>
                    </div>
                  </div>
                  <!-- End left Card Content -->

                  <!-- Right Card Content -->
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-10 w-10 text-white/50 hover:text-white/100 cursor-pointer" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </div>
                  <!-- End Right Card Content -->

                </div>
                <!-- End Movie Detail -->

                <!-- Synopsis -->
                <p class="line-clamp-6 mt-3 text-white/75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia atque expedita laboriosam? Quae deleniti similique pariatur, nesciunt rem neque, a illum earum quas eum vitae nemo ex illo. Cum aliquam obcaecati ratione consequuntur ipsum vero doloribus quo perferendis laborum assumenda.</p>
                <!-- End Synopsis -->

              </div>
              <!-- End Movie Card -->

            </div>
            <!-- End Movie Card Conteiner -->

          </section>
          <!-- End More -->

          <!-- More Button -->
          <section class="bg-gradient-to-b from-transparent via-black to-black -mt-40 pt-40 text-white absolute w-full">
            <div class="flex justify-center bg-black -mt-16">
              <button @click="videoCount += 3" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 p-1.5 text-white/50 hover:text-white border border-white/50 hover:border-white rounded-full duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </section>
          <!-- End More Button -->

          <!-- Movie Description -->
          <section class="mt-10 text-white px-14 space-y-1">
            <h1 class="text-2xl font-bold">About Azur Lane</h1>
            <h3 class="text-white/50">Director: <span class="text-white">Masamune Sensei</span> </h3>
            <h3 class="text-white/50">Cast: <span class="text-white">Ayanami, Z23, Javelin, Laffey</span> </h3>
            <h3 class="text-white/50">Writer: <span class="text-white">Lorem, ipsum.</span> </h3>
            <h3 class="text-white/50">Genres: <span class="text-white">Lorem ipsum dolor sit amet consectetur..</span> </h3>
            <h3 class="text-white/50">Rating: <span class="text-white/75 border border-white/75 px-1">13+</span> <span class="text-white">Lorem, ipsum.</span> </h3>
          </section>
          <!-- End Movie Description -->

        </div>
      </div>

    </div>
  </Dialog>
  <!-- End Modal -->

  <footer class="max-w-[1400px] mx-auto bg-black text-white pt-10 py-5">
    <!-- Watermark :v -->
    <div class="space-x-5 text-center">
     <a href="https://github.com/KingSit3" class="hover:opacity-50 duration-150">Remade By Indra Ardiansyah</a>
     <span>&bull;</span>
     <a href="https://www.netflix.com" class="hover:opacity-50 duration-150">Design by Netflix</a>
    </div>
    <!-- End Watermark :v -->
  </footer>

 
</template>

<script>
import {
  // TransitionRoot,
  // TransitionChild,
  Dialog,
  DialogOverlay,
} from '@headlessui/vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {

  components: { 
    VueperSlides, 
    VueperSlide,

    // TransitionRoot,
    // TransitionChild,
    Dialog,
    DialogOverlay,
  },

  data() {
    return {
      currentSlideData: {
                          'slide': '',
                          'index': 0,
                        },
      corouselData: [
        {
          genres: ['Comedy', 'Harem', 'Slice Of Life'],
          rating: '17+',
          duration: '90 min',
          resolution: 'HD+++',
          poster: require('@/assets/images/myponyasia/landscape1.png')
        },
        {
          genres: ['Isekai', 'Magic'],
          rating: '13+',
          duration: '120 min',
          resolution: '4K',
          poster: require('@/assets/images/myponyasia/landscape2.png')
        },
        {
          genres: ['Action', 'Waifuable'],
          rating: '22+',
          duration: '20 min',
          resolution: 'SD',
          poster: require('@/assets/images/myponyasia/landscape3.png')
        },
        {
          genres: ['Comedy', 'Harem', 'Slice Of Life'],
          rating: '17+',
          duration: '90 min',
          resolution: 'HD+++',
          poster: require('@/assets/images/myponyasia/landscape1.png')
        },
        {
          genres: ['Isekai', 'Magic'],
          rating: '13+',
          duration: '120 min',
          resolution: '4K',
          poster: require('@/assets/images/myponyasia/landscape2.png')
        },
        {
          genres: ['Action', 'Waifuable'],
          rating: '22+',
          duration: '20 min',
          resolution: 'SD',
          poster: require('@/assets/images/myponyasia/landscape3.png')
        },
        {
          genres: ['Comedy', 'Harem', 'Slice Of Life'],
          rating: '17+',
          duration: '90 min',
          resolution: 'HD+++',
          poster: require('@/assets/images/myponyasia/landscape3.png')
        },
        {
          genres: ['Isekai', 'Magic'],
          rating: '13+',
          duration: '120 min',
          resolution: '4K',
          poster: require('@/assets/images/myponyasia/landscape2.png')
        },
        {
          genres: ['Action', 'Waifuable'],
          rating: '22+',
          duration: '20 min',
          resolution: 'SD',
          poster: require('@/assets/images/myponyasia/landscape1.png')
        },
      ],
      isOpen: false,
      videoCount: 3,
    }
  },

  methods: {
    getCurrentSlide(event){
      this.currentSlideData = event.currentSlide;
    }
  },

}
</script>

<style>

</style>