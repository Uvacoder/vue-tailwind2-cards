<template>
  <div class="text-white flex justify-between min-h-screen max-h-full min-w-full max-w-6xl">
    <!-- Left Content -->
    <div class="w-[17%] bg-trueGray-900 p-2">
      <div class="flex flex-col justify-between">
        <!-- Top Section -->
        <div class="h-[530px]">
        <!-- Logo -->
        <div class="flex space-x-1 items-center p-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <h1 class="text-xl font-bold tracking-tight">Sepotifiru</h1>
        </div>
        <!-- End Logo -->

        <!-- Menus Top -->
        <div class="mt-5">

          <!-- Menu -->
          <a href="#" class="flex items-center font-semibold space-x-2 text-white text-opacity-50 hover:text-opacity-100 hover:bg-trueGray-400/25 duration-200 py-2 px-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Home</span>
          </a>
          <!-- End Menu -->
          <!-- Menu -->
          <a href="#" class="flex items-center font-semibold space-x-2 text-white text-opacity-50 hover:text-opacity-100 hover:bg-trueGray-400/25 duration-200 py-2 px-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </a>
          <!-- End Menu -->
          <!-- Menu -->
          <a href="#" class="flex items-center font-semibold space-x-2 text-white text-opacity-50 hover:text-opacity-100 hover:bg-trueGray-400/25 duration-200 py-2 px-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
              <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
              <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
              <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span>Your Library</span>
          </a>
          <!-- End Menu -->

        </div>
        <!-- EndMenus Top -->

        <!-- Menus Bottom -->
        <div class="mt-5">

          <!-- Menu -->
          <a href="#" class="flex items-center font-semibold space-x-2 text-white text-opacity-50 hover:text-opacity-100 hover:bg-trueGray-400/25 duration-200 py-2 px-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            <span>Create playlist</span>
          </a>
          <!-- End Menu -->
          <!-- Menu -->
          <a href="#" class="flex items-center font-semibold space-x-2 text-white text-opacity-50 hover:text-opacity-100 hover:bg-trueGray-400/25 duration-200 py-2 px-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span>Liked Song</span>
          </a>
          <!-- End Menu -->

        </div>
        <!-- EndMenus Bottom -->
        </div>
        <!-- End Top Section -->
        <!-- Bottom Section -->
        <div class="h-full flex flex-col text-sm space-y-2">
          <a class="hover:underline" href="#">Cookies</a>
          <a class="hover:underline" href="#">Piracy</a>
        </div>
        <!-- End Bottom Section -->
      </div>

    </div>
    <!-- End Left Content -->

    <!-- Right Content -->
    <div class="w-[83%] bg-trueGray-800">

      <!-- Topbar -->
      <div class="bg-trueGray-900 p-4 px-10 flex justify-between">

        <!-- Left Section -->
        <div class="flex space-x-4">
          <a href="#" class="text-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <a href="#" class="text-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <!-- End Left Section -->
        
        <!-- Right Section -->
        <div class="font-semibold flex divide-white divide-x-2">
          <div class="space-x-5 pr-5">
            <a href="#" class="text-base hover:text-lg duration-200">Premium</a>
            <a href="#" class="text-base hover:text-lg duration-200">Support</a>
            <a href="#" class="text-base hover:text-lg duration-200">Download</a>
          </div>
          <div class="space-x-5 pl-5">
            <a href="#" class="text-base hover:text-lg duration-200">Sign Up</a>
            <a href="#" class="p-2 bg-white text-black px-10 rounded-full">Log In</a>
          </div>
        </div>
        <!-- End Right Section -->

      </div>
      <!-- End Topbar -->

      <!-- Contents -->
      <div class="overflow-y-auto max-h-[550px] p-5 px-10">

        <!-- Content -->
        <div class="space-y-5 mb-10">
          <div class="flex justify-between">
            <a href="#" class="font-bold text-xl hover:underline">Barisan Playlist Andalan Anda</a>
            <a href="#" class="font-semibold text-white/50 hover:underline">See All</a>
          </div>

          <!-- Cards -->
          <div class="grid grid-cols-5 gap-10">

            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            
          </div>
          <!-- End Cards -->

        </div>
        <!-- End Content -->
        <!-- Content -->
        <div class="space-y-5 mb-10">
          <div class="flex justify-between">
            <a href="#" class="font-bold text-xl hover:underline">Barisan Playlist Andalan Anda</a>
            <a href="#" class="font-semibold text-white/50 hover:underline">See All</a>
          </div>

          <!-- Cards -->
          <div class="grid grid-cols-5 gap-10">

            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            
          </div>
          <!-- End Cards -->

        </div>
        <!-- End Content -->
        <!-- Content -->
        <div class="space-y-5 mb-10">
          <div class="flex justify-between">
            <a href="#" class="font-bold text-xl hover:underline">Barisan Playlist Andalan Anda</a>
            <a href="#" class="font-semibold text-white/50 hover:underline">See All</a>
          </div>

          <!-- Cards -->
          <div class="grid grid-cols-5 gap-10">

            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            
          </div>
          <!-- End Cards -->

        </div>
        <!-- End Content -->
        <!-- Content -->
        <div class="space-y-5 mb-10">
          <div class="flex justify-between">
            <a href="#" class="font-bold text-xl hover:underline">Barisan Playlist Andalan Anda</a>
            <a href="#" class="font-semibold text-white/50 hover:underline">See All</a>
          </div>

          <!-- Cards -->
          <div class="grid grid-cols-5 gap-10">

            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            <!-- Card -->
            <a href="#" class="group hover:bg-trueGray-900 p-3 duration-200 rounded-md">
              <div class="relative">
                <img src="../../assets/images/myponyasia/landscape1.png" alt="Poster ini mah :v" class="object-cover w-[163px] h-[163px] rounded-md">
                <div class="absolute bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 duration-200 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p class="font-semibold mt-3">Ini judul</p>
              <p class="text-sm text-white/50 line-clamp-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </a>
            <!-- End Card -->
            
          </div>
          <!-- End Cards -->

        </div>
        <!-- End Content -->

      </div>
      <!-- End Contents -->

    </div>
    <!-- End Right Content -->

</div>
</template>