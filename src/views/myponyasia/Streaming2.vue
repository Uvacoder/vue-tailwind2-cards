<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-white">
    <Header />
    
    <main>
      <!-- Streaming Section -->
      <div class="flex justify-around">
        <!-- Stream -->
        <div class="w-[70%] h-[490px]">
          <img src="../../assets/images/myponyasia/landscape1.png" class="w-full">
        </div>
        <!-- End Stream -->

        <!-- Episodes -->
        <div class="w-[30%]">
          <p class="text-center font-bold text-lg">Episodes</p>
          <div class="mx-3 space-y-3 mt-3 overflow-y-auto h-[490px]">
            <!-- Episode -->
            <div class="flex justify-between space-x-3 items-center">
              <div class="w-[50%]">
                <img src="../../assets/images/myponyasia/landscape1.png" class="rounded-lg">
              </div>
              <div class="w-[50%]">
                <p class="line-clamp-2 font-semibold">Episode 01</p>
              </div>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="flex justify-between space-x-3 items-center">
              <div class="w-[50%]">
                <img src="../../assets/images/myponyasia/landscape1.png" class="rounded-lg">
              </div>
              <div class="w-[50%]">
                <p class="line-clamp-2 font-semibold">Episode 01</p>
              </div>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="flex justify-between space-x-3 items-center">
              <div class="w-[50%]">
                <img src="../../assets/images/myponyasia/landscape1.png" class="rounded-lg">
              </div>
              <div class="w-[50%]">
                <p class="line-clamp-2 font-semibold">Episode 01</p>
              </div>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="flex justify-between space-x-3 items-center">
              <div class="w-[50%]">
                <img src="../../assets/images/myponyasia/landscape1.png" class="rounded-lg">
              </div>
              <div class="w-[50%]">
                <p class="line-clamp-2 font-semibold">Episode 01</p>
              </div>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="flex justify-between space-x-3 items-center">
              <div class="w-[50%]">
                <img src="../../assets/images/myponyasia/landscape1.png" class="rounded-lg">
              </div>
              <div class="w-[50%]">
                <p class="line-clamp-2 font-semibold">Episode 01</p>
              </div>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="flex justify-between space-x-3 items-center">
              <div class="w-[50%]">
                <img src="../../assets/images/myponyasia/landscape1.png" class="rounded-lg">
              </div>
              <div class="w-[50%]">
                <p class="line-clamp-2 font-semibold">Episode 01</p>
              </div>
            </div>
            <!-- End Episode -->
            <!-- Episode -->
            <div class="flex justify-between space-x-3 items-center">
              <div class="w-[50%]">
                <img src="../../assets/images/myponyasia/landscape1.png" class="rounded-lg">
              </div>
              <div class="w-[50%]">
                <p class="line-clamp-2 font-semibold">Episode 01</p>
              </div>
            </div>
            <!-- End Episode -->
          </div>
        </div>
        <!-- End Episodes -->
      </div>
      <!-- End Streaming Section -->
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../../components/mpa/Header.vue'
import Footer from '../../components/mpa/Footer.vue'

export default {

  components:{
    Header,
    Footer,
  },

  setup(){
    
    return{

    }
  }
}
</script>

<style>

</style>