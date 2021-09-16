<template>
  <div class="max-w-[1535px] text-black/70 flex justify-between mx-auto">

    <!-- Left Content -->
    <div class="w-[20%] text-center flex flex-col justify-between bg-blue-600 text-white min-h-screen max-h-full py-5">

      <!-- logo -->
      <div class="h-[15%] flex justify-center items-center space-x-2 text-white/90">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h1 class="text-xl font-extrabold">Logos</h1>
      </div>
      <!-- End logo -->

      <!-- Sidebar -->
      <div class="h-[80%] my-10 space-y-5 px-5 max-h-[450px] overflow-y-auto">

        <!-- Sidebar menu Active -->
        <a href="#" class="flex p-1.5 px-5 rounded-full items-center space-x-2 text-blue-500/90 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h1 class="text-lg font-bold">Dashboard</h1>
        </a>
        <!-- Sidebar menu Active -->

        <!-- Sidebar menu -->
        <a v-for="loop in 5" :key="loop" href="#" class="flex p-1.5 px-5 rounded-full items-center space-x-2 text-white/50 hover:text-white/100 duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h1 class="text-lg font-bold">Dashboard {{ loop }} </h1>
        </a>
        <!-- Sidebar menu -->

      </div>
      <!-- End Sidebar -->

      <!-- Footer -->
      <div class="h-[5%]">
        <div class=" flex justify-center text-white/50">

          <!-- Footer Option -->
          <a href="#" class="border-t-[1px] border-blue-500 px-2 hover:text-white/100 duration-150">Option 1</a>
          <a href="#" class="border-t-[1px] border-blue-500 px-2 hover:text-white/100 duration-150">Option 2</a>
          <a href="#" class="border-t-[1px] border-blue-500 px-2 hover:text-white/100 duration-150">Option 3</a>
          <!-- End Footer Option -->

        </div>
      </div>
      <!-- End Footer -->
      
    </div>
    <!-- End Left Content -->

    <!-- Right Content -->
    <div class="w-[80%] p-5">
      
      <!-- TopBar -->
      <div class="flex justify-between">
        
        <!-- Left Content -->
        <div class="">
          <h1 class="text-lg font-bold">Pesanan</h1>
          <h3 class="text-sm font-semibold">50 Pesanan ditemukan</h3>
        </div>
        <!-- End Left Content -->
        
        <!-- Right Content -->
        <div class="flex space-x-4 items-center">

          <!-- Notification -->
          <a href="#" class="bg-black/10 p-1 rounded-full relative opacity-50 hover:opacity-100 duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <div class="absolute -top-3 -right-2 ">
              <span class="text-white bg-red-500 rounded-full px-1.5 text-xs font-semibold">10</span>
            </div>
          </a>
          <!-- End Notification -->

          <!-- I Don't know what this is -->
          <a href="#" class="bg-black/10 p-1 rounded-full opacity-50 hover:opacity-100 duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </a>
          <!-- End I Don't know what this is -->

          <!-- Profile -->
          <button href="#" class="flex items-center">
            <img src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Profile Image" class="h-6 w-6 object-cover rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- End Profile -->

        </div>
        <!-- End Right Content -->

      </div>
      <!-- End TopBar -->

      <!-- Content -->
      <div class="mt-8">

        <!-- Content Tab -->
        <div class="flex justify-between">
          
          <!-- Left Tab -->
          <div class="space-x-5">

            <!-- Active Tab -->
            <button class="border-b-2 border-blue-500 font-semibold capitalize">Semua pesanan</button>
            <!-- End Active Tab -->

            <button class="font-semibold hover-opacity capitalize">Product</button>
            <button class="font-semibold hover-opacity capitalize">Money</button>
            <button class="font-semibold hover-opacity capitalize">Waifus</button>

          </div>
          <!-- End Left Tab -->

          <!-- Right Tab -->
          <div class="flex relative items-center opacity-75">
            <input type="text" class="pl-6 focus:outline-none shadow-lg focus:ring-2 ring-blue-500 duration-150 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <!-- End Right Tab -->

        </div>
        <!-- End Content Tab -->

        <!-- Content -->
        <div class="mt-10">
          <table class="w-full table-auto">

          <!-- Table Header -->
          <thead>
            <tr class="bg-gray-50 rounded-lg">
              <th class="p-1.5">No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Tanggal</th>
              <th>harga</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <!-- End Table Header -->
          
          <!-- Table Content -->
          <tbody>
            <tr class="text-sm mb-16 text-center hover:bg-blue-500 hover:text-white duration-150 cursor-default">
              <td class="py-2">LALA</td>
              <td>LALA</td>
              <td>LALA</td>
              <td>LALA</td>
              <td>LALA</td>
              <td>LALA</td>
              <td>LALA</td>
            </tr>
          </tbody>
          <!-- End Table Content -->

          </table>
        </div>
        <!-- End Content -->

      </div>
      <!-- End Content -->

    </div>
    <!-- End Right Content -->

  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">

.hover-opacity{
  @apply opacity-50 hover:opacity-100 duration-150;
}
  
</style>
