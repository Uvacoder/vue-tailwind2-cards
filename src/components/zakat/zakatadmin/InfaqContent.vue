<template>

  <!-- Content -->
  <div class="mt-8">

    <!-- Tab & Search -->
    <div class="flex justify-between">

      <!-- Left Tab -->
      <div class="space-x-5">
        <button v-show="userRole == 'admin'" @click="tab = 'data'" :class="[ tab == 'data' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Data</button>
        <button v-show="userRole == 'admin'" @click="tab = 'deleted'" :class="[ tab == 'deleted' ? 'border-red-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Data Terhapus</button>
      </div>
      <!-- End Left Tab -->
      
      <!-- Search -->
      <div class="flex relative items-center opacity-75">
        <input v-model="keyword" type="text" class="pl-6 focus:outline-none shadow-lg focus:ring-2 ring-blue-500 duration-150 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <!-- End Search -->

    </div>
    <!-- End Tab & Search -->

    <!-- Content -->
    <div class="mt-10">

      <!-- Table -->
      <table class="w-full table-fixed">

        <!-- Table Header -->
        <thead>
          <tr class="rounded-lg">
            <th class="p-1.5 w-[5%] bg-gray-200 rounded-tl-lg">No</th>
            <th class="w-[35%] bg-gray-200">Nama</th>
            <th class="w-[20%] bg-gray-200">Jumlah</th>
            <th class="w-[20%] bg-gray-200">Tanggal Zakat</th>
            <th class="w-[20%] bg-gray-200 rounded-tr-lg">Aksi</th>
          </tr>
        </thead>
        <!-- End Table Header -->
        
        <!-- Table Content -->
        <!-- If Data -->
        <tbody v-if="items.length > 0 && !isLoading">
          <tr v-for="(item, index) in items" :key="index" class="text-sm mb-16 text-center cursor-default even:bg-gray-100 duration-150">
            <td class="py-2 truncate px-1"> {{ (index + 1)  + (perPage * (currentPage - 1)) }} </td>
            <td class="py-2 truncate px-1"> {{ item.nama ? item.nama : '-'  }} </td>
            <td class="truncate px-1"> {{ convertToCurrency(item.jumlah) }} </td>
            <td class="truncate px-1"> {{ item.created_at ? item.created_at : '-' }} </td>
            <td class="truncate px-1">
              <div class="flex justify-center items-center text-black/40 space-x-4">
                
                <!-- Edit button -->
                <button v-show="tab != 'deleted'" @click="populateModal(index)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-yellow-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <!-- End Edit button -->

                <!-- Delete button -->
                <button v-show="tab != 'deleted'" @click="deleteData(item.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-red-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <!-- End Delete button -->

                <!-- Restore button -->
                <button v-show="tab == 'deleted'" @click="restoreData(item.id)" title="Restore Button">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-500 duration-150" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                  </svg>
                </button>
                <!-- End Restore button -->

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

      <!-- Pagination -->
      <ul v-if="this.items.length >= this.perPage" class="flex justify-end space-x-3 mt-5">
        <li v-for="(item, index) in pagination" :key="index">
          <button 
            v-show="item.url" 
            @click="getPagination(item.url)"
            :class="[item.active ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white duration-150']"
            class="ring-2 ring-blue-500 rounded-md p-1.5 px-3" 
            v-html="item.label"></button>
        </li>
      </ul>
      <!-- End Pagination -->
      
    </div>
    <!-- End Content -->

  </div>
  <!-- End Content -->

  <!-- Modal -->
  <div v-show="modalOpen" class="absolute inset-0 flex items-center justify-center">
    <div @click="modalOpen = false" class="absolute inset-0 bg-black/50" />
    <div class="relative bg-white w-1/3 h-[40%] z-10 rounded-lg shadow-lg">

      <!-- close button -->
      <div class="absolute top-2 right-2">
        <button @click="modalOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <!-- End close button -->

      <!-- Modal Header -->
      <div class="text-center py-2 bg-gray-50 rounded-t-lg">
        <h2 class="text-xl font-semibold">Edit Data</h2>
      </div>
      <!-- End Modal Header -->

      <!-- Modal Content -->
      <div class="flex flex-col w-full px-10 py-2">
        <label for="nama">Nama</label>
        <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none duration-150">
        
        <label for="jumlah" class="pt-2">Jumlah Zakat</label>
        <input v-model="jumlah" type="number" id="jumlah" class="ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none duration-150">
      </div>
      <!-- End Modal Content -->

      <!-- Button -->
      <div class="flex justify-end px-10 pt-3">
        <button
          v-show="!flashMessage"
          @click="updateData()"
          :disabled="!nama || !jumlah"
          :class="[nama && jumlah ? 'bg-blue-600 text-white' : 'text-gray-500' ]"
          class="p-1.5 px-5 font-semibold duration-150 rounded-lg"
        >Simpan</button>
      </div>
      <p class="font-semibold text-center"> {{ flashMessage }} </p>
      <!-- End Button -->

    </div>
  </div>
  <!-- End Modal -->

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tab: 'data',
      items: {},
      pagination: {},
      perPage: '',
      currentPage: '',

      isLoading: false,
      modalOpen: false,
      flashMessage: '',

      userRole: localStorage.getItem('role'),

      axiosConfig: {
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('token')
        },
        timeout: 5000,
        withCredentials: true
      },

      nama: '',
      jumlah: '',
      id: '',

      keyword: '',
      delaySearch: true
    }
  },

  methods: {

    convertToCurrency(params){
      return  new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} )
              .format(params)
    },

    resetData(){
      this.nama = ''
      this.jumlah = ''
      this.id = ''
      this.flashMessage = ''
    },

    getDataInfaq(){
      this.items = {}
      // Is Loading
      this.isLoading = true
      
      const isDeleted = this.tab == 'data' ? 'http://127.0.0.1:8000/api/zakat/infaq' : 'http://127.0.0.1:8000/api/zakat/infaq/deleted'

      axios.get(isDeleted, this.axiosConfig)
      
      .then((res) => {
        // console.log(res.data);
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
        // console.log(this.pagination);
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err);
        if (err.response.status == 401) {
          return this.$router.push('/login?error=kicked')
        }
      })
    },

    deleteData(id){
      axios.delete('http://127.0.0.1:8000/api/zakat/infaq/' + id, this.axiosConfig)
        
      .then(() => {
        this.getDataInfaq()
        return this.flashMessage = 'Data berhasil dihapus'
      })

      .catch((err) => {
        console.log(err.response);
      })
    },

    populateModal(id){
      this.modalOpen = true
      this.nama = this.items[id].nama
      this.jumlah = this.items[id].jumlah
      this.id = this.items[id].id
    },

    updateData(){
      axios.put('http://127.0.0.1:8000/api/zakat/infaq/' + this.id, {
        nama: this.nama,
        jumlah: this.jumlah,
      }, this.axiosConfig)
        
      .then(() => {
        this.getDataInfaq()

        setTimeout(() => {
          this.modalOpen = false
          this.resetData()
        }, 1000);

        return this.flashMessage = 'Data berhasil diupdate'
      })

      .catch((err) => {
        console.log(err.response);
      })
    },

    getPagination(url){
      // Is Loading
      this.isLoading = true

      axios.get(url, this.axiosConfig)
      
      .then((res) => {
        // console.log(res.data);
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
        // console.log(res);
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err.response);
      })
    },

    searchData(){
      // Is Loading
      this.isLoading = true

      axios.get('http://127.0.0.1:8000/api/zakat/infaq/'+this.keyword, this.axiosConfig)

      .then((res) => {
        // console.log(res.data.data);
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
        // console.log(this.pagination);
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err.response);
      })
    },

    searchDeletedData(){
      // Is Loading
      this.isLoading = true

      axios.get('http://127.0.0.1:8000/api/zakat/infaq/deleted/'+this.keyword, this.axiosConfig)

      .then((res) => {
        // console.log(res.data.data)
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
        // console.log(this.pagination);
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err.response);
      })
    },

    restoreData(id){
      axios.get('http://127.0.0.1:8000/api/zakat/infaq/restore/'+id, this.axiosConfig)

      .then(() => {
        // console.log(res);
        this.getDataInfaq()
      })

      .catch((err) => {
        console.log(err);
      })
    }

  },

  watch: {
    tab(){
      this.getDataInfaq()
    },

    keyword(){
      if (this.delaySearch) {
        setTimeout(() => {
          this.tab == 'deleted' ? this.searchDeletedData() : this.searchData()
          this.delaySearch = true
        }, 1000);
      }
      
      this.delaySearch = false
    }

  },

  mounted(){
    this.getDataInfaq()
  },
}
</script>

<style>

</style>