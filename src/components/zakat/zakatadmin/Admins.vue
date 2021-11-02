<template>
  
  <!-- Content -->
  <div class="mt-10">

    <button @click="modalOpen = true; modalHeader = 'tambah'" class="bg-blue-500 p-1.5 px-5 my-2 text-white rounded-lg font-semibold focus:outline-none">Tambah</button>
    
    <!-- Table -->
    <table class="w-full table-fixed">

      <!-- Table Header -->
      <thead>
        <tr class="rounded-lg">
          <th class="p-1.5 w-[5%] bg-gray-200 rounded-tl-lg">No</th>
          <th class="w-[35%] bg-gray-200">Email</th>
          <th class="w-[20%] bg-gray-200">Role</th>
          <th class="w-[20%] bg-gray-200">Last login</th>
          <th class="w-[20%] bg-gray-200 rounded-tr-lg">Aksi</th>
        </tr>
      </thead>
      <!-- End Table Header -->
      
      <!-- Table Content -->
      <!-- If Data -->
      <tbody v-if="items.length > 0 && !isLoading">
        <tr v-for="(item, index) in items" :key="index" class="text-sm mb-16 text-center cursor-default even:bg-gray-100 duration-150">
          <td class="py-2 truncate px-1"> {{ (index + 1) }} </td>
          <td class="py-2 truncate px-1"> {{ item.email }} </td>
          <td class="truncate px-1"> {{ item.role == 1 ? 'Staff' : 'Admin' }} </td>
          <td class="truncate px-1"> {{ item.last_login ? toDateFormater(item.last_login) : '-' }} </td>
          <td class="truncate px-1">
            <div class="flex justify-center items-center text-black/40 space-x-4">
              
              <!-- Edit button -->
              <button @click="editData(index)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <!-- End Edit button -->

              <!-- Delete button -->
              <button @click="deleteData(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-red-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <!-- End Delete button -->

            </div>
          </td>
        </tr>
      </tbody>
      <!-- End If Data -->

      <!-- Getting Data -->
      <tbody v-else-if="isLoading">
        <tr>
          <td colspan="6" class="text-center pt-5">Sedang Mengambil data...</td>
        </tr>
      </tbody>
      <!-- End Getting Data -->

      <!-- If No Data -->
      <tbody v-else>
        <tr>
          <td colspan="6" class="text-center text-red-500 text-sm pt-5">Data tidak ditemukan</td>
        </tr>
      </tbody>
      <!-- End If No Data -->
      <!-- End Table Content -->

    </table>
    <!-- End Table -->

  </div>
  <!-- End Content -->

  <!-- Modal -->
  <div v-show="modalOpen" class="-mt-40 absolute inset-0 flex items-center justify-center">
    <div @click="modalOpen = false" class="absolute inset-0 bg-black/50" />
    <div class="relative bg-white w-1/3 min-h-[40%] max-h-full z-10 rounded-lg shadow-lg">

      <!-- close button -->
      <div class="absolute top-2 right-2">
        <button class="outline-none focus:outline-none" @click="modalOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <!-- End close button -->

      <!-- Modal Header -->
      <div class="text-center py-2 bg-gray-50 rounded-t-lg">
        <h2 class="text-xl font-semibold capitalize">{{ modalHeader }} Admin</h2>
      </div>
      <!-- End Modal Header -->

      <!-- Modal Content -->
      <div class="flex flex-col w-full px-10 py-2">
        <label for="nama">Nama</label>
        <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none duration-150">
        <h3 v-if="errors.name" class="text-xs text-red-500 capitalize mt-0.5"> {{ errors.name[0] }} </h3>

        <label for="email" class="mt-2">Email</label>
        <input v-model="email" type="text" id="email" class="ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none duration-150">
        <h3 v-if="errors.email" class="text-xs text-red-500 capitalize mt-0.5"> {{ errors.email[0] }} </h3>

        <label for="password" class="mt-2">Password</label>
        <input v-model="password" type="password" id="password" class="ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none duration-150">
        <h3 v-if="errors.password" class="text-xs text-red-500 capitalize mt-0.5"> {{ errors.password[0] }} </h3>

        <label for="role" class="mt-2">Role</label>
        <select v-model="role" id="role" class="bg-white ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none">
          <option value="1" selected>Staff</option>  
          <option value="0">Admin</option>  
        </select>
        <h3 v-if="errors.role" class="text-xs text-red-500 capitalize mt-0.5"> {{ errors.role[0] }} </h3>
        
      </div>
      <!-- End Modal Content -->

      <!-- Button -->
      <div class="flex justify-end px-10 pt-3">

        <!-- If Tambah Data -->
        <button 
          v-if="modalHeader == 'tambah'"
          @click="storeData()"
          :disabled="!email || !password || !nama"
          :class="[email && password && nama ? 'bg-blue-600 text-white' : 'text-gray-500' ]"
          class="p-1.5 px-5 mb-2 font-semibold duration-150 rounded-lg"
        >Simpan</button>
        <!-- End If Tambah Data -->

        <!-- If Edit Data -->
        <button 
          v-if="modalHeader == 'edit'"
          @click="updateData()"
          :disabled="!email || !password || !nama"
          :class="[email && password && nama ? 'bg-blue-600 text-white' : 'text-gray-500' ]"
          class="p-1.5 px-5 mb-2 font-semibold duration-150 rounded-lg"
        >Simpan</button>
        <!-- End If Edit Data -->

      </div>
      <!-- End Button -->

    </div>
  </div>
  <!-- End Modal -->

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
export default {
  data() {
    return {
      items: {},
      isLoading: false,

      toastData: {
        isActive: false,
        text: '',
        timeout: 3000,
      },

      nama: '',
      email: '',
      password: '',
      role: '',
      userId: '',
      modalHeader: '',
      modalOpen: false,
      errors: {},

      axiosUrl: 'http://127.0.0.1:8000/api/zakat/',
      axiosConfig: {
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('token')
        },
        timeout: 5000,
        withCredentials: true
      },
    }
  },

  methods: {
    getData(){
      this.isLoading = true
      axios.get(this.axiosUrl+'admins', this.axiosConfig)

      .then( res => {
        // console.log(res);
        this.items = res.data
        this.isLoading = false
      })

      .catch( err => {
        console.log(err.response.data);
        if (err.response.status == 403) {
          return this.$router.push('/zakatadmin')
        }
      })
    },

    storeData(){
      
      this.isLoading = true

      axios.post(this.axiosUrl+'admins', {
        name: this.nama,
        email: this.email,
        role: this.role,
        password: this.password,
      } ,this.axiosConfig)

      .then( () => {
        // console.log(res);
        this.modalOpen = false
        this.toast('Admin berhasil ditambahkan')
        this.name = ''
        this.email = ''
        this.role = ''
        this.password = ''
        this.errors = {}
        this.isLoading = false
        this.getData()
      })

      .catch( err => {
        if (err.response.status == 403) {
          return this.$router.push('/zakatadmin')
        }

        this.errors = err.response.data.errors
        console.log(err.response.data.errors);
      })
    },

    deleteData(adminId){
      axios.delete(this.axiosUrl+'admins/'+adminId, this.axiosConfig)
      .then((res) => {
        this.modalOpen = false
        this.toast(res.data)
        this.getData()
      })
      .catch((err) => {
        if (err.response.status == 403) {
          return this.$router.push('/zakatadmin')
        }

        console.log(err)
      })
    },

    editData(index){
      this.modalHeader = 'edit'
      this.modalOpen = true
      this.nama = this.items[index].name
      this.email = this.items[index].email
      this.password = ''
      this.userId = this.items[index].id
      this.role = this.items[index].role
    },

    updateData(){
      axios.put(this.axiosUrl+'admins/'+this.userId, {
        name: this.nama,
        email: this.email,
        role: this.role,
        password: this.password,
      } ,this.axiosConfig)

      .then( () => {
        // console.log(res);
        this.modalOpen = false
        this.toast('Data Admin Berhasil Diubah')
        this.name = ''
        this.email = ''
        this.role = ''
        this.password = ''
        this.userId = ''
        this.errors = {}
        this.getData()
      })

      .catch( err => {
        if (err.response.status == 403) {
          return this.$router.push('/zakatadmin')
        }
        
        this.errors = err.response.data.errors
        console.log(err.response.data.errors);
      })
    },

    toDateFormater(param){
      return new Date(param).toLocaleString('id-ID', {year: 'numeric', month: 'short', day: 'numeric', weekday: 'long'}) 
    },

    toast(text){

      this.toastData.isActive = true
      this.toastData.text = text

      setTimeout(() => {
        this.toastData.isActive = false
      }, this.toastData.timeout);
    }
  },

  created(){
    this.getData()
  }
}
</script>
