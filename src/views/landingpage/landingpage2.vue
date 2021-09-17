<template>

  <header class="max-w-[1400px] mx-auto flex justify-between items-center bg-trueGray-800 text-white px-10">

    <!-- Left Header -->
    <div class="flex space-x-5 items-center">

      <!-- Logo -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
      <!-- Logo -->

      <!-- Menus -->
      <ul class="flex space-x-3">
        <a href="#">
          <li class="p-3 border-b-2 border-emerald-500">Produk</li>
        </a>
        <a href="#">
          <li class="p-3 border-b-2 border-transparent hover:border-emerald-500 duration-150">Harta</li>
        </a>
        <a href="#">
          <li class="p-3 border-b-2 border-transparent hover:border-emerald-500 duration-150">Tahta</li>
        </a>
        <a href="#">
          <li class="p-3 border-b-2 border-transparent hover:border-emerald-500 duration-150">Yotsuba</li>
        </a>
      </ul>
      <!-- Menus -->

    </div>
    <!-- End Left Header -->

    <!-- Right Header -->
    <div class="space-x-4">
      <button class="">Log in</button>
      <button class="bg-trueGray-600 p-2 rounded-lg px-5 hover:opacity-75 duration-150">Start Trial</button>
    </div>
    <!-- End Right Header -->

  </header>

  <main class="max-w-[1400px] mx-auto bg-trueGray-200">
    
    <!-- Hero Section -->
    <section class="relative max-h-[600px] w-full">

      <!-- Background -->
      <img src="../../assets/images/myponyasia/landscape3.png" alt="Hero Images" class="h-[600px] w-full object-cover">
      <div class="absolute bg-gradient-to-r from-black to-black/50 w-full h-full top-0"></div>
      <!-- End Background -->

      <!-- Content -->
      <div class="absolute inset-10 text-white space-y-5 mt-16">

        <div class="space-x-3 flex items-center">
        <button class="gradien rounded-full px-5">Join us</button>
        </div>

        <div>
          <h1 class="text-5xl font-extrabold tracking-tight">Sagiri dapat membuat</h1>
          <h1 class="bg-gradient-to-r from-emerald-200 via-sky-500 to-sky-500 bg-clip-text text-transparent text-5xl font-extrabold tracking-tight pb-2">anda bahagia</h1>
        </div>

        <p class="w-1/2 text-xl text-white/75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor nulla cum ducimus necessitatibus? Quos repellendus eum odit eveniet doloribus.</p>

        <div class="space-x-5">
          <input type="text" placeholder="Enter your name" class="p-3 w-3/12 px-5 rounded-lg">
          <button class="gradien p-3 rounded-lg px-6">Start Trial</button>
        </div>

        <p class="text-sm text-white/75">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span class="text-white cursor-pointer">Vel, in?</span></p>

      </div>
      <!-- End Content -->

    </section>
    <!-- Hero Section -->

    <!-- Feature 1 -->
    <section class="h-[700px] overflow-hidden pt-10">
      
      <!-- Top -->
      <div class="pt-20 text-center ">
        <h2 class="gradien bg-clip-text text-transparent text-lg font-semibold">Waifuable</h2>
        <h1 class=" text-3xl font-bold tracking-tighter pt-2">Tidak punya Waifu? No problem.</h1>
        <p class="px-60 text-xl text-black/50 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta nam beatae, inventore debitis libero quam enim distinctio dolores fuga.</p>
      </div>
      <!-- End Top -->

      <img src="../../assets/images/myponyasia/landscape1.png" alt="Image" class="w-[90%] object-cover mx-auto rounded-xl mt-10">

    </section>
    <!-- End Feature 1 -->

    <!-- Feature 2 -->
    <section class="h-[750px] pt-14">
      
      <!-- Top -->
      <div class="pt-20 text-center ">
        <h2 class="gradien bg-clip-text text-transparent text-lg font-semibold">Tonikaku kawaiii</h2>
        <h1 class=" text-3xl font-bold tracking-tighter pt-2">Hal yang perlu kalian tahu dari Sagiri</h1>
        <p class="px-60 text-xl text-black/50 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta nam beatae, inventore debitis libero quam enim distinctio dolores fuga.</p>
      </div>
      <!-- End Top -->

      <!-- Grid Container -->
      <div class="grid grid-cols-3 gap-10 justify-items-center px-10 mt-14">
        
        <!-- Grid Content -->
        <div v-for="loop in 6" :key="loop" class="w-full bg-gray-300/50 text-center relative flex flex-col items-center py-10 px-5">

          <!-- Top SVG -->
          <div class="gradien absolute -top-5 p-1.5 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <!-- End Top SVG -->

          <h1 class="text-xl font-semibold mb-5">Lorem, ipsum.</h1>
          <p class="text-black/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

        </div>
        <!-- End Grid Content -->

      </div>
      <!-- End Grid Container -->

    </section>
    <!-- End Feature 2 -->

    <!-- Review -->
    <section class="h-[750px] pt-32">
      <div class="flex justify-between px-10 gradien relative h-[400px]">

        <!-- Image -->
        <div class="w-3/12">
          <img src="@/assets/images/myponyasia/poster-portrait2.jpg" alt="Review Image" class="absolute -top-7 h-[450px] rounded-xl shadow-lg">
        </div>
        <!-- End Image -->

        <!-- Content -->
        <div class="w-3/4 flex h-full items-center pl-10">
          <p class="text-xl text-white font-semibold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minima deserunt nisi ad architecto labore ut qui, nemo dolore odit nulla explicabo est repellat consequatur officia impedit eum soluta! Cum!</p>
        </div>
        <!-- End Content -->

      </div>
    </section>
    <!-- End Review -->

    <!-- Blog -->
    <section class="h-[700px]">
      
      <!-- Top -->
      <div class="text-center">
        <h2 class="gradien bg-clip-text text-transparent text-lg font-semibold">About</h2>
        <h1 class=" text-3xl font-bold tracking-tighter pt-2">About Sagiri</h1>
        <p class="px-60 text-xl text-black/50 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta nam beatae, inventore debitis libero quam enim distinctio dolores fuga.</p>
      </div>
      <!-- End Top -->

      <!-- Grid Container -->
      <div class="grid grid-cols-3 gap-10 justify-items-center px-10 mt-8">
        
        <!-- Grid Content -->
        <a href="#" v-for="loop in 3" :key="loop" class="bg-white w-full rounded-xl flex flex-col justify-between shadow-lg">

          <!-- Image Header -->
          <img src="@/assets/images/myponyasia/poster-portrait2.jpg" alt="Blog image" class="h-60 w-full object-cover rounded-t-xl">
          <!-- End Image Header -->
          
          <!-- Content -->
          <div class="p-4 space-y-1">
            <h2 class="text-emerald-600 font-semibold text-sm">Article</h2>
            <h1 class="font-bold">Lorem, ipsum dolor.</h1>
            <p class="text-sm text-black/50 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quia aliquam quisquam deserunt natus aut sunt, minus amet accusantium distinctio at nihil temporibus eius exercitationem iusto similique alias earum doloribus facilis officia, id nulla fuga. Maiores ab nihil provident dignissimos.</p>
          </div>
          <!-- End Content -->

          <!-- Profile -->
          <div class="p-4 flex items-center space-x-3">
            <img src="@/assets/images/myponyasia/otaku-anime.jpg" alt="Profile" class="h-8 w-8 object-cover rounded-full">
            <div class="flex flex-col text-sm">
              <span class="font-semibold">Saghiri</span>
              <span class="text-black/50">Lorem ipsum dolor sit amet consectetur.</span>
            </div>
          </div>
          <!-- End Profile -->

        </a>
        <!-- End Grid Content -->

      </div>
      <!-- End Grid Container -->

    </section>
    <!-- End Blog -->

    <!-- Award -->
    <section class="flex justify-between py-10">
      
      <!-- Image -->
      <div class="w-1/2 relative">
        <div class="absolute w-full h-full gradien"></div>
        <img src="@/assets/images/myponyasia/poster-portrait2.jpg" alt="Blog image" class="mix-blend-multiply absolute h-[400px] w-full object-cover bg-blend-darken">
      </div>
      <!-- End Image -->

      <!-- Content -->
      <div class="w-1/2 h-[400px] flex items-center px-10 bg-trueGray-800 text-white">
        <div>
          <h2 class="text-lg py-1">Awards</h2>
          <h1 class="text-3xl font-bold">Lorem, ipsum dolor.</h1>
          <p class="text-white/75 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore ipsam voluptatem nostrum. Asperiores sequi, alias hic placeat incidunt laboriosam ex, in commodi delectus aspernatur officia ipsa totam rerum optio.</p>      
          <button class="bg-white text-black font-semibold p-2 px-5 rounded-lg">Visit us</button>
        </div>
      </div>
      <!-- End Content -->

    </section>
    <!-- End Award -->

  </main>

  <footer class="max-w-[1400px] mx-auto bg-trueGray-200 px-10">

    <div class="text-gray-400 flex justify-between pb-10">
      <!-- Left Section -->
      <div class="w-3/12 space-y-5">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perferendis.</p>

        <!-- Social Media Links -->
        <div class="flex space-x-5">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hover:text-black duration-150" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hover:text-black duration-150" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hover:text-black duration-150" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
              <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
            </svg>
          </a>
        </div>
        <!-- End Social Media Links -->

      </div>
      <!-- End Left Section -->

      <!-- Right Section -->
      <div class="w-3/4 flex flex-wrap px-10 text-gray-500 font-semibold">
        <ul v-for="loop in 5" :key="loop" class="flex-grow space-y-3"> 
          <li> Solution </li>
          <li>
            <a href="#">Lorem.</a>
          </li>
          <li>
            <a href="#">Lorem.</a>
          </li>
          <li>
            <a href="#">Lorem.</a>
          </li>
          <li>
            <a href="#">Lorem.</a>
          </li>
        </ul>
      </div>
      <!-- End Right Section -->
    </div>

    <!-- Watermark :v -->
    <div class="space-x-5 text-center py-10 text-gray-500">
     <a href="https://github.com/KingSit3" class="hover:text-black duration-150">Remade By Indra Ardiansyah</a>
     <span>&bull;</span>
     <a href="https://tailwindui.com/" class="hover:text-black duration-150">Design by Tailwind ui</a>

    </div>
    <!-- End Watermark :v -->
    
  </footer>

</template>

<script>
export default {

}
</script>

<style>
.gradien {
  @apply bg-gradient-to-r from-emerald-500 to-sky-500;
}
</style>