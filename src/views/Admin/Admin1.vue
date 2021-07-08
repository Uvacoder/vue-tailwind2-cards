<template>
  <div class="flex bg-gray-100">
        <!-- Sidabar -->
          <div class="w-1/5 h-screen bg-indigo-700 text-indigo-100 text-opacity-80 pl-4 pt-4 font-semibold">
            <!-- Logo -->
              <div class="mt-3">
                  <!-- Image Logo -->
                  <!-- <router-link to="#" class="flex justify-items-center">
                      <img class="hover:opacity-75 hover:shadow-lg w-3/4" src="../../assets/images/myponyasia/logo-square.png" alt="Logo">
                  </router-link> -->

                  <!-- SVG Logo -->
                  <div class="flex group">
                      <div class="opacity-80 group-hover:opacity-100 group-hover:text-white">
                          <a href="#">
                              <svg class="w-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd" />
                              </svg>   
                          </a> 
                      </div>
                      <div class="flex group-hover:opacity-100 opacity-90 items-center ml-2 text-2xl font-bold text-white">
                          <a href="">
                              Workflow
                          </a>
                      </div>
                  </div>
              </div>
            <!-- End Logo -->

            <!-- SideBar List -->
              <div class="mt-3 mr-3 group">
                  <a href="admin/admin1">
                  <div class="w-full pl-1 py-2 group-hover:bg-indigo-800 rounded duration-150">
                      <div class="flex">
                          <svg class="group-hover:text-white duration-150 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span class="ml-3 group-hover:text-white flex items-center duration-150">Dashboard</span>
                      </div>
                  </div>
                  </a>
              </div>
              <div class="mt-1 mr-3 group">
                  <a href="#">
                  <div class="w-full pl-1 py-2 group-hover:bg-indigo-800 rounded duration-150">
                      <div class="flex">
                          <svg class="group-hover:text-white duration-150 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span class="ml-3 group-hover:text-white flex items-center duration-150">Users</span>
                      </div>
                  </div>
                  </a>
              </div>
              <div class="mt-1 mr-3 group">
                  <a href="#">
                  <div class="w-full pl-1 py-2 group-hover:bg-indigo-800 rounded duration-150">
                      <div class="flex">
                          <svg class="group-hover:text-white duration-150 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                          <span class="ml-3 group-hover:text-white flex items-center duration-150">Folder</span>
                      </div>
                  </div>
                  </a>
              </div>
              <div class="mt-1 mr-3 group">
                  <a href="#">
                  <div class="w-full pl-1 py-2 group-hover:bg-indigo-800 rounded duration-150">
                      <div class="flex">
                          <svg class="group-hover:text-white duration-150 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span class="ml-3 group-hover:text-white flex items-center duration-150">Report</span>
                      </div>
                  </div>
                  </a>
              </div>
            <!-- End SIdebar List -->
          </div>
        <!-- End Sidebar -->

        <!-- Right Content -->
          <div class="w-full">
              <!-- Topbar -->
                  <div class="flex justify-between bg-white shadow-md px-5">
                      <div class="flex items-center ml-6 space-x-3">
                          <svg class="w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input class="text-gray-500 placeholder-gray-900 focus:outline-none" type="text" placeholder="Search" />
                      </div>
                      <div class="p-3 flex items-center space-x-3">
                          <a href="#">
                              <div class="p-3 group">
                                  <svg class="w-6 text-gray-400 group-hover:text-gray-600 duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                  </svg>
                              </div>
                          </a>
                          <a href="#">
                              <div class="p-2">
                                  <img class="w-9 rounded-full" src="{{ asset('image/logo.jpg') }}" alt="Profile" />
                              </div>
                          </a>
                      </div>
                  </div>
              <!-- End Topbar -->

              <!-- Content -->
              <div class="p-7">
                  <span class="text-3xl font-semibold">Dashboard</span>
                  <div class="mt-7 w-full h-60 border-dashed border-4 border-gray-300"></div>
              </div>
              <!-- End Content -->
          </div>
        <!-- End Right Content -->
  </div>
</template>