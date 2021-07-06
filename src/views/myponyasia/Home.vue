<template>
  <div className="bg-trueGray-800 text-white">
           <!-- Navbar -->
                <div className="flex justify-start bg-black p-4 rounded-b shadow-xl">
                    <div>
                        <a href="/myAnimeAsia/detail">
                            <img className="w-40" src="../../assets/images/myponyasia/logo-myponyasia.png" alt="" />
                        </a>
                    </div>
                </div>
           <!-- End Navbar -->

            <!-- Corousel Section -->
                <div className="flex w-full bg-black h-96">
                    <img className="w-full h-full object-cover opacity-30" src="../../assets/images/myponyasia/landscape1.png" alt="Corousel"/>
                    <div className="absolute w-full h-96 flex flex-col justify-center items-center font-semibold">
                        <p className="text-xl md:text-3xl cursor-default capitalize text-center">Gotoubun no hanayome season 2 is out!</p>
                        <a className="ring-2 ring-white p-2 rounded-lg mt-3 hover:bg-white hover:text-black duration-150" href="/myAnimeAsia/detail">Click Here</a>
                    </div>
                </div>
            <!-- End Corousel Section -->

           <!-- On Progress Section -->
              <div className="my-10">
                  <div className="border border-b-2 border-trueGray-700"></div>
                  <div className="flex justify-center">
                      <h1 className="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">On Progress</h1>
                  </div>
                  
                  <div className="p-4 mt-5 grid grid-cols-2 gap-3 sm:flex justify-center sm:space-x-10">
                      <!-- Card -->
                      <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                          <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                          <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                          <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">16 Jan</p>
                          <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 8</p>
                          <p className="text-center mt-2">Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2</p>
                      </a>
                      <!-- End Card -->
                      <!-- Card -->
                      <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                          <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                          <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">BD</p>
                          <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">26 Jan</p>
                          <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 1</p>
                          <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                      </a>
                      <!-- End Card -->
                      <!-- Card -->
                      <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                          <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                          <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                          <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                          <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                          <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                      </a>
                      <!-- End Card -->
                  </div>


              </div>
           <!-- End On Progress Section -->

           <!-- Finished Anime -->
                <div className="mt-10 mb-5">
                    <div className="border border-b-2 border-trueGray-700"></div>
                    <div className="flex justify-center">
                        <h1 className="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">Finished Anime</h1>
                    </div>

                    <div className="p-4 mt-5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center space-x-3">
                            <!-- Card, Max 5 -->
                            <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                                <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                                <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>

                            <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                                <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                            <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">26 Jan</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>

                            <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                                <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">BD</p>
                            <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>

                            <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                                <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">TV</p>
                            <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">20 Jan</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>

                            <a className="p-2 flex flex-col w-44 md:w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="/myAnimeAsia/detail">
                                <img className="rounded-xl" src="../../assets/images/myponyasia/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold text-sm">BD</p>
                            <p className="absolute p-2 bg-blue-700 -mt-2 ml-28 md:ml-36 rounded-tr-xl font-bold text-sm">12 Jan</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>
                            <!-- End Card -->

                        </div>
                    </div>
                    <div className="flex justify-end">
                        <a className=" mr-5 p-2 bg-blue-700 font-semibold rounded-lg hover:bg-blue-800 duration-200" href="/myAnimeAsia/detail">See More</a>
                    </div>
                    
                </div>
            <!-- End Finished Anime -->

            <!-- Footer -->
                <div className="flex justify-center px-10 pt-2 bg-black shadow-2xl">
                    <div className="flex flex-col items-center justify-center ">
                        <span className="font-bold text-lg mb-3 cursor-default">Partners</span>
                        <div className="flex space-x-4">
                            <a href="/myAnimeAsia/detail"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></a>
                            <a href="/myAnimeAsia/detail"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></a>
                            <a href="/myAnimeAsia/detail"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../../assets/images/myponyasia/landscape1.png" alt="Partners Banner" /></a>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row  mt-3 text-center">
                            <a href="/myAnimeAsia/detail" className="mx-5 hover:opacity-60 duration-150">Privacy Policy</a>
                            <span className="hidden sm:contents">&bull;</span>
                            <a href="/myAnimeAsia/detail" className="mx-5 hover:opacity-60 duration-150">FeedBack</a>
                            <span className="hidden sm:contents">&bull;</span>
                            <a href="/myAnimeAsia/detail" className="mx-5 hover:opacity-60 duration-150">Support Us</a>
                            <span className="hidden sm:contents">&bull;</span>
                            <a href="/myAnimeAsia/detail" className="mx-5 hover:opacity-60 duration-150">Contact Us</a>
                        </div>
                        <div className="border border-b-2 border-trueGray-700 border-opacity-75 w-full mt-2"></div>
                        <div className="text-center bg-black pb-5 mt-2 text-sm">My Pony Asia is in no way associated with Hasbro or any author of the series My Little Pony Friendship is Magic and its derivatives.</div>
                    </div>
                </div>
            <!-- End Footer -->
        </div>
</template>

<script>
export default {

}
</script>