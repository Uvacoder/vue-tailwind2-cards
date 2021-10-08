<template>
  <div class="w-full h-screen flex justify-between items-center overflow-hidden">
    
    <!-- Left Content -->
    <div class="bg-green-400 w-1/2 h-full flex items-center justify-center">
      <h1>
        <span class="text-5xl font-serif font-extrabold text-white">KingSit</span> <p class="text-2xl font-bold text-white">Project</p>
      </h1>
    </div>
    <!-- End Left Content -->
    
    <!-- Right Content -->
    <div class="flex flex-col items-center justify-center w-1/2 h-full">
      <h2 class="text-xl font-semibold text-center">Login</h2>
      <div class="px-10 py-5">

        <!-- Email Input -->
        <label for="email" class="block">Email</label>
        <input type="email" v-model="email" id="email" required class="ring-2 ring-green-500 rounded-lg focus:outline-none px-2 py-1.5">
        <p v-if="errors.email" class="text-sm text-red-500"> {{ errors.email[0] }} </p>
        <!-- End Email Input -->
        
        <!-- Password Input -->
        <div class="mt-5 relative">
          <label for="password" class="block">Password</label>
          <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password" required class="ring-2 ring-green-500 rounded-lg focus:outline-none px-2 py-1.5">
          
          <!-- Show password -->
          <button @click="showPassword = true" v-show="showPassword == false" class="absolute bottom-1.5 right-2 opacity-50 hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <!-- End Show password -->

          <!-- Hide password -->
          <button @click="showPassword = false" v-show="showPassword == true" class="absolute bottom-1.5 right-2 opacity-50 hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          </button>
          <!-- End Hide password -->
        </div>
        <p v-if="errors.password" class="text-sm text-red-500"> {{ errors.password[0] }} </p>
        <!-- End Password Input -->

        <!-- Login Button -->
        <div class="flex justify-end mt-5">
          <button @click="login()" class="hover:bg-green-500 ring-2 ring-green-500 p-5 py-1.5 rounded-lg text-green-500 hover:text-white font-semibold duration-150">Login</button>
        </div>
        <!-- Login Button -->

      </div>
    </div>
    <!-- End Right Content -->

  </div>

  <!-- Toast Alert -->
  <div :class="[toastData.isActive ? 'top-10 opacity-100' : 'top-5 opacity-0']" class="absolute right-10 transition-all duration-300">
    <div class="bg-green-500 shadow-lg py-2 rounded-xl flex justify-between items-center">
      <p class="font-semibold text-white text-sm px-5">{{ toastData.text }}</p>
      <button @click="toastData.isActive = false " class="pr-5 text-red-500 font-bold">x</button>
    </div>
  </div>
  <!-- End Toast Alert -->

</template>

<script>
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers = {'accept': 'application/json'}

export default {
  data() {
    return {
      showPassword: false,
      email: '',
      password: '',
      errors: {},

      toastData: {
        isActive: false,
        text: '',
        timeout: 3000,
      },
    }
  },

  methods: {
    login(){
      
      axios.post('http://127.0.0.1:8000/api/login', {
        email: this.email,
        password: this.password,
      })

      .then((res) => {
        // console.log(res.data)
        localStorage.setItem('nama', res.data.name)
        localStorage.setItem('role', res.data.role)
        localStorage.setItem('token', res.data.token)
        return this.$router.push('/zakatadmin')
      })

      .catch((err) => {
        if (err.response.status == 418) {
          return this.toast('Email/Password salah!')
        }
        console.log(err.response.status)
        this.errors = err.response.status
      })
    },

    toast(text){

      this.toastData.isActive = true
      this.toastData.text = text

      setTimeout(() => {
        this.toastData.isActive = false
      }, this.toastData.timeout);
    }

  },
  mounted() {
    if (this.$route.query.error == 'kicked') {
      this.toast('Anda harus login lagi')
    }
  },
}
</script>

<style>

</style>