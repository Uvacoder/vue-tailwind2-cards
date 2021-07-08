<template>
  <div class="bg-trueGray-800 text-white min-h-screen max-h-full pb-2">
           <!-- Navbar -->
                <div class="flex justify-start bg-black p-4 rounded-b shadow-xl">
                    <div>
                        <router-link to="/myponyasia/anime">
                            <img class="w-40" src="../../assets/images/myponyasia/logo-myponyasia.png" alt="" />
                        </router-link>
                    </div>
                </div>
           <!-- End Navbar -->

            <!-- Corousel Section -->
                <div class="flex w-full bg-black h-96">
                    <img class="w-full h-full object-cover opacity-30" src="../../assets/images/myponyasia/landscape1.png" alt="Corousel"/>
                    <div class="absolute w-full h-96 flex flex-col justify-center items-center font-semibold">
                        <p class="text-xl md:text-3xl cursor-default capitalize text-center">Gotoubun no hanayome season 2 is out!</p>
                        <router-link to="/myponyasia/anime" class="ring-2 ring-white p-2 rounded-lg mt-3 hover:bg-white hover:text-black duration-150">Click Here</router-link>
                    </div>
                </div>
            <!-- End Corousel Section -->

           <!-- On Progress Section -->
              <div class="my-10">
                  <div class="border border-b-2 border-trueGray-700"></div>
                  <div class="flex justify-center">
                      <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">On Progress</h1>
                  </div>
                  
                  <div class="p-4 mt-5 grid grid-cols-2 gap-3 sm:flex justify-center sm:space-x-10">
                      <!-- Card -->
                      <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                          <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                          <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                          <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">16 Jan</p>
                          <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 8</p>
                          <p class="text-center mt-2">Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2</p>
                      </router-link>
                      <!-- End Card -->
                      <!-- Card -->
                      <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                          <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                          <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">BD</p>
                          <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">26 Jan</p>
                          <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 1</p>
                          <p class="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                      </router-link>
                      <!-- End Card -->
                      <!-- Card -->
                      <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                          <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                          <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                          <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                          <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                          <p class="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                      </router-link>
                      <!-- End Card -->
                  </div>


              </div>
           <!-- End On Progress Section -->

           <!-- Finished Anime -->
                <div class="mt-10 mb-5">
                    <div class="border border-b-2 border-trueGray-700"></div>
                    <div class="flex justify-center">
                        <h1 class="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">Finished Anime</h1>
                    </div>

                    <div class="p-4 mt-5">
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
                            <!-- Card, Max 5 -->
                            <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                                <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                                <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                                <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p class="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </router-link>

                            <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                                <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                            <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">26 Jan</p>
                                <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p class="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </router-link>

                            <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                                <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">BD</p>
                            <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                                <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p class="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </router-link>

                            <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                                <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                            <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                                <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p class="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </router-link>

                            <router-link to="/myponyasia/anime" class="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200">
                                <img class="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p class="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">BD</p>
                            <p class="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">12 Jan</p>
                                <p class="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p class="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </router-link>
                            <!-- End Card -->

                        </div>
                    </div>
                    <div class="flex justify-end">
                        <router-link to="/myponyasia/anime" class=" mr-5 p-2 bg-blue-700 font-semibold rounded-lg hover:bg-blue-800 duration-200">See More</router-link>
                    </div>
                    
                </div>
            <!-- End Finished Anime -->

            <!-- Footer -->
                <div class="flex justify-center px-10 pt-2 bg-black shadow-2xl">
                    <div class="flex flex-col items-center justify-center ">
                        <span class="font-bold text-lg mb-3 cursor-default">Partners</span>
                        <div class="flex space-x-4">
                            <router-link to="/myponyasia/anime"><img class="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></router-link>
                            <router-link to="/myponyasia/anime"><img class="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></router-link>
                            <router-link to="/myponyasia/anime"><img class="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></router-link>
                        </div>
                        <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-row  mt-3 text-center">
                            <router-link to="/myponyasia/anime" class="mx-5 hover:opacity-60 duration-150">Privacy Policy</router-link>
                            <span class="hidden sm:contents">&bull;</span>
                            <router-link to="/myponyasia/anime" class="mx-5 hover:opacity-60 duration-150">FeedBack</router-link>
                            <span class="hidden sm:contents">&bull;</span>
                            <router-link to="/myponyasia/anime" class="mx-5 hover:opacity-60 duration-150">Support Us</router-link>
                            <span class="hidden sm:contents">&bull;</span>
                            <router-link to="/myponyasia/anime" class="mx-5 hover:opacity-60 duration-150">Contact Us</router-link>
                        </div>
                        <div class="border border-b-2 border-trueGray-700 border-opacity-75 w-full mt-2"></div>
                        <div class="text-center bg-black pb-5 mt-2 text-sm">My Pony Asia is in no way associated with Hasbro or any author of the series My Little Pony Friendship is Magic and its derivatives.</div>
                    </div>
                </div>
            <!-- End Footer -->
        </div>
</template>

<script>
export default {

}
</script>