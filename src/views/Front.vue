<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-gray-100">
    <div class="container mx-auto pt-10 pb-3">

      <!-- Anime MyPonyAsia -->
      <div class="mb-10 text-center space-y-3">
        <span class="text-3xl font-bold capitalize">Anime@MyPonyAsia</span>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/myponyasia" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">Switcher</router-link>
            <router-link to="/myponyasia/home" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Main Page </router-link>
            <router-link to="/myponyasia/anime2" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Anime Page V2</router-link>
            <router-link to="/myponyasia/anime" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Anime Page </router-link>
            <router-link to="/myponyasia/streaming" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Streaming Page </router-link>
            <router-link to="/myponyasia/streaming2" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Streaming Page V2 </router-link>
            <router-link to="/myponyasia/Find" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Find Page </router-link>
        </div> 
      </div>
      <!-- End Anime MyPonyAsia -->

      <!-- Pony MyPonyAsia -->
      <div class="mb-10 text-center space-y-3">
        <span class="text-3xl font-bold capitalize">Pony@MyPonyAsia</span>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/myponyasia" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">Switcher</router-link>
            <router-link to="/myponyasia/pony/home" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Main Page  </router-link>
        </div> 
      </div>
      <!-- End Pony MyPonyAsia -->

      <!-- Admin Template -->
      <div class="my-10 text-center space-y-3">
        <span class="text-3xl font-bold capitalize">Admin Template</span>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/admin1" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Admin 1 </router-link>
            <router-link to="/admin2" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Admin 2 </router-link>
            <router-link to="/admin3" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Admin 3 </router-link>
            <router-link to="/admin4" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Admin 4 </router-link>
        </div> 
      </div>
      <!-- End Admin Template -->

      <!-- Landing Page -->
      <div class="my-10 text-center space-y-3">
        <span class="text-3xl font-bold capitalize">Landing Page</span>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/landingpage1" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">Landing Page 1</router-link>
            <router-link to="/landingpage2" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">Landing Page 2</router-link>
        </div> 
      </div>
      <!-- End Landing Page -->

      <!-- Gabut Project -->
      <div class="my-10 text-center space-y-3">
        <span class="text-3xl font-bold">Gabut :v</span>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/spotify2021" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">Spotifiru 2021</router-link>
        </div> 
      </div>
      <!-- End Gabut Project -->

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>