<template>
  <!-- Footer -->
      <footer class="flex justify-center px-10 pt-2 bg-black shadow-2xl max-w-[90rem] mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4">
          <span class="font-bold text-lg cursor-default">Partners</span>

          <div class="flex flex-row flex-wrap justify-center text-center">
            <a v-for="loop in 5" :key="loop" href="/myponyasia/detail" class="m-2">
              <img class="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" />
            </a>
          </div>

          <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-row text-center">
            <router-link to="/myponyasia/privacy" class="mx-5 hover:opacity-60 duration-150">Privacy Policy</router-link>
            <span class="hidden sm:contents">&bull;</span>
            <router-link to="/myponyasia/about" class="mx-5 hover:opacity-60 duration-150">About Us</router-link>
          </div>
          <div class="border border-b-2 border-trueGray-700 border-opacity-75 w-full mt-2"></div>
          <div class="text-center bg-black pb-5 mt-2 text-sm">My Pony Asia is in no way associated with Hasbro or any author of the series My Little Pony Friendship is Magic and its derivatives.</div>
        </div>
      </footer>
    <!-- End Footer -->
</template>