<template>
  <!-- TopBar -->
  <div class="flex justify-end">
    <div class="flex space-x-4 items-center">

      <!-- Profile -->
      <button href="#" class="flex items-center">
        <img src="@/assets/images/myponyasia/otaku-anime.jpg" alt="Profile Image" class="h-8 w-8 object-cover rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <!-- End Profile -->

    </div>
  </div>
  <!-- End TopBar -->

  <!-- Content -->
  <div class="mt-8">

    <!-- Tab -->
    <div class="flex justify-between">
      
      <!-- Left Tab -->
      <div class="space-x-5">
        <!-- <button @click="tab = 'beras'" :class="[ tab == 'beras' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Fitrah Beras</button>
        <button @click="tab = 'uang'" :class="[ tab == 'uang' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Fitrah Uang</button> -->
      </div>
      <!-- End Left Tab -->

      <!-- Search -->
      <div class="flex relative items-center opacity-75">
        <input type="text" class="pl-6 focus:outline-none shadow-lg focus:ring-2 ring-blue-500 duration-150 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <!-- End Search -->

    </div>
    <!-- End Tab -->

    <!-- Content -->
    <div class="mt-10">
      <table class="w-full table-fixed">

      <!-- Table Header -->
      <thead>
        <tr class="rounded-lg">
          <th class="p-1.5 w-[5%] bg-gray-200 rounded-tl-lg">No</th>
          <th class="w-[25%] bg-gray-200">Nama</th>
          <th class="w-[10%] bg-gray-200">Jenis Zakat</th>
          <th class="w-[25%] bg-gray-200">Jumlah</th>
          <th class="w-[15%] bg-gray-200">Tanggal Zakat</th>
          <th class="w-[20%] bg-gray-200 rounded-tr-lg">Aksi</th>
        </tr>
      </thead>
      <!-- End Table Header -->
      
      <!-- Table Content -->

      <!-- If Data -->
      <!-- <tbody v-if="items.length > 0"> -->
        <!-- <tr v-for="(item, index) in items" :key="index" class="text-sm mb-16 text-center cursor-default even:bg-gray-100 duration-150"> -->
          <!-- <td class="py-2 truncate px-1"> {{ index + 1 }} </td>
          <td class="py-2 truncate px-1"> {{ item.nama }} </td>
          <td class="truncate px-1"> {{ item.jenis }} </td>
          <td class="truncate px-1"> {{ item.jenis == 'uang' ? convertToCurrency(item.jumlah) : item.jumlah }} </td>
          <td class="truncate px-1"> {{ item.created_at }} </td> -->
          <td class="truncate px-1">
            <div class="flex justify-center items-center text-black/40 space-x-4">
              
              <!-- Info button -->
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <!-- End Info button -->

              <!-- Edit button -->
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <!-- End Edit button -->

              <!-- Delete button -->
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-red-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <!-- End Delete button -->
              
            </div>
          </td>
        <!-- </tr> -->
      <!-- </tbody> -->
      <!-- End If Data -->

      <!-- If No Data -->
      <!-- <tbody v-else> -->
        <tr>
          <td colspan="6" class="text-center text-red-500 text-sm pt-5">Data tidak ditemukan</td>
        </tr>
      <!-- </tbody> -->
      <!-- End If No Data -->

      <!-- End Table Content -->

      </table>
    </div>
    <!-- End Content -->

  </div>
  <!-- End Content -->
</template>

<script>
export default {

}
</script>

<style>

</style>