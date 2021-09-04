<template>
  <div class="text-trueGray-500 p-5">
    <!-- TopBar -->
    <div class="flex justify-between items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
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
      <div class="space-x-5">
        <a href="#" class="">Sign in</a>
        <a href="#" class="p-2 px-5 bg-indigo-600 text-white font-semibold rounded-lg">Sign up</a>
      </div>
    </div>
    <!-- End TopBar -->

    <!-- Jumbotron -->
    <div class="relative my-5 w-full h-[550px]">
      <img src="../../assets/images/myponyasia/landscape1.png" alt="Ini Jumbotron" class="absolute w-full h-[550px] object-cover opacity-100 rounded-lg z-10">
      <div class="absolute flex h-full w-full justify-center items-center mb-10 z-20">
        <div class="space-y-5">
          <h1 class="text-5xl font-extrabold text-center px-80">Lorem ipsum dolor sit amet. <span class="text-trueGray-500 text-opacity-50">Lorem ipsum dolor sit amet.</span> </h1>
          <h2 class="text-2xl text-center px-60">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, minus cum! Provident similique sint consectetur natus nostrum a illum deleniti.</h2>
          <div class="flex text-gray-700 justify-center space-x-10 font-semibold">
            <a href="#" class="p-3 px-10 bg-white rounded-lg text-indigo-600 hover:text-white hover:bg-indigo-600 duration-200">Start</a>
            <a href="#" class="p-3 px-10 bg-indigo-500/50 rounded-lg text-white hover:text-white hover:bg-indigo-600 duration-200">Finish</a>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 bg-trueGray-500 z-0 h-[550px] w-full -m-5"/>
    </div>
    <!-- End Jumbotron -->

  </div>
</template>