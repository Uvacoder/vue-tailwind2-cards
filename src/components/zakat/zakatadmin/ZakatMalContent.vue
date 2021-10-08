<template>

  <!-- Content -->
  <div class="mt-8">

    <!-- Tab & Search -->
    <div class="flex justify-between">
      
      <!-- Left Tab -->
      <div class="space-x-5">
        <button @click="tab = 'penghasilan'" :class="[ tab == 'penghasilan' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Penghasilan</button>
        <button @click="tab = 'emas'" :class="[ tab == 'emas' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Emas</button>
        <button @click="tab = 'sapi'" :class="[ tab == 'sapi' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Sapi</button>
        <button @click="tab = 'kambing'" :class="[ tab == 'kambing' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Kambing</button>
        <button @click="tab = 'pertanian'" :class="[ tab == 'pertanian' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Pertanian</button>
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
            <th class="w-[25%] bg-gray-200">Nama</th>
            <th class="w-[10%] bg-gray-200">Jenis Zakat</th>
            <th class="w-[25%] bg-gray-200">Jumlah</th>
            <th class="w-[15%] bg-gray-200">Tanggal Zakat</th>
            <th class="w-[20%] bg-gray-200 rounded-tr-lg">Aksi</th>
          </tr>
        </thead>
        <!-- End Table Header -->
        
        <!-- Table Content -->

        <!-- If Data -->
        <tbody v-if="items.length > 0 && !isLoading">
          <tr v-for="(item, index) in items" :key="index" class="text-sm mb-16 text-center cursor-default even:bg-gray-100 duration-150">
            <td class="py-2 truncate px-1"> {{ (index + 1)  + (perPage * (currentPage - 1)) }} </td>
            <td class="py-2 truncate px-1"> {{ item.nama }} </td>
            <td class="truncate px-1"> {{ item.jenis }} </td>
            <td class="truncate px-1"> {{ item.jenis != 'sapi' && item.jenis != 'kambing' ? convertToCurrency(item.total) : item.total }} </td>
            <td class="truncate px-1"> {{ item.created_at }} </td>
            <td class="truncate px-1">
              <div class="flex justify-center items-center text-black/40 space-x-4">
                
                <!-- Info button -->
                <button v-show="tab != 'deleted'" @click="detailZakat(index)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <!-- End Info button -->

                <!-- Delete button -->
                <button v-show="tab != 'deleted'" @click="deleteZakat(item.id)">
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

  <!-- Modal -->
  <div v-show="modalOpen" class="absolute inset-0 flex items-center justify-center">
    <div @click="modalOpen = false" class="absolute inset-0 bg-black/50" />
    <div class="relative bg-white w-1/3 h-1/2 z-10 rounded-lg shadow-lg">

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
        <h2 class="text-xl font-semibold">Detail</h2>
      </div>
      <!-- End Modal Header -->

      <!-- Modal Content -->
      <div class="flex flex-col w-full px-10 py-2 capitalize">

        <table v-if="modalData.jenis == 'penghasilan'">
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td> {{ modalData.nama }} </td>
          </tr>
          <tr>
            <td>Jenis Zakat</td>
            <td>:</td>
            <td> {{ modalData.jenis }} </td>
          </tr>
          <tr>
            <td class="pt-2">Tanggal Zakat</td>
            <td class="pt-2">:</td>
            <td class="pt-2"> {{ modalData.created_at ? modalData.created_at : '-' }} </td>
          </tr>
          <tr>
            <td>Penghasilan</td>
            <td>:</td>
            <td> {{ modalData.data.penghasilan ? convertToCurrency(modalData.data.penghasilan) : '-' }} </td>
          </tr>
          <tr>
            <td>keperluan</td>
            <td>:</td>
            <td> {{ modalData.data.keperluan ? convertToCurrency(modalData.data.keperluan) : '-' }} </td>
          </tr>
          <tr>
            <td>Hutang</td>
            <td>:</td>
            <td> {{ modalData.data.hutang ? convertToCurrency(modalData.data.hutang) : '-' }} </td>
          </tr>
          <tr>
            <td class="pt-5">Total Zakat</td>
            <td class="pt-5">:</td>
            <td class="pt-5 font-semibold"> {{ convertToCurrency(modalData.total) }} </td>
          </tr>
        </table>

        <table v-if="modalData.jenis == 'emas'">
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td> {{ modalData.nama }} </td>
          </tr>
          <tr>
            <td>Jenis Zakat</td>
            <td>:</td>
            <td> {{ modalData.jenis }} </td>
          </tr>
          <tr>
            <td class="pt-2">Tanggal Zakat</td>
            <td class="pt-2">:</td>
            <td class="pt-2"> {{ modalData.created_at ? modalData.created_at : '-' }} </td>
          </tr>
          <tr>
            <td>Total Emas</td>
            <td>:</td>
            <td> {{ modalData.data.total_emas ? modalData.data.total_emas+' gram' : '-' }} </td>
          </tr>
          <tr>
            <td>Harga Emas</td>
            <td>:</td>
            <td> {{ modalData.data.harga_emas ? convertToCurrency(modalData.data.harga_emas) : '-' }} </td>
          </tr>
          <tr>
            <td>Keperluan</td>
            <td>:</td>
            <td> {{ modalData.data.keperluan ? convertToCurrency(modalData.data.keperluan) : '-' }} </td>
          </tr>
          <tr>
            <td>Hutang</td>
            <td>:</td>
            <td> {{ modalData.data.hutang ? convertToCurrency(modalData.data.hutang) : '-' }} </td>
          </tr>
          <tr>
            <td class="pt-5">Total Zakat</td>
            <td class="pt-5">:</td>
            <td class="pt-5 font-semibold"> {{ convertToCurrency(modalData.total) }} </td>
          </tr>
        </table>

        <table v-if="modalData.jenis == 'sapi'">
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td> {{ modalData.nama }} </td>
          </tr>
          <tr>
            <td>Jenis Zakat</td>
            <td>:</td>
            <td> {{ modalData.jenis }} </td>
          </tr>
          <tr>
            <td class="pt-2">Tanggal Zakat</td>
            <td class="pt-2">:</td>
            <td class="pt-2"> {{ modalData.created_at ? modalData.created_at : '-' }} </td>
          </tr>
          <tr>
            <td>Total Sapi</td>
            <td>:</td>
            <td> {{ modalData.data.total_sapi ? modalData.data.total_sapi+' Ekor Sapi' : '-' }} </td>
          </tr>
          <tr>
            <td class="pt-5">Total Zakat</td>
            <td class="pt-5">:</td>
            <td class="pt-5 font-semibold"> {{ modalData.total }} </td>
          </tr>
        </table>

        <table v-if="modalData.jenis == 'kambing'">
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td> {{ modalData.nama }} </td>
          </tr>
          <tr>
            <td>Jenis Zakat</td>
            <td>:</td>
            <td> {{ modalData.jenis }} </td>
          </tr>
          <tr>
            <td class="pt-2">Tanggal Zakat</td>
            <td class="pt-2">:</td>
            <td class="pt-2"> {{ modalData.created_at ? modalData.created_at : '-' }} </td>
          </tr>
          <tr>
            <td>Total Kambing</td>
            <td>:</td>
            <td> {{ modalData.data.total_kambing ? modalData.data.total_kambing+' Ekor Kambing' : '-' }} </td>
          </tr>
          <tr>
            <td class="pt-5">Total Zakat</td>
            <td class="pt-5">:</td>
            <td class="pt-5 font-semibold"> {{ modalData.total }} </td>
          </tr>
        </table>

        <table v-if="modalData.jenis == 'pertanian'">
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td> {{ modalData.nama }} </td>
          </tr>
          <tr>
            <td>Jenis Zakat</td>
            <td>:</td>
            <td> {{ modalData.jenis }} </td>
          </tr>
          <tr>
            <td class="pt-2">Tanggal Zakat</td>
            <td class="pt-2">:</td>
            <td class="pt-2"> {{ modalData.created_at ? modalData.created_at : '-' }} </td>
          </tr>
          <tr>
            <td>Harga Panen per kg</td>
            <td>:</td>
            <td> {{ modalData.data.harga ? convertToCurrency(modalData.data.harga) : '-' }} </td>
          </tr>
          <tr>
            <td>Total Panen</td>
            <td>:</td>
            <td> {{ modalData.data.total_panen ? modalData.data.total_panen +' Kg' : '-' }}  </td>
          </tr>
          <tr>
            <td>Zakat Pertanian</td>
            <td>:</td>
            <td> {{ modalData.data.zakat_pertanian == 0.1 ? '10%' : '5%' }}  </td>
          </tr>
          <tr>
            <td class="pt-5">Total Zakat</td>
            <td class="pt-5">:</td>
            <td class="pt-5 font-semibold"> {{ modalData.total }} </td>
          </tr>
        </table>

      </div>
      <!-- End Modal Content -->

    </div>
  </div>
  <!-- End Modal -->

  </div>
  <!-- End Content -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tab: 'penghasilan',
      items: {},
      pagination: {},
      perPage: '',
      currentPage: '',

      isLoading: false,
      modalOpen: false,
      modalData: {},
      modalDetail: {},

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
      jenis: '',
      total: '',
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
      this.jenis = ''
      this.total = ''
      this.id = ''
    },

    getDataZakat(params){
      this.items = {}
      // Is Loading
      this.isLoading = true

      axios.get('http://127.0.0.1:8000/api/zakat/mal/'+params, this.axiosConfig)
      
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
        console.log(err.response);
        if (err.response.status == 401) {
          return this.$router.push('/login?error=kicked')
        }
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
        // console.log(this.pagination);
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err.response);
      })
    },

    deleteZakat(id){
      axios.delete('http://127.0.0.1:8000/api/zakat/mal/' + id, this.axiosConfig)
        
      .then(() => {
        // get Updated data
        return this.getDataZakat(this.tab)
      })

      .catch((err) => {
        console.log(err.response);
      })
    },

    detailZakat(index){
      this.modalOpen = true
      this.modalData = {
        nama: this.items[index].nama,
        jenis: this.items[index].jenis,
        data: JSON.parse(this.items[index].data),
        total: this.items[index].total,
        created_at: this.items[index].created_at,
      }
      // console.log(this.modalData);
    },

    searchData(params){
      // Is Loading
      this.isLoading = true

      axios.get('http://127.0.0.1:8000/api/zakat/mal/' +params+ '/' +this.keyword, this.axiosConfig)

      .then((res) => {
        // console.log(res.data.data);
        
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
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

      axios.get('http://127.0.0.1:8000/api/zakat/mal/deleted/'+this.keyword, this.axiosConfig)

      .then((res) => {
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
      axios.get('http://127.0.0.1:8000/api/zakat/mal/restore/'+id, this.axiosConfig)

      .then(() => {
        // console.log(res);
        this.getDataZakat(this.tab)
      })

      .catch((err) => {
        console.log(err);
      })
    }

  },

  watch: {
    tab(){
      this.getDataZakat(this.tab)
    },

    keyword(){
      if (this.delaySearch) {
        setTimeout(() => {
          this.tab == 'deleted' ? this.searchDeletedData() : this.searchData(this.tab)
          this.delaySearch = true
        }, 1000);
      }
      
      this.delaySearch = false
    }
  },

  mounted(){
    this.getDataZakat(this.tab)
  }
}
</script>

<style>

</style>