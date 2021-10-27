<template>
  <!-- logo -->
  <div class="h-[15%] text-white/90">
    <a href="#" class="flex justify-center items-center space-x-2 pt-5">
      <h1 class="text-xl font-extrabold">Zakat Admin</h1>
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
    <div v-show="role == 'admin' ">
      <router-link to="/zakatadmin/admins" :class="[ this.$route.fullPath == '/zakatadmin/admins' ? 'text-blue-500/90 bg-white' : 'text-white/50 hover:text-white/100 duration-150']" class="flex p-1.5 px-5 rounded-full items-center space-x-2 duration-200">
        <h1 class="text-lg font-bold">Admin</h1>
      </router-link>
    </div>
    <!-- Zakat Fitrah menu -->

  </div>
  <!-- End Sidebar -->

  <!-- Footer -->
  <div class="h-[5%] flex items-center justify-between px-10">
    <!-- Footer Option -->
    <button @click="logout()" class="text-right text-white/50 hover:text-white duration-150">Logout</button>
    <h3 class="font-semibold capitalize"> {{ user }} </h3>
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
  data() {
    return {
      user: localStorage.getItem('nama'),
      role: localStorage.getItem('role')
    }
  },
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