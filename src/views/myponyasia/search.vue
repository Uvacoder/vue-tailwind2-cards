<template>
<div class="bg-trueGray-800 text-white min-h-screen max-h-full pb-2">
<!-- Navbar -->
  <Header
      :LoadingStateProps = "loadingState ? true : false"
      @loading-state = "loadingState = !loadingState"
  />
<!-- End Navbar -->
  <div class="mx-auto max-w-[90rem]">
    <div class="mx-7 md:mx-14 lg:mx-24">

    <!-- Search Section-->
    <div class="mt-8 md:mt-10">

        <!-- Search Bar-->
        <div class="flex relative items-center text-trueGray-50">
        <!-- Search-->
        <input type="text" title="Search" placeholder="Search Title" class="peer p-2 rounded-full pl-9 w-full bg-trueGray-600/60 focus:outline-none placeholder-black/0"/>
        <svg width="24" height="24" fill="none" class="absolute left-2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span class="absolute peer-focus:-top-6 peer-placeholder-shown:top-2 -top-6 left-9 text-trueGray-200 transform transition-all duration-150">Search Title</span>
        </div>
        <!-- End Search Bar-->

        <!-- Search Button-->
        <div class="flex justify-center w-full mt-2">
        <button
            title="Search Button" class="text-center bg-trueGray-600 hover:bg-blue-700 px-6 md:px-14 py-1.5 rounded-lg font-semibold duration-150 focus:outline-none">
            Search
            </button>
        </div>
        <!-- End Search Button-->

    </div>
    <!-- End Search Section-->

    <div class="border border-b-2 border-trueGray-700 mt-5"></div>
    
    <!-- hasil-->
    <div class="py-5 mt-2 md:mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-5 justify-items-center">
        hasilnya
    </div>
    </div>

  <!-- Pagination-->
  <!-- <div class="mx-7 md:mx-14 lg:mx-24">
  <div class="flex relative justify-center border-t-4 border-trueGray-700 mb-12">
      <div class="absolute top-1.5 space-x-2 ">
      <a href="#" class=" p-1.5 px-3 border-blue-700 border-t-4 border-opacity-0 hover:border-opacity-100 duration-150">1</a>
      <a href="#" class=" p-1.5 px-3 border-blue-700 border-t-4 border-opacity-0 hover:border-opacity-100 duration-150">2</a>
      <a href="#" class=" p-1.5 px-3 border-blue-700 border-t-4 border-opacity-0 hover:border-opacity-100 duration-150">...</a>
      <a href="#" class=" p-1.5 px-3 border-blue-700 border-t-4 border-opacity-0 hover:border-opacity-100 duration-150">8</a>
      <a href="#" class=" p-1.5 px-3 border-blue-700 border-t-4 border-opacity-0 hover:border-opacity-100 duration-150">9</a>
      </div>
  </div>
  </div>-->
  <!-- End Pagination-->
  </div>

<!-- Footer -->
  <Footer />
<!-- End Footer -->
</div>
</template>

<script>
import Header from '../../components/mpa/Header.vue'
import Footer from '../../components/mpa/Footer.vue'

export default {
    components: {
        Header,
        Footer,
    },

    setup(){

        return{
            
        }
    }
}
</script>