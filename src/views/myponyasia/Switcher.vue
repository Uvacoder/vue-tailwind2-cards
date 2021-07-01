<template>
  <div>
    
      <div class="bg-trueGray-800 text-trueGray-100 w-full h-screen">
            <!-- Logo -->
                <div class="mx-14 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-96 pt-7 lg:pt-10">
                    <img src="../../assets/images/myponyasia/logo-myponyasia.png" alt="MPA Logo"/>
                </div>
            
            <!-- Content -->
                <div class="flex flex-col justify-between items-center text-center font-bold  space-y-7 mt-7 space-x-0 px-14 
                        sm:px-28 sm:text-2xl
                        md:text-3xl
                        lg:space-y-0 lg:space-x-16 lg:px-24 lg:mt-10 lg:text-4xl lg:flex-row">
                    <router-link to="/myponyasia">
                        <img class="rounded-xl hover:opacity-25 duration-200 shadow-xl transform hover:rotate-3" src="../../assets/images/myponyasia/landscape1.png" alt="Thumbnail"/>
                        <span> My Little Pony </span>
                    </router-link>
                    <router-link to="/myponyasia/home">
                        <img class="rounded-xl hover:opacity-25 duration-200 shadow-xl transform hover:-rotate-3" src="../../assets/images/myponyasia/landscape2.png" alt="Thumbnail"/>
                        <span> Anime </span>
                    </router-link>
                </div>
        </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>