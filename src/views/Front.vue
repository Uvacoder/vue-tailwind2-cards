<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-gray-100">
    <div class="container mx-auto pt-10 pb-3">

      <div class="mb-10 text-center space-y-3">
        <span class="text-3xl font-bold capitalize">Anime@MyPonyAsia</span>
        <div class="grid grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/myponyasia" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">Switcher</router-link>
            <router-link to="/myponyasia/home" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Main Page </router-link>
            <router-link to="/myponyasia/anime2" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Anime Page V2</router-link>
            <router-link to="/myponyasia/anime" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Anime Page </router-link>
            <router-link to="/myponyasia/streaming" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Streaming Page </router-link>
        </div> 
      </div>

      <div class="my-10 text-center space-y-3">
        <span class="text-3xl font-bold capitalize">Admin Template</span>
        <div class="grid grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/admin1" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Admin 1 </router-link>
            <router-link to="/admin2" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center"> Admin 2 </router-link>
        </div> 
      </div>

      <div class="my-10 text-center space-y-3">
        <span class="text-3xl font-bold capitalize">my Project</span>
        <div class="grid grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/#" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">???</router-link>
        </div> 
      </div>

      <div class="my-10 text-center space-y-3">
        <span class="text-3xl font-bold">Gabut :v</span>
        <div class="grid grid-cols-4 gap-9 font-bold justify-items-center">
            <router-link to="/#" class="py-10 w-3/4 bg-purple-700 rounded-lg text-center">???</router-link>
        </div> 
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>