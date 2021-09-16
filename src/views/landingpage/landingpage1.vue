<template>
  <div class="text-white max-w-[1550px] mx-auto overflow-hidden">

    <!-- TopBar -->
    <header class="flex justify-between items-center text-trueGray-500 py-2 w-[90%] mx-auto text-lg">
      
      <!-- Left Section -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
      <!-- Left Section -->

      <!-- Middle Section -->
      <div class="flex space-x-5 font-semibold">
        <a href="#">
          <div class="flex items-center space-x-1">
            <span>
              Solusi
            </span> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </a>
        <a href="#">Harga</a>
        <a href="#">Partner</a>
        <a href="#">Perusahaan</a>
      </div>
      <!-- End Middle Section -->

      <!-- Right Section -->
      <div class="space-x-5">
        <a href="#" class="">Sign in</a>
        <a href="#" class="btn">Sign up</a>
      </div>
      <!-- End Right Section -->

    </header>
    <!-- End TopBar -->

    <!-- Jumbotron -->
    <section class="mt-5 relative">
      <div class="absolute bg-trueGray-100 w-full h-[350px] mt-52"/>
      <div class="w-[90%] mx-auto relative">
        <img src="../../assets/images/myponyasia/landscape1.png" alt="Jumbotron" class="rounded-xl object-cover w-full h-[520px] shadow-xl">
        <div class="absolute top-0 w-full h-full rounded-xl bg-black/40">
          <div class="flex flex-col justify-center items-center h-full cursor-default text-center px-10">
            <h1 class="text-5xl font-extrabold">Lorem ipsum dolor sit amet.</h1>
            <h2 class="text-5xl font-bold text-white/75">Lorem ipsum dolor sit amet consectetur, adipisicing</h2>
            <p class="text-xl my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae recusandae assumenda unde adipisci dolorem tenetur ipsum consectetur nostrum commodi!</p>
            <div class="flex justify-between space-x-10">
              <button class="p-3 px-10 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white duration-150 font-semibold rounded-lg">Left</button>
              <button class="p-3 px-10 bg-indigo-600/50 hover:bg-indigo-600/100 duration-150 font-semibold rounded-lg">Right</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Jumbotron -->

    <!-- Trusted By Company -->
    <section class="bg-gradient-to-b from-trueGray-100 to-white py-10 text-black/70">
      <div class="w-[90%] mx-auto">
        <h3 class="font-semibold text-center text-xl">Trusted By</h3>

        <!-- Company Container -->
        <div class="flex justify-center items-center py-5 flex-wrap space-x-14">

          <!-- Companies -->
          <div v-for="loop in 5" :key="loop" class="flex items-center opacity-50 space-x-1">
            <span class="text-xl"> Company {{ loop }} </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <!-- Companies -->

        </div>
        <!-- Company Container -->

      </div>
    </section>
    <!-- End Trusted By Company -->

    <!-- Advantage 1 -->
    <section class="py-16 text-black/70">
      <div class="flex justify-around items-center max-w-[90%] mx-auto">
        
        <!-- Left Section -->
        <div class="w-1/2 space-y-3">

          <!-- Icon Container -->
          <div class="flex">
            <div class="btn ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
          </div>
          <!-- End Icon Container -->

          <h1 class="font-extrabold text-3xl">Lorem ipsum dolor sit amet.</h1>
          <p class="text-lg text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores similique a minima voluptate, sunt nostrum minus modi tenetur est ad explicabo odio placeat dicta repudiandae suscipit iure beatae enim temporibus, soluta laudantium eos mollitia veniam consectetur accusantium? Nihil vel, in, veritatis porro similique doloremque atque enim repudiandae dolore quia deleniti.</p>
          <button class="btn">Get Started</button>

        </div>
        <!-- End Left Section -->

        <!-- Right Section -->
        <div class="h-[370px] w-1/2">
          <div class="relative bg-black">
            <img src="../../assets/images/myponyasia/landscape1.png" alt="Advantage Pict" class="rounded-xl absolute -right-44 transform -rotate-3 shadow-xl duration-150">
          </div>
        </div> 
        <!-- End Right Section -->

      </div>
    </section>
    <!-- End Advantage 1 -->

    <!-- Advantage 2 -->
    <section class="py-16 text-black/70">
      <div class="flex justify-around items-center max-w-[90%] mx-auto">
        
        <!-- left Section -->
        <div class="h-[370px] w-1/2">
          <div class="relative bg-black">
            <img src="../../assets/images/myponyasia/landscape1.png" alt="Advantage Pict" class="rounded-xl absolute -left-44 transform rotate-3 shadow-xl duration-150">
          </div>
        </div> 
        <!-- End left Section -->

        <!-- Right Section -->
        <div class="w-1/2 space-y-3">

          <!-- Icon Container -->
          <div class="flex">
            <div class="btn ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
          <!-- End Icon Container -->

          <h1 class="font-extrabold text-3xl">Lorem ipsum dolor sit amet.</h1>
          <p class="text-lg text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores similique a minima voluptate, sunt nostrum minus modi tenetur est ad explicabo odio placeat dicta repudiandae suscipit iure beatae enim temporibus, soluta laudantium eos mollitia veniam consectetur accusantium? Nihil vel, in, veritatis porro similique doloremque atque enim repudiandae dolore quia deleniti.</p>
          <button class="btn">Get Started</button>
        </div>
        <!-- End Right Section -->

      </div>
    </section>
    <!-- End Advantage 2 -->

    <!-- Company Products -->
    <section class="relative bg-gradient-to-r from-purple-700 to-indigo-600 mt-20">

      <!-- Wavy-Wavy -->
      <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 210" version="1.1" xmlns="http://www.w3.org/2000/svg" class="absolute -top-32">
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
            <stop stop-color="rgba(109, 40, 217, 1)" offset="0%" />
            <stop stop-color="rgba(79, 70, 229, 1)" offset="20%" />
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 0px); opacity:1" fill="url(#gradient)" d="M0,21L48,35C96,49,192,77,288,73.5C384,70,480,35,576,21C672,7,768,14,864,38.5C960,63,1056,105,1152,115.5C1248,126,1344,105,1440,84C1536,63,1632,42,1728,38.5C1824,35,1920,49,2016,45.5C2112,42,2208,21,2304,24.5C2400,28,2496,56,2592,70C2688,84,2784,84,2880,80.5C2976,77,3072,70,3168,56C3264,42,3360,21,3456,17.5C3552,14,3648,28,3744,52.5C3840,77,3936,112,4032,105C4128,98,4224,49,4320,24.5C4416,0,4512,0,4608,17.5C4704,35,4800,70,4896,98C4992,126,5088,147,5184,157.5C5280,168,5376,168,5472,157.5C5568,147,5664,126,5760,115.5C5856,105,5952,105,6048,87.5C6144,70,6240,35,6336,45.5C6432,56,6528,112,6624,119C6720,126,6816,84,6864,63L6912,42L6912,210L6864,210C6816,210,6720,210,6624,210C6528,210,6432,210,6336,210C6240,210,6144,210,6048,210C5952,210,5856,210,5760,210C5664,210,5568,210,5472,210C5376,210,5280,210,5184,210C5088,210,4992,210,4896,210C4800,210,4704,210,4608,210C4512,210,4416,210,4320,210C4224,210,4128,210,4032,210C3936,210,3840,210,3744,210C3648,210,3552,210,3456,210C3360,210,3264,210,3168,210C3072,210,2976,210,2880,210C2784,210,2688,210,2592,210C2496,210,2400,210,2304,210C2208,210,2112,210,2016,210C1920,210,1824,210,1728,210C1632,210,1536,210,1440,210C1344,210,1248,210,1152,210C1056,210,960,210,864,210C768,210,672,210,576,210C480,210,384,210,288,210C192,210,96,210,48,210L0,210Z" />
      </svg>
      <!-- End Wavy-Wavy -->

      <!-- Content -->
      <div class="w-[90%] mx-auto py-20">
        <h1 class="text-3xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <h2 class="w-1/2 text-lg my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque temporibus adipisci impedit ducimus qui cum corrupti? Tempore non assumenda minus.</h2>

        <!-- Grid Container -->
        <div class="grid grid-cols-4 gap-10 mt-20">

          <!-- Grid -->
          <div v-for="loop in 8" :key="loop">
            <div class="flex py-3">
              <div class="p-3 bg-purple-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl py-2">Lorem, ipsum dolor.</h3>
            <p class="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae exercitationem aliquid corrupti, minima veniam voluptate repellendus in voluptatem rerum nulla.</p>
          </div>
          <!-- Grid -->

        </div>
        <!-- End Grid Container -->

      </div>
      <!-- Content -->

    </section>
    <!-- End Company Products -->

    <!-- Metrics Section -->
    <section class="relative w-full h-[650px]">

      <!-- BG image -->
      <img src="../../assets/images/myponyasia/landscape3.png" alt="Metrics Image" class="object-cover h-[650px]">
      <!-- BG image -->

      <div class="absolute top-0 bg-gradient-to-r from-black via-black/75 w-full h-full" />

      <!-- Content -->
      <div class="absolute top-0 p-16 w-1/2 space-y-2">
        <h3 class="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-200  to-purple-800">Tentang Bisnis kita</h3>
        <h1 class="text-3xl font-bold" v-html="'AAAA Sagiri-chan >-<'"></h1>
        <p class="text-white/80 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita consequuntur obcaecati repellendus veniam ad exercitationem modi non, eius, voluptatum reprehenderit atque placeat voluptas numquam necessitatibus quo. Harum, iure eveniet.</p>

        <!-- Business Numbers -->
        <div class="flex py-10 space-x-10">

          <!-- Left Number -->
          <div class="w-1/2 space-y-10">
            <div>
              <h1 class="font-extrabold text-3xl">18K+</h1>
              <p class="line-clamp-2"><b>Lorem</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ea ab dolor odit dignissimos architecto blanditiis beatae asperiores sed voluptatum.</p>
            </div>
            <div>
              <h1 class="font-extrabold text-3xl">18%</h1>
              <p class="line-clamp-2"><b>Lorem</b> ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <!-- End Left Number -->
          
          <!-- Right Number -->
          <div class="w-1/2 space-y-10">
            <div>
              <h1 class="font-extrabold text-3xl">20K+</h1>
              <p class="line-clamp-2"><b>Lorem</b> ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <h1 class="font-extrabold text-3xl">1K+</h1>
              <p class="line-clamp-2"><b>Lorem</b> ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <!-- End Right Number -->

        </div>
        <!-- End Business Numbers -->

      </div>
      <!-- End Content -->
      
    </section>
    <!-- End Metrics Section -->

    <!-- Get Started Section -->
    <section class="flex justify-between text-black p-20">
      
      <!-- Left Section -->
      <div>
        <h1 class="text-3xl font-extrabold">Ready to join us?</h1>
        <h2 class="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">Lorem ipsum dolor sit amet, consectetur</h2>
      </div>
      <!-- End Left Section -->
      
      <!-- Right Section -->
      <div>
        <div class="flex justify-end space-x-5">
          <button class="btn">learn More</button>
          <button class="p-3 px-5 text-indigo-700 bg-indigo-200/50 duration-150 font-semibold rounded-lg">Get Started</button>
        </div>
      </div>
      <!-- End Right Section -->

    </section>
    <!-- End Get Started Section -->

    <!-- Footer -->
    <footer class="bg-trueGray-300/50 text-black/70 font-semibold flex py-20">  
      
      <!-- Links Section -->
      <div class="w-[60%] px-10 flex space-x-10">
        <div class="flex-grow flex flex-col space-y-5">
          <h3>Header 1</h3>
          <a href="#">Title 1</a>
          <a href="#">Title 2</a>
          <a href="#">Title 3</a>
          <a href="#">Title 4</a>
        </div>
        <div class="flex-grow flex flex-col space-y-5">
          <h3>Header 1</h3>
          <a href="#">Title 1</a>
          <a href="#">Title 2</a>
          <a href="#">Title 3</a>
          <a href="#">Title 3</a>
          <a href="#">Title 4</a>
        </div>
        <div class="flex-grow flex flex-col space-y-5">
          <h3>Header 1</h3>
          <a href="#">Title 1</a>
          <a href="#">Title 2</a>
          <a href="#">Title 4</a>
        </div>
        <div class="flex-grow flex flex-col space-y-5">
          <h3>Header 1</h3>
          <a href="#">Title 1</a>
          <a href="#">Title 2</a>
          <a href="#">Title 3</a>
          <a href="#">Title 3</a>
          <a href="#">Title 3</a>
          <a href="#">Title 4</a>
        </div>
      </div>
      <!-- End Links Section -->

      <!-- Subscribe Section -->
      <div class="w-[40%] px-10 text-black/50">
        <p>Subscribe Lorem, ipsum dolor.</p>
        <p class="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, deserunt.</p>
        <div class="flex space-x-5 mt-5">
          <input type="text" placeholder="Enter your email" class="pr-10 pl-3 rounded-lg ring-1 ring-trueGray-500/50">
          <button class="btn">Subscribe</button>
        </div>
      </div>
      <!-- End Subscribe Section -->

    </footer>
    <!-- End Footer -->
    
  </div>
</template>

<style>
  .bg-primary {
    @apply bg-indigo-600;
  }

  .bg-secondary {
    @apply bg-trueGray-500;
  }

  .text-primary {
    @apply text-indigo-600;
  }

  .text-secondary {
    @apply text-trueGray-500;
  }

  .btn {
    @apply p-3 px-5 bg-gradient-to-r from-purple-600 bg-indigo-600 text-white font-bold rounded-lg;
  }
</style>