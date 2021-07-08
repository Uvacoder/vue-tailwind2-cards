<template>
  <div>
    <div class="bg-trueGray-800 text-trueGray-100 min-h-screen max-h-full">
      <!-- Logo -->
      <div class="mx-14 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-96 pt-7 lg:pt-10">
        <img src="../../assets/images/myponyasia/logo-myponyasia.png" alt="MPA Logo"/>
      </div>
      
            <!-- Project -->
      <div class="flex flex-col justify-between items-center pb-10 text-center font-bold space-y-7 mt-7 space-x-0 px-14 
                        sm:px-28 sm:text-2xl
                        md:text-3xl
                        lg:space-y-0 lg:space-x-16 lg:px-24 lg:mt-10 lg:text-4xl lg:flex-row ">
        <router-link to="/myponyasia/home" class="relative group">
          <img class="rounded-xl group-hover:opacity-50 duration-200 shadow-xl transform group-hover:transform group-hover:rotate-3"
            src="../../assets/images/myponyasia/landscape1.png" alt="myLittlePony" />
          <span class="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#16b2cb] group-hover:to-[#ab4b9c] duration-200"> My Little Pony </span>
        </router-link>
        
        <router-link to="/myponyasia/home" class="relative group">
          <img class="rounded-xl group-hover:opacity-50 duration-200 shadow-xl transform group-hover:transform group-hover:-rotate-3"
            src="../../assets/images/myponyasia/landscape2.png" alt="Anime" />
          <span class="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ab4b9c] group-hover:to-[#16b2cb] duration-200"> Anime </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>