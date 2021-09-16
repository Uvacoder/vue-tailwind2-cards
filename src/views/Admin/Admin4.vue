<template>

  <header class="flex justify-between items-center px-10 max-w-[1400px] mx-auto">
    
    <!-- left header -->
    <div class="flex items-center space-x-10">

      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
        <h1 class="text-xl font-bold">WorkFlow</h1>
      </div>
      <!-- End Logo -->

      <!-- Topbar -->
      <ul class="flex space-x-5 font-semibold">
        
        <!-- Active Bar -->
        <a href="#">
          <li class="py-4 border-b-2 border-indigo-600">
            Dashboard
          </li>
        </a>
        <!-- End Active Bar -->

        <a href="#">
          <li class="py-4 border-b-2 border-transparent hover:border-indigo-600 duration-150">
            Harta
          </li>
        </a>
        <a href="#">
          <li class="py-4 border-b-2 border-transparent hover:border-indigo-600 duration-150">
            Tahta
          </li>
        </a>
        <a href="#">
          <li class="py-4 border-b-2 border-transparent hover:border-indigo-600 duration-150">
            Ayaka
          </li>
        </a>

      </ul>
      <!-- End Topbar -->

    </div>
    <!-- End left header -->

    <!-- Right header -->
    <div class="flex items-center space-x-3">

      <!-- Bell button -->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-50 hover:opacity-100 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
      <!-- End Bell button -->

      <!-- Profile Pict -->
      <a href="#">
        <div class="">
          <img src="@/assets/images/myponyasia/poster-portrait.webp" alt="Profile Picture" class="w-8 h-8 rounded-full object-cover">
        </div>
      </a>
      <!-- End Profile Pict -->

    </div>
    <!-- End Right header -->

  </header>

  <main class="bg-gray-100 h-[521px] py-5 px-10 max-w-[1400px] mx-auto">
    <h1 class="text-2xl font-extrabold">Dashboard</h1>
    <div class="outline-black h-72 mt-5"></div>
  </main>

  <footer class="max-w-[1400px] mx-auto flex justify-center space-x-5 py-5 bg-trueGray-800 text-white">
    <span>Remade By Indra Ardiansyah</span>
    <span>&bull;</span>
    <a href="https://tailwindui.com/">Design By Tailwind Ui</a>
  </footer>

</template>

<script>
export default {

}
</script>

<style>

</style>