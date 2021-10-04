<template>
  <!-- logo -->
  <div class="h-[15%] text-white/90">
    <a href="#" class="flex justify-center items-center space-x-2 pt-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <h1 class="text-xl font-extrabold">Logos</h1>
    </a>
  </div>
  <!-- End logo -->

  <!-- Sidebar -->
  <div class="h-[80%] my-5 space-y-5 px-5 max-h-[450px] overflow-y-auto text-center">

    <!-- Sidebar menu Active -->
    <router-link to="/zakatadmin" :class="[ this.$route.fullPath == '/zakatadmin' ? 'text-blue-500/90 bg-white' : 'text-white/50 hover:text-white/100 duration-150']" class="flex p-1.5 px-5 rounded-full items-center space-x-2 duration-200">
      <h1 class="text-lg font-bold">Dashboard</h1>
    </router-link>
    <!-- Sidebar menu Active -->

    <!-- Zakat Fitrah menu -->
    <router-link to="/zakatadmin/fitrah" :class="[ this.$route.fullPath == '/zakatadmin/fitrah' ? 'text-blue-500/90 bg-white' : 'text-white/50 hover:text-white/100 duration-150']" class="flex p-1.5 px-5 rounded-full items-center space-x-2 duration-200">
      <h1 class="text-lg font-bold">Zakat Fitrah</h1>
    </router-link>
    <router-link to="/zakatadmin/mal" :class="[ this.$route.fullPath == '/zakatadmin/mal' ? 'text-blue-500/90 bg-white' : 'text-white/50 hover:text-white/100 duration-150']" class="flex p-1.5 px-5 rounded-full items-center space-x-2 duration-200">
      <h1 class="text-lg font-bold">Zakat Mal</h1>
    </router-link>
    <router-link to="/zakatadmin/infaq" :class="[ this.$route.fullPath == '/zakatadmin/infaq' ? 'text-blue-500/90 bg-white' : 'text-white/50 hover:text-white/100 duration-150']" class="flex p-1.5 px-5 rounded-full items-center space-x-2 duration-200">
      <h1 class="text-lg font-bold">Infaq</h1>
    </router-link>
    <router-link to="/zakatadmin/mustahik" :class="[ this.$route.fullPath == '/zakatadmin/mustahik' ? 'text-blue-500/90 bg-white' : 'text-white/50 hover:text-white/100 duration-150']" class="flex p-1.5 px-5 rounded-full items-center space-x-2 duration-200">
      <h1 class="text-lg font-bold">Daftar Mustahik</h1>
    </router-link>
    <!-- Zakat Fitrah menu -->

  </div>
  <!-- End Sidebar -->

  <!-- Footer -->
  <div class="h-[5%]">
    <!-- Footer Option -->
    <button @click="logout()" class="text-right text-white/50 hover:text-white duration-150 px-5">Logout</button>
    <!-- End Footer Option -->
  </div>
  <!-- End Footer -->
</template>

<script>
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers = {
    'accept': 'application/json', 
    'Authorization': 'Bearer '+localStorage.getItem('token')
}
axios.defaults.timeout = 5000

export default {
  methods: {
    logout(){
      // Delete all data in local storage
      axios.post('http://127.0.0.1:8000/api/logout', {
        name: localStorage.getItem('nama')
      })
      localStorage.clear()
      this.$router.push({name: 'Login'})
    }
  },
}
</script>